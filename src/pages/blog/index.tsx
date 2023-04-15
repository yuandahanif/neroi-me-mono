import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";

const BlogDetailPage: NextPage = () => {
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
            <h3 className="text-center">Tulisan acak</h3>

            {/* <p>
              Tulisan panjang dariku.
            </p> */}
          </div>

          <div className="mt-10  w-full space-y-8"></div>
        </main>
      </MainLayout>
    </>
  );
};

export default BlogDetailPage;
