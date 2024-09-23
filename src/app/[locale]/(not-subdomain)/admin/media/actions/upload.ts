"use server";
import "server-only";

import { PutObjectCommand } from "@aws-sdk/client-s3";

import { prisma } from "~/server/db";
import S3 from "~/server/s3";
import { env } from "~/env.mjs";
import { PATHNAME_MEDIA } from "../_constMedia";

const allowedContentTypes = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/apng",
];

export default async function uploadMedia(form: FormData) {
  try {
    const file = form.get("file") as File;

    if (!file) {
      throw new Error("No file provided");
    }

    if (!allowedContentTypes.includes(file.type.toLowerCase())) {
      throw new Error("Invalid file type");
    }

    const matches = file.name.match(/^(.+)\.([^.]+)$/);

    if (!matches) {
      throw new Error("Invalid file name");
    }

    const uuid = crypto.randomUUID();
    const fileName = matches[1] ?? "";
    const extension = matches[2] ?? "";

    const Key = `${PATHNAME_MEDIA}${fileName.replaceAll(
      " ",
      "_"
    )}-${uuid}.${extension}`;
    const Body = (await file.arrayBuffer()) as Buffer;
    const ContentType = file.type;

    const command = new PutObjectCommand({
      Bucket: env.CLOUDFLARE_R2_BUCKET,
      ACL: "public-read",
      ContentType,
      Body,
      Key,
    });

    await S3.send(command);

    const file_create = await prisma.file.create({
      data: {
        key: Key,
        type: ContentType,
      },
    });

    return file_create;
  } catch (error) {
    throw error;
  }
}
