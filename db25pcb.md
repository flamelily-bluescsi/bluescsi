---
layout: page
title: V2 DB25 Mini PCB
cart_name: "V2 BlueSCSI DB25 Mini PCB"
cart_description: "V2 BlueSCSI DB25 Mini PCB only Solder Kit"
cart_price: 32
cart_image: "assets/img/v2db25miniboard.webp"
cart_image1: "assets/img/DB25_pcb.webp"
cart_image2: "assets/img/DB25_pcb1.webp"
permalink: /db25pcb
tags: 
  - scsi
  - db25v2
---

##### 🇬🇧🌍 BlueSCSI V2 DB25 Mini PCB Only 🌍🇬🇧

{% include carousel3.html %}

This is the DB25 Mini PCB (2024.01a) only version of the BlueSCSI for buyers. This is usually used externally from the computer. Some soldering will be required to complete this device. If you prefer a complete and tested device please choose the Full option. The Suface Mount Components are pre-soldered to the PCB so only through hole soldering is required. The normal hex nuts have been replaced with screws so as to allow plugging into the 25 pin socket flush. You will need to supply your own Raspberry Pi Pico!

* Mini PCB Version (2024.01a) (No Pico supplied)
* SMD already soldered
* Hex nuts replaced with screws
* Always on termination (no termination jumper)
* Cannot order any Pico upgrade with this

{% if site.db25 > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}