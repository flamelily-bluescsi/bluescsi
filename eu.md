---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

{% include region.md %}

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'eu'" %}
{% for page in cat_items %}

{% include regionlist.md %}

{% endfor %}