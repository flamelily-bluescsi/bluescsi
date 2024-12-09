---
layout: default
note: true
permalink: /picogus
---
######  PicoGUS Products for UK and the Rest of the World - STOCK IN A FEW DAYS - CAN ORDER BUT PLEASE BE PATIENT ON DISPATCH

Please click on the Title or image of each item to view more information about it on the product page, and photos of the product. You can "Add to cart" from these product pages. Make sure you choose the <b>UK option ONLY</b> if your delivery address is in the UK. Our prices <b>include</b> delivery to simplify checkout and you will receive a dispatch email via Paypal. We are a registered distributor for the [PicoGUS](https://picog.us/){:target="_blank"}, and the project creator will get a share of every purchase.

To prepare your DOS computer for using the V2 PicoGUS, Please see the PicoGUS [GitHub](https://github.com/polpo/picogus){:target="_blank"} project and [compatibility list](https://github.com/polpo/picogus/wiki/Compatibility-list){:target="_blank"} for more information. On that page you will find information on the PicoGUS and what computer systems, games, tracker, music players and demos it is compatible with.

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pguk'" %}
<u>🇬🇧 PicoGUS V2 Products for the UK 🇬🇧</u>

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pgrow'" %}
<u>🇪🇺🌍 PicoGUS V2 Products for the Rest of the World 🇪🇺🌍</u>
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>