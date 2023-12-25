import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import local_date from "~/utils/local_date";
import { api } from "~/utils/api";
import Loading from "~/components/loading/loading";
import { useEffect, useState } from "react";
import { type Note } from "@prisma/client";
import getI18nProps from "~/i18n/getStaticPropsI18n.helper";

export const getStaticProps = getI18nProps;

const AMOUNT = 10;

const TILPage: NextPage = () => {
  const [page, setPage] = useState<number>(1);
  const notes = api.note.getAll.useQuery({ page, amount: AMOUNT });

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [paginateUnique, setPaginateUnique] = useState<Set<string>>(new Set());
  const [paginateNotes, setPaginateNotes] = useState<Note[]>([]);

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
      <HeadSEO
        title="Notes"
        description="Terlalu singkat unutuk jadi blog, tapi mungkin pas untuk jadi
              tweet."
      />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Notes/>"}</h1>
          <MainNavigation />

          <div className="lg:prose-md prose prose-sm prose-invert mb-10 mt-10 lg:prose-sm">
            <h3 className="text-center">
              Terlalu singkat unutuk jadi blog, tapi mungkin pas untuk jadi
              tweet.
            </h3>
          </div>

          <div className="mt-10 flex w-full flex-col gap-7">
            <div className="prose prose-sm prose-invert mx-auto flex-col gap-y-20 lg:prose-lg">
              {notes.isLoading && <Loading />}

              {paginateNotes?.map((data) => (
                <div key={data?.id} className="mb-8 flex w-full flex-col p-4">
                  <div className="py-0">
                    <div
                      className="prose-md"
                      dangerouslySetInnerHTML={{ __html: data?.content }}
                    ></div>
                  </div>
                  <div className=" flex w-full items-center gap-2">
                    <div className="h-px w-full bg-white" />
                    <span className="prose-sm ml-auto inline-flex whitespace-nowrap">
                      {local_date(data?.createdAt)}
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
      </MainLayout>
    </>
  );
};

export default TILPage;
