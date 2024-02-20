"use server";

import { serialize } from "next-mdx-remote/serialize";

export async function POST(request: Request) {
  try {
    const mdx = await request.text();
    const source = await serialize(mdx);
    return Response.json({ ...source });
  } catch (error) {
    throw Response.error();
  }
}
