import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";
import local_date from "~/utils/local_date";
import Link from "next/link";
import Loading from "~/components/loading/loading";

const BlogIndexPage: NextPage = () => {
  const blog = api.blog.getAll.useQuery(
    {},
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div className="mt-10 flex flex-col gap-y-8">
            {blog.isLoading && <Loading />}
            {blog.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {blog.isSuccess && blog.data.length == 0 && (
              <div>
                <span>Tidak ada data</span>
              </div>
            )}

            {blog.isSuccess &&
              blog.data?.map((blog) => (
                <div key={blog.id} className=" prose prose-invert ">
                  <Link
                    href={`/blog/${blog.slug}`}
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
        </main>
      </MainLayout>
    </>
  );
};

export default BlogIndexPage;
