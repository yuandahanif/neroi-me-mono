import { NextResponse } from "next/server";
import { prisma } from "~/server/db";

export async function GET(request: Request) {
  try {
    const media = await prisma.file.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        Media: {
          none: {},
        },
      },
    });

    return NextResponse.json(
      media,
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch media",
      },
      {
        status: 500,
      }
    );
  }
}
