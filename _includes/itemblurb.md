###### [{{page.cart_name}}]({{page.url}})
{{page.cart_description}}<br>
{% assign base_item = page.cart_itemid | split: "kit" | first %}
<b>From £{{page.cart_price}} - Stock: {{ site[base_item] }}</b>