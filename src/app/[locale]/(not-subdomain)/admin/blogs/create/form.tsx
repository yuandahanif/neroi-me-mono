"use client";

import { Suspense, useState, useTransition } from "react";
import createBlogAction from "./actions";
import { Textarea } from "~/components/ui/textarea";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Button } from "~/components/ui/button";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { type MDXRemoteProps } from "next-mdx-remote";
import MDXClientPreview from "~/components/blog/MDXClientPreview.blog";

const Select = dynamic(() => import("react-select"), { ssr: false });

const CreateBlogForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isPreviewTab, setPreviewTab] = useState<boolean>(false);
  const [mdxContent, setMdxContent] = useState<MDXRemoteProps | null>(null);
  const [content, setContent] = useState<string>("");

  const getPreview = async () => {
    try {
      const response = await fetch("/admin/blogs/create/preview", {
        method: "POST",
        body: content,
      });
      const json = (await response.json()) as unknown;
      setMdxContent(json as MDXRemoteProps);
    } catch (error) {
      alert("An error occurred while trying to preview the content.");
    }
  };

  const togglePreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    startTransition(() => {
      setPreviewTab((s) => {
        if (!s) {
          void getPreview();
        }
        return !s;
      });
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      void createBlogAction(formData);
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
          required
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="blog-tags">Tags</Label>
        <Select
          id="blog-tags"
          name="tags"
          required
          isMulti
          theme={(theme) => ({
            ...theme,
            borderRadius: 2,
            colors: {
              ...theme.colors,
              primary25: "#f35959",
              primary: "black",
            },
          })}
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="blog-description">Meta Description</Label>
        <Textarea
          required
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

        <Switch id="blog-draft" name="blog-draft" />
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
                {mdxContent != null && <MDXClientPreview source={mdxContent} />}
              </div>
            ) : (
              <div className="blog-content prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400 prose-pre:px-2">
                <Textarea
                  contentEditable
                  name="content"
                  id="blog-content"
                  placeholder="Content"
                  rows={20}
                  value={content}
                  required
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
        Create
      </Button>
    </form>
  );
};

export default CreateBlogForm;
