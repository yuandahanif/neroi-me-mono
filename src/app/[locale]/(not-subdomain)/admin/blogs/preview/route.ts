"use server";

import { serialize } from "next-mdx-remote/serialize";
import remarkUnwrapImages from "remark-unwrap-images";
import { auth } from "~/server/auth";

export async function POST(request: Request) {
  try {
    await auth();
    const mdx = await request.text();
    const source = await serialize(mdx, {
      mdxOptions: { remarkPlugins: [remarkUnwrapImages] },
    });
    return Response.json({ ...source });
  } catch (error) {
    console.error(error);
    throw Response.error();
  }
}
