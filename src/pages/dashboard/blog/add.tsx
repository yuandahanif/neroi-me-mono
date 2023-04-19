import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";

const BlogAddPage: NextPage = () => {
  const blog = api.blog.getAll.useQuery({}, {});

  return (
    <>
      <HeadSEO />
      <AdminLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <AdminNavigation />

          <div className="mt-10 flex w-full flex-col"></div>
        </main>
      </AdminLayout>
    </>
  );
};

export default BlogAddPage;
