"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import local_date from "~/lib/local_date";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { useTransition } from "react";
import deleteBlogAction from "./delete";
import { toast } from "~/components/ui/use-toast";


const BlogActionComponent: React.FC<{
  updatedAt: Date;
  slug: string;
  id: string;
}> = ({ updatedAt, slug, id }) => {
  const [isPending, startTransition] = useTransition();

  const onDelete = () => {
    startTransition(async () => {
      try {
        await deleteBlogAction(id);

        toast({
          variant: "default",
          title: "Hapus blog berhasil!",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Hapus blog gagal!",
        });

        throw error;
      }
    });
  };

  return (
    <div className="z-20 box-content flex w-full max-w-prose items-center rounded-md border border-main-300 p-3 sm:mx-auto">
      <p className="text-xs">
        Terakhir diubah:{" "}
        {local_date(updatedAt ?? new Date(), {
          dateStyle: "medium",
          timeStyle: "short",
        })}
      </p>

      <div className="ml-auto flex gap-2">
        <Link href={`/admin/blogs/${slug}/edit`}>
          <Button type="button" variant="outline">
            Edit
          </Button>
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              disabled={isPending}
              variant="destructive"
              name="delete"
            >
              Hapus
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Hapus?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default BlogActionComponent;
