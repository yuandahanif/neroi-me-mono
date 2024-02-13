"use server";

import { cookies } from "next/headers";
import { prisma } from "~/server/db";

const COOKIE_SECRET = {
  name: "IS_BOTNET",
  value: "JK_THIS_IS_FOR_VISIT_COUNT",
};

export default async function updateBlogVisitCount(blogId: string, IP: string) {
  const cookieStore = cookies();
  const buffer = Buffer.from(IP + COOKIE_SECRET.value + blogId, "utf-8");

  const visitorCookie = cookieStore.has(COOKIE_SECRET.name);
  const hashValue = buffer.toString("base64");

  if (!visitorCookie) {
    cookieStore.set(COOKIE_SECRET);
  } else {
    cookieStore.set(COOKIE_SECRET);
  }

  await prisma.blogVisit.upsert({
    where: {
      id: hashValue,
      OR: [{ hash: hashValue }],
    },
    create: {
      id: hashValue,
      blogId,
      ip_address: IP,
      hash: hashValue,
    },
    update: {
      hash: hashValue,
    },
  });
}
