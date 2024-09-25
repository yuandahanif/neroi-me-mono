import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "~/server/auth";
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

export async function DELETE(request: NextRequest) {
  try {
    await getServerSession(authOptions);
    const id = request.nextUrl.searchParams.get("projectId") ?? "";
    await prisma.project.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        message: "Project deleted",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to delete project",
      },
      {
        status: 500,
      }
    );
  }
}
