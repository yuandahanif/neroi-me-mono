"use client";

import type { FC } from "react";
import { trpc } from "~/trpc";

const BlogComp: FC = () => {
  const blog = trpc.blog.getAll.useQuery({});
  return (
    <ul>
      {blog.data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default BlogComp;
