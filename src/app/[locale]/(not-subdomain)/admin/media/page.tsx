import { type Metadata } from "next";
import { prisma } from "~/server/db";
import { z } from "zod";
import AdminNavigation from "~/components/navigation/admin.navigation";

import MediaUploadForm from "./form";
import { DataTable } from "~/components/ui/data-table";
import { Suspense } from "react";
import { mediaColumns } from "./columns";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Some are mine, some are not (see credits for the original owner). Enjoy.",
};

const searchParamSchema = z.object({
  page: z.coerce.number().min(0).optional(),
  amount: z.coerce.number().min(0).optional(),
});

const DEFAULT_AMOUNT = 10;

const AdminMediaPage = async ({
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

  const media = prisma.media.findMany({
    orderBy: { createdAt: "desc" },
    include: { File: true },
  });

  const isNextPageExist = await prisma.media.count({
    orderBy: { createdAt: "desc" },
    take: 1,
    skip: validate.success ? skip + Number(amount) : DEFAULT_AMOUNT,
  });

  const countMedia = await prisma.media.count();

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Media/>"}</h1>
      <AdminNavigation />

      <div className="z-20 mx-auto mt-10 box-border flex w-full max-w-prose items-center rounded-sm border border-main-300 p-3">
        <p className="text-sm">Total media: {countMedia}</p>

        <MediaUploadForm className="ml-auto" />
      </div>

      <div className="mx-auto mt-5 box-border flex w-full max-w-prose">
        <div className="w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <DataTable columns={mediaColumns} data={await media} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminMediaPage;
