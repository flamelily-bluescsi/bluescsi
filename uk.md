---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

{% if page.tag contains "uk" %}

## [{{page.cart_name}}]({{page.url}}) 

#### {{page.cart_description}} 

#### £{{page.cart_price}} 

### [Add to cart](/cart#{{page.cart_itemid}}) 

{% endif %}