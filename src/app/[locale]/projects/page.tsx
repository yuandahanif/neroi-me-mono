import { type Metadata } from "next";
import { prisma } from "~/server/db";
import Link from "next/link";
import MainNavigation from "~/components/navigation/main.navigation";
import ScrollToProject from "./_scrollToProject";
import { ProjectListContainer } from "./_projectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Some of my projects, experiments, and things that I've been working on.",
};

const ProjectsPage = async () => {
  const projects = prisma.project.findMany({
    orderBy: { updatedAt: "desc" },
    select: {
      id: true,
      title: true,
    },
  });

  return (
    <div
      className={`flex max-h-svh grow flex-col items-center justify-start py-10`}
    >
      <h1 className="text-5xl">{"<Projects/>"}</h1>
      <MainNavigation />

      <div className="flex h-full w-full max-w-screen-lg flex-grow flex-col gap-8">
        <div className="prose prose-invert mx-auto text-center">
          <h3 className="text-center">
            Beberapa project yang ku kerjakan, eksperimen, dan hal-hal yang
            mungkin menarik untuk diceritakan.
          </h3>
        </div>

        <ScrollToProject />

        <ProjectListContainer projects={await projects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
