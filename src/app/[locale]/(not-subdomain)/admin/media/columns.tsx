"use client";

import { File, type Media } from "@prisma/client";
import { type ColumnDef } from "@tanstack/react-table";
import local_date from "~/lib/local_date";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import MediaUploadForm from "./form";
import {
  EyeClosedIcon,
  EyeNoneIcon,
  EyeOpenIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { deleteMediaAction } from "./actions/delete";
import getMediaUrl from "~/lib/getMediaUrl";

const copyToClipboard = (text: string) => {
  void navigator.clipboard.writeText(text);
};

export const mediaColumns: ColumnDef<Media & { File: File[] }>[] = [
  {
    accessorKey: "title",
    header: "Judul",
    cell: ({ row }) => {
      const title = row.original.title;
      const key = String(row.original.File[0]?.key);

      return (
        <span
          className="cursor-copy font-medium"
          onClick={() => copyToClipboard(getMediaUrl(String(key)))}
        >
          {title}
        </span>
      );
    },
  },
  {
    accessorKey: "isNsfw",
    header: "NSFW",
    cell: ({ row }) => {
      const isNsfw = row.original.isNsfw;

      return (
        <div className="mx-auto inline-flex h-full w-full justify-center text-center font-medium">
          {isNsfw ? (
            <EyeClosedIcon className="text-red-400" />
          ) : (
            <EyeOpenIcon />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "visibility",
    header: "Visibilitas",
    cell: ({ row }) => {
      const isPubliclyVisible = row.original.visibility == "PUBLIC";

      return (
        <div className="mx-auto inline-flex h-full w-full justify-center text-center font-medium">
          {isPubliclyVisible ? (
            <EyeOpenIcon />
          ) : (
            <EyeNoneIcon className="text-red-400" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Diunggah",
    cell: ({ row }) => {
      const date = local_date(row.getValue("createdAt"), {
        dateStyle: "medium",
        timeStyle: "short",
      });

      return <span className="text-right font-medium">{date}</span>;
    },
  },
  {
    accessorKey: "url",
    header: "Detail",
    cell: ({ row }) => {
      const media = row.original;
      const key = String(media.File[0]?.key);

      return (
        <div className="inline-flex w-fit gap-x-5">
          <MediaUploadForm media={media} />

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Hapus</Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Hapus Media</DialogTitle>
                <DialogDescription>
                  Aksi ini akan menghapus media ini dari server. Media yang
                  sudah dihapus{" "}
                  <span className="font-bold">
                    tidak dapat dikembalikan dengan cara apapun
                  </span>
                  .
                </DialogDescription>
              </DialogHeader>

              <div className="flex h-32 w-full items-center justify-center rounded-sm border border-input sm:h-96">
                <figure className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 text-xs">
                  <div className="relative h-[90%] w-full">
                    <Image
                      src={getMediaUrl(String(key))}
                      alt={media?.alt ?? "no alt"}
                      className="h-full w-full object-contain object-center"
                      fill
                    />
                  </div>

                  <figcaption className="line-clamp-1">
                    {media.title}
                  </figcaption>
                </figure>
              </div>

              <DialogFooter className="sm:justify-end">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Batal
                  </Button>
                </DialogClose>

                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    type="button"
                    onClick={() => {
                      void deleteMediaAction(key);
                    }}
                  >
                    <TrashIcon className={"mr-2 h-4 w-4"} />
                    Hapus
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
    enableSorting: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    enableMultiSort: false,
    enableResizing: false,
    enableGrouping: false,
    enablePinning: false,
  },
];
