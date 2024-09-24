import { NextRequest, NextResponse } from "next/server";
import { prisma } from "~/server/db";

export async function GET(request: NextRequest) {
  try {
    const searchParam = request.nextUrl.searchParams;
    if (searchParam.has("projectId")) {
      const projectId = searchParam.get("projectId") ?? "";

      const project = await prisma.project.findUnique({
        where: {
          id: projectId,
        },
        include: {
          File: true,
        },
      });

      if (!project) {
        return NextResponse.json(
          {
            error: "Project not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(project, {
        status: 200,
      });
    }

    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(projects, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch projects",
      },
      {
        status: 500,
      }
    );
  }
}
