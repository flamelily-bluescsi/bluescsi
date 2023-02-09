---
layout: default
note: true
permalink: /eu
---
&#9940; ORDERS TAKE 1 WORKING DAY FOR DISPATCH &#9940;

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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'euv2'" %}

##### 🇪🇺 NEW - Version 2 🇪🇺

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

##### 🇪🇺 3D Prints 🇪🇺

[3D Print Information Page](/print)