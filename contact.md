---
layout: default
permalink: /contact
title: Contact
---

<!-- form HTML -->
<form action="https://formspree.io/f/mzbqzzod"
  method="POST">
  <div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" name="fullname" id="name">
</div>
  <div class="mb-3">
    <label for="Email" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" required>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  	<div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <textarea class="form-control" name="message" id="message" rows="3"></textarea>
	</div>
  <button type="submit" class="btn btn-primary">Send</button>
</form>