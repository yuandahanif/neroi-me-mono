"use client";

import React from "react";
import Link from "next/link";
import local_date from "~/lib/local_date";
import { Skeleton } from "~/components/ui/skeleton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const ProjectDetailContainer: React.FC<{
  projects: {
    id: string;
    title: string;
  }[];
}> = ({ projects }) => {
  const searchParam = useSearchParams();

  return (
    <div className="flex h-full w-full flex-grow gap-2 pb-5">
      <div className="flex w-full max-w-xs flex-col overflow-auto border border-white">
        <ul className="h-full p-1">
          {/* <li className="sticky top-0 bg-main-600 py-2">ongoing</li> */}
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/admin/projects?projestId=${project.id}`}>
                {project.title}
              </Link>
            </li>
          ))}

          {projects.length === 0 && (
            <li className="flex h-full w-full flex-grow items-center justify-center">
              <span className="text-xs">
                Belum ada project untuk ditampilkan.
              </span>
            </li>
          )}
        </ul>
      </div>

      <div className="flex h-auto w-full flex-grow flex-col overflow-auto border border-white p-2">
        {searchParam.has("projectId") ? (
          <section className="">
            <div className="prose prose-invert">
              <h2
                className="inline"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 80%, #0000ff 0%)",
                }}
              >
                Project name Lorem ipsum dolor,
              </h2>
            </div>

            <hr className="my-4" />

            <div className="my-5 flex flex-wrap gap-2 overflow-auto pb-2">
              {[1, 2, 3, 4, 5].map((v) => (
                <Image
                  key={v}
                  src="https://via.placeholder.com/150"
                  alt="project"
                  className="rounded-sm object-contain"
                  width={160}
                  height={160}
                />
              ))}
            </div>

            <div className="flex w-full">
              <div>
                <a
                  className="text-blue-500 hover:underline"
                  href="http://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tautan
                </a>
              </div>

              <div className="prose prose-invert ml-auto flex gap-5">
                <h4 className="inline-block font-bold">
                  Status: <span className="font-normal">Ongoing</span>
                </h4>
                <h4 className="inline-block font-bold">
                  Dibuat: <span className="font-normal">21 Juni 2024</span>
                </h4>
              </div>
            </div>

            <hr className="my-4" />

            <div className="prose prose-invert">
              <h4>Deskripsi</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores magnam in ut facilis iure veniam asperiores quae
                quisquam aspernatur laborum, rerum libero, sapiente eaque quasi
                sequi, nesciunt praesentium eum hic! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dolores magnam in ut facilis iure
                veniam asperiores quae quisquam aspernatur laborum, rerum
                libero, sapiente eaque quasi sequi, nesciunt praesentium eum
                hic! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores magnam in ut facilis iure veniam asperiores quae
                quisquam aspernatur laborum, rerum libero, sapiente eaque quasi
                sequi, nesciunt praesentium eum hic! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dolores magnam in ut facilis iure
                veniam asperiores quae quisquam aspernatur laborum, rerum
                libero, sapiente eaque quasi sequi, nesciunt praesentium eum
                hic! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores magnam in ut facilis iure veniam asperiores quae
                quisquam aspernatur laborum, rerum libero, sapiente eaque quasi
                sequi, nesciunt praesentium eum hic!
              </p>
            </div>
          </section>
        ) : (
          <div className="flex h-full w-full flex-grow items-center justify-center">
            <span className="text-xs">Pilih project di sebelah kiri.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectDetailContainer };
