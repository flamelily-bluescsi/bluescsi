---
layout: default
note: true
permalink: /uk
---
&#9940; ORDERS TAKE 1 WORKING DAY FOR DISPATCH &#9940;

{% include region.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'ukv1'" %}
##### 🇬🇧 Version 1 🇬🇧

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

##### 🇬🇧 NEW - Version 2 🇬🇧
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

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}

##### 🇬🇧 3D Prints 🇬🇧
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
[3D Print Information Page](/print)