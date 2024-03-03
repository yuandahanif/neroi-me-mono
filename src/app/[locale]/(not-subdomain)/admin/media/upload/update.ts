"use server";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";
import { revalidatePath } from "next/cache";

const mediaSchema = z.object({
  title: z.string(),
  alt: z.string(),
  description: z.string(),
  isNsfw: z.string().optional(),
  url: z.string(),
});

export default async function updateMedia(formData: FormData) {
  try {
    const data = mediaSchema.parse({
      title: formData.get("title")?.toString(),
      alt: formData.get("alt")?.toString(),
      description: formData.get("description")?.toString(),
      isNsfw: formData.get("is-nfsw")?.toString(),
      url: formData.get("url")?.toString(),
    });

    await prisma.media.update({
      where: {
        url: data.url,
      },
      data: {
        title: data.title,
        isNsfw: data.isNsfw == "on",
        alt: data.alt,
        description: data.description,
      },
    });

    revalidatePath(`/admin/media`);
  } catch (error) {
    throw error;
  }
}
