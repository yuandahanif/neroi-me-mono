"use server";
import "server-only";

import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { auth } from "~/server/auth";
import { prisma } from "~/server/db";

export async function deleteMediaAction(url: string) {
  try {
    await auth();
    await del(url);

    await prisma.media.delete({
      where: {
        url: url,
      },
    });

    revalidatePath(`/admin/media`);
  } catch (error) {
    throw error;
  }
}
