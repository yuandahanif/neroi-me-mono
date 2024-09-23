"use client";

import { Suspense, useState, useTransition } from "react";
import createProjectAction from "./create";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import Select from "~/components/form/select";
import { redirect } from "next/navigation";
import { project_status_label_kv } from "~/data/project_status_enum";
import {
  type MediaParamType,
  MediaPicker,
} from "~/components/form/_mediaPicker";

const CreateProjectForm: React.FC<{
  media: MediaParamType[];
}> = ({ media }) => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [content, setContent] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>();

  const [selectedImage, setSelectedImage] = useState<MediaParamType[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("tags", JSON.stringify(selectedImage.map((tag) => tag.id)));
    formData.append("content", content);

    // startTransition(async () => {
    //   try {
    //     const blog = await createProjectAction(formData);

    //     toast({
    //       variant: "default",
    //       title: "Buat blog berhasil!",
    //     });

    //     redirect(`/admin/blogs/`);
    //   } catch (error) {
    //     toast({
    //       variant: "destructive",
    //       title: "Buat blog gagal!",
    //     });
    //   }
    // });
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
          isMulti={false}
          required
          value={selectedStatus}
          onChange={(selected) => {
            setSelectedStatus(selected as string);
          }}
        />
      </div>

      <MediaPicker media={media} onChange={setSelectedImage} />

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
          name="URL"
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
