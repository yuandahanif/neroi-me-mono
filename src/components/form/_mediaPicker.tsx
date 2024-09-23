"use client";

import Image from "next/image";
import { type Media_visibility } from "@prisma/client";
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
import { ReloadIcon } from "@radix-ui/react-icons";
import { Label } from "~/components/ui/label";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { env } from "~/env.mjs";
import { startTransition, useState } from "react";
import { toast } from "~/components/ui/use-toast";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import uploadMedia from "~/app/[locale]/(not-subdomain)/admin/media/actions/upload";
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
import deleteFileAction from "~/app/[locale]/(not-subdomain)/admin/projects/create/_deleteFile";
import { revalidatePath } from "next/cache";

export type MediaParamType = {
  id: string;
  key: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};

export function MediaPicker({
  media,
  onChange,
}: {
  media: MediaParamType[];
  onChange?: (media: MediaParamType[]) => void;
}) {
  const [selectedMedia, setSelectedMedia] = useState<Set<MediaParamType>>(
    new Set()
  );
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const onUpload = () => {
    startTransition(async () => {
      try {
        if (!previewFile) {
          throw new Error("No image selected");
        }

        const form = new FormData();
        form.append("file", previewFile);

        await uploadMedia(form);

        toast({
          variant: "default",
          title: "Media berhasil diunggah",
        });
      } catch (error) {
        console.error("Error uploading file", error);
        toast({
          variant: "destructive",
          title: "Media gagal diunggah",
          description: String(error),
        });
      }
    });
  };

  const onDelete = (id: string) => {
    startTransition(async () => {
      try {
        await deleteFileAction(id);

        toast({
          variant: "default",
          title: "Hapus gambar berhasil!",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Hapus gambar gagal!",
        });

        throw error;
      }
    });
  };

  const handleSelect = (media: MediaParamType) => {
    if (selectedMedia?.has(media)) {
      setSelectedMedia((s) => {
        s?.delete(media);
        const newSet = new Set(s);
        return newSet;
      });
    } else {
      setSelectedMedia((s) => {
        s?.add(media);
        const newSet = new Set(s);
        return newSet;
      });
    }
    onChange?.(selectedMedia.values().toArray());
  };

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <Label htmlFor="project-image">Project Image</Label>

        <ScrollArea className="h-72 w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {selectedMedia.size > 0 &&
              selectedMedia
                .values()
                .toArray()
                .map((m) => (
                  <figure className="shrink-0" key={m.id}>
                    <div className="flex flex-col overflow-hidden rounded-md border border-slate-100  duration-300 peer-checked:brightness-50">
                      <Image
                        className="aspect-square rounded-md object-cover object-center"
                        width={200}
                        height={200}
                        src={`${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${
                          m.key ?? ""
                        }`}
                        alt={m.id || ""}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="line-clamp-1 font-semibold text-foreground">
                        {m.id || "Unknown"}
                      </span>
                    </figcaption>
                  </figure>
                ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon" className="w-full">
            <span>Manage Images</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full min-w-96">
          <DialogHeader>
            <DialogTitle>Add Project Image</DialogTitle>
            <DialogDescription>Unggah gambar.</DialogDescription>
            <div className="flex gap-2">
              <Input
                required
                aria-label="media"
                id="media"
                name="media"
                type="file"
                accept="image/*"
                className="file:text-white"
                onChange={(event) => {
                  setPreviewFile(event.target.files?.[0] ?? null);
                }}
              />
              <Button type="button" onClick={onUpload} variant="outline">
                <ReloadIcon
                  className={cn("mr-2 hidden h-4 w-4 animate-spin")}
                />
                Unggah
              </Button>
            </div>
          </DialogHeader>

          <div className="w-full space-y-3">
            <Label htmlFor="project-image">Media</Label>
            <ScrollArea className="h-96 w-full whitespace-nowrap rounded-md border">
              <div className="flex w-full flex-wrap gap-4 p-4">
                {media.map((m) => (
                  <figure key={m.id} className="shrink-0">
                    <input
                      type="checkbox"
                      id={`media-${m.id}`}
                      className="peer appearance-none"
                      onChange={() => handleSelect(m)}
                      checked={selectedMedia?.has(m)}
                    />
                    <label
                      htmlFor={`media-${m.id}`}
                      className="flex flex-col overflow-hidden rounded-md border border-slate-100  duration-300 peer-checked:brightness-50"
                    >
                      <div className="relative">
                        <Image
                          className="aspect-square rounded-md object-cover object-center"
                          width={200}
                          height={200}
                          src={`${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${
                            m.key ?? ""
                          }`}
                          alt={m.id || ""}
                        />
                      </div>
                    </label>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="line-clamp-1 font-semibold text-foreground">
                        {m.id || "Unknown"}
                      </span>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <button
                            className="inline-flex duration-200 hover:text-red-500"
                            type="button"
                          >
                            Delete
                          </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => onDelete(m.id)}>
                              Yes
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
