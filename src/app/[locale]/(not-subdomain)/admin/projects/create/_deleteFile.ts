"use server";
import { revalidatePath } from "next/cache";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";

const deleteFileSchema = z.object({ id: z.string() });

export default async function deleteFileAction(id: string) {
  try {
    const data = deleteFileSchema.parse({ id });

    const res = await prisma.file.delete({
      where: {
        id: data.id,
      },
    });

    return revalidatePath("/admin/projects/create");
  } catch (error) {
    throw error;
  }
}
