import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import local_date from "~/utils/local_date";
import Link from "next/link";
import Loading from "~/components/loading/loading";
import { useEffect, useState } from "react";
import { Note } from "@prisma/client";

const AMOUNT = 10;

const NoteIndexPage: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const notes = api.note.getAll.useQuery({ page, amount: AMOUNT });

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [paginateUnique, setPaginateUnique] = useState<Set<string>>(new Set());
  const [paginateNotes, setPaginateNotes] = useState<Note[]>([]);

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

  useEffect(() => {
    if (notes.status == "success") {
      if (notes.data?.length < AMOUNT) {
        setIsEnd(true);
      }

      notes.data?.forEach((data) => {
        if (!paginateUnique.has(data?.id)) {
          setPaginateNotes((s) => {
            return [...s, data];
          });
        }

        setPaginateUnique((s) => {
          s?.add(data?.id);
          return s;
        });
      });
    }
  }, [notes, paginateUnique]);

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
                paginateNotes?.map((data) => (
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

            {!isEnd && (
              <button
                className="text-sm hover:underline"
                onClick={() => {
                  setPage((s) => ++s);
                }}
              >
                Tampilkan Lainnya
              </button>
            )}
          </div>
        </main>
      </AdminLayout>
    </>
  );
};

export default NoteIndexPage;
