"use client";

import React, { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import local_date from "~/utils/local_date";
import Link from "next/link";

const itemVariants: Variants = {
  init: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const BlogCardContainer: React.FC<{
  blogs: {
    id: string;
    slug: string;
    title: string;
    Tags: { title: string }[];
    visit: number;
    createdAt: Date;
  }[];
}> = ({ blogs }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-y-8 px-2 lg:px-0"
      initial={false}
      animate={isOpen ? "show" : "init"}
      variants={{
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
      {blogs?.map(({ slug, Tags, createdAt, id, title, visit }) => (
        <motion.div
          className="prose prose-invert w-full"
          variants={itemVariants}
          key={id}
        >
          <Link href={`/blogs/${slug}`} className="no-underline hover:underline">
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
              <span>{visit}</span>
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

export default BlogCardContainer;
