"use server";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";
import { revalidatePath } from "next/cache";

const mediaSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  alt: z.string(),
  description: z.string(),
  isNsfw: z.string().optional(),
  isPubliclyVisible: z.string().optional(),
  key: z.string().optional(),
  file_key: z.string().optional(),
});

export default async function updateMedia(formData: FormData) {
  try {
    const data = mediaSchema.parse({
      id: formData.get("id")?.toString(),
      title: formData.get("title")?.toString(),
      alt: formData.get("alt")?.toString(),
      description: formData.get("description")?.toString(),
      isNsfw: formData.get("is-nfsw")?.toString(),
      isPubliclyVisible: formData.get("is-publicly-visible")?.toString(),
      file_key: formData.get("file_key")?.toString(),
    });

    if (data.file_key) {
      await prisma.media.create({
        data: {
          title: data.title,
          isNsfw: data.isNsfw == "on",
          visibility: data.isPubliclyVisible == "on" ? "PUBLIC" : "PRIVATE",
          alt: data.alt,
          description: data.description,
          File: {
            connect: {
              key: data.file_key,
            },
          },
        },
      });

      revalidatePath(`/admin/media`);
      return;
    }

    await prisma.media.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        isNsfw: data.isNsfw == "on",
        visibility: data.isPubliclyVisible == "on" ? "PUBLIC" : "PRIVATE",
        alt: data.alt,
        description: data.description,
      },
    });

    revalidatePath(`/admin/media`);
  } catch (error) {
    throw error;
  }
}
