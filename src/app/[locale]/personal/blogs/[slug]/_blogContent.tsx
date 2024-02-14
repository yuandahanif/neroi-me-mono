"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import local_date from "~/utils/local_date";
import useReadTime from "~/hooks/useReadTime";
import TriggerWarning from "~/components/trigger_warning/trigger-warning";
import updateBlogVisitCount from "./_updateBlogVisitCountAction";

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
                {blog.isDraft && (
                  <span className="my-auto mr-2 inline-flex bg-red-400 px-2 py-1 text-lg">
                    Draft
                  </span>
                )}
                {blog?.title}
              </h1>
            </div>

            <div
              ref={articleRef}
              className="blog-content prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400 prose-pre:px-2"
            >
              {children}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {blog?.Tags.map((tag) => (
              <span key={tag.title} className="mt-3 bg-main-300 p-px px-2">
                {tag.title}
              </span>
            ))}

            <span className="ml-auto text-sm">waktu baca {readTime} Menit</span>
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
              <span>{blog?._count.BlogVisits}</span>
              pembaca
            </div>
            <span>|</span>
            <span className="inline-flex">
              {local_date(blog?.createdAt || new Date())}
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

          <ul className={twMerge("h-fit", isRestrictedContent && "blur-sm")}>
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

export default BlogContent;
