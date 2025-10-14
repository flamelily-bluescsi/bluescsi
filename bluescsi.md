---
layout: default
note: true
permalink: /bluescsi
---

###### 🌍🇬🇧 This page shows all V2 BlueSCSI devices we sell. Click on an item title to view more info and purchase options 🇬🇧🌍

The 📘BlueSCSI Desktop V2 allows you to directly connect your vintage SCSI drive and copy data from it without needing a bootable "Host Device" or computer. Image those failing SCSI drives. See [this DOC](https://bluescsi.com/docs/Initiator-Mode){:target="_blank"} for more info. The latest firmware will be flashed to every Pico we send out.

Please click on the Title of each item to view more information about it on the product page, and photos of the product. You can "Add to cart" from these product pages. Our prices <b>include</b> Royal Mail delivery and you will receive a dispatch email. We are a registered distributor for the BlueSCSI, and the project creators will get a share of every purchase. If you are specifically looking for the older BlueSCSI V1 that uses a bluepill rather than pico, please use our [Contact Form](/contact) as we may have some available to purchase. Click the buttons below to view both the V1 and V2 Github pages and for detailed documentation and kit Assembly Instructions.
<p class="lead text-center">
    <a href="https://github.com/erichelgeson/BlueSCSI" target="_blank" class="btn btn-lg btn-primary">V1 Github</a>&nbsp;<a href="https://github.com/BlueSCSI/BlueSCSI-v2" target="_blank" class="btn btn-lg btn-primary">V2 Github</a>&nbsp;<a href="https://bluescsi.com/docs/" target="_blank" class="btn btn-lg btn-primary">Documentation</a>
</p>
<hr>

###### Desktop 50 pin versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'deskukv2'" %}
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

###### DB25 External versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'db25ukv2'" %}
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

###### Powerbook Laptop versions
{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pbukv2'" %}
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

Visit the [3D Print Page](/3dprints) to add a BlueSCSI mount for your device.