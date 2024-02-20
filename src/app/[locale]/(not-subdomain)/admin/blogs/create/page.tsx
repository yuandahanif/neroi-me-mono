import { type Metadata } from "next";
import { Lato } from "next/font/google";
import { prisma } from "~/server/db";

import AdminNavigation from "~/components/navigation/admin.navigation";
import CreateBlogForm from "./form";

const main_font = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

export const metadata: Metadata = {
  title: "Not Found",
  description: "Just like my purpose, this page is non-existent.",
};

const BlogDetailPage: React.FC = () => {
  return (
    <div className={`flex grow flex-col items-center justify-start p-2 py-10`}>
      <h1 className="text-5xl">{"<Blog/>"}</h1>
      <AdminNavigation />

      <div
        className={`mt-5 flex w-full flex-grow justify-center ${main_font.className}`}
        style={main_font.style}
      >
        <CreateBlogForm />
      </div>
    </div>
  );
};

export default BlogDetailPage;
