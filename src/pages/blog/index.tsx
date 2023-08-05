import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";
import Loading from "~/components/loading/loading";
import BlogCard from "~/components/card/blog.card";
import Link from "next/link";

const BlogIndexPage: NextPage = () => {
  const blog = api.blog.getAll_withPagination.useQuery(
    {},
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <HeadSEO title="Blog" description="Tempat curhat dan tulisan acak." />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          {/* <div className="lg:prose-md prose prose-sm prose-invert mt-10 px-2 font-semibold lg:px-0">
            <p className="text-center text-red-500">
              Maaf, konten saat ini sedang bersifat personal sebagai sarana
              untuk terapi terkait masalah kesehatan mental yang sedang dimiliki
              oleh penulis. Mohon untuk tidak terlalu serius dalam menaggapi
              konten yang ada, Terimakasih.
            </p>

            <p className=" text-center">
              Psst, jangan lupa untuk cek halaman{" "}
              <Link href={"/project"}>Project</Link> atau{" "}
              <Link href={"/lab"}>Lab</Link> untuk konten lainnya.
            </p>

            <hr />
          </div> */}

          <div className="prose prose-invert mt-10 lg:prose-sm">
            <h3 className="text-center">
              Selamat datang di blog, tempatku berbagi apa yang ada di dalam
              kepalaku.
            </h3>
          </div>

          <div className="mt-10 flex flex-col gap-y-8 px-2 lg:px-0">
            {blog.isLoading && <Loading />}
            {blog.isError && (
              <div>
                <span>Error</span>
              </div>
            )}

            {blog.isSuccess && blog.data.length == 0 && (
              <div>
                <span>Tidak ada data</span>
              </div>
            )}

            {blog.isSuccess &&
              blog.data?.map((blog) => (
                <BlogCard
                  key={blog.id}
                  slug={blog.slug}
                  title={blog.title}
                  tags={blog.Tags}
                  visit={blog.visit}
                  createdAt={blog.createdAt}
                />
              ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogIndexPage;
