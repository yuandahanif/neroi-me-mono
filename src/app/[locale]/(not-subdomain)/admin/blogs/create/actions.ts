"use server";

import z from "zod";
import { prisma } from "~/server/db";

export const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
});

export default async function createBlogAction(formData: FormData) {
  const rawFormData = {
    title: formData.get("title"),
    content: formData.get("content"),
    tags: formData.get("tags"),
  };
  console.log("Action ~ rawFormData:", rawFormData);

  // mutate data
  // revalidate cache
}
