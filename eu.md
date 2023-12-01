---
layout: default
note: true
permalink: /eu
---
&#9940; DISPATCH OF ORDERS WILL BE 1 WORKING DAY &#9940;

{% include regioneu.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'euv1'" %}
##### 🇪🇺 Version 1 🇪🇺

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

##### 🇪🇺 NEW - Version 2 🇪🇺
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

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}
##### 🇪🇺 3D Prints (for purchase with a BlueSCSI) 🇪🇺
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>
<br>
[3D Print Information Page](/print) has links to purchase prints separately, without BlueSCSI's.