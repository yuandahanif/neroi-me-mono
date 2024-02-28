"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import local_date from "~/lib/local_date";
import { Skeleton } from "~/components/ui/skeleton";

const itemVariants: Variants = {
  init: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const BlogCardSkeleton: React.FC = () => {
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

const BlogCardContainer: React.FC<{
  blogs: {
    id: string;
    slug: string;
    title: string;
    Tags: { title: string }[];
    createdAt: Date;
    _count: {
      BlogVisits: number;
    };
  }[];
}> = ({ blogs }) => {
  if (blogs.length === 0)
    return (
      <div className="flex flex-grow items-center">
        <span className="text-xs">
          Tidak ada apapun disini, seperti tujuan hidupku.
        </span>
      </div>
    );

  return (
    <motion.div
      className="flex flex-grow flex-col gap-y-8 px-2 lg:px-0"
      initial={"init"}
      animate={["init", "show"]}
      variants={{
        init: {},
        show: {
          transition: {
            type: "spring",
            bounce: 0,
            duration: 1,
            delayChildren: 0.3,
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {blogs?.map(({ slug, Tags, createdAt, id, title, _count }) => (
        <motion.div className="w-full" variants={itemVariants} key={id}>
          <Link
            prefetch={false}
            href={`/blogs/${slug}`}
            className="no-underline hover:underline"
          >
            <span className="prose-md line-clamp-2 font-semibold md:prose-2xl">
              {title}
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {Tags.map((tag) => (
              <span key={tag.title} className="mt-3 bg-main-300 p-px px-2">
                {tag.title}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="ml-auto flex items-center gap-1 text-sm">
              <span>{_count.BlogVisits}</span>
              pembaca
            </div>
            <span>|</span>
            <span className="inline-flex text-sm">{local_date(createdAt)}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export { BlogCardContainer, BlogCardSkeleton };
