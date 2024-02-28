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

const BlogDetailPage: React.FC = async () => {
  const tags = await prisma.tag.findMany({});
  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <AdminNavigation />

      <div
        className={`mt-5 flex w-full flex-grow justify-center ${mainBlogContentFont.className}`}
        style={mainBlogContentFont.style}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <CreateBlogForm tags={tags} />
        </Suspense>
      </div>
    </div>
  );
};

export default BlogDetailPage;
