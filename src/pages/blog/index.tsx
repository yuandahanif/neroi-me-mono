import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";

const BlogDetailPage: NextPage = () => {
  const blog = api.blog.getAll.useQuery({});

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            {/* <h3 className="text-center">Tulisan acak</h3> */}
          </div>

          <div className="flex flex-col gap-y-5">
            {blog.data?.map((blog) => (
              <div key={blog.id} className=" prose prose-invert ">
                <span className="prose-2xl line-clamp-2 font-semibold">
                  {blog.title}
                </span>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  className="prose-sm line-clamp-3"
                />

                <div>{}</div>
              </div>
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
