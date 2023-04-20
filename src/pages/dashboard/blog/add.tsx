import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import dynamic from "next/dynamic";
import Select from "react-select";
import {
  type FormEventHandler,
  useMemo,
  useState,
  type ChangeEventHandler,
} from "react";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import slugify from "slugify";

const Editor = dynamic(() => import("~/components/editor/editor"), {
  ssr: false,
});

const BlogAddPage: NextPage = () => {
  const router = useRouter();
  const [editorDelta, setEditorDelta] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [isDraft, setIsDraft] = useState<boolean>(false);
  const [fetchSlug, setFetchSlug] = useState<boolean>(false);

  const createBlogmutation = api.blog.create.useMutation({
    onSuccess() {
      toast.success("Berhasil");
      void router.push("/dashboard/blog");
    },
    onError(err) {
      console.error(err);
      toast.error("Gagal");
    },
  });
  const isSlugAvaliable = api.blog.checkSlugAvaliable.useQuery(
    { slug },
    {
      enabled: fetchSlug,
      onSuccess() {
        setFetchSlug(false);
      },
    }
  );

  const tag = api.tag.getAll.useQuery();
  const tagOptionMemo = useMemo(() => {
    if (!tag.data) return [];
    return tag.data.map((tag) => ({ value: tag.id, label: tag.title }));
  }, [tag.data]);

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
    setSlug(slugify(e.target.value));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createBlogmutation.mutate({
      title,
      content: editorDelta,
      slug,
      tags,
      isDraft,
    });
  };

  return (
    <>
      <HeadSEO />
      <AdminLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <AdminNavigation />

          <form onSubmit={onSubmit}>
            <div className="prose prose-lg prose-invert mt-10 flex w-full flex-col items-center gap-3">
              <div className="mb-24">
                <Editor onChange={(d) => setEditorDelta(d)} />
              </div>

              <label className="flex w-full flex-col">
                <span>Tag</span>
                <Select
                  name="tags"
                  onChange={(d) => setTags(d.map((t) => t.value))}
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
                  options={tagOptionMemo}
                />
              </label>

              <label className="flex w-full flex-col">
                <span>Judul</span>
                <input
                  type="text"
                  value={title}
                  onChange={onTitleChange}
                  required
                  className=" rounded-sm p-1 px-3 text-main-600"
                />
              </label>

              <label className="flex w-full flex-col ">
                <span>Slug</span>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={slug}
                    disabled
                    className={twMerge(
                      "w-full rounded-sm p-1 px-3",
                      !isSlugAvaliable.isSuccess || isSlugAvaliable.data != null
                        ? "border border-red-400"
                        : "border border-green-400"
                    )}
                  />
                  <button
                    onClick={() => {
                      setFetchSlug(true);
                    }}
                    type="button"
                  >
                    check
                  </button>
                </div>
              </label>

              <label className="mr-auto flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={isDraft}
                  onChange={() => setIsDraft((s) => !s)}
                />
                <span>masukkan Draft?</span>
              </label>

              <div className="mt-8">
                <button
                  className="hover:underline"
                  disabled={
                    !isSlugAvaliable.isSuccess || isSlugAvaliable.data != null
                  }
                >
                  Buat
                </button>
              </div>
            </div>
          </form>
        </main>
      </AdminLayout>
    </>
  );
};

export default BlogAddPage;
