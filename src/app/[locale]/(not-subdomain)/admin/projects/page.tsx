import { type Metadata } from "next";
import { prisma } from "~/server/db";
import Link from "next/link";
import { z } from "zod";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { Button } from "~/components/ui/button";
import { ProjectListContainer } from "./_projectList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

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
  const queryClient = new QueryClient();
  const countProject = await prisma.project.count({});

  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: () => fetch("/api/projects"),
  });

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
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProjectListContainer />
        </HydrationBoundary>
      </div>
    </div>
  );
};

export default AdminProjectsPage;
