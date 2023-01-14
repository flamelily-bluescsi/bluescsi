var cart = {};
if (typeof(Storage) !== "undefined" && localStorage.cart) {
	cart = JSON.parse(localStorage.cart);
}
var cartHtml = "";
function drawCart(){
	if (Object.keys(cart).length == 0){
		cartHtml = "<h2>Cart is empty</h2>";
	}else{
		var total = 0 ;
		cartHtml = `<table><tr><td><b>Item</b></td><td><b>Description</b></td><td><b>Qty.</b></td><td><b>Price</b></td></tr>`;
		for (const item in cart) {
			cartHtml += `<tr><td>${catalog[item].name}</td><td>${catalog[item].description}</td><td>${cart[item]}</td>
			<td>${(catalog[item].price * cart[item]).toFixed(2)}</td></tr>`;
			total += catalog[item].price * cart[item];
		}
		cartHtml += `<tr><td><b>TOTAL</b></td><td></td><td></td><td>${(total).toFixed(2)}</td></tr>`;
		cartHtml += `</table>`;
		
	}

	document.getElementById("cartcontent").innerHTML = cartHtml;
	
	document.getElementById("paypalbutton").innerHTML = "";
	
	if (Object.keys(cart).length != 0){
		var items = [];
		var total = 0;
		
		for (const item in cart) {
			items.push({
				name: catalog[item].name,
				sku: item,
				unit_amount: {value: catalog[item].price.toString(), currency_code: "GBP"},
				quantity: cart[item],
				categoryenum:"DIGITAL_GOODS"
			});
			total += catalog[item].price * cart[item];
		}		
			
		invoice_id = Date.now();
			
				
		paypal.Buttons({
			createOrder: function(data, actions) {
				return actions.order.create({
					purchase_units: [{
						invoice_id: invoice_id,
						amount: {
							currency: "GBP",
							value: total.toFixed(2),
							breakdown: {item_total:{value:total.toFixed(2), currency_code: "GBP"}}
						},
						items: items,						
					}]
				});
			},
			onApprove: function(data, actions) {
				return actions.order.capture().then(function(details) {
					cartHtml = `<h2>Thank you for your order!</h2><h4>Please check your Paypal email address for receipt.</h4>`;
					document.getElementById("paypalbutton").innerHTML = "";
					document.getElementById("cartcontent").innerHTML = cartHtml;
					localStorage.clear();
				});
			},
			onError: function(err) {
				alert("An error processing your payment occurred.");
			}
		}).render('#paypalbutton');
	}	
	
}

drawCart();
