---
layout: default
note: false
permalink: /amiga
---

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'amiga'" %}

<div class="container">

<u>🇬🇧 Amiga Products 🇬🇧</u>
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include list3dprint.md %}
</div>
	  {% endfor %}
</div>
</div>