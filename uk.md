---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
note: true
---
&#9940; PLEASE DON'T PURCHASE (any BlueSCSI Desktop or DB25 V2) IF YOU CANNOT WAIT AT LEAST 1 WEEK FOR DISPATCH. Apologies, but Chinese New Year has not helped. Powerbook V2 and all V1 are still available and IN Stock &#9940;

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
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'soonuk'" %}

##### 🇬🇧 COMING SOON 🇬🇧

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlistsoon.md %}
</div>
	  {% endfor %}
</div>
</div>