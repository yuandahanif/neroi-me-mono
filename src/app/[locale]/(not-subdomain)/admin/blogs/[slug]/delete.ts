"use server";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";
import { redirect } from "next/navigation";

const deleteBlogSchema = z.object({ id: z.string() });

export default async function deleteBlogAction(id: string) {
  try {
    const data = deleteBlogSchema.parse({ id });

    await prisma.blog.delete({
      where: {
        id: data.id,
      },
    });

    redirect(`/admin/blogs`);
  } catch (error) {
    throw error;
  }
}
