"use client";

import { useState, useTransition } from "react";
import { useQuery } from "@tanstack/react-query";
import createProjectAction from "./create";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import Select from "~/components/form/select";
import { project_status_label_kv } from "~/data/project_status_enum";
import {
  type MediaParamType,
  MediaPicker,
} from "~/components/form/_mediaPicker";

export const getMedia = async () => {
  try {
    return await fetch("create/file")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data as MediaParamType[];
      });
  } catch (error) {
    throw new Error("Failed to fetch media");
  }
};

const CreateProjectForm: React.FC = ({}) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [selectedStatus, setSelectedStatus] = useState<string | null>();

  const [selectedImage, setSelectedImage] = useState<MediaParamType[]>([]);

  const { data: media } = useQuery({
    queryKey: ["project/file"],
    queryFn: () => getMedia(),
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append(
      "files",
      JSON.stringify(selectedImage.map((tag) => tag.id))
    );

    startTransition(async () => {
      try {
        await createProjectAction(formData);
        toast({
          variant: "default",
          title: "Buat project berhasil!",
        });
      } catch (error) {
        console.log(error);

        toast({
          variant: "destructive",
          title: "Buat project gagal!",
        });
      }
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex w-2/3 flex-col gap-y-4">
      <div className="space-y-3">
        <Label htmlFor="project-title">Project Title</Label>
        <Input
          type="text"
          id="project-title"
          name="title"
          placeholder="Title"
          required
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="project-status">Project Status</Label>
        <Select
          options={project_status_label_kv}
          id="project-status"
          name="status"
          isMulti={false}
          required
          value={selectedStatus}
          onChange={(selected) => {
            setSelectedStatus(selected as string);
          }}
        />
      </div>

      {media && <MediaPicker media={media} onChange={setSelectedImage} />}

      <div className="space-y-3">
        <Label htmlFor="project-description">Project Description</Label>
        <Textarea
          required
          name="description"
          id="project-description"
          placeholder="Description"
          rows={5}
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="project-url">Project URL</Label>
        <Input
          type="url"
          id="project-url"
          name="url"
          placeholder="url"
          required
          autoComplete="project-url"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
        className="ml-auto"
      >
        Create
      </Button>
    </form>
  );
};

export default CreateProjectForm;
