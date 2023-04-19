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

const Editor = dynamic(() => import("~/components/editor/editor"), {
  ssr: false,
});

const BlogAddPage: NextPage = () => {
  const [editorDelta, setEditorDelta] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slug, setSlug] = useState<string>("");

  const tag = api.tag.getAll.useQuery();
  const tagOptionMemo = useMemo(() => {
    if (!tag.data) return [];
    return tag.data.map((tag) => ({ value: tag.id, label: tag.title }));
  }, [tag.data]);

  const onTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
    setSlug(e.target.value.replaceAll(" ", "-"));
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(editorDelta);
    // api.blog.create.mutate(editorDelta);
    // setEditorDelta({});
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
                  className=" rounded-sm p-1 px-3 text-main-600"
                />
              </label>

              <label className="flex w-full flex-col">
                <span>Slug</span>
                <input
                  type="text"
                  value={slug}
                  disabled
                  className=" rounded-sm p-1 px-3"
                />
              </label>

              <div className="mt-8">
                <button className="hover:underline">Buat</button>
              </div>
            </div>
          </form>
        </main>
      </AdminLayout>
    </>
  );
};

export default BlogAddPage;
