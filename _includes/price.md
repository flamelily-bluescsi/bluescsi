<div class="price-selector" style="background: #f8f9fa; border: 2px solid #004e92; border-radius: 8px; padding: 1.5rem; margin: 1.5rem 0;">
  <label for="deliveryOption" class="form-label" style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem; display: block;">Select Delivery Region:</label>
  <select class="form-select" id="deliveryOption" onchange="updatePrice()" style="border: 2px solid #004e92; padding: 0.75rem; font-size: 1.1rem; margin-bottom: 1rem; width: 100%;">
    <option value="">-- Please select your region --</option>

  {% if page.cart_name contains 'PowerShark' %}
    <option value="uk" data-price="{{site.psukprice}}" data-sku="powersharkuk">🇬🇧 UK Delivery - £{{site.psukprice}} (48hr tracked)</option>
    <option value="us" data-price="{{site.psusprice}}" data-sku="powersharkus">🇺🇸 US Delivery - £{{site.psusprice}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{site.psrowprice}}" data-sku="powersharkrow">🌍 Rest of World - £{{site.psrowprice}} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Desktop' %}
    <option value="uk" data-price="{{ site.desktopukprice }}" data-sku="v2desktopuk">🇬🇧 UK Delivery - £{{ site.desktopukprice }}</option>
    <option value="row" data-price="{{ site.desktoprowprice }}" data-sku="v2desktoprow">🌍 Rest of World - £{{ site.desktoprowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Desktop Kit' %}
    <option value="uk" data-price="{{ site.desktopkitukprice }}" data-sku="v2desktopkituk">🇬🇧 UK Delivery - £{{ site.desktopkitukprice }}</option>
    <option value="row" data-price="{{ site.desktopkitrowprice }}" data-sku="v2desktopkitrow">🌍 Rest of World - £{{ site.desktopkitrowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Desktop PCB Only' %}
    <option value="uk" data-price="{{ site.desktoppcbukprice }}" data-sku="v2desktoppcbuk">🇬🇧 UK Delivery - £{{ site.desktoppcbukprice }}</option>
    <option value="row" data-price="{{ site.desktoppcbrowprice }}" data-sku="v2desktoppcbrow">🌍 Rest of World - £{{ site.desktoppcbrowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI DB25 Mini' %}
    <option value="uk" data-price="{{ site.db25ukprice }}" data-sku="v2db25uk">🇬🇧 UK Delivery - £{{ site.db25ukprice }}</option>
    <option value="row" data-price="{{ site.db25rowprice }}" data-sku="v2db25row">🌍 Rest of World - £{{ site.db25rowprice }} (International standard)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI DB25 Mini Kit' %}
    <option value="uk" data-price="{{ site.db25kitukprice }}" data-sku="v2db25kituk">🇬🇧 UK Delivery - £{{ site.db25kitukprice }}</option>
    <option value="row" data-price="{{ site.db25kitrowprice }}" data-sku="v2db25kitrow">🌍 Rest of World - £{{ site.db25kitrowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI DB25 Mini PCB' %}
    <option value="uk" data-price="{{ site.db25pcbukprice }}" data-sku="v2db25pcbuk">🇬🇧 UK Delivery - £{{ site.db25pcbukprice }}</option>
    <option value="row" data-price="{{ site.db25pcbrowprice }}" data-sku="v2db25pcbrow">🌍 Rest of World - £{{ site.db25pcbrowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Powerbook' %}
    <option value="uk" data-price="{{ site.pbukprice }}" data-sku="v2pbuk">🇬🇧 UK Delivery - £{{ site.pbukprice }}</option>
    <option value="row" data-price="{{ site.pbrowprice }}" data-sku="v2pbrow">🌍 Rest of World - £{{ site.pbrowprice }} (International standard)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Powerbook Kit' %}
    <option value="uk" data-price="{{ site.pbkitukprice }}" data-sku="v2pbkituk">🇬🇧 UK Delivery - £{{ site.pbkitukprice }}</option>
    <option value="row" data-price="{{ site.pbkitrowprice }}" data-sku="v2pbkitrow">🌍 Rest of World - £{{ site.pbkitrowprice }} (International tracked)</option>
  {% elsif page.cart_name == 'V2 BlueSCSI Powerbook PCB' %}
    <option value="uk" data-price="{{ site.pbpcbukprice }}" data-sku="v2pbpcbuk">🇬🇧 UK Delivery - £{{ site.pbpcbukprice }}</option>
    <option value="row" data-price="{{ site.pbpcbrowprice }}" data-sku="v2pbpcbrow">🌍 Rest of World - £{{ site.pbpcbrowprice }} (International tracked)</option>                
  {% elsif page.cart_name contains 'Amiga Denise PCB' %}
    <option value="uk" data-price="{{site.deniseukprice}}" data-sku="deniseuk">🇬🇧 UK Delivery - £{{site.deniseukprice}} (48hr tracked)</option>
    <option value="us" data-price="{{site.deniseusprice}}" data-sku="deniseus">🇺🇸 US Delivery - £{{site.deniseusprice}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{site.deniserowprice}}" data-sku="deniserow">🌍 Rest of World - £{{site.deniserowprice}} (International tracked)</option>
  {% elsif page.cart_name contains 'Alicia 1200' %}
    <option value="uk" data-price="{{site.aliciaukprice}}" data-sku="aliciauk">🇬🇧 UK Delivery - £{{site.aliciaukprice}} (PREORDER Dispatch Mid December - 48hr tracked)</option>
    <option value="us" data-price="{{site.aliciausprice}}" data-sku="aliciaus">🇺🇸 US Delivery - £{{site.aliciausprice}} (PREORDER Dispatch Mid December - Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{site.aliciarowprice}}" data-sku="aliciarow">🌍 Rest of World - £{{site.aliciarowprice}} (PREORDER Dispatch Mid December - International tracked)</option>
  {% elsif page.cart_name contains '68EC020' %}
    <option value="uk" data-price="{{site.cpuukprice}}" data-sku="cpuuk">🇬🇧 UK Delivery - £{{site.cpuukprice}} (2nd Class)</option>
    <option value="us" data-price="{{site.cpuusprice}}" data-sku="cpuus">🇺🇸 US Delivery - £{{site.cpuusprice}} (Tariffs/Duties Paid)</option>
    <option value="row" data-price="{{site.cpurowprice}}" data-sku="cpurow">🌍 Rest of World - £{{site.cpurowprice}} (International tracked)</option>        
  {% elsif page.cart_name contains 'VGA Adapter' %}
    <option value="uk" data-price="{{site.denisevgapriceuk}}" data-sku="vgaadapter">🇬🇧 UK Delivery - £{{site.denisevgapriceuk}}</option>
    <option value="row" data-price="{{site.denisevgapricerow}}" data-sku="vgaadapterrow">🌍 Rest of World - £{{site.denisevgapricerow}} (International standard)</option>  
  {% elsif page.cart_name contains 'PicoGUS' %}
    <option value="uk" data-price="{{site.picogusukprice}}" data-sku="picogusuk">🇬🇧 UK Delivery - £{{site.picogusukprice}}</option>
    <option value="row" data-price="{{site.picogusrowprice}}" data-sku="picogusrow">🌍 Rest of World - £{{site.picogusrowprice}} (International tracked)</option>
  {% elsif page.cart_name contains 'PicoMEM 8-bit' %}
    <option value="uk" data-price="{{site.picomemukprice}}" data-sku="picomemuk">🇬🇧 UK Delivery - £{{site.picomemukprice}}</option>
    <option value="row" data-price="{{site.picomemrowprice}}" data-sku="picomemrow">🌍 Rest of World - £{{site.picomemrowprice}} (International tracked)</option>
  {% elsif page.cart_name contains 'AdLib Module' %}
    <option value="uk" data-price="{{ site.adlibprice }}" data-sku="adlibpicomem">🇬🇧🌍 Only with PicoMEM - £{{ site.adlibprice }}</option>
    <option value="row" data-price="{{ site.adlibonlyprice }}" data-sku="adlibonly">🇬🇧🌍 Separate Adlib Purchase (without PicoMEM) - £{{ site.adlibonlyprice }} (standard delivery)</option>
  {% elsif page.cart_name contains 'Midi Cable' %}
    <option value="uk" data-price="6" data-sku="midi15uk">🇬🇧 UK Delivery - £6</option>
    <option value="row" data-price="10" data-sku="midi15row">🌍 Rest of World - £10 (International standard)</option>
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