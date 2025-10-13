<div class="price-selector" style="background: #f8f9fa; border: 2px solid #004e92; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
  <label for="deliveryOption" class="form-label" style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem; display: block;">Select Delivery Region:</label>
  <select class="form-select" id="deliveryOption" onchange="updatePrice()" style="border: 2px solid #004e92; padding: 0.75rem; font-size: 1.1rem; margin-bottom: 1rem; width: 100%;">
    <option value="">-- Please select your region --</option>

  {% if page.cart_name contains 'PowerShark' %}
  <option value="uk" data-price="{{site.psukprice}}" data-sku="powersharkuk">🇬🇧 UK Delivery - £{{site.psukprice}} (48hr tracked)</option>
  <option value="row" data-price="{{site.psrowprice}}" data-sku="powersharkrow">🌍 Rest of World - £{{site.psrowprice}} (International tracked)</option>
  {% elsif page.cart_name contains 'PicoGUS' %}
    <option value="uk" data-price="50" data-sku="picogusuk">🇬🇧 UK Delivery - £50</option>
    <option value="row" data-price="62" data-sku="picogusrow">🌍 Rest of World - £62 (International tracked)</option>
  {% elsif page.cart_name contains 'PicoMEM' %}
    <option value="uk" data-price="46" data-sku="picomemuk">🇬🇧 UK Delivery - £46</option>
    <option value="row" data-price="56" data-sku="picomemrow">🌍 Rest of World - £56 (International tracked)</option>
  {% elsif page.cart_name contains 'Midi Cable' %}
    <option value="uk" data-price="6" data-sku="midi15uk">🇬🇧 UK Delivery - £6</option>
    <option value="row" data-price="10" data-sku="midi15row">🌍 Rest of World - £10 (International standard)</option>
    {% endif %}
  </select>
  
  <div id="priceDisplay" style="display:none; font-size: 2rem; font-weight: 700; color: #004e92; margin: 1rem 0;">
    Price: £<span id="priceAmount">0</span>
  </div>
  
  <button class="btn btn-success btn-lg" id="addToCartBtn" onclick="addToCart()" disabled style="width: 100%; padding: 1rem; font-size: 1.2rem; font-weight: 600;">
    🛒 Add to Cart
  </button>
</div>

<style>
.price-selector .form-select:focus {
  border-color: #ff6b35;
  box-shadow: 0 0 0 0.2rem rgba(255, 107, 53, 0.25);
}

#addToCartBtn:disabled {
  background: #ccc !important;
  border-color: #ccc !important;
  cursor: not-allowed;
}

#addToCartBtn:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}
</style>