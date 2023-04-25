import Link from "next/link";
import React from "react";
import local_date from "~/utils/local_date";

interface Props {
  slug: string;
  title: string;
  tags: { title: string }[];
  visit: number;
  createdAt: Date;
}

const BlogCard: React.FC<Props> = ({
  createdAt,
  slug,
  tags,
  title,
  visit,
}) => {
  return (
    <div className=" prose prose-invert">
      <Link href={`/blog/${slug}`} className="no-underline hover:underline">
        <span className="prose-md line-clamp-2 font-semibold md:prose-2xl">
          {title}
        </span>
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
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
    </div>
  );
};

export default BlogCard;
