import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    status: z.string(),
    category: z.enum(["Academic", "Personal", "Misc"]),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    githubLink: z.string().optional(),
    itchioLink: z.string().optional(),
    externalLink: z.string().optional(),
    highlighted: z.boolean().default(false),
  }),
});

export const collections = { projects };
