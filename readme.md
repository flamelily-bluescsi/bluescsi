# Our eCommerce Site Using Jekyll

 This is a simple eCommerce platform with PayPal as a payment gateway.

#### [See it in action!](https://shop.flamelily.co.uk)

## Product Pages

The eCommerce site here leverages some of the built-in features of Jekyll. The intent here was to keep it simple. Each product has its own page with a custom set of headers:

* *cart_itemid* -- the item id for the product. This is used by the scripts and PayPal to identify the item.

* *cart_name* -- the displayed name of the product. This will show up in PayPal and in the shopping cart.

* *cart_description* -- the displayed description of the product for the cart.

* *cart_price* -- The product's price. (Currently, this only supports single currency.)

* *cart_image* -- A url to the image of the product. This is optional and is not used by the cart or PayPal


````
---
layout: page
title: Development Headphones
cart_itemid: devheadphones
cart_name: "Development Headphones"
cart_description: "Drown out distractions!"
cart_price: 23
cart_image: "assets/headphones-3683983_1280.jpg"
---

## Less_Distractions == Better_Code

![{{page.cart_description}}]({{page.cart_image}})

No developer likes to be interrupted when they are deep in thought. Now, you can tune out the world and focus on what really matters!

* Ergonomic design
* Crisp sound
* Noise canceling technology.

## ${{page.cart_price}}

## [Add to cart!](/cart#{{page.cart_itemid}})

````

## Product Links

Every product has two links: one to its product page and one to add the product to the cart. 

The product page is simply the URL created by Jekyll to the product, and follows the Jekyll conventions. For instance, the URL for a page in the site's root called `headphones.md` will be `https://example.com/headphones.html` or relatively `/headphones.html`. 

The add to cart link uses the `cart_itemid` property for the page. From the sample code above, the `cart_itemid` property's value is `devheadphones`. The link from this then would be `https://example.com/cart#devheadphones` or relatively at `/cart#devheadphones`.

## Needed Files

#### catalog.txt
 
When the site is created, the site generates a javascript file called `catalog.js` in the `assets` folder. `catalog.js` is used by the cart page and the checkout page. This uses a Jekyll permalink to specify the output.

#### cart.md

`cart.md` provides a permalink at `/cart` to enable adding items to the cart. 

#### checkout.md

`checkout.md` provides a permalink at `/checkout` to enable the checkout experience. `checkout.md` contains a reference to the PayPal JavaScript SDK

`<script src="https://www.paypal.com/sdk/js?client-id=INSERT_PAYPAL_CLIENT_ID_HERE"></script>`

**This will will need to be updated with your PayPal application ID. You can create and retrieve this from the PayPal developer's portal. See instructions [Here](https://developer.paypal.com/docs/business/get-started/) on how to obtain this.**

#### cart.js and checkout.js

This two files, located in the `assets` folder contain the code for maintaining the cart and interacting with the checkout experience. We have added a % discount feature for multiple purchases. 

## Generating a Catalog Page

The `uk.md` in this repository has a sample for how to generate a single page that has all of your items on the page. 