---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
note: true
---

BlueSCSI provides a convenient way to use a MicroSD card as a hard drive in your Vintage Computer! This device should work on most vintage computers with SCSI, but unfortunately some devices might not have been tested. If you are able to confirm compatibility with your own device please let us know in the BlueSCSI discord server here → [Discord Server](https://discord.gg/kx2Kybx2mk){:target="_blank"} Click the button below to view the Github page for more info on this device, compatibility and assembly instructions on the Wiki. You can connect with us on Twitter, link in footer.

<p class="lead text-center">
    <a href="https://github.com/erichelgeson/BlueSCSI" target="_blank" class="btn btn-lg btn-default">Github</a>
</p>
            
{% assign catalog_items = site.pages |  where_exp:"item", "item.cart_itemid" %}
{% for page in catalog_items %}

#### [{{page.cart_name}}]({{page.url}}) 

##### {{page.cart_description}} 

#### £{{page.cart_price}} 

### [Add to cart](/cart#{{page.cart_itemid}}) 

{% endfor %}