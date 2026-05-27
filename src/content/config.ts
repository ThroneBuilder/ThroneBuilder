import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    coverImage: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
