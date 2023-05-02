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
import { Lato } from "next/font/google";

const main_forn = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

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
      <HeadSEO title={blog.data?.title} description={blog.data?.description} />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10 `}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div className={`mt-10 flex flex-col gap-y-5 ${main_forn.className}`}>
            {blog.isLoading && <Loading />}

            {blog.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {blog.isSuccess && (
              <div className="relative">
                <div className="prose prose-invert relative flex h-auto">
                  <h1 className="mb-5 text-2xl font-semibold leading-10 sm:text-3xl">
                    {blog.data?.isDraft && <span className="inline-flex mr-2 text-lg my-auto bg-red-400 px-2 py-1">Draft</span>}
                    {blog.data?.title}
                  </h1>
                </div>

                <div className="bg-blog-500 relative z-20 w-fit rounded-md border border-main-400 p-2 sm:mx-auto sm:p-6">
                  <div
                    className="prose-md prose prose-invert w-max prose-pre:rounded-sm prose-pre:bg-main-400"
                    dangerouslySetInnerHTML={{
                      __html: blog.data?.content ?? "",
                    }}
                  />
                </div>

                <div className="flex w-fit flex-wrap items-center gap-3">
                  {blog.data?.Tags.map((tag) => (
                    <span
                      key={tag.title}
                      className="mt-3 bg-main-300 p-px px-2"
                    >
                      {tag.title}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                  <div className="text-sm">
                    Ada saran atau koreksi? Kontak saya di{" "}
                    <a
                      href="http://discordapp.com/users/378907976267726859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Discord
                    </a>
                    .
                  </div>

                  <div className="ml-auto flex items-center gap-1 ">
                    <span>{blog.data?.visit}</span>
                    pembaca
                  </div>
                  <span>|</span>
                  <span className="inline-flex">
                    {local_date(blog.data?.createdAt || new Date())}
                  </span>
                </div>
              </div>
            )}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
