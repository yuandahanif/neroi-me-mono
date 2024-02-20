import { type Metadata } from "next";
import { Lato } from "next/font/google";
import { prisma } from "~/server/db";

import { notFound } from "next/navigation";
import { AdminBlogContent } from "./_adminBlogContent";
import AdminNavigation from "~/components/navigation/admin.navigation";
import MDXViewer from "~/components/blog/MDXContent.blog";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const main_font = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await prisma.blog.findUnique({
    where: { slug },
    select: {
      title: true,
      description: true,
      isDraft: true,
    },
  });

  if (!blog) {
    return {
      title: "Not Found",
      description: "Just like my purpose, this page is non-existent.",
    };
  }

  return {
    title: blog.title,
    description: blog.description ?? "",
  };
}

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

  const Content = <MDXViewer content={blog.content} />;

  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <AdminNavigation />

      <div
        className={`mt-5 flex w-full flex-grow flex-col items-center justify-center gap-y-5 ${main_font.className}`}
        style={main_font.style}
      >
        <AdminBlogContent blog={blog}>{Content}</AdminBlogContent>
      </div>
    </div>
  );
};

export default BlogDetailPage;
