import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import local_date from "~/utils/local_date";

const NoteIndexPage: NextPage = () => {
  const notes = api.note.getAll.useQuery({}, {});

  return (
    <>
      <HeadSEO />
      <AdminLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <AdminNavigation />

          <div className="mt-10 flex w-full">
            <div className="prose prose-sm prose-invert mx-auto flex-col gap-y-20 lg:prose-lg">
              {notes.isSuccess &&
                notes.data.map((data) => (
                  <div key={data.id} className="mb-8 flex w-full flex-col p-4">
                    <div className="py-0">
                      <div className="prose-md">{data.content}</div>
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
      </AdminLayout>
    </>
  );
};

export default NoteIndexPage;
