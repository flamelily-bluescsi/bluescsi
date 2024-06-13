---
layout: default
note: false
permalink: /3dprints
---
<div class="container">
<div class="row" markdown="1">
&#9940; ORDERS THESE ONLY WITH A BLUESCSI &#9940;

##### 3D Print cases and mounts

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}
</div>
</div>
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include list3dprint.md %}
</div>
	  {% endfor %}
</div>
<a href="/print">3D Print Information Page</a> has buttons to purchase prints separately, without BlueSCSI's.
</div>