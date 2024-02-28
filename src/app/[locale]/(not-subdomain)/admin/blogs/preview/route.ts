"use server";

import { serialize } from "next-mdx-remote/serialize";
import { auth } from "~/server/auth";

export async function POST(request: Request) {
  try {
    await auth();
    const mdx = await request.text();
    const source = await serialize(mdx);
    return Response.json({ ...source });
  } catch (error) {
    throw Response.error();
  }
}
