import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import React, { useEffect, useState } from "react";

interface Props {
  imageSrc: string;
  imageAlt?: string;
  description: string;
}

const CustomImage: React.FC<Props> = ({ imageSrc, description }) => {
  const [dilateRadius, setDilateRadius] = useState(0);
  const cycleDilateRadius = () => {
    setDilateRadius((dilateRadius) => {
      return dilateRadius <= 8 ? dilateRadius + 1 : 0;
    });
  };

  return (
    <div className="relative mx-auto h-96 w-auto">
      <svg className="h-full relative w-full bg-slate-400 flex justify-center items-center">
        <filter id={imageSrc}>
          <feMorphology
            in="SourceGraphic"
            operator="dilate"
            radius={dilateRadius}
          ></feMorphology>
        </filter>
        <image
          xlinkHref={imageSrc}
          filter={`url(#${imageSrc})`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            cycleDilateRadius();
          }}
          className="h-full w-auto cursor-pointer object-contain object-center"
        ></image>
      </svg>

      <div className="prose prose-sm prose-invert mx-auto mt-2 text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

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

          <div className="mt-10  w-full space-y-12">
            <CustomImage
              imageSrc="/images/stair.jpg"
              imageAlt="Lorong"
              description="Pandemi, 2020, kupikir dunia akan berakhir, mehh."
            />
            <CustomImage
              imageSrc="/images/lorong-1.jpg"
              imageAlt="Lorong"
              description="Pandemi, 2020, kupikir dunia akan berakhir, mehh."
            />
            <CustomImage
              imageSrc="/images/sunset.jpg"
              imageAlt="Lorong"
              description="Saat hidup semudah mengerjakan tugas."
            />
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
