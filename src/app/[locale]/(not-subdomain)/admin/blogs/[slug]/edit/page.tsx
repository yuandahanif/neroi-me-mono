import { type Metadata } from "next";
import { prisma } from "~/server/db";
import { notFound } from "next/navigation";

import AdminNavigation from "~/components/navigation/admin.navigation";
import mainBlogContentFont from "~/components/font/mainBlogContent.font";
import EditBlogForm from "./form";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Not Found",
  description: "Just like my purpose, this page is non-existent.",
};

const BlogDetailPage: React.FC<Props> = async ({ params }) => {
  const { slug } = params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      id: true,
      title: true,
      content: true,
      Tags: { select: { title: true } },
      createdAt: true,
      updatedAt: true,
      isDraft: true,
      _count: { select: { BlogVisits: true } },
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <AdminNavigation />

      <div
        className={`mt-5 flex w-full flex-grow justify-center ${mainBlogContentFont.className}`}
        style={mainBlogContentFont.style}
      >
        <EditBlogForm blog={blog} />
      </div>
    </div>
  );
};

export default BlogDetailPage;
