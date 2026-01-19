---
layout: page
title: VGA Adapter
permalink: /vga
cart_name: "VGA Adapter PCB"
cart_description: "Denise RGB out to a VGA socket for 15Khz monitors"
cart_itemid: vga
cart_price: 16
cart_price_uk: 16
cart_price_us: 25
cart_price_row: 22
cart_image: "assets/img/vgapcb.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍 VGA Adapter PCB for Denise 🇬🇧🌍

{% include carousel1.html %}

This is to purchase a VGA Adapter PCB for Denise. Add this to your Denise order for a VGA output via the internal RGB connector on the motherboard (labelled H1). This will ONLY work for 15Khz compatible monitors. You will need to source some components as we only include the capacitor and IC at C1 and U1, which are pre-soldered. VGA conenctor and header pins are needed which are both through hole. We have a Google spreadsheet with the BOM [here.](https://docs.google.com/spreadsheets/d/17oHfT9QUCcRQ_YKXXuV0mXPfL9rg2KvKyZhjl9AIMDw/edit?usp=sharing){:target="_blank"}

This PCB is based on the adapter board for the GBAPII++ mini card for Denise. This is not for use with a GBAPII++ card and only used to get Denises' RGB output to an HD15 port (commonly called VGA). If you are interested, more info about the GBAPII Mini card and component details can be found [here,](https://amiga.erkan.se/mini-version-of-gbapii-amiga-graphics-card/){:target="_blank"} and also on the A1K thread [here.](https://www.a1k.org/forum/index.php?threads/80990/){:target="_blank"}

* VGA PCB with mounting holes
* Only U1 and C1 components soldered
* PCB with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}

&#128221; STOCK COUNT: {{site.vgaadapter}}

{% if site.vgaadapter > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}