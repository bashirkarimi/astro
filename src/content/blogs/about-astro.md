---
title: "Getting Started with Astro"
description: "A beginner-friendly introduction to Astro and why it’s different from other frameworks."
pubDate: 2025-01-05
author: "Alex Morgan"
tags: ["astro", "javascript", "web"]
draft: false
slug: "getting-started-with-astro"
image: "../../images/api-design-architecture-diagram.jpg"
---

## What is Astro?

Astro is a modern web framework focused on **content-first websites**.  
It lets you build fast websites with **less JavaScript by default**.

### Key ideas behind Astro

- Server-first rendering
- Static HTML by default
- Bring your own UI framework
- Zero JS unless you need it

## Why developers like Astro

Astro feels familiar if you already know:
- HTML
- CSS
- JavaScript

But it removes a lot of complexity found in SPAs.

```js
// Example Astro component
---
const name = "Astro";
---
<h1>Hello {name}</h1>
