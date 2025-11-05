---
layout: page
title: Amiga Video DAC
permalink: /dac
cart_itemid: videodac
cart_name: "Amiga Video DAC"
cart_description: "Amiga Video Digital to Analog Converter (DAC)"
cart_price: 16
cart_image: "assets/img/dac.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Amiga Video Digital to Analog Converter (DAC) 🇬🇧🌍🇺🇸

{% include carousel1.html %}

This is to purchase an Amiga Video Digital to Analog Converter (DAC) for Alicia or other A1200 re-amiga product. Add this to your Alicia 1200 order ready for soldering. To finish the Alicia Project you will still need to source some components like the custom chips, ports, connectors, ROMS etc.

* ADV101KP30
* Package: 44-PLCC
* These are working used IC's
* Alicia 1200 can be found [here](/alicia1200)

&#128221; STOCK COUNT: {{site.dac}}

{% if site.dac > 0 %}
##### £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}