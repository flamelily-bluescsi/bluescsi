---
layout: default
note: true
permalink: /picomem
---
######  PicoMEM Products for UK and the Rest of the World - [PicoMEM2 IN STOCK](/picomem2)

Our prices <b>include</b> delivery to simplify checkout and you will receive a dispatch email. Make sure you choose the correct delivery region from the dropdown.

We are the registered UK distributor for the [PicoMEM](https://github.com/FreddyVRetro/ISA-PicoMEM){:target="_blank"}, and the project creator (Freddy V) will get a share of every purchase.

The [PicoMEM 2](https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main#picomem-2){:target="_blank"} is an hardware and firmware update on the original PicoMEM. It uses the Rasperry Pi Pico 2 to give it more grunt and features. See the feature difference on the PicoMEM 2 page [HERE](/picomem2)

The PicoMEM is an 8-bit ISA expansion card which aims to be an all-in-one solution for ISA-based vintage PCs. It is designed as a way to run Emulated ISA boards on a real PC. It connects the full 8Bit Memory and I/O Bus plus an IRQ to a Raspberry Pi Pico, through a multiplexor/Level shifter chip. It also has a 8Mbyte PSRAM connected in SPI and a MicroSD Slot. The PicoMEM Board can be seen as both a working PC extension board as well as a development platform.

While the PicoMEM (and PicoMEM 2) is in an advanced and functioning state, please understand it is still a work in progress.  There are several caveats and known issues on various systems. Please visit the Github links below before ordering, so you can view the compatibility list as it is being updated regularly. The Tandy 1000 series of machines is NOW compatible.

<p class="lead text-center">
    <a href="https://github.com/FreddyVRetro/ISA-PicoMEM" target="_blank" class="btn btn-lg btn-primary">PicoMEM Github</a>&nbsp;<a href="https://github.com/FreddyVRetro/ISA-PicoMEM/tree/main#picomem-2" target="_blank" class="btn btn-lg btn-primary">PicoMEM 2 Github</a>
</p>
<hr>

{% assign cat_items = site.pages |  where_exp:"page", "page.tags contains 'pm'" %}
<u>🌍🇬🇧 PicoMEM Products 🇬🇧🌍</u>

<div class="container">
<div class="row">
	{% for page in cat_items %}
<div class="col-md-4" markdown="1">
{% include listnoprice.md %}
</div>
	  {% endfor %}
</div>
</div>