---
layout: page
title: PiStorm Framethrower 500
permalink: /framethrower
cart_name: "Framethrower for classic PiStorm"
cart_description: "Framethrower for classic PiStorm Amiga 500/500+/2000"
cart_itemid: framethrower
cart_price: 32
cart_price_uk: 32
cart_price_us: 45
cart_price_row: 42
cart_image: "assets/img/framethrower.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Framethrower for classic PiStorm Amiga 500/500+/2000 🇬🇧🌍🇺🇸

{% include carousel1.html %}

This is to purchase a Framethrower for classic PiStorm Amiga 500/500+/2000, which is an Amiga native video passtrough that converts the Amiga Video from Denise to a MIPI CSI2 datastream which the Raspberry Pi on the PiStorm can receive and display over HDMI. This is a fully built and tested unit. Please understand this is a very new bit of hardware and using it with a PiStorm is not just plug and play. You need to have the correct version of Emu68 installed and you need to make some changes to the cmdline.txt file on the Raspberry Pi SD card. View the Github for this project [here](https://github.com/PiStorm/Framethrower_Denise/tree/main){:target="_blank"} and if you would like to support the creator there is a donation link on that page. There is a basic setup guide [here.](https://github.com/PiStorm/Framethrower_Denise/blob/main/setup.md){:target="_blank"}

* Blue PCB Framethrower
* Amiga native video passtrough
* Comes with ribbon cable for Pi3
* If you have a Pi2 you need a different cable

Price includes shipping costs. Please choose your delivery region below.

&#128221; STOCK COUNT: {{site.framethrower}}

{% if site.framethrower > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}