<div class="price-selector" style="background: #f8f9fa; border: 2px solid #004e92; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
  <label for="deliveryOption" class="form-label" style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem; display: block;">Select Delivery Region:</label>
  <select class="form-select" id="deliveryOption" onchange="updatePrice()" style="border: 2px solid #004e92; padding: 0.75rem; font-size: 1.1rem; margin-bottom: 1rem; width: 100%;">
    <option value="">-- Please select your region --</option>
  {% if page.cart_name contains 'AdLib Module' %}
    <option value="with" data-price="{{page.cart_price_with}}" data-sku="{{page.cart_itemid}}with">🇬🇧🌍 Only with PicoMEM - £{{page.cart_price_with}}</option>
    <option value="without" data-price="{{page.cart_price_without}}" data-sku="{{page.cart_itemid}}without">🇬🇧🌍 Separate Adlib Purchase (without PicoMEM) - £{{page.cart_price_without}} (standard delivery)</option>
  {% elsif page.cart_name contains 'BlueSCSI' or page.cart_name contains 'PicoGUS' or page.cart_name contains 'PicoMEM' or page.cart_name contains 'Midi' or page.cart_name contains 'CPU' or page.cart_name contains 'Framethrower' or page.cart_name contains 'VGA' or page.cart_name contains 'T2' or page.cart_name contains 'JuiceBox' or page.cart_name contains 'HD68' or page.cart_name contains 'Front Panel' %}
    <option value="uk" data-price="{{page.cart_price_uk}}" data-sku="{{page.cart_itemid}}uk">🇬🇧 UK Delivery - £{{page.cart_price_uk}}</option>
    <option value="us" data-price="{{page.cart_price_us}}" data-sku="{{page.cart_itemid}}us">🇺🇸 US Delivery - £{{page.cart_price_us}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{page.cart_price_row}}" data-sku="{{page.cart_itemid}}row">🌍 Rest of World - £{{page.cart_price_row}} (International tracked)</option>
  {% elsif page.cart_name contains 'Alicia' %}
    <option value="uk" data-price="{{page.cart_price_uk}}" data-sku="{{page.cart_itemid}}uk">🇬🇧 UK Delivery - £{{page.cart_price_uk}} (48hr tracked)</option>
    <option value="us" data-price="{{page.cart_price_us}}" data-sku="{{page.cart_itemid}}us">🇺🇸 US Delivery - £{{page.cart_price_us}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{page.cart_price_row}}" data-sku="{{page.cart_itemid}}row">🌍 Rest of World - £{{page.cart_price_row}} (International tracked)</option>
  {% else %}
    <option value="uk" data-price="{{page.cart_price_uk}}" data-sku="{{page.cart_itemid}}uk">🇬🇧 UK Delivery - £{{page.cart_price_uk}} (48hr tracked)</option>
    <option value="us" data-price="{{page.cart_price_us}}" data-sku="{{page.cart_itemid}}us">🇺🇸 US Delivery - £{{page.cart_price_us}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{page.cart_price_row}}" data-sku="{{page.cart_itemid}}row">🌍 Rest of World - £{{page.cart_price_row}} (International tracked)</option>
  {% endif %}
  </select>
  
  <div id="priceDisplay" style="display:none; font-size: 1.4rem; font-weight: 700; color: #004e92; margin: 1rem 0;">
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