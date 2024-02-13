import { type Metadata } from "next";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Lato } from "next/font/google";
import { prisma } from "~/server/db";

import Loading from "~/components/loading/loading";
import MainNavigation from "~/components/navigation/main.navigation";
import { notFound } from "next/navigation";
import BlogContent from "./_blogContent";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Code } from "bright";
import { twMerge } from "tailwind-merge";

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

  if (blog.isDraft) {
    return {
      title: "This section is restricted.",
      description: "Currently, this section is restricted to public access.",
    };
  }

  return {
    title: blog.title,
    description: blog.description ?? "",
  };
}

function IP() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

const BlogDetailPage: React.FC<Props> = async ({ params }) => {
  const { slug } = params;
  const ip = IP();

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

  const Content = (
    <MDXRemote
      source={blog.content}
      components={{
        pre: (props) => (
          <Code
            {...props}
            lineNumbers
            theme={"github-dark"}
            lang="tsx"
            className={twMerge("not-prose", props.className)}
          >
            {props.children}
          </Code>
        ),
      }}
    />
  );

  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <MainNavigation />

      <div
        className={`mt-5 flex flex-col gap-y-5 ${main_font.className}`}
        style={main_font.style}
      >
        <Suspense fallback={<Loading />} key={slug}>
          <BlogContent blog={blog} ip={ip}>
            {Content}
          </BlogContent>
        </Suspense>
      </div>
    </div>
  );
};

export default BlogDetailPage;
