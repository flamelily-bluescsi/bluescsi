---
layout: page
title: JuiceST
permalink: /juicest
cart_name: "JuiceST kit"
cart_description: "Atari ST USB-C power - JuiceST"
cart_itemid: juicest
cart_price: 45
cart_price_uk: 45
cart_price_us: 58
cart_price_row: 55
cart_image: "assets/img/juicest1.webp"
cart_image1: "assets/img/juicest2.webp"
tags: 
  - atari
---

##### 🇬🇧🌍🇺🇸 Atari ST USB-C power - JuiceST 🇬🇧🌍🇺🇸

{% include carousel2.html %}

{% if site.juicest > 0 %}
{% else %}

<!-- form HTML -->
<form action="https://formspree.io/f/myekqyra"
  method="POST">
  <div class="mb-3">
    <p>If you would like to get an email notification when these are available, then enter your email address below.</p>
    <label for="email" class="form-label">Your Email:</label>
    <input type="email" class="form-control" name="email" id="email" autocomplete="email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email.</div>
  </div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>
{% endif %}

Check out the video here [https://youtu.be/JnuOpCTVtKk](https://youtu.be/JnuOpCTVtKk){:target="_blank"}

{% if site.juicest > 0 %}
This is to purchase a JuiceST hobby test kit to build your own USB-C power supply unit for your Atari ST. Andi from the YouTube channel HBR has created this power supply unit. You will need to solder some components. The main PCB SMD components will already soldered.

If you need an adapter, an excellent USB-C power adpater that works very well is the UGREEN 30W which can be bought off Amazon UK here [https://amzn.to/473Q7KI](https://amzn.to/473Q7KI) and 2m USB-C cable from here [https://amzn.to/4kZrfXW](https://amzn.to/4kZrfXW) 

Price includes shipping costs. Make sure you choose the correct delivery region from the dropdown.

&#128221; STOCK COUNT: {{site.juicest}}

{% if site.juicest > 0 %}
{% include price.md %}
{% else %}
{% include outofstock.md %}
{% endif %}
{% else %}
{% endif %}