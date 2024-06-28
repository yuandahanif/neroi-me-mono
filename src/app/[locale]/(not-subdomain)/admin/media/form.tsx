"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useTransition } from "react";
import { type File, type Media } from "@prisma/client";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { cn } from "~/lib/utils";
import { Textarea } from "~/components/ui/textarea";
import { Switch } from "~/components/ui/switch";
import { toast } from "~/components/ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import updateMedia from "./actions/update";
import uploadMedia from "./actions/upload";
import getMediaUrl from "~/lib/getMediaUrl";

export default function MediaUploadForm({
  className,
  media,
  defaultDialogOpen,
}: {
  media?: Media & { File: File[] };
  className?: string;
  defaultDialogOpen?: boolean;
}) {
  const isEditForm = media !== undefined;
  const [isPending, startTransition] = useTransition();

  const [open, setOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<Blob | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onUpload = () => {
    startTransition(async () => {
      try {
        if (!previewFile) {
          throw new Error("No file selected");
        }
        const form = new FormData();
        form.append("file", previewFile);

        const file = await uploadMedia(form);

        setUploadedFile(file);
        setPreviewFile(null);

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

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isEditForm) {
      startTransition(async () => {
        try {
          if (!media) {
            throw new Error("Malformed media object");
          }

          const formData = new FormData(event.currentTarget);
          formData.append("id", media?.id);

          await updateMedia(formData);

          setOpen(false);

          toast({
            variant: "default",
            title: "Media berhasil diubah",
          });
        } catch (error) {
          console.error("Error updating file", error);
          toast({
            variant: "destructive",
            title: "Media gagal diubah",
            description: String(error),
          });
        }
      });

      return;
    }

    startTransition(async () => {
      try {
        if (!uploadedFile) {
          throw new Error("No file uploaded");
        }

        const formData = new FormData(event.currentTarget);
        formData.append("file_key", uploadedFile?.key);

        await updateMedia(formData);

        setPreviewFile(null);
        setUploadedFile(null);
        setOpen(false);

        toast({
          variant: "default",
          title: "Media berhasil disimpan",
        });
      } catch (error) {
        console.error("Error uploading file", error);
        toast({
          variant: "destructive",
          title: "Media gagal disimpan",
          description: String(error),
        });
      }
    });
  };

  return (
    <div className={cn(className)}>
      <Dialog
        defaultOpen={defaultDialogOpen}
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild>
          <Button variant="outline">
            {isEditForm ? "Edit" : "Unggah Media"}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[95dvh] max-w-full overflow-y-auto sm:max-w-screen-md">
          <DialogHeader>
            <DialogTitle>
              {isEditForm ? "Edit Media" : "Unggah Media"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={onSubmit} className="grid gap-4 py-4">
            <div className="flex h-32 w-full items-center justify-center rounded-sm border border-input sm:h-96">
              {previewFile && (
                <figure className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 text-xs text-white ">
                  <div className="relative h-[90%] w-full">
                    <img
                      src={URL.createObjectURL(previewFile)}
                      alt="preview"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <figcaption>
                    {(previewFile.size / (1024 * 1024)).toFixed(2)} MB
                  </figcaption>
                </figure>
              )}

              {uploadedFile && (
                <figure className="relative flex h-full w-full flex-col items-center justify-center gap-y-2 text-xs">
                  <div className="relative h-[90%] w-full">
                    <Image
                      src={getMediaUrl(String(uploadedFile?.key))}
                      alt={"no alt"}
                      className="h-full w-full object-contain object-center"
                      fill
                    />
                  </div>

                  <figcaption className="line-clamp-1">
                    {uploadedFile.key}
                  </figcaption>
                </figure>
              )}

              {!uploadedFile && !previewFile && !isEditForm && (
                <Label
                  htmlFor="media"
                  className="my-auto cursor-pointer text-center text-white"
                >
                  Pilih media untuk diunggah
                </Label>
              )}

              {isEditForm && (
                <figure className="relative flex h-5/6 w-full flex-col items-center gap-y-2 text-xs">
                  <div className="relative h-full w-full">
                    <Image
                      src={getMediaUrl(String(media.File?.[0]?.key))}
                      alt={media?.alt ?? "no alt"}
                      className="h-full w-full object-contain object-center"
                      fill
                    />
                  </div>

                  <figcaption className="line-clamp-1">
                    {media.title}
                  </figcaption>
                </figure>
              )}
            </div>

            <div
              className={cn(
                "grid grid-cols-4 items-center gap-4",
                isEditForm ? "invisible hidden" : ""
              )}
            >
              <Input
                required
                aria-label="media"
                id="media"
                name="media"
                type="file"
                disabled={isPending || !!uploadedFile || isEditForm}
                accept="image/*, video/*"
                className="col-span-3 file:text-white"
                onChange={(event) => {
                  setPreviewFile(event.target.files?.[0] ?? null);
                }}
              />

              <Button
                type="button"
                onClick={onUpload}
                disabled={isPending || !previewFile}
                variant="outline"
              >
                <ReloadIcon
                  className={cn(
                    "mr-2 hidden h-4 w-4 animate-spin",
                    isPending && !uploadedFile ? "block" : ""
                  )}
                />
                Unggah
              </Button>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-left">
                Judul
              </Label>

              <Input
                id="title"
                name="title"
                autoComplete="off"
                className="col-span-3"
                placeholder="Judul"
                type="text"
                defaultValue={media?.title ?? ""}
                required={!isEditForm}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-left">
                Deskripsi
              </Label>

              <Textarea
                placeholder="Tulis apa saja di sini..."
                className="col-span-3"
                id="description"
                rows={5}
                autoComplete="off"
                name="description"
                defaultValue={media?.description ?? ""}
                required={!isEditForm}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alt" className="text-left">
                Alt
              </Label>

              <Input
                id="alt"
                name="alt"
                autoComplete="off"
                className="col-span-3"
                placeholder="Alt"
                defaultValue={media?.alt ?? ""}
                type="text"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="is-nfsw" className="text-left">
                NSFW
              </Label>

              <Switch
                id="isNfsw"
                name="is-nfsw"
                className="col-span-3"
                defaultChecked={media?.isNsfw ?? false}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isPubliclyVisible" className="text-left">
                Publicly visible
              </Label>

              <Switch
                id="isPubliclyVisible"
                name="is-publicly-visible"
                className="col-span-3"
                defaultChecked={media?.visibility == "PUBLIC"}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={
                  (uploadedFile?.key == undefined && !isEditForm) || isPending
                }
                variant={"outline"}
              >
                <ReloadIcon
                  className={cn(
                    "mr-2 hidden h-4 w-4 animate-spin",
                    isPending && (!previewFile || isEditForm) ? "block" : ""
                  )}
                />
                Simpan
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
