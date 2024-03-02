import { type Metadata } from "next";
import { prisma } from "~/server/db";
import Link from "next/link";
import { z } from "zod";
import local_date from "~/lib/local_date";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

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

      <div className="z-20 mt-10 box-content flex w-full max-w-prose items-center rounded-md border border-main-300 p-3 sm:mx-auto">
        <p className="text-sm">Total media: {countMedia}</p>

        <Link href={`/admin/blogs/create`} className="ml-auto">
          <Button type="button" variant="outline">
            Tambah
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex max-w-prose flex-grow w-full flex-col gap-y-8 px-2 lg:px-0">
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
