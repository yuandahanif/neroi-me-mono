import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";
import local_date from "~/utils/local_date";
import { useRouter } from "next/router";
import Loading from "~/components/loading/loading";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { Lato } from "next/font/google";
import useReadTime from "~/hooks/useReadTime";
import { twMerge } from "tailwind-merge";
import TriggerWarning from "~/components/trigger_warning/trigger_warning";

const main_font = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

const BlogDetailPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [firstVisit, setFirstVisit] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isRestrictedContent, setIsRestrictedContent] = useState(false);

  const articleRef = useRef<HTMLDivElement>(null);
  const [tableOfContent, setTableOfContent] = useState(new Set<string>());
  const readTime = useReadTime(articleRef);

  const visitMutation = api.blog.incrementVisitById.useMutation();

  const blog = api.blog.getBySlug.useQuery({ slug: String(slug) });

  useEffect(() => {
    if (blog.isSuccess) {
      const data = blog.data;
      if (firstVisit && data?.Tags.find((tag) => tag.title == "NSFW")) {
        setIsRestrictedContent(true);
      }

      if (firstVisit && data?.id != null) {
        setFirstVisit(false);
        timeoutRef.current = setTimeout(() => {
          // visitMutation.mutate({ id: data?.id });
        }, 10000);
      }
    }
  }, [blog.data, blog.isSuccess, firstVisit, visitMutation]);

  useEffect(() => {
    const ref = articleRef.current;
    const contentTableSet = new Set<string>();
    if (blog.isSuccess && ref) {
      ref.querySelectorAll("pre.ql-syntax").forEach((el) => {
        el.classList.add("language-typescript"); // ! is default to Typescript for now
        hljs.highlightElement(el as HTMLElement);
      });

      ref.querySelectorAll("h2").forEach((el) => {
        const id = el.textContent ?? "";
        el.setAttribute("id", `${id?.replaceAll(" ", "-")}`);
        contentTableSet.add(id);
      });

      setTableOfContent(contentTableSet);
    }
  }, [blog.isSuccess]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {isRestrictedContent && (
        <TriggerWarning onAccept={() => setIsRestrictedContent(true)} />
        //turn this on when my head ready
      )}

      <HeadSEO title={blog.data?.title} description={blog.data?.description} />
      <MainLayout>
        <main
          className={`flex grow flex-col items-center justify-start p-2 py-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div
            className={`mt-10  flex flex-col gap-y-5 ${main_font.className}`}
            style={main_font.style}
          >
            {blog.isLoading && <Loading />}

            {blog.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {blog.isSuccess && (
              <div className="">
                <div
                  className={twMerge(
                    "prose prose-2xl prose-invert flex h-auto w-fit max-w-[600px]",
                    isRestrictedContent && "blur-sm"
                  )}
                >
                  <h1 className="text-2xl font-semibold leading-10 sm:text-3xl">
                    {blog.data?.isDraft && (
                      <span className="my-auto mr-2 inline-flex bg-red-400 px-2 py-1 text-lg">
                        Draft
                      </span>
                    )}
                    {blog.data?.title}
                  </h1>
                </div>

                <div className="mt-5 flex flex-col-reverse sm:flex-row">
                  <div className="w-auto">
                    <div className="z-20 w-fit rounded-md border border-main-300 bg-main-600 p-2 sm:mx-auto sm:p-6">
                      <div
                        ref={articleRef}
                        className={twMerge(
                          "blog-content prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400",
                          isRestrictedContent && "blur-sm"
                        )}
                        dangerouslySetInnerHTML={{
                          __html: blog.data?.content ?? "",
                        }}
                      />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {blog.data?.Tags.map((tag) => (
                        <span
                          key={tag.title}
                          className="mt-3 bg-main-300 p-px px-2"
                        >
                          {tag.title}
                        </span>
                      ))}

                      <span className="ml-auto text-sm">
                        waktu baca {readTime} Menit
                      </span>
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

                  <div
                    className="sticky top-16 h-fit p-4"
                    style={{
                      display: tableOfContent.size > 0 ? "block" : "none",
                    }}
                  >
                    <h2 className="mb-2 inline-flex text-lg font-semibold">
                      Daftar isi:
                    </h2>

                    <ul
                      className={twMerge(
                        "h-fit",
                        isRestrictedContent && "blur-sm"
                      )}
                    >
                      {[...tableOfContent.values()].map((ctn) => (
                        <li key={ctn} className="list-inside list-disc">
                          <a
                            className="hover:underline"
                            href={`#${ctn.replaceAll(" ", "-")}`}
                          >
                            {ctn}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
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
