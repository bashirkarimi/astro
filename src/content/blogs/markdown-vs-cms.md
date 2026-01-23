---
title: "Markdown vs Headless CMS"
description: "Choosing between Markdown files and a CMS like Sanity or Contentful."
pubDate: 2025-01-10
author: "Jamie Lee"
tags: ["markdown", "cms", "architecture"]
draft: false
slug: "markdown-vs-headless-cms"
image: "../../images/ui-ux-design-interface.png"
---

## The core question

Should you store content as **Markdown files** or in a **Headless CMS**?

The answer depends on **who writes content** and **how often it changes**.

# Markdown vs Headless CMS (Sanity, Contentful)

## High-level positioning

| Aspect | Markdown (.md / .mdx) | Headless CMS (Sanity / Contentful) |
| --- | --- | --- |
| Primary audience | Developers | Non-technical editors |
| Content location | Git repo | External service |
| Update model | Git commit → deploy | Live publishing |
| Build model | Build-time | Build-time or runtime |
| Infra cost | Free | Paid (at scale) |
| Complexity | Very low | Medium → high |
| SEO | Excellent | Excellent |
| Best for | Blogs, docs, marketing | Editorial, product content |

---

## Authoring Experience

### Markdown

✅ Pros:

- GitHub-native
- Easy PR reviews
- No CMS UI needed
- Offline editing
- Perfect for dev teams

❌ Cons:

- Not editor-friendly
- No previews without tooling
- No role-based permissions

### Sanity / Contentful

✅ Pros:

- Visual editor
- Rich previews
- Permissions & roles
- Structured relationships
- Image pipelines

❌ Cons:

- Setup time
- Learning curve
- Vendor lock-in

**Rule of thumb**

> If developers write content → Markdown
> 
> 
> If **editors write content** → CMS
>