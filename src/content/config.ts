import { defineCollection, z } from "astro:content";

export const collections = {
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
      slug: z.string().optional(),
    }),
  }),
};
