import { type Metadata } from "next";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AdminNavigation from "~/components/navigation/admin.navigation";
import CreateBlogForm, { getMedia } from "./form";
import mainBlogContentFont from "~/components/font/mainBlogContent.font";
import { prisma } from "~/server/db";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Just like my purpose, this page is non-existent.",
};

const ProjectDetailPage: React.FC = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["project/file"],
    queryFn: getMedia,
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
          <HydrationBoundary state={dehydrate(queryClient)}>
            <CreateBlogForm />
          </HydrationBoundary>
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
