import { type Metadata } from "next";
import { prisma } from "~/server/db";

import { notFound } from "next/navigation";
import { AdminBlogContent } from "./_adminBlogContent";
import AdminNavigation from "~/components/navigation/admin.navigation";
import MDXViewer from "~/components/blog/MDXContent.blog";
import mainBlogContentFont from "~/components/font/mainBlogContent.font";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import local_date from "~/lib/local_date";

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

  const latestVisit = await prisma.blogVisit.findFirst({
    where: { blogId: blog?.id },
    orderBy: { createdAt: "desc" },
  });

  if (!blog) {
    notFound();
  }

  const Content = <MDXViewer content={blog.content} />;

  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <AdminNavigation />

      <div className="z-20 box-content flex items-center w-full max-w-[65ch] rounded-md border border-main-300 p-3 sm:mx-auto">
        <p className="text-sm">
          Terakhir diubah: {local_date(blog?.updatedAt ?? new Date())}
        </p>

        <Link href={`/admin/blogs/${slug}/edit`} className="ml-auto">
          <Button type="button" variant="outline">
            Edit
          </Button>
        </Link>
      </div>

      <div
        className={`mt-5 flex w-full flex-grow flex-col items-center justify-start gap-y-5 ${mainBlogContentFont.className}`}
        style={mainBlogContentFont.style}
      >
        <AdminBlogContent blog={blog}>{Content}</AdminBlogContent>
      </div>
    </div>
  );
};

export default BlogDetailPage;
