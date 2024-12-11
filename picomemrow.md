---
layout: page
permalink: /picomemrow
title: PicoMEM All in One 8-Bit ISA Expansion Card ROW
cart_itemid: picomemrow
cart_name: "PicoMEM 8-bit ISA ROW"
cart_description: "PicoMEM All in One 8-Bit ISA Expansion Card ROW"
cart_price: 58
cart_image: "assets/img/picomemfront.webp"
cart_image1: "assets/img/adlibpicomem.webp"
tags: 
  - pmrow
---

##### 🌍 PicoMEM All in One 8-Bit ISA Expansion Card ROW 🌍

{% include carousel2.html %}

The PicoMEM is an 8-bit ISA expansion card based on the Raspberry Pi Pico microcontroller.  It offers a huge range of features and aims to be an all-in-one solution for ISA-based vintage PCs. The card fits all ISA slots fine without a bracket, but you can print a 3D version from [here](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main/stl){:target="_blank"}. We don't supply a 3D printed bracket as it's not very hardy and in our experience breaks easily. We are looking into sourcing a metal bracket supplier for future. Your PicoMEM comes as default with a Pico W so NE2000 networking can be used straight away. Please make sure you test the Wifi functionality VERY close to the wifi router, since the Pico W does not have a wifi antenna.

* NE2000 Network Support emulation
* Built-in MicroSD card reader
* USB Mouse & Joystick Support
* Latest Rev 1.14 PCB
* Pico W pre-flashed with latest firmware
* This does NOT include the audio add-on. Add an adLib audio board [here](/adlibpicomem)

Price includes shipping costs. Please visit the [UK Page](/picomemuk) if buying from the UK

{% if site.picomem > 0 %}
##### ~~£65~~ £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}