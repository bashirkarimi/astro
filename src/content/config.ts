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
};
