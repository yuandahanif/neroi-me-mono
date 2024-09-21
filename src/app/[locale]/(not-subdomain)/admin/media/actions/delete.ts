"use server";
import "server-only";

import { revalidatePath } from "next/cache";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { auth } from "~/server/auth";
import { prisma } from "~/server/db";
import S3 from "~/server/s3";
import { env } from "~/env.mjs";

export async function deleteMediaAction(key: string) {
  try {
    await auth();

    await S3.send(
      new DeleteObjectCommand({ Key: key, Bucket: env.CLOUDFLARE_R2_BUCKET })
    );

    await prisma.media.delete({
      where: {
        id: key,
      },
    });

    revalidatePath(`/admin/media`);
  } catch (error) {
    throw error;
  }
}
