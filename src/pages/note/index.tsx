import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import local_date from "~/utils/local_date";
import { api } from "~/utils/api";
import Loading from "~/components/loading/loading";

const TILPage: NextPage = () => {
  const notes = api.note.getAll.useQuery({});

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Note/>"}</h1>
          <MainNavigation />

          <div className="mt-10 flex w-full flex-col gap-7">
            <h3 className="mx-auto text-2xl">Catatan singkat</h3>

            <div className="prose prose-sm prose-invert mx-auto flex-col gap-y-20 lg:prose-lg">
              {notes.isLoading && <Loading />}

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
      </MainLayout>
    </>
  );
};

export default TILPage;
