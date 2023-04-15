import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import local_date from "~/utils/local_date";

const TILS = [
  {
    id: "1",
    date: "2023-04-14T17:57:36.397Z",
    content: `In React there are 2 way to display an image
      first using /folder_name/file_name  ->  is pointing to /public folder on react.
      second is to import it manually if the assets is on src folder`,
  },
  {
    id: "2",
    date: "2023-04-13T17:57:36.397Z",
    content:
      "CNAME is to point a domain to subdomain. And A record is to point a domain name to v4 Ip address.",
  },
  {
    id: "3",
    date: "2023-04-13T17:57:36.397Z",
    content: `Bagaimana rasanya terperangkap didalam kepalamu? sendiri`,
  },
  {
    id: "4",
    date: "2023-04-13T17:57:36.397Z",
    content:
      "CNAME is to point a domain to subdomain. And A record is to point a domain name to v4 Ip address.",
  },
  {
    id: "5",
    date: "2023-04-13T17:57:36.397Z",
    content:
      "CNAME is to point a domain to subdomain. And A record is to point a domain name to v4 Ip address.",
  },
];

const TILPage: NextPage = () => {
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
              {TILS.map((data) => (
                <div key={data.id} className="mb-8 flex w-full flex-col">
                  <div className="py-0">
                    <div className="prose-md">{data.content}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-px bg-white w-full"/>
                    <span className="prose-sm ml-auto inline-flex whitespace-nowrap">
                      {local_date(data.date)}
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
