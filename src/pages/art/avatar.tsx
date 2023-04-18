import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import ImageAvatar from "~/components/images/imageAvatar";

const ArtAvatar: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow items-end justify-center p-10`}
        >
          <ImageAvatar />
        </main>
      </MainLayout>
    </>
  );
};

export default ArtAvatar;
