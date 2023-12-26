import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import dynamic from "next/dynamic";
import { type FormEventHandler, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Editor = dynamic(() => import("~/components/editor/editor"), {
  ssr: false,
});

const NoteAddPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [editorDelta, setEditorDelta] = useState<string>("");
  const note = api.note.getById.useQuery({ id: String(id) });

  const createNoteMutation = api.note.updateById.useMutation({
    onSuccess() {
      toast.success("Berhasil");
      void router.push("/dashboard/note");
    },
    onError(err) {
      console.error(err);
      toast.error("Gagal");
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createNoteMutation.mutate({
      content: editorDelta,
      id: String(id),
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

          {note.isSuccess && (
            <form onSubmit={onSubmit}>
              <div className="prose prose-lg prose-invert mt-10 flex w-full flex-col items-center gap-3">
                <div className="mb-16">
                  <Editor
                    onChange={(d) => setEditorDelta(d)}
                    defaultValue={note.data?.content}
                  />
                </div>

                <div className="">
                  <button className="hover:underline">Simpan</button>
                </div>
              </div>
            </form>
          )}
        </main>
      </AdminLayout>
    </>
  );
};

export default NoteAddPage;
