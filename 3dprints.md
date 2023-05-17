---
layout: default
note: true
permalink: /3dprints
---
&#9940; ORDERS THESE ONLY WITH A BLUESCSI &#9940;

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}
##### 3D Print cases and mounts
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include list3dprint.md %}
</div>
	  {% endfor %}
</div>
</div>
<br>
[3D Print Information Page](/print) has links to purchase prints separately, without BlueSCSI's.