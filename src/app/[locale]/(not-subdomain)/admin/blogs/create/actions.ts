"use server";

import z from "zod";
import { prisma } from "~/server/db";

export const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
});

export default async function createBlogAction(formData: FormData) {
  try {
    const rawFormData = {
      title: formData.get("title"),
      content: formData.get("content"),
      tags: formData.get("tags"),
    };
    console.log("Action ~ rawFormData:", rawFormData);

    const data = createBlogSchema.parse(rawFormData);

    const tags = data.tags.map((tag) => ({ id: tag }));
    const ret = await prisma.blog.findMany();

    return ret;

    // mutate data
    // revalidate cache
  } catch (error) {
    throw error;
  }
}
