import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";
import local_date from "~/utils/local_date";
import { useRouter } from "next/router";
import Loading from "~/components/loading/loading";
import hljs from "highlight.js";
import { useEffect } from "react";

const BlogDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const visitmutation = api.blog.incrementVisitById.useMutation();
  const blog = api.blog.getBySlug.useQuery(
    { slug: String(slug) },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data?.id != null) {
          visitmutation.mutate({ id: data?.id });
        }
      },
    }
  );

  useEffect(() => {
    if (blog.isSuccess) {
      document.querySelectorAll("pre.ql-syntax").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });
    }
  }, [blog.isSuccess]);

  return (
    <>
      <HeadSEO title={blog.data?.title} description={blog.data?.title} />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div className="mt-10 flex flex-col gap-y-5">
            {blog.isLoading && <Loading />}

            {blog.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            <div className=" prose prose-invert ">
              <span className="prose-2xl mb-5 line-clamp-2 font-semibold">
                {blog.data?.title}
              </span>

              <div
                dangerouslySetInnerHTML={{ __html: blog.data?.content ?? "" }}
                className="prose-sm "
              />

              <div className="flex flex-wrap items-center gap-3">
                {blog.data?.Tags.map((tag) => (
                  <span key={tag.title} className="mt-3 bg-main-300 p-px px-2">
                    {tag.title}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="ml-auto flex items-center gap-1 text-sm">
                  <span>{blog.data?.visit}</span>
                  pembaca
                </div>
                <span>|</span>
                <span className="inline-flex text-sm">
                  {local_date(blog.data?.createdAt || new Date())}
                </span>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
