import { type Metadata } from "next";
import MainNavigation from "~/components/navigation/main.navigation";
import Loading from "~/components/loading/loading";
import { Suspense } from "react";
import BlogCardContainer from "./_blogCard";
import { prisma } from "~/server/db";
import Link from "next/link";
import { z } from "zod";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Some of my thoughts, experiences, and knowledge that I want to share with you.",
};

const searchParamSchema = z.object({
  page: z.coerce.number().min(0).optional(),
  amount: z.coerce.number().min(0).optional(),
});

const DEFAULT_AMOUNT = 5;

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: { page?: number; amount?: number };
}) => {
  const validate = searchParamSchema.safeParse(searchParams);
  let { amount = DEFAULT_AMOUNT, page = 1 } = searchParams;

  if (validate.success) {
    amount = validate.data.amount ?? DEFAULT_AMOUNT;
    page = validate.data.page ?? 1;
  }

  const skip = page ? (Number(page) - 1) * amount : 0;

  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      Tags: { select: { title: true } },
      slug: true,
      _count: { select: { BlogVisits: true } },
      createdAt: true,
      updatedAt: true,
    },
    where: { isDraft: false },
    take: validate.success ? Number(amount) : DEFAULT_AMOUNT,
    skip: validate.success ? skip : 0,
  });

  const isNextPageExist = await prisma.blog.count({
    orderBy: { createdAt: "desc" },
    where: { isDraft: false },
    take: 1,
    skip: validate.success ? skip + Number(amount) : DEFAULT_AMOUNT,
  });

  return (
    <main
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Blogs/>"}</h1>
      <MainNavigation />

      <div className="prose prose-invert mt-10 lg:prose-sm">
        <h3 className="text-center">
          Selamat datang di blog, tempatku berbagi apa yang ada di dalam
          kepalaku.
        </h3>
      </div>

      <div className="prose prose-invert mt-10 flex flex-grow">
        <Suspense fallback={<Loading />} key={page}>
          <BlogCardContainer blogs={blogs} />
        </Suspense>
      </div>

      <div className="mt-10 flex items-center gap-4">
        {page && page > 1 ? (
          <Link href={`?page=${Number(page) - 1}`} className="mt-10">
            Previous
          </Link>
        ) : (
          <span
            aria-disabled
            className="mt-10 cursor-default line-through opacity-50"
          >
            Previous
          </span>
        )}
        {isNextPageExist > 0 ? (
          <Link
            href={`?page=${validate.success ? page + 1 : 2}`}
            className="ml-auto mt-10"
          >
            Next
          </Link>
        ) : (
          <span
            aria-disabled
            className="ml-auto mt-10 cursor-default line-through opacity-50"
          >
            Next
          </span>
        )}
      </div>
    </main>
  );
};

export default BlogsPage;
