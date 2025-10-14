---
layout: page
permalink: /adlibpicomem
title: I2S / AdLib Module for the PicoMEM ISA Expansion Card
cart_name: "AdLib Module for the PicoMEM"
cart_description: "AdLib Module for the PicoMEM ISA Expansion Card"
cart_price: 7
cart_image: "assets/img/adlib.webp"
cart_image1: "assets/img/adlibpicomem.webp"
tags: 
  - pm
  - adlib
---

##### AdLib Module for the PicoMEM Card

{% include carousel2.html %}

This is to add a DAC (Digital to Analog converter) to your PicoMEM. It is an I2S / Adlib module that is designed to solder directly into the PicoMEM header pins. Add the "Only with a PicoMEM" option below to your cart as well as a PicoMEM, and we will solder this to those pins (as shown in the second picture). Freddy is updating support for future sound chips in later updates and this add-on will work for those too. Choose the "Separate Adlib Purchase" if you just want the AdLib card on its own.

For Adlib support, you will need the May 28th, 2024 firmware or later. Latest is May 27th 2025. Firmware files can be found and downloaded here: [ISA-PicoMEM/firmware](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main/firmware){:target="_blank"}

This I2S module uses the PCM5102A DAC. Some configuration pins might need to be set on the module itself for proper operation. The instructions for the PicoGUS show a diagram of how these need to be set [here](https://github.com/polpo/picogus/wiki/Building-your-PicoGUS){:target="_blank"}. We check this for you if we solder it to the PicoMEM.

* PCM5102A Digital to Analog Converter
* Soldered onto your PicoMEM (if purchased with one)
* Please choose the right purchase option below (&#9207;)

{% if site.adlib > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}