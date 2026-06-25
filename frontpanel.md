---
layout: page
title: BlueSCSI Ultra - Front Panel
permalink: /frontpanel
cart_name: "BlueSCSI Ultra - Front Panel"
cart_description: "BlueSCSI Ultra - Front Panel - Assembled"
cart_itemid: frontpanel
cart_price: 35
cart_price_uk: 35
cart_price_us: 49
cart_price_row: 47
cart_image: "assets/img/Front-bottom.webp"
cart_image1: "assets/img/Front-top.webp"
tags: 
  - scsi
  - ultra
---

##### 🇬🇧🌍 BlueSCSI Ultra - Front Panel 🌍🇬🇧

{% include carousel2.html %}

This is Front Panel for all the BlueSCSI Ultra devices, and the BlueSCSI V2 desktop (via QWIIC connector). You will need a QWIIC cable if buying for a V2 desktop or Powerbook. This Front Panel is an optional extension for all BlueSCSI boards (except DB25 version) that was designed by Polpo for the [PicoIDE.](/picoide)

This front-panel uses the same hardware and firmware as the PicoIDE which will be open sourced once the PicoIDE ships. You can find information about how to use it at [https://bluescsi.com/docs/Front-Panel](https://bluescsi.com/docs/Front-Panel){:target="_blank"} - GPLv3 code for the BlueSCSI beta firmware is at [https://github.com/BlueSCSI/BlueSCSI-v2/releases/tag/panel/](https://github.com/BlueSCSI/BlueSCSI-v2/releases/tag/panel/)

You can also visit the documentation page here - [https://picoide.com/docs/front-panel/](https://picoide.com/docs/front-panel/){:target="_blank"} to see how it functions in the PicoIDE.

Remember the narrow 50 pin Ultra needs the [expander](/narrowexpander) to work with this. Ultra Wide (68 pin and SCA 80 pin) has the SPI port built-in, so it doesn't need the Expander - just connect the Front Panel directly via the flex cable. If you connect this to the Non-Ultra V2 desktop BlueSCSI you will need a QWIIC cable. See more detailed info about the new ultra products [HERE.](https://bluescsi.com/ultra){:target="_blank"} If purchased you will get a link to the front panel 3D print enclosure and buttons STL.

* Latest PCB revision
* Comes with short flex cable (7.5cm)
* Comes with 4 rubber buttons (used with 3D print)
* Tested and complete
* Does NOT work for DB25 Mini version

###### IMPORTANT - The firmware is in BETA so expect minor issues. Firmware can be updated via the web interface.

&#128221; STOCK COUNT: {{site.frontpanel}}

{% if site.frontpanel > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}