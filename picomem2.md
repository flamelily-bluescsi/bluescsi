---
layout: page
permalink: /picomem2
title: PicoMEM 2 New all in One 8-Bit ISA Expansion Card
cart_name: "PicoMEM 2 New 8-bit ISA"
cart_description: "PicoMEM 2 New all in One 8-Bit ISA Expansion Card"
cart_itemid: picomem2
cart_price: 75
cart_price_uk: 75
cart_price_us: 92
cart_price_row: 87
cart_image: "assets/img/PicoMEM2.webp"
cart_image1: "assets/img/PicoMEM2back.webp"
tags: 
  - pm
---

##### 🌍🇬🇧 PicoMEM 2 - New all in One 8-Bit ISA Expansion Card 🇬🇧🌍

{% include carousel2.html %}

The PicoMEM 2 is an new iteration on the original [PicoMEM](/picomemall) 8-bit ISA expansion card based on the Raspberry Pi Pico 2 microcontroller.  It adds a huge range of features from the original. Integrated Soundblaster and GUS support, with onboard audio jack. This PicoMEM 2 comes as default with a Pico 2, and a RM2 wifi adapter so NE2000 networking can be used straight away. Improvements and additions over PicoMEM 1 listed below: 

###### Performance increase / New hardware:

- Global performance increase thanks to the RP2350 at 360MHz (vs RP2040 at 240MHz)
- Zero wait RAM emulation moved from 128KB to 256KB
- IOCHRDY Signal generation (used for PSRAM Memory emulation) moved from 120ns to 50ns, allowing for more EMS support.
- Global RAM/IO performance increase for more PC compatibility.
- Now use QSPI PSRAM, for faster RAM/EMS emulation (only 1 wait state)
- Support DMA from PicoMEM emulated RAM (Except when the PicoMEM does DMA)
- Multi IRQ support : IRQ 3,5,6,7 are independant
- DMA Support : Can select DMA 1 or 3 via jumper on board
- New : USB A Connector for direct Joystick/Mouse/USB drive connection, or USB Hub
- New : Real time Clocked with a battery for RTC support
- New : Wifi antenna is now "outside" for improved Wifi signal. (More than 10dB better)
- New : Serial port (TX/RX) + LED Connector for external LED connection or HDDClicker.
- New : 2x QwiiC connectors
- New : 1x Front Panel connector for OLED + 5 Buttons

###### Audio improvements : 

 - New : DAC (PCM5102) is now onboard, with better sound quality (4 Layers routing) and Jack connector
 - Sound Blaster code now use hardware DMA for greatly improved compatibility.
 - New: Gravis UltraSound support Added, 1MB RAM, DMA and IRQ.
 - New: MPU / General MIDI via a modified TinySoundFont implementation (https://github.com/schellingb/TinySoundFont)
 - All emulation can be active at the same time, you can configure General MIDI + GUS on DOOM for example.
 - Audio : Now generate Stereo OPL3 instead of OPL2

###### Other updates (possible on PicoMEM 1)
 - More Joystick supported (DirectInput, PS4/PS5, Switch/Switch2... ) (https://github.com/joypad-ai/joypad-os)
 - Added support for variable geometry via a "imagename".chs file

Key Features:

* NE2000 Network Support emulation
* Built-in MicroSD card reader
* USB Mouse & Joystick Support
* Latest Rev 2.02 PCB with [gold ENIG](https://en.wikipedia.org/wiki/Electroless_nickel_immersion_gold){:target="_blank"}
* Pre-flashed with latest [firmware](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main/firmware/PicoMEM2){:target="_blank"}
* Audio jack onboard

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.picomem2}}

{% if site.picomem2 > 0 %}
{% else %}
##### We hope to have more stock around mid July 2026.
{% endif %}

{% if site.picomem2 > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}