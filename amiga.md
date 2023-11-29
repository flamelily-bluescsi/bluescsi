---
layout: default
note: true
permalink: /amiga
---
&#9940; DISPATCH OF CURRENT ORDERS WILL BE 1 WORKING DAY &#9940;

{% include region.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'amiga'" %}
##### 🇬🇧 Amiga Products 🇬🇧

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include regionlist.md %}
</div>
	  {% endfor %}
</div>
</div>