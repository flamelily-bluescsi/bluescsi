---
layout: page
title: BlueSCSI Ultra and V2 - Front Panel
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

##### 🇬🇧🌍 BlueSCSI Ultra and V2 - Front Panel 🌍🇬🇧

{% include carousel2.html %}

This is Front Panel for all the BlueSCSI Ultra devices, and the BlueSCSI V2 desktop (via QWIIC connector). You will need a QWIIC cable if buying for a V2 desktop or Powerbook. This Front Panel is an optional extension for all BlueSCSI boards (DB25 needs modification) that was designed by Polpo for the [PicoIDE.](/picoide)

This front-panel uses the same hardware as the PicoIDE. You can find information about how to use it at [https://bluescsi.com/docs/Front-Panel](https://bluescsi.com/docs/Front-Panel){:target="_blank"} - Both firmwares can be downloaded at [https://github.com/polpo/open-retro-storage-frontpanel/releases](https://github.com/polpo/open-retro-storage-frontpanel/releases){:target="_blank"} This item will be sent with the v0.5.0 firmware and you can easily update the firmware to any NEW version via the web interface.

Remember the narrow 50 pin Ultra needs the [expander](/narrowexpander) to work with this. Ultra Wide (68 pin and SCA 80 pin) has the SPI port built-in, so it doesn't need the Expander - just connect the Front Panel directly via the flex cable. If you connect this to the Non-Ultra V2 desktop BlueSCSI you will need a QWIIC cable. See more detailed info about the new ultra products [HERE.](https://bluescsi.com/ultra){:target="_blank"} Please see [this link](https://github.com/polpo/open-retro-storage-frontpanel/tree/main/enclosure){:target="_blank"} to the front panel 3D print enclosure and buttons STL files.

* BETA Firmware flashed
* Comes with short flex cable (7.5cm)
* Comes with 4 rubber nipple buttons (used with 3D print)
* Tested and complete
* Does not work for DB25 version, without modification.

###### IMPORTANT - The firmware is in BETA so report issues [here](https://github.com/polpo/open-retro-storage-frontpanel/issues){:target="_blank"}

&#128221; STOCK COUNT: {{site.frontpanel}}

{% if site.frontpanel > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}