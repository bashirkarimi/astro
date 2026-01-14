---
title: "Data Modeling"
description: "A beginner-friendly introduction to Astro and why it’s different from other frameworks."
pubDate: 2025-01-05
author: "Alex Morgan"
tags: ["astro", "data-modeling"]
draft: false
slug: "data-modeling"
image: "../../images/software-testing-code-quality.jpg"
---



## Data Modeling

### Markdown (Astro Content Collections)

```markdown
---
title: "Post title"
author: "Jane"
tags: ["astro", "ssg"]
published: true
---

Content here

```

```tsx
defineCollection({
schema: z.object({
title: z.string(),
tags: z.array(z.string())
  })
})

```

**Characteristics**

- Flat, file-based
- Limited relations
- Compile-time validation
- Simple mental model

---

### CMS (Sanity / Contentful)

```tsx
{
title:string
author:reference(User)
categories:reference(Category[])
seo: {
    title,
    description,
    image
  }
}

```

**Characteristics**

- Deep relationships
- Graph-like content
- Rich blocks (portable text)
- Runtime filtering & queries