---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
note: true
permalink: /eu
---
&#9940; PLEASE EXPECT A WAIT AROUND 5 DAYS FOR DISPATCH (any V2 BlueSCSI Desktop or V2 DB25). Powerbook V2 and all V1 are still available and IN Stock. &#9940;

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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'sooneu'" %}

##### 🇪🇺 COMING SOON 🇪🇺

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlistsoon.md %}
</div>
	  {% endfor %}
</div>
</div>