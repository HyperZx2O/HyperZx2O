import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    pattern: '**/article.md',
    base: './articles',
    generateId: ({ entry }) => entry.replace(/\/?article\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    publisher: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string(),
    pdf: z.string(),
  }),
});

export const collections = { articles };
