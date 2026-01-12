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
cart_image3: "assets/img/Juice-box1.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Amiga JuiceBox kit USB-C power for Amiga 🇬🇧🌍🇺🇸

{% include carousel4.html %}

{% if site.juicebox > 0 %}
{% else %}
##### We hope to have stock around end of January 2026. If you have entered your email below you will get an email as soon as you can purchase.
{% endif %}

This is to purchase a JuiceBox kit to build your own USB-C power supply unit for your Amiga. Andi from the YouTube channel HBR has created this power supply unit for Amigas. You can see the video about it [here.](https://youtu.be/xJbwops7EXk){:target="_blank"} You will need to solder and build this kit up yourself using the parts we supply. The one part you will need to supply yourself will be the 5 PIN Square DIN Male Connector, which you can either use from an old PSU or purchase from [Sordan.ie here.](https://sordan.ie/product/732/5-pin-square-din-male-connector-amiga-500-600-1200-commodore-128/){:target="_blank"} You will also need some standard cable for the switch and DIN plug. You can use Cat5 ethernet cable as Andi shows in his video.

If you need an adapter, an excellent USB-C power adpater that works very well is the UGREEN 30W which can be bought off Amazon UK here [https://amzn.to/473Q7KI](https://amzn.to/473Q7KI) and 2m USB-C cable from here [https://amzn.to/4kZrfXW](https://amzn.to/4kZrfXW) 

* Kit includes Main PCB, metal housing, PCB end plates, switch and screws
* USB-C power delivery
* Will work for an A500, A500+, A600 and A1200
* Last photo shows a built version
* Get your 5 PIN DIN connector [here](https://sordan.ie/product/732/5-pin-square-din-male-connector-amiga-500-600-1200-commodore-128/){:target="_blank"}

<!-- form HTML -->
<form action="https://formspree.io/f/xqawgwjk"
  method="POST">
  <div class="mb-3">
    <p>If you would like to register your interest and get an email notification when we have the JuiceBox for sale, then enter and submit your email address below. We will have a initial batch of 25 kits.</p>
    <label for="email" class="form-label">Your Email:</label>
    <input type="email" class="form-control" name="email" id="email" autocomplete="email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.juicebox}}

{% if site.juicebox > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}