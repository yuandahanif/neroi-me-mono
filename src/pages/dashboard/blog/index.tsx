import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import AdminNavigation from "~/components/navigation/admin.navigation";
import { api } from "~/utils/api";
import AdminLayout from "~/layouts/admin.layout";
import Link from "next/link";
import local_date from "~/utils/local_date";

const BlogIndexPage: NextPage = () => {
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

            <div className="flex h-96 w-full flex-col items-center gap-y-5">
              {blog.data?.map((blog) => (
                <div key={blog.id} className=" prose prose-invert ">
                  <Link
                    href={`/dashboard/blog/${blog.slug}`}
                    className="no-underline hover:underline"
                  >
                    <span className="prose-2xl line-clamp-2 font-semibold">
                      {blog.title}
                    </span>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                    className="prose-sm line-clamp-3"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    {blog.Tags.map((tag) => (
                      <span
                        key={tag.title}
                        className="mt-3 bg-main-300 p-px px-2"
                      >
                        {tag.title}
                      </span>
                    ))}

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
