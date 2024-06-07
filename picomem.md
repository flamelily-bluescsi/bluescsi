---
layout: default
note: false
permalink: /picomem
---
######  PicoMEM Products for UK and the Rest of the World - COMING SOON

We are in the process of getting stock ready so please be patient. PRE-ORDERS will start when we have a confirmation of shipping from the PCB factory and this will usually be around 2 weeks before possible dispatch. Thanks for understanding. Make sure you choose the <b>UK option ONLY</b> if your delivery address is in the UK. Our prices <b>include</b> delivery to simplify checkout and you will receive a dispatch email via Paypal.

We are now a registered distributor for the [PicoMEM](https://github.com/FreddyVRetro/ISA-PicoMEM){:target="_blank"}, and the project creator (Freddy Vetele) will get a share of every purchase.

The PicoMEM is an 8-bit ISA expansion card which aims to be an all-in-one solution for ISA-based vintage PCs. It is designed as a way to run Emulated ISA boards on a real PC. It connects the full 8Bit Memory and I/O Bus plus an IRQ to a Raspberry Pi Pico, through a multiplexor/Level shifter chip. It also has a 8Mbyte PSRAM connected in SPI and a MicroSD Slot. The PicoMEM Board can be seen as both a working PC extension board as well as a development platform.

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pmuk'" %}
<u>🇬🇧 PicoMEM Products for the UK 🇬🇧</u>

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>
<hr>


{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pmrow'" %}
<u>🇪🇺🌍 PicoMEM Products for the Rest of the World 🇪🇺🌍</u>
<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>