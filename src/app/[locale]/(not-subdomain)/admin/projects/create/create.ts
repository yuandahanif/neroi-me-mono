"use server";
import "server-only";

import z from "zod";
import slugify from "slugify";
import { prisma } from "~/server/db";
import { Project_status } from "@prisma/client";
import { project_status_label } from "~/data/project_status_enum";

const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  isDraft: z.string().optional(),
});

export default async function createProjectAction(formData: FormData) {
  try {
    const rawTags = JSON.parse(
      formData.get("tags")?.toString() || "[]"
    ) as string[];

    const rawFormData = {
      title: formData.get("title")?.toString(),
      content: formData.get("content")?.toString(),
      description: formData.get("description")?.toString(),
      isDraft: formData.get("blog-is-draft")?.toString(),
      tags: rawTags,
    };

    const data = createBlogSchema.parse(rawFormData);

    const status_label = project_status_label.FUTURE;

    const ret = await prisma.project.create({
      data: {
        title: "",
        description: "",
        status: Project_status.FUTURE,
        File: { connect: { id: "" } },
        url: "",
      },
    });

    return ret;
  } catch (error) {
    throw error;
  }
}
