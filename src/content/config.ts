import { defineCollection, z } from "astro:content";

export const collections = {
  blogs: defineCollection({
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false).optional(),
        slug: z.string().optional(),
        image: image().optional(),
      }),
  }),
  docs: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      technology: z.string(),
      category: z.string(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
      lastUpdated: z.coerce.date().optional(), // Changed from z.date() to z.coerce.date()
      authors: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      relatedDocs: z.array(z.string()).optional(),
    }),
  }),
};
