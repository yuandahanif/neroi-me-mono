import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { api } from "~/utils/api";

const DashboardindexPage: NextPage = () => {
  const blog = api.blog.getAll.useQuery({});

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <div className="flex flex-col gap-y-5">
            {blog.data?.map((blog) => (
              <div key={blog.id} className=" prose prose-invert ">
                <span className="prose-xl line-clamp-2">{blog.title}</span>
                <div className="prose-sm line-clamp-3">{blog.content}</div>
              </div>
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default DashboardindexPage;
