---
layout: page
title: Juice Box
permalink: /juicebox
cart_name: "Amiga Juice Box kit"
cart_description: "Amiga Juice Box USB-C power for Amiga"
cart_itemid: juicebox
cart_price: 00
cart_price_uk: 35
cart_price_us: 48
cart_price_row: 46
cart_image: "assets/img/Juice-box1.webp"
cart_image1: "assets/img/Juice-box2.webp"
cart_image2: "assets/img/Juice-box3.webp"
cart_image3: "assets/img/Juice-box4.webp"
tags: 
  - amiga
---

##### 🇬🇧🌍🇺🇸 Amiga Juice Box kit USB-C power for Amiga 🇬🇧🌍🇺🇸

{% include carousel4.html %}

This is to purchase a Juice Box kit to build your own USB-C power for your Amiga. Andi from the YouTube channel HBR has created this power supply unit for Amigas. You can see the video about it [here.](https://youtu.be/vLpyo52PCfI){:target="_blank"} You will need to solder and build this kit up yourself using the parts we supply.

* This is kit to build an Amiga PSU
* USB-C power delivery
* Will work for an A500, A500+, A600 and A1200

<!-- form HTML -->
<form action="https://formspree.io/f/xqawgwjk"
  method="POST">
  <div class="mb-3">
    <p>If you would like to register your interest and get an email notification when we have the Juice Box for sale, then enter and submit your email address below. We will have a initial batch of 25 kits.</p>
    <label for="email" class="form-label">Your Email:</label>
    <input type="email" class="form-control" name="email" id="email" autocomplete="email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>

&#128221; STOCK COUNT: {{site.juicebox}}

{% if site.juicebox > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}