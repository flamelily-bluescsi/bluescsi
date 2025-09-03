---
layout: page
title: VGA Adapter
permalink: /vga
cart_itemid: vgaadapter
cart_name: "VGA Adapter PCB for Denise"
cart_description: "VGA Adapter PCB for Denise to get RGB out to a VGA socket for 15Khz monitors"
cart_price: 15
cart_image: "assets/img/vgaadapter.webp"
tags: 
  - amiga
---

##### 🇬🇧 VGA Adapter PCB for Denise 🇬🇧

{% include carousel1.html %}

This is to purchase a VGA Adapter PCB for Denise. Add this to your Denise order for a VGA output via the internal RGB connector on the motherboard (labelled H1). This will ONLY work for 15Khz compatible monitors. You will need to source some components as we only include the capacitor and IC at C1 and U1. We have a Google spreadsheet with the BOM [here.](https://docs.google.com/spreadsheets/d/17oHfT9QUCcRQ_YKXXuV0mXPfL9rg2KvKyZhjl9AIMDw/edit?usp=sharing){:target="_blank"}

This PCB is based on the VGA adapter board for the GBAPII++ mini card for Denise. If you are interested, more info about the GBAPII Mini card and component details can be found [here,](https://amiga.erkan.se/mini-version-of-gbapii-amiga-graphics-card/){:target="_blank"} and also on the A1K thread [here.](https://www.a1k.org/forum/index.php?threads/80990/){:target="_blank"}

* VGA PCB with mounting holes
* Only U1 and C1 components included
* PCB with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}

&#128221; STOCK COUNT: {{site.vgaadapter}}

{% if site.vgaadapter > 0 %}
##### £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}