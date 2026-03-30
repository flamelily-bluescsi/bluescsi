---
layout: page
permalink: /picogx
title: PicoGX - Cartridge for the GX4000 and Amstrad Plus
cart_name: "PicoGX Cartridge for the GX4000 and Amstrad Plus"
cart_description: "PicoGX Cartridge for the Amstrad GX4000 and Amstrad Plus range"
cart_itemid: picogx
cart_price: 40
cart_price_uk: 40
cart_price_us: 55
cart_price_row: 50
cart_image: "assets/img/PicoGX.webp"
cart_image1: "assets/img/picogxmenu.webp"
cart_image2: "assets/img/picogx-pcb.webp"
tags: 
  - gx
---

##### PicoGX Cartridge for the Amstrad GX4000 and Plus range

{% include carousel3.html %}

{% if site.picogx > 0 %}
{% else %}
##### COMING SOON. First batch should be here on 25th March 2026
{% endif %}

The PicoGX is cartridge emulator for the Amstrad GX4000 and Amstrad Plus range, based on the Raspberry Pi Pico microcontroller.  It offers a range of features and aims to be an all-in-one solution for running your games for your GX console and Amstrad Plus computers. It comes fully assembled in a resin factory printed case and a lovely sticker with a homage to the original cartridge design from back in the day. It's creator Rodrik has a video showing the features here [https://youtu.be/3OqgBA5MhvY](https://youtu.be/3OqgBA5MhvY) (English subtitles)

We are the registered UK reseller and the project creator will get a share of every purchase. Github link for firmware updates is [https://github.com/Neo2003/PicoGX](https://github.com/Neo2003/PicoGX)

You store your .cpr and .bin files on a microSD card. It support folders and sub-folder. You can connect the PicoGX via USB-C to a PC with a Micro SD loaded and the PC will mount the SD card as a drive. If you remove the SD card, the cartridge will launch the last game loaded automatically. The most recent game used will always show at the top of the list, so you just push the button to launch. The filename on the SD card must only be up to 40 characters long. Now up to 80 char (Firmware 1.0.3)

* Resin printed 3D case
* Built-in MicroSD card reader
* Support ROM files .cpr and .bin
* Latest Rev 1.0 PCB with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}
* Pre-flashed with latest firmware (1.0.3)

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.
###### Waiting on 3D prints - DISPATCH FOR ORDERS will be week commencing 6th April

&#128221; STOCK COUNT: {{site.picogx}}

{% if site.picogx > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}