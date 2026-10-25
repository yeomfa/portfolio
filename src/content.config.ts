import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const shot = (image: () => z.ZodType) =>
  z.object({
    src: image(),
    alt: z.string(),
    caption: z.string(),
    kind: z.enum(['wide', 'phone']).default('wide'),
  });

const proyectos = defineCollection({
  loader: glob({ pattern: '{es,en}/*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** The project's own symbol, in public/logos, shown beside its name. */
      mark: z.string(),
      order: z.number(),
      group: z.enum(['construye', 'emprende', 'ensena']),
      lede: z.string(),
      role: z.string(),
      since: z.string().optional(),
      sinceLabel: z.string().optional(),
      where: z.string(),
      status: z.string(),
      url: z.string().url(),
      urlLabel: z.string(),
      statement: z.string(),
      didTitle: z.string(),
      did: z.array(z.string()).min(2).max(4),
      stack: z.array(z.string()),
      cover: shot(image),
      screens: z.array(shot(image)).default([]),
      note: z.string().optional(),
    }),
});

export const collections = { proyectos };
