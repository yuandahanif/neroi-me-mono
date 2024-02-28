"use server";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";
import { redirect } from "next/navigation";

const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  isDraft: z.string().optional(),
});

export default async function updateBlogAction(formData: FormData) {
  try {
    const rawTags = JSON.parse(
      formData.get("tags")?.toString() || "[]"
    ) as string[];

    const rawFormData = {
      id: formData.get("id")?.toString(),
      title: formData.get("title")?.toString(),
      content: formData.get("content")?.toString(),
      description: formData.get("description")?.toString(),
      isDraft: formData.get("blog-is-draft")?.toString(),
      tags: rawTags,
    };

    const data = updateBlogSchema.parse(rawFormData);

    const ret = await prisma.blog.update({
      where: { id: data.id },
      data: {
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

    redirect(`/admin/blogs/${ret.slug}`);
  } catch (error) {
    throw error;
  }
}
