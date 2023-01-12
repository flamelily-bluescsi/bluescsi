---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

##### BlueSCSI to SD provides a convenient way to use a MicroSD card as a hard drive in your Vintage Macintosh! This device should work on other vintage computers with SCSI, but we unfortunately don't have all devices to check. If you are able to confirm compatibility with your own device please let us know in the BlueSCSI discord server here → Discord Server. Click the button below to view the Github page for more info on this device, compatibility and assembly instructions. You can connect with me on Twitter, link in footer. This project is [available on GitHub](https://github.com/erichelgeson/BlueSCSI)!

            <p class="lead">
              <a href="https://github.com/erichelgeson/BlueSCSI" target="_blank" class="btn btn-lg btn-default">Github</a>
            </p>
            
{% assign catalog_items = site.pages |  where_exp:"item", "item.cart_itemid" %}
{% for page in catalog_items %}

# [{{page.cart_name}}]({{page.url}}) 

#### {{page.cart_description}} 

### £{{page.cart_price}} 

### [Add to cart](/cart#{{page.cart_itemid}}) 

{% endfor %}
