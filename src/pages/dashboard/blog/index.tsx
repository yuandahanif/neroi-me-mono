import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import Link from "next/link";
import local_date from "~/utils/local_date";
import Loading from "~/components/loading/loading";

const BlogIndexPage: NextPage = () => {
  const blogs = api.blog.getAll_withPagination.useQuery({ inDraft: true });
  return (
    <>
      <HeadSEO />
      <AdminLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>

          <AdminNavigation />

          <div className="mt-10 flex w-full flex-col">
            <div className="mb-10 flex justify-center">
              <Link
                href={`/dashboard/blog/add`}
                className="no-underline hover:underline"
              >
                <span className="prose-2xl line-clamp-2 font-semibold">
                  Tambah
                </span>
              </Link>
            </div>

            {blogs.isLoading && <Loading />}
            {blogs.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {blogs.isSuccess && blogs.data.length == 0 && (
              <div>
                <span>Tidak ada data</span>
              </div>
            )}

            <div className="flex  w-full flex-col items-center gap-y-5 overflow-auto">
              {blogs.data?.map((blog) => (
                <div key={blog.id} className=" prose prose-invert w-full">
                  <Link
                    href={`/dashboard/blog/${blog.id}/edit`}
                    className="inline-flex items-center gap-2 no-underline "
                  >
                    {blog.isDraft && (
                      <span className="text-xs hover:no-underline">
                        [Draft]
                      </span>
                    )}
                    <span className="prose-2xl line-clamp-2 font-semibold hover:underline">
                      {blog.title}
                    </span>
                  </Link>

                  <div className="flex flex-wrap items-center gap-3">
                    {blog.Tags.map((tag) => (
                      <span
                        key={tag.title}
                        className="mt-3 bg-main-300 p-px px-2"
                      >
                        {tag.title}
                      </span>
                    ))}

                    <div className="ml-auto flex items-center gap-1 text-sm">
                      <span>{blog?.visit}</span>
                      pembaca
                    </div>

                    <span className="ml-auto inline-flex text-sm">
                      {local_date(blog.createdAt)}
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

export default BlogIndexPage;
