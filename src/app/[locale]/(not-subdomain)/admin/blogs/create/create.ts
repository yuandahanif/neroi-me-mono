"use server";
import "server-only";

import z from "zod";
import slugify from "slugify";
import { prisma } from "~/server/db";

const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  isDraft: z.string().optional(),
});

export default async function createBlogAction(formData: FormData) {
  try {
    const rawTags = JSON.parse(
      formData.get("tags")?.toString() || "[]"
    ) as string[];

    const rawFormData = {
      title: formData.get("title")?.toString(),
      content: formData.get("content")?.toString(),
      description: formData.get("description")?.toString(),
      isDraft: formData.get("blog-is-draft")?.toString(),
      tags: rawTags,
    };

    const data = createBlogSchema.parse(rawFormData);

    const ret = await prisma.blog.create({
      data: {
        slug: slugify(data.title, { lower: true, strict: true, trim: true }),
        title: data.title,
        content: data.content,
        description: data.description,
        isDraft: data.isDraft === "on",
        Tags: {
          connectOrCreate: data.tags.map((tag) => ({
            where: { id: tag },
            create: { title: tag },
          })),
        },
      },
    });

    return ret;
  } catch (error) {
    throw error;
  }
}
