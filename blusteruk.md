---
layout: page
title: Amiga A2000 Bluster
cart_itemid: blusteruk
cart_name: "Amiga A2000 Bluster"
cart_description: "Amiga A2000 Buster replacement - Fully Assembled"
cart_price: 33
cart_image: "assets/img/bluster1.webp"
cart_image1: "assets/img/bluster2.webp"
tags: 
  - amiga
---

##### 🇬🇧 Amiga A2000 Bluster 🇬🇧

{% include carousel2.html %}

This is an Amiga A2000 Buster replacement called the Bluster. More info about Bluster can be found <a href="https://github.com/LIV2/Bluster" target="_blank">here</a>. This is an excellent buster replacement IC for your Amiga designed by <a href="https://twitter.com/LIV2" target="_blank">Matt Harlum (LIV2)</a>

* Fully Assembled and tested
* CPLD pre-programmed
* Rev C board

&#128221; STOCK COUNT: {{site.bluster}}

{% if site.bluster > 0 %}
##### £{{page.cart_price}} &nbsp; {{site.icon}}[Add to cart](/cart#{{page.cart_itemid}})
{% else %}
{% include outofstock.md %}
{% endif %}