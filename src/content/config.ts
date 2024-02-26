import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: image(),
        tags: z.array(z.string()),
        tech: z.array(z.string()),
        fw: z.string()
    }),
});

export const collections = {
    projects: projectsCollection
}