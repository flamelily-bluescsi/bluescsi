var cart = {};
if (typeof(Storage) !== "undefined" && localStorage.cart) {
	cart = JSON.parse(localStorage.cart);
}

// Automatic 10% discount?
let discount_percentage = 0;
let discount_total = 0;
if( Object.keys( cart ).length != 0 ) {
  
  let total = 0;
  let totals = [];
  totals[ 'UK' ] = 0;
  totals[ 'EU' ] = 0;

  for( const item in cart ) {
    const name = catalog[item].name.split( ' ' );
    const country = name[ name.length - 1 ].toUpperCase();
    
    total += catalog[item].price * cart[item];
    totals[ country ] += cart[ item ];
    
    console.log( total );
  }
  
  if( totals[ 'EU' ] >= 2 ) { discount_percentage = 8; }
  if( totals[ 'UK' ] >= 2 ) { discount_percentage = 5; }
  
  console.log( totals );
  
  if( discount_percentage > 0 ) {
    discount_total = ( total * discount_percentage ) / 100;
  } 
}

var cartHtml = "";
function drawCart(){
	if (Object.keys(cart).length == 0){
		cartHtml = "<h2>&#128722; Cart is empty</h2><p>Add items from their product pages</p>";
	}else{
		var total = 0 ;
		cartHtml = `<table><tr><td><b>Item</b></td><td><b>Description</b></td><td><b>Qty.</b></td><td><b>Price</b></td></tr>`;
		for (const item in cart) {
			cartHtml += `<tr><td>${catalog[item].name}</td><td>${catalog[item].description}</td><td>${cart[item]}</td>
			<td>${(catalog[item].price * cart[item]).toFixed(2)}</td></tr>`;
			total += catalog[item].price * cart[item];
		}
    
    if( discount_total > 0 ) {
      cartHtml += `<tr><td><b>SUB TOTAL</b></td><td></td><td></td><td>${(total).toFixed(2)}</td></tr>`;
      cartHtml += `<tr><td><b>Shipping Discount</b></td><td></td><td></td><td>-${(discount_total).toFixed(2)}</td></tr>`;
    }
    
		cartHtml += `<tr><td><b>TOTAL</b></td><td></td><td></td><td>${(total - discount_total).toFixed(2)}</td></tr>`;
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
    							
    let total_with_discount = total - discount_total;
        
		paypal.Buttons({
			createOrder: function(data, actions) {
				return actions.order.create({
					purchase_units: [{
						invoice_id: invoice_id,
						amount: {
							currency: "GBP",
							value: total_with_discount.toFixed(2),
							breakdown: {
                item_total:{value:total.toFixed(2), currency_code: "GBP"},
                discount: {currency_code:"GBP",value:discount_total}
              },
              
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