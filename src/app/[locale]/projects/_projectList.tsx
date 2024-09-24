"use client";

import React from "react";
import Link from "next/link";
import local_date from "~/lib/local_date";
import { Skeleton } from "~/components/ui/skeleton";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { $Enums } from "@prisma/client";
import { env } from "~/env";
import { cn } from "~/lib/utils";

const ProjectListSkeleton: React.FC = () => {
  return (
    <div className="flex w-full flex-grow flex-col gap-2">
      <Skeleton className="h-[2em] w-full" />
      <div className="flex gap-2">
        {[1, 2, 3].map((_) => (
          <Skeleton key={_} className="h-[1.5em] w-[3em]" />
        ))}
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-[1em] w-1/3" />
      </div>
    </div>
  );
};

const ProjectListContainer: React.FC<{}> = () => {
  const searchParam = useSearchParams();
  const projectId = searchParam.get("projectId");

  const { data: projects } = useQuery<
    {
      id: string;
      title: string;
    }[]
  >({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("/api/projects")
        .then((res) => res.json())
        .then((data) => data),
  });

  const { data: projectsById } = useQuery<{
    id: string;
    title: string;
    description: string | null;
    url: string | null;
    status: $Enums.Project_status | null;
    createdAt: Date;
    updatedAt: Date;
    File: {
      id: string;
      key: string;
      type: string;
      createdAt: Date;
      updatedAt: Date;
    }[];
  }>({
    queryKey: ["projects", projectId],
    queryFn: () =>
      fetch(`/api/projects?projectId=${projectId}`)
        .then((res) => res.json())
        .then((data) => data),
    enabled: !!projectId,
  });

  console.log(searchParam.get("projectId"));

  return (
    <div className="flex h-full w-full flex-grow gap-2 pb-5">
      <div className="flex w-full max-w-xs flex-col overflow-auto border border-white">
        <ul className="h-full p-1">
          {/* <li className="sticky top-0 bg-main-600 py-2">ongoing</li> */}
          {projects?.map((project) => (
            <li
              key={project.id}
              className={cn(
                project.id == projectId ? "font-semibold underline" : "",
                "line-clamp-1 text-md"
              )}
            >
              <Link href={`/projects?projectId=${project.id}`}>
                {project.title}
              </Link>
            </li>
          ))}

          {projects?.length === 0 && (
            <li className="flex h-full w-full flex-grow items-center justify-center">
              <span className="text-xs">
                Belum ada project untuk ditampilkan.
              </span>
            </li>
          )}
        </ul>
      </div>

      <div className="flex h-auto w-full flex-grow flex-col overflow-auto border border-white p-2">
        {!!projectsById ? (
          <section className="">
            <div className="prose prose-invert">
              <h2
                className="inline"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 80%, #0000ff 0%)",
                }}
              >
                {projectsById.title}
              </h2>
            </div>

            <hr className="my-4" />

            <div className="my-5 flex flex-wrap items-start gap-2 overflow-auto pb-2">
              {projectsById.File.map((v) => (
                <Image
                  key={v.id}
                  src={`${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${v.key}`}
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
                  href={projectsById.url ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tautan
                </a>
              </div>

              <div className="prose prose-invert ml-auto flex gap-5">
                <h4 className="inline-block font-bold">
                  Status:{" "}
                  <span className="font-normal">{projectsById.status}</span>
                </h4>
                <h4 className="inline-block font-bold">
                  Dibuat:{" "}
                  <span className="font-normal">
                    {local_date(projectsById.createdAt, {
                      timeStyle: "short",
                      dateStyle: "short",
                    })}
                  </span>
                </h4>
              </div>
            </div>

            <hr className="my-4" />

            <div className="prose prose-invert">
              <h4>Deskripsi</h4>
              <p>{projectsById.description}</p>
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

export { ProjectListContainer, ProjectListSkeleton };
