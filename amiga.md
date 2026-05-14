---
layout: default
note: false
permalink: /amiga
---

###### If you are looking for Amiga repairs in the UK use our recommended service from [Pure Amiga.](https://www.pureamiga.co.uk/repairs/){:target="_blank"}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'amiga'" %}

<div class="container">

<u>Amiga Products</u>
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>

###### If you are looking for Amiga repairs in the UK use our recommended service from [Pure Amiga.](https://www.pureamiga.co.uk/repairs/){:target="_blank"}