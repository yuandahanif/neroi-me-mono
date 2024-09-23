"use server";
import "server-only";

import z from "zod";
import { prisma } from "~/server/db";
import { Project_status } from "@prisma/client";
import { redirect } from "next/navigation";

const createProjectScheme = z.object({
  title: z.string(),
  status: z.string(),
  files: z.array(z.string()),
  description: z.string(),
  url: z.string(),
});

export default async function createProjectAction(formData: FormData) {
  try {
    const files = JSON.parse(
      formData.get("files")?.toString() || "[]"
    ) as string[];

    const rawFormData = {
      title: formData.get("title")?.toString(),
      status: formData.get("status")?.toString(),
      description: formData.get("description")?.toString(),
      url: formData.get("url")?.toString(),
      files: files,
    };

    const data = createProjectScheme.parse(rawFormData);

    await prisma.project.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status as Project_status,
        url: data.url,
        File: {
          connect: data.files.map((id) => ({ id })),
        },
      },
    });

    return redirect(`/admin/projects`);
  } catch (error) {
    throw error;
  }
}
