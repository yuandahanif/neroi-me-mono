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
import { PlusIcon } from "@radix-ui/react-icons";
import { Label } from "~/components/ui/label";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { env } from "~/env.mjs";
import { useState } from "react";

export type MediaParamType = {
  id: string;
  alt: string | null;
  visibility: Media_visibility | null;
  createdAt: Date;
  File: {
    id: string;
    key: string;
  }[];
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

    onChange?.(selectedMedia?.values().toArray() ?? []);
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
                  <figure key={m.id} className="shrink-0">
                    <div className="flex flex-col overflow-hidden rounded-md border border-slate-100  duration-300 peer-checked:brightness-50">
                      <Image
                        className="aspect-square rounded-md object-cover object-center"
                        width={200}
                        height={200}
                        src={`${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${
                          m.File[0]?.key ?? ""
                        }`}
                        alt={m.alt || ""}
                      />
                    </div>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="line-clamp-1 font-semibold text-foreground">
                        {m.alt || "Unknown"}
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
            <PlusIcon />
            <span>Add Image</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="w-full min-w-96">
          <DialogHeader>
            <DialogTitle>Add Project Image</DialogTitle>
            <DialogDescription>
              Pilih gambar yang ingin digunakan.
            </DialogDescription>
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
                      <Image
                        className="aspect-square rounded-md object-cover object-center"
                        width={200}
                        height={200}
                        src={`${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${
                          m.File[0]?.key ?? ""
                        }`}
                        alt={m.alt || ""}
                      />
                    </label>
                    <figcaption className="pt-2 text-xs text-muted-foreground">
                      <span className="line-clamp-1 font-semibold text-foreground">
                        {m.alt || "Unknown"}
                      </span>
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
