---
layout: default
note: true
permalink: /bluescsi
---

##### NEW for 2026 &#127881; - BlueSCSI Ultra and Ultra Wide - All our prices include delivery cost, just select your region from the dropdown

The BlueSCSI team have [announced](https://bluescsi.com/ultra){:target="_blank"} two new versions of BlueSCSI: [Ultra](#new----bluescsi-ultra-versions---preorder-only---delivery-included-in-the-price) and [Ultra Wide.](#new----bluescsi-ultra-versions---preorder-only---delivery-included-in-the-price) These new models support faster ultra wide SCSI connections to better support more high end workstations and SCSI cards. These will begin as <b>PREORDER PRODUCTS</b> and will dispatch around the <b>end of January 2026.</b> Preorders will be sent immediately once stock arrives, then once these are dispatched we will remove the preorder info/notes and dispatch will return to the normal 2 working days.

[Desktop V2](#bluescsi-desktop-50-pin-versions) and [Ultra products](#new----bluescsi-ultra-versions---preorder-only---delivery-included-in-the-price) support the Initiator Mode to copy data from your SCSI drive without needing a "Host Device" or computer. See [this DOC](https://bluescsi.com/docs/Initiator-Mode){:target="_blank"} for more info.

Please click on the blue title below to view more information on the product page, and photos of the product. You can "Add to cart" from these product pages. Our prices <b>include</b> Royal Mail delivery and you will receive a dispatch email. We are a registered distributor for the BlueSCSI, and the project creators will get a share of every purchase. If you are specifically looking for the <b>older BlueSCSI V1</b> that uses a bluepill rather than pico, please use our [Contact Form](/contact) as we may have some available to purchase. Click the buttons below to view both the V1 and V2 Github pages and for detailed documentation and kit Assembly Instructions.
<p class="lead text-center">
    <a href="https://github.com/erichelgeson/BlueSCSI" target="_blank" class="btn btn-lg btn-primary">V1 Github</a>&nbsp;<a href="https://github.com/BlueSCSI/BlueSCSI-v2" target="_blank" class="btn btn-lg btn-primary">V2 Github</a>&nbsp;<a href="https://bluescsi.com/docs/" target="_blank" class="btn btn-lg btn-primary">Documentation</a>
</p>
<hr>

###### NEW &#127881; - BlueSCSI Ultra versions - PREORDER ONLY - Delivery Included in the price
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'ultra'" %}
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include itemblurb.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

###### BlueSCSI Desktop 50 pin versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'deskv2'" %}
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include itemblurb.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

###### BlueSCSI DB25 External versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'db25v2'" %}
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include itemblurb.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

###### BlueSCSI Powerbook Laptop versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pbv2'" %}
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-6" markdown="1">
{% include itemblurb.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>

##### 3D Prints (for purchase with a BlueSCSI)

Visit the [3D Print Page](/print) to add a BlueSCSI mount for your device.