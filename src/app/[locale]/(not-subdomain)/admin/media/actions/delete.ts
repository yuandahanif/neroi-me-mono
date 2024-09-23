"use server";
import "server-only";

import { revalidatePath } from "next/cache";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { auth } from "~/server/auth";
import { prisma } from "~/server/db";
import S3 from "~/server/s3";
import { env } from "~/env";

export async function deleteMediaAction({
  file_key: key,
  media_id: id,
}: {
  media_id: string;
  file_key: string;
}) {
  try {
    await auth();

    await S3.send(
      new DeleteObjectCommand({ Key: key, Bucket: env.CLOUDFLARE_R2_BUCKET })
    );

    await prisma.media.delete({
      where: {
        id,
      },
      include: {
        File: true,
      },
    });

    revalidatePath(`/admin/media`);
  } catch (error) {
    throw error;
  }
}
