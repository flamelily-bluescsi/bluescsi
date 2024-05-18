---
layout: page
permalink: /picogusrow
title: PicoGUS board Rest of the World
cart_itemid: picogusrow
cart_name: "PicoGUS board Rest of the World"
cart_description: "PicoGUS board ROW - Fully Assembled"
cart_price: 70
cart_image: "assets/img/picogus2.webp"
cart_image1: "assets/img/picogus2s.webp"
tags: 
  - pgrow
---

##### 🇪🇺🌍 PicoGUS board for Europe and the Rest of the World 🇪🇺🌍

{% include carousel2.html %}

An ISA sound card emulator, powered by a Raspberry Pi Pico. PicoGUS can emulate Gravis UltraSound, Sound Blaster 2.0 / AdLib (OPL2), CMS/Game Blaster and Tandy 3-Voice, and supports MIDI output with MPU-401 intelligent mode emulation. Includes a PicoGUS v2.0 ISA board, and a 3.5mm TRS to DIN-5 MIDI adapter cable.

* supports MIDI
* Sound Blaster 2.0
* Comes with a MIDI adapter cable

##### COMING SOON

{% if site.picogus > 0 %}
##### £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}