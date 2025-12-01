---
layout: page
permalink: /picomemall
title: PicoMEM All in One 8-Bit ISA Expansion Card
cart_name: "PicoMEM 8-bit ISA"
cart_description: "PicoMEM All in One 8-Bit ISA Expansion Card"
cart_itemid: picomemall
cart_price: 46
cart_price_uk: 46
cart_price_us: 58
cart_price_row: 56
cart_image: "assets/img/picomemfront.webp"
cart_image1: "assets/img/adlibpicomem.webp"
tags: 
  - pm
---

##### 🌍🇬🇧 PicoMEM All in One 8-Bit ISA Expansion Card 🇬🇧🌍

{% include carousel2.html %}

The PicoMEM is an 8-bit ISA expansion card based on the Raspberry Pi Pico microcontroller.  It offers a huge range of features and aims to be an all-in-one solution for ISA-based vintage PCs. The card fits all ISA slots fine without a bracket, but you can print a 3D version from [here](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main/stl){:target="_blank"}. We don't supply a 3D printed bracket as it's not very hardy and in our experience breaks easily. We are looking into sourcing a metal bracket supplier for future. Your PicoMEM comes as default with a Pico W so NE2000 networking can be used straight away. Please make sure you test the Wifi functionality VERY close to the wifi router, since the Pico W does not have a wifi antenna.

* NE2000 Network Support emulation
* Built-in MicroSD card reader
* USB Mouse & Joystick Support
* Latest Rev 1.14 PCB now with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}
* Pico W pre-flashed with latest firmware
* This does NOT include the audio add-on. Add an adLib audio board [here](/adlibpicomem)

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

{% if site.picomem > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}