---
layout: page
title: JuiceBox
permalink: /juicebox
cart_name: "Amiga JuiceBox kit"
cart_description: "Amiga JuiceBox USB-C power for Amiga"
cart_itemid: juicebox
cart_price: 36
cart_price_uk: 36
cart_price_us: 52
cart_price_row: 48
cart_image: "assets/img/jb.webp"
cart_image1: "assets/img/jb1.webp"
cart_image2: "assets/img/jb2.webp"
cart_image3: "assets/img/juicebox-cap.webp"
cart_image4: "assets/img/Juice-box1.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Amiga JuiceBox kit USB-C power for Amiga 🇬🇧🌍🇺🇸

{% include carousel5.html %}

{% if site.juicebox > 0 %}
{% else %}
##### We hope to have more stock around 1st Week March 2026.

<!-- form HTML -->
<form action="https://formspree.io/f/xbdaoyke"
  method="POST">
  <div class="mb-3">
    <p>If you would like to get an email notification when they are available, then enter your email address below.</p>
    <label for="email" class="form-label">Your Email:</label>
    <input type="email" class="form-control" name="email" id="email" autocomplete="email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
{% endif %}

This is to purchase a JuiceBox hobby test kit to build your own USB-C power supply unit for your Amiga. Andi from the YouTube channel HBR has created this power supply unit for Amigas. You can see the video about it [here.](https://youtu.be/xJbwops7EXk){:target="_blank"} You will need to solder and build this kit up yourself using the parts we supply. The one part you will need to supply yourself will be the 5 PIN Square DIN Male Connector, which you can either use from an old PSU or purchase from [Sordan.ie here.](https://sordan.ie/product/732/5-pin-square-din-male-connector-amiga-500-600-1200-commodore-128/){:target="_blank"} You will also need some standard cable for the switch and DIN plug. You can use Cat6a ethernet cable with copper cores as Andi shows in his video.

###### Full build Instructions PDF file can be [downloaded here](/assets/pdfs/AssemblyInstructions.pdf)
###### If you have a capacitor soldered near the LED's this is functional so don't remove

If you need an adapter, an excellent USB-C power adpater that works very well is the UGREEN 30W which can be bought off Amazon UK here [https://amzn.to/473Q7KI](https://amzn.to/473Q7KI) and 2m USB-C cable from here [https://amzn.to/4kZrfXW](https://amzn.to/4kZrfXW) 

* Kit includes Main populated PCB, metal housing, PCB end plates, switch and screws
* USB-C power delivery
* Will work for an A500, A500+, A600 and A1200
* Last photo shows a built version
* Get your 5 PIN DIN connector [here](https://sordan.ie/product/732/5-pin-square-din-male-connector-amiga-500-600-1200-commodore-128/){:target="_blank"}

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.juicebox}}

{% if site.juicebox > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}