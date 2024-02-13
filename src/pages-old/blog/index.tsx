import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { api } from "~/utils/api";
import Loading from "~/components/loading/loading";
import BlogCard from "~/components/card/blog.card";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import getI18nProps from "~/i18n/getStaticPropsI18n.helper";

export const getStaticProps = getI18nProps;

const itemVariants: Variants = {
  init: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

/**
 * 
 * @deprecated
 */
const BlogIndexPage: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const blog = api.blog.getAll_withPagination.useQuery(
    {},
    {
      refetchOnMount: false,
    }
  );

  useEffect(() => {
    if (blog.isSuccess) {
      setIsOpen(true);
    }
  }, [blog]);

  return (
    <>
      <HeadSEO
        title="Blog"
        description="Tempatku berbagi apa yang ada di dalam
              kepalaku."
      />
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

          <div className="prose prose-invert mt-10 flex">
            {blog.isLoading && <Loading />}
            {blog.isError && (
              <div>
                <span>Oops! Gagal memuat data :(</span>
              </div>
            )}
          </div>

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
            {blog.isSuccess &&
              blog.data?.map((blog) => (
                <motion.div
                  className="w-full"
                  variants={itemVariants}
                  key={blog.id}
                >
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    tags={blog.Tags}
                    visit={blog.visit}
                    createdAt={blog.createdAt}
                  />
                </motion.div>
              ))}
          </motion.div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogIndexPage;
