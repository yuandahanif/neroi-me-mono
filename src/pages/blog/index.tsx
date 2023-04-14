import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

const BlogDetailPage: NextPage = () => {
  const [greating, setGreating] = useState("");

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow items-center justify-center ${source_Code_Pro.className}`}
        >
          <h1 className="text-5xl">
            {"<"}
            Blog
            {"/>"}
          </h1>

          <div className="mt-8">
            <Link href={"/"}>Home</Link>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
