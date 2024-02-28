"use client";

import React, { useEffect, useRef, useState } from "react";

import local_date from "~/lib/local_date";
import useReadTime from "~/hooks/useReadTime";
import TriggerWarning from "~/components/trigger_warning/trigger-warning";
import updateBlogVisitCount from "./_updateBlogVisitCountAction";
import { Skeleton } from "~/components/ui/skeleton";

const BlogContentSkeleton: React.FC = () => {
  return (
    <>
      <div className="flex w-fit flex-grow flex-col-reverse items-center justify-center sm:flex-row sm:items-start">
        <div className="w-fit rounded-md border border-main-300 p-2 sm:p-6">
          <div
            style={{ maxWidth: "65ch" }}
            className="flex w-[65ch] flex-grow flex-col gap-3 "
          >
            <Skeleton className="mb-10 h-10 w-full" />
            <Skeleton className="h-72 w-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>

          <div className="mt-3 flex w-full flex-wrap items-center justify-stretch gap-3">
            {[1, 2, 3].map((_) => (
              <Skeleton key={_} className="h-[1.5em] w-[3em]" />
            ))}

            <Skeleton className="ml-auto h-[1em] w-[3em]" />
          </div>
        </div>

        <div className="sticky top-16 h-fit p-4">
          <h2 className="mb-2 inline-flex text-lg font-semibold">
            Daftar isi:
          </h2>

          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4].map((ctn) => (
              <Skeleton className="h-[1.5em] w-40" key={ctn} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const BlogContent = ({
  blog,
  ip,
  children,
}: React.PropsWithChildren<{
  blog: {
    id: string;
    title: string;
    Tags: { title: string }[];
    createdAt: Date;
    isDraft?: boolean | null;
    _count: { BlogVisits: number };
  };
  ip: string;
}>) => {
  const isRestrictedContent =
    blog?.Tags.findIndex((tag) => tag.title == "NSFW") > -1;

  const articleRef = useRef<HTMLDivElement>(null);
  const [tableOfContent, setTableOfContent] = useState(new Set<string>());
  const readTime = useReadTime(articleRef);

  useEffect(() => {
    async function updateVisitCount() {
      void (await updateBlogVisitCount(blog.id, ip));
    }

    void updateVisitCount();
  }, []);

  useEffect(() => {
    const ref = articleRef.current;
    const contentTableSet = new Set<string>();

    if (ref) {
      ref.querySelectorAll("h2").forEach((el) => {
        const id = el.textContent ?? "";
        el.setAttribute("id", `${id?.replaceAll(" ", "-")}`);
        contentTableSet.add(id);
      });

      setTableOfContent(contentTableSet);
    }
  }, []);

  return (
    <>
      <TriggerWarning isDefaultOpen={isRestrictedContent} />
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="w-auto">
          <div className="z-20 w-fit rounded-md border border-main-300 p-2 sm:mx-auto sm:p-6">
            <div className="prose prose-2xl prose-invert mb-10 flex h-auto w-fit max-w-[600px]">
              <h1 className="text-2xl font-semibold leading-10 sm:text-3xl">
                {blog?.title}
              </h1>
            </div>

            <div
              ref={articleRef}
              className="blog-content prose prose-sm prose-invert w-full sm:prose-base prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400 prose-pre:px-2"
            >
              {children}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {blog?.Tags.map((tag) => (
              <span
                key={tag.title}
                className="mt-3 bg-main-300 p-px px-2 text-xs sm:text-base"
              >
                {tag.title}
              </span>
            ))}

            <span className="ml-auto text-xs sm:text-sm">
              waktu baca {readTime} Menit
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <p>
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
            </p>

            <div className="flex flex-wrap items-center gap-x-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1 sm:ml-auto">
                {blog._count.BlogVisits} pembaca
              </span>
              <span className="inline-flex">
                {" "}
                | {local_date(blog.createdAt)}
              </span>
            </div>
          </div>
        </div>

        <div
          className="mb-5 h-fit p-2 sm:sticky sm:top-16 sm:mb-0 sm:p-4"
          style={{
            display: tableOfContent.size > 0 ? "block" : "none",
          }}
        >
          <h2 className="mb-2 inline-flex text-base font-semibold sm:text-lg">
            Daftar isi:
          </h2>

          <ul className="h-fit text-sm sm:text-base">
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
    </>
  );
};

export { BlogContent, BlogContentSkeleton };
