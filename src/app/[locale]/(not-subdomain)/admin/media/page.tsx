import { type Metadata } from "next";
import { prisma } from "~/server/db";
import { z } from "zod";
import local_date from "~/lib/local_date";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { cookies } from "next/headers";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import MediaUploadForm from "./uploadAction";
import { COOKIE_MEDIA_NAME } from "./_constMedia";
import { PutBlobResult } from "@vercel/blob";

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
  const cookie_value = cookies().get(COOKIE_MEDIA_NAME)?.value;
  const pendingMedia = cookie_value
    ? (JSON.parse(cookie_value) as PutBlobResult)
    : undefined;

  const validate = searchParamSchema.safeParse(searchParams);
  let { amount = DEFAULT_AMOUNT, page = 1 } = searchParams;

  if (validate.success) {
    amount = validate.data.amount ?? DEFAULT_AMOUNT;
    page = validate.data.page ?? 1;
  }

  const skip = page ? (Number(page) - 1) * amount : 0;

  const medias = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
  });

  const isNextPageExist = await prisma.media.count({
    orderBy: { createdAt: "desc" },
    take: 1,
    skip: validate.success ? skip + Number(amount) : DEFAULT_AMOUNT,
  });

  const countMedia = await prisma.media.count({});

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Media/>"}</h1>
      <AdminNavigation />

      <div className="z-20 mx-auto mt-10 box-content flex w-full max-w-prose items-center rounded-sm border border-main-300 p-3">
        <p className="text-sm">Total media: {countMedia}</p>

        <MediaUploadForm className="ml-auto" pendingMedia={pendingMedia} />
      </div>

      <div className="mx-auto mt-5 box-content flex w-full max-w-prose items-center rounded-sm border border-main-300 p-3">
        <div className="w-full">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminMediaPage;
