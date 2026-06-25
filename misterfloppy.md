---
layout: page
title: Mister Floppy
permalink: /misterfloppy
cart_name: "Mister Floppy board for Amiga"
cart_description: "Mister Floppy for a real drive usage within MisterFPGA"
cart_itemid: misterfloppy
cart_price: 25
cart_price_uk: 25
cart_price_us: 39
cart_price_row: 35
cart_image: "assets/img/Mister-floppy.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Mister Floppy board 🇬🇧🌍🇺🇸

{% include carousel1.html %}

{% if site.misterfloppy > 0 %}
{% else %}
##### We hope to have more stock around July 2026.
{% endif %}

This is to purchase a Mister Floppy board to use a real floppy drive for your Amiga FPGA experience in the Mister or MultiSystem. Created by Rob Smith and you can see his video about it [here.](https://youtu.be/kN8TCz7Z0n8){:target="_blank"} You can find all info about this excellent device on Rob's page [here.](https://mister.robsmithdev.co.uk/){:target="_blank"} We have permission to sell these and Rob will get a commission on our sales.


* Main SMD soldered PCB, with default jumpers set
* Rev 1.65 PCB
* We sell slimline floppy drives [here](/slimlinefloppy) 

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.misterfloppy}}

{% if site.misterfloppy > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}