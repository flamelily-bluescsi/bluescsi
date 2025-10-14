---
title: 3D Prints for sale
layout: default
note: false
permalink: /print
---
<div class="container">
<div class="row" markdown="1">

##### 3D Print cases and mounts for your BlueSCSI
We now have a wide range of 3D Mounts/Cases for your BlueSCSI. Please make sure you add them to your Cart before checkout if you require one. We now produce high quality PLA prints using a Prusa printer and Polyterra PLA. We charge a small fee for these prints, but you are welcome to print your own, see [here](https://bluescsi.com/docs/Accessories). We are licensed to sell mounts by PotatoFi which can be found on Printables here → [PotatoFi](https://www.printables.com/@PotatoFi){:target="_blank"}

&#9940; ORDERS THESE ONLY WITH A BLUESCSI &#9940;

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'print'" %}
<div class="container">
<div class="row">
  {% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include list3dprint.md %}
</div>
    {% endfor %}
</div>
</div>

##### Purchasing 3D Prints ONLY
If you ONLY need to purchase a 3D print, as you built a BlueSCSI yourself, we do sell them separately below which show the postage cost. Postage is free if purchased WITH a BlueSCSI. This is more of a service to those without a 3D printer. All these are for the latest PCB revisions. If you need a print for an earlier PCB revision please use our contact form.

This is for worldwide buyers, but please understand we will use Royal Mail standard international shipping, so no tracking is available. Please allow up to 2 weeks for delivery of 3D prints if outside the UK.

<script src="https://www.paypal.com/sdk/js?client-id=BAA1UwyMt5PZyPVDP3S3w-2dZmyOKNDldr7tcA6OLDT7vRyrmAjEgpOxBBVVPPuRgzY1r0afn93Liq4ccQ&components=hosted-buttons&disable-funding=venmo&currency=GBP"></script>
<div id="paypal-container-B34PV8F94KUKW"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "B34PV8F94KUKW",
  }).render("#paypal-container-B34PV8F94KUKW")
</script>
</div>
</div>