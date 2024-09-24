import { type Metadata } from "next";
import { prisma } from "~/server/db";
import Link from "next/link";
import { z } from "zod";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { Button } from "~/components/ui/button";
import { ProjectDetailContainer } from "./_projectDetail";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Apa-apa saja yang sedang ku kerjakan, eksperimen, dan hal-hal yang mungkin menarik untuk diceritakan.",
};

const searchParamSchema = z.object({
  page: z.coerce.number().min(0).optional(),
  amount: z.coerce.number().min(0).optional(),
});

const DEFAULT_AMOUNT = 10;

const AdminProjectsPage = async ({
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

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
    take: validate.success ? Number(amount) : DEFAULT_AMOUNT,
    skip: validate.success ? skip : 0,
  });

  const isNextPageExist = await prisma.project.count({
    orderBy: { createdAt: "desc" },
    take: 1,
    skip: validate.success ? skip + Number(amount) : DEFAULT_AMOUNT,
  });

  const countProject = await prisma.project.count({});

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Projects/>"}</h1>
      <AdminNavigation />

      <div className="z-20 mt-10 box-border flex w-full max-w-prose items-center rounded-md border border-main-300 p-3 sm:mx-auto">
        <p className="text-sm">Total project: {countProject}</p>

        <Link href={`/admin/projects/create`} className="ml-auto">
          <Button type="button" variant="outline">
            Tambah
          </Button>
        </Link>
      </div>

      <div className="mt-8 flex h-full w-full max-w-screen-lg flex-grow flex-col">
        <ProjectDetailContainer projects={projects} />
      </div>
    </div>
  );
};

export default AdminProjectsPage;
