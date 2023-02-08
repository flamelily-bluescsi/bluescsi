---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
note: true
permalink: /uk
---
&#9940; PLEASE EXPECT A WAIT AROUND 3 DAYS FOR DISPATCH &#9940;

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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'ukv2'" %}

##### 🇬🇧 NEW - Version 2 🇬🇧

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

##### 🇬🇧 3D Prints 🇬🇧

[3D Print Information Page](/print)