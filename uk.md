---
layout: default
note: true
permalink: /uk
---

###### 🇬🇧 This page is for UK Buyers ONLY - Please visit the <a href="/eu">EU Page</a> if buying from outside the UK 🇬🇧
{% include region.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'ukv1'" %}
##### 🇬🇧 Version 1 - Bluepill 🇬🇧

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

##### 🇬🇧 Version 2 - Pico 🇬🇧
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'deskukv2'" %}
###### Desktop 50 pin versions
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'db25ukv2'" %}

###### DB25 External versions
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pbukv2'" %}

###### Powerbook Laptop versions
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

##### 3D Prints (for purchase with a BlueSCSI)

Visit the [3D Print Page](/3dprints) showing all images and purchase links.

[3D Print Information Page](/print) has links to purchase prints separately, without BlueSCSI's.