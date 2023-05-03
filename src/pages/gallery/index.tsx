import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import React from "react";
import GalleryImage from "~/components/gallery/image";
import Link from "next/link";

const MePage: NextPage = () => {
  return (
    <>
      <HeadSEO description="Tempat gambar absurd" title="Gallery" />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-2  py-10`}
        >
          <h1 className="text-5xl">{"<Gallery/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3 className="text-center">Gambar dariku</h3>

            <p>
              Hai, Bolehkah Aku mengambil{" "}
              <Link href={"/art/avatar"} className="no-underline">
                <Redacted>gambar</Redacted>
              </Link>
              mu.
            </p>
          </div>

          <div className="mx-auto mt-10 flex w-full flex-wrap items-center justify-center space-y-8">
            <GalleryImage
              imageSrc="/images/laptop.jpg"
              imageAlt="Laptop"
              description="I use ubuntu BTW"
            />

            <GalleryImage
              imageSrc="/images/reimu.jpg"
              imageAlt="hakurei reimu"
              description=">\\\<"
            />

            <GalleryImage
              imageSrc="/images/classroom.jpg"
              imageAlt="classroom"
              description="Tempat untuk banyak orang, namun rasanya selalu sendiri."
            />

            <GalleryImage
              imageSrc="/images/fortune.jpg"
              imageAlt="fortune"
              description="bando kucing"
            />

            <GalleryImage
              imageSrc="/images/book.jpg"
              imageAlt="book"
              description="me-IRL"
            />

            <GalleryImage
              imageSrc="/images/blahaj.jpg"
              imageAlt="Blåhaj"
              description="My beloved sharkkkk."
            />

            <GalleryImage
              imageSrc="/images/stair.jpg"
              imageAlt="Lorong"
              description="pernah berpikir untuk melakukanya? - (The call of the void)"
            />

            <GalleryImage
              imageSrc="/images/lorong-1.jpg"
              imageAlt="Lorong"
              description="2020, kupikir dunia akan berakhir, mehh."
            />

            <GalleryImage
              imageSrc="/images/sunset.jpg"
              imageAlt="Lorong"
              description={
                <Redacted>Tekan &apos;/&apos; di halaman home. </Redacted>
              }
            />
            <GalleryImage
              imageSrc="/images/comic/comic-1.png"
              imageAlt="Laptop"
              description={<Link href={"/art/komik"}>01</Link>}
            />
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
