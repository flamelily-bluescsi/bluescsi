---
layout: default
note: true
permalink: /eu
---
###### 🇪🇺🇺🇸 This page is for Buyers from the Rest of the World - Please visit the <a href="/uk">UK Page</a> if buying from the UK 🇺🇸🇪🇺

<hr>

###### We are on &#128747; HOLIDAY &#128748; from 23rd April - 9th May so DISPATCH will be delayed within these dates. Please be patient.

<hr>

{% include regioneu.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'euv1'" %}
##### 🇪🇺🇺🇸 Version 1 - Bluepill (Kits only - Once stock is sold we will remove) 🇺🇸🇪🇺

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

##### 🇪🇺🇺🇸 Version 2 - Pico 🇺🇸🇪🇺
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'deskeuv2'" %}
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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'db25euv2'" %}

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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pbeuv2'" %}

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