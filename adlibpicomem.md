---
layout: page
permalink: /adlibpicomem
title: I2S / AdLib Module for the PicoMEM ISA Expansion Card
cart_itemid: adlibpicomem
cart_name: "AdLib Module for the PicoMEM"
cart_description: "AdLib Module for the PicoMEM ISA Expansion Card"
cart_price: 7
cart_image: "assets/img/adlib.webp"
cart_image1: "assets/img/adlibpicomem.webp"
tags: 
  - pmuk
  - pmrow
  - adlib
---

##### AdLib Module for the PicoMEM ISA Expansion Card

{% include carousel2.html %}

This is to add a DAC (Digital to Analog converter) to your PicoMEM. It is an I2S / Adlib module that is designed to solder directly into the PicoMEM header pins. If you add this to your cart as well as a PicoMEM, we will solder this to those pins (as shown in the second picture). Freddy is updating support for future sound chips in later updates and this add-on will work for those too.

For Adlib support, you will need the May 28th, 2024 firmware or later which is what we flash to all PicoMEM's. Firmware files can be found and downloaded here: [ISA-PicoMEM/firmware](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main/firmware){:target="_blank"}

This I2S module uses the PCM5102A DAC. Some configuration pins might need to be set on the module itself for proper operation.  The instructions for the PicoGUS show a diagram of how these need to be set [here](https://github.com/polpo/picogus/wiki/Building-your-PicoGUS){:target="_blank"}. We check this for you if we solder it to the PicoMEM.

* PCM5102A Digital to Analog Converter
* Soldered onto your PicoMEM (if purchased with one)
* ONLY for purchase with a PicoMEM (see below &#9207;)

{% if site.adlib > 0 %}
##### £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}
<hr>

If you ONLY want to purchase this Adlib DAC (Digital to Analog converter) without a PicoMEM, please use this "add to cart" button below which includes postage and packing cost (worldwide) as if purchasing with a PicoMEM the post cost is free. This is sent untracked.
{% if site.adlib > 0 %}
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="6QQ2UE3VL3LX2" />
  <input type="hidden" name="currency_code" value="GBP" />
  <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Add to Cart" />
</form>
{% else %}
{% include outofstock.md %}
{% endif %}