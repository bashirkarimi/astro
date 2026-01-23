---
title: "Performance & Delivery"
description: "A beginner-friendly introduction to Astro and why it’s different from other frameworks."
pubDate: 2025-01-05
author: "Alex Morgan"
tags: ["astro", "performance"]
draft: false
slug: "performance-and-delivery"
image: "../../images/performance-optimization-metrics.jpg"
---


## Performance & Delivery

### Markdown

- Zero runtime requests
- Static HTML
- Fastest possible TTFB
- No hydration cost

### CMS

Two modes:

### Build-time fetch

```tsx
const posts =await client.fetch(...)

```

- Still static
- Slower builds
- Good SEO

### Runtime fetch

- Needed for previews
- Needed for personalization
- Requires caching strategy