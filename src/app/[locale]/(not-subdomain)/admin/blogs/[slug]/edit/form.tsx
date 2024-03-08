"use client";

import { Suspense, useState, useTransition } from "react";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Button } from "~/components/ui/button";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { type MDXRemoteProps } from "next-mdx-remote";
import MDXClientPreview from "~/components/blog/MDXClientPreview.blog";
import Select from "~/components/form/select";
import updateBlogAction from "./update";
import { toast } from "~/components/ui/use-toast";

const EditBlogForm = ({
  blog,
  tags,
}: React.PropsWithChildren<{
  tags: { id: string; title: string }[];
  blog: {
    content: string;
    id: string;
    title: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    isDraft: boolean | null;
    Tags: {
      title: string;
      id: string;
    }[];
    _count: {
      BlogVisits: number;
    };
  };
}>) => {
  const [isPending, startTransition] = useTransition();
  const [isPreviewTab, setPreviewTab] = useState<boolean>(false);
  const [mdxContent, setMdxContent] = useState<MDXRemoteProps | null>(null);
  const [content, setContent] = useState<string>(() => blog.content);
  const [selectedTags, setSelectedTags] = useState<
    { value: string; label: string }[]
  >(() => blog.Tags.map((tag) => ({ value: tag.id, label: tag.title })));

  const getPreview = async () => {
    try {
      const response = await fetch("/admin/blogs/preview", {
        method: "POST",
        body: content,
      });

      const json = (await response.json()) as unknown;
      setMdxContent(json as MDXRemoteProps);
    } catch (error) {
      toast({
        title: "Error!",
        variant: "destructive",
        description:
          "An error occurred while trying to preview the content." +
          JSON.stringify(error),
      });
    }
  };

  const togglePreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    startTransition(() => {
      setPreviewTab((prev) => {
        if (!prev) {
          void getPreview();
        }
        return !prev;
      });
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("id", blog.id);
    formData.append(
      "tags",
      JSON.stringify(selectedTags.map((tag) => tag.value))
    );
    formData.append("content", content);

    startTransition(() => {
      void updateBlogAction(formData);
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex w-2/3 flex-col gap-y-4">
      <div className="space-y-3">
        <Label htmlFor="blog-title">Blog Title</Label>
        <Input
          type="text"
          id="blog-title"
          name="title"
          placeholder="Title"
          defaultValue={blog.title}
          required
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="blog-tags">Tags</Label>
        <Select
          id="blog-tags"
          required
          isMulti
          value={selectedTags}
          options={
            tags.map((tag) => ({ value: tag.id, label: tag.title })) ?? []
          }
          onChange={(selected) => {
            return setSelectedTags(selected as typeof selectedTags);
          }}
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="blog-description">Meta Description</Label>
        <Textarea
          required
          defaultValue={blog.description ?? ""}
          name="description"
          id="blog-description"
          placeholder="Description"
          rows={5}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="blog-draft">Draft</Label>
          <p className="text-xs">This blog post is not ready to publish yet?</p>
        </div>

        <Switch
          id="blog-draft"
          name="blog-is-draft"
          defaultChecked={blog.isDraft ?? false}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="blog-content">Content</Label>

          <Button
            variant="ghost"
            size="sm"
            type="button"
            onClick={togglePreview}
          >
            <EyeOpenIcon className="mr-2 h-4 w-4" /> Preview
          </Button>
        </div>

        <Suspense fallback={<span>Loading...</span>}>
          <div className="flex flex-grow justify-center">
            {isPreviewTab ? (
              <div className="blog-content prose-md prose prose-invert w-full rounded-md border p-3 prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400 prose-pre:px-2">
                {mdxContent != null && (
                  <>
                    <MDXClientPreview source={mdxContent} />
                  </>
                )}
              </div>
            ) : (
              <div className="blog-content prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400 prose-pre:px-2">
                <Textarea
                  contentEditable
                  name="content"
                  id="blog-content"
                  placeholder="Content"
                  rows={20}
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            )}
          </div>
        </Suspense>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        aria-disabled={isPending}
        className="ml-auto"
      >
        Edit
      </Button>
    </form>
  );
};

export default EditBlogForm;
