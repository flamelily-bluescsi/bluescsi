---
layout: default
permalink: /contact
title: Contact
---

<!-- form HTML -->
<form action="https://formspree.io/f/mzbqzzod"
  method="POST">
  <div class="mb-3">
  <label name="fullname" for="name" class="form-label">Name</label>
  <input type="text" class="form-control" id="name">
</div>
  <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  	<div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <textarea class="form-control" id="message" rows="3"></textarea>
	</div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>