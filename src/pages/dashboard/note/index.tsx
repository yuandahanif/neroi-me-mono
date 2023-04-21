import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import local_date from "~/utils/local_date";
import Link from "next/link";
import Loading from "~/components/loading/loading";

const NoteIndexPage: NextPage = () => {
  const notes = api.note.getAll.useQuery({}, {});

  const deleteNotemutation = api.note.deleteById.useMutation();

  const onDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete")) {
      deleteNotemutation.mutate(
        { id },
        {
          onSuccess() {
            void notes.refetch();
          },
        }
      );
    }
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

          <div className="mt-10 flex w-full flex-col items-center justify-center">
            <div className="mb-10 flex justify-center">
              <Link
                href={`/dashboard/note/add`}
                className="no-underline hover:underline"
              >
                <span className="prose-2xl line-clamp-2 font-semibold">
                  Tambah
                </span>
              </Link>
            </div>

            {notes.isLoading && <Loading />}
            {notes.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {notes.isSuccess && notes.data.length == 0 && (
              <div>
                <span>Tidak ada data</span>
              </div>
            )}

            <div className="prose prose-sm prose-invert mx-auto flex-col gap-y-20 lg:prose-lg">
              {notes.isSuccess &&
                notes.data.map((data) => (
                  <div key={data.id} className="mb-8 flex w-full flex-col p-4">
                    <div className="py-0">
                      <div
                        className="prose-md"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      ></div>
                    </div>
                    <div className=" flex w-full items-center gap-2">
                      <div>
                        <button type="button" onClick={() => onDelete(data.id)}>
                          Hapus
                        </button>
                      </div>
                      <div>
                        <Link href={`/dashboard/note/${data.id}/edit`}>
                          Ubah
                        </Link>
                      </div>
                      <div className="h-px w-full bg-white" />
                      <span className="prose-sm ml-auto inline-flex whitespace-nowrap">
                        {local_date(data.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default NoteIndexPage;
