import { type Metadata } from "next";

import AdminNavigation from "~/components/navigation/admin.navigation";
import CreateBlogForm from "./form";
import mainBlogContentFont from "~/components/font/mainBlogContent.font";
import { prisma } from "~/server/db";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Just like my purpose, this page is non-existent.",
};

const ProjectDetailPage: React.FC = async () => {
  const media = prisma.media.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      File: {
        select: {
          id: true,
          key: true,
        },
      },
    },
  });

  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Project/>"}</h1>
      <AdminNavigation />

      <div
        className={`mt-5 flex w-full flex-grow justify-center ${mainBlogContentFont.className}`}
        style={mainBlogContentFont.style}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <CreateBlogForm media={await media} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
