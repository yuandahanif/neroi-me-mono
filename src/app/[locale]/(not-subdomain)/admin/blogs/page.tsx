import { type Metadata } from "next";
import { prisma } from "~/server/db";
import Link from "next/link";
import { z } from "zod";
import local_date from "~/lib/local_date";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Some of my thoughts, experiences, and knowledge that I want to share with you.",
};

const searchParamSchema = z.object({
  page: z.coerce.number().min(0).optional(),
  amount: z.coerce.number().min(0).optional(),
});

const DEFAULT_AMOUNT = 10;

const AdminBlogsPage = async ({
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
      isDraft: true,
      createdAt: true,
      updatedAt: true,
    },
    take: validate.success ? Number(amount) : DEFAULT_AMOUNT,
    skip: validate.success ? skip : 0,
  });

  const isNextPageExist = await prisma.blog.count({
    orderBy: { createdAt: "desc" },
    take: 1,
    skip: validate.success ? skip + Number(amount) : DEFAULT_AMOUNT,
  });

  const countBlogs = await prisma.blog.count({});

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Blogs/>"}</h1>
      <AdminNavigation />

      <div className="z-20 mt-10 box-content flex w-full max-w-prose items-center rounded-md border border-main-300 p-3 sm:mx-auto">
        <p className="text-sm">Total post: {countBlogs}</p>

        <Link href={`/admin/blogs/create`} className="ml-auto">
          <Button type="button" variant="outline">
            Tambah
          </Button>
        </Link>
      </div>

      <div className="prose prose-invert mt-10 flex flex-grow flex-col gap-y-8 px-2 lg:px-0">
        {blogs?.map(({ slug, Tags, createdAt, id, title, _count, isDraft }) => (
          <div className="w-full" key={id}>
            <Link
              href={`/admin/blogs/${slug}`}
              className={cn(
                "no-underline hover:underline",
                isDraft && "opacity-50"
              )}
            >
              <span className="prose-md line-clamp-2 font-semibold md:prose-2xl">
                {isDraft ? "[DRAFT]" : ""} {title}
              </span>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              {Tags.map((tag) => (
                <span key={tag.title} className="mt-3 bg-main-300 p-px px-2">
                  {tag.title}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="ml-auto flex items-center gap-1 text-sm">
                <span>{_count.BlogVisits}</span>
                pembaca
              </div>
              <span>|</span>
              <span className="inline-flex text-sm">
                {local_date(createdAt)}
              </span>
            </div>
          </div>
        ))}
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
    </div>
  );
};

export default AdminBlogsPage;
