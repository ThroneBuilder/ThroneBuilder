import { defineCollection, z } from 'astro:content';
import { TAG_VALUES } from '../consts';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    coverImage: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    tags: z.array(z.enum(TAG_VALUES)).optional().default([]),
  }),
});

export const collections = { blog };
