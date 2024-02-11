import { defineCollection, reference, z } from "astro:content";

const newsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    thumbnail: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const ageGroupsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      age: z.string(),
      order: z.number(),
      image: image(),
      colour: z.string(),
    }),
});

const sectionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    "age-group": reference("ageGroups"),
    meeting: z.object({
      day: z.string(),
      start: z.string(),
      end: z.string(),
    }),
    tagline: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  sections: sectionsCollection,
  ageGroups: ageGroupsCollection,
};
