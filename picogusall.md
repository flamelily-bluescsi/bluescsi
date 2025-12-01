---
layout: page
permalink: /picogusall
title: PicoGUS board assembled
cart_name: "PicoGUS board"
cart_description: "PicoGUS board - Fully Assembled"
cart_itemid: picogusall
cart_price: 50
cart_price_uk: 50
cart_price_us: 65
cart_price_row: 60
cart_image: "assets/img/picogusuk.webp"
cart_image1: "assets/img/picogus201.webp"
cart_image2: "assets/img/midiuk.webp"
tags: 
  - pguk
---

##### 🌍🇬🇧 PicoGUS board 🇬🇧🌍

{% include carousel3.html %}

An ISA sound card emulator, powered by a Raspberry Pi Pico. PicoGUS can emulate Gravis UltraSound, Sound Blaster 2.0 / AdLib (OPL2), CMS/Game Blaster and Tandy 3-Voice, and supports MIDI output with MPU-401 intelligent mode emulation. Includes a PicoGUS v2.0.1 ISA board, and a 3.5mm TRS to DIN-5 MIDI adapter cable.

* NEW PCB revision 2.0.1
* supports MIDI
* Sound Blaster 2.0
* Comes with a MIDI adapter cable
* Comes with a bracket (Nickel plated mild steel)
* Red PCB with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.picogus}}

{% if site.picogus > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}