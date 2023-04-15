import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import React from "react";
import GalleryImage from "~/components/gallery/image";

const MePage: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-5xl">{"<Gallery/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3 className="text-center">Gambar dariku</h3>

            <p>
              Hai, Bolehkah Aku mengambil <Redacted>gambar</Redacted>mu.
            </p>
          </div>

          <div className="mt-10  w-full space-y-8">
            <GalleryImage
              imageSrc="/images/stair.jpg"
              imageAlt="Lorong"
              description="Kita ingin melakukanya."
            />
            <GalleryImage
              imageSrc="/images/lorong-1.jpg"
              imageAlt="Lorong"
              description="Pandemi, 2020, kupikir dunia akan berakhir, mehh."
            />
            <GalleryImage
              imageSrc="/images/sunset.jpg"
              imageAlt="Lorong"
              description={
                <Redacted>Saat hidup semudah mengerjakan tugas.</Redacted>
              }
            />
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
