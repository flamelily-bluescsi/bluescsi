---
title: 3D Prints for sale
layout: default
note: false
permalink: /print
---
<div class="container">
<div class="row" markdown="1">

##### 3D Print cases and mounts for your BlueSCSI
We now have a wide range of 3D Mounts/Cases for your BlueSCSI. Please make sure you add them to your Cart before checkout if you require one. We now produce high quality PLA prints using a Prusa printer and Polyterra PLA. We charge a small fee for these prints, but you are welcome to print your own, see [here](https://bluescsi.com/docs/Accessories). We are licensed to sell mounts by PotatoFi which can be found on Printables here → [PotatoFi](https://www.printables.com/@PotatoFi){:target="_blank"}

Please choose the correct option for either purchasing these 3D prints with a BlueSCSI or without.

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}
<div class="container">
<div class="row">
  {% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
    {% endfor %}
</div>
</div>
</div>