import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import React from "react";
import GalleryImage from "~/components/gallery/image";
import Link from "next/link";

const images: {
  src: string;
  alt: string;
  description: string | React.ReactElement;
  slideshow?: {
    src: string;
    alt: string;
    description: string | React.ReactElement;
  }[];
}[] = [
  {
    src: "/images/laptop.jpg",
    alt: "Laptop",
    description: "I use ubuntu BTW",
  },
  {
    src: "/images/one-room-of-happiness.jpg",
    alt: "one room of happiness",
    description: "I, Anyway . . .",
  },
  {
    src: "/images/reimu.jpg",
    alt: "hakurei reimu",
    description: "re-reimu >\\<",
  },
  {
    src: "/images/over-dose.jpg",
    alt: "Needy Streamer Overload",
    description: "Over",
  },
  {
    src: "/images/classroom.jpg",
    alt: "classroom",
    description: "Tempat untuk banyak orang, namun rasanya selalu sendiri.",
  },
  {
    src: "/images/fortune.jpg",
    alt: "fortune",
    description: "bando kucing",
  },
  {
    src: "/images/book.jpg",
    alt: "book",
    description: "me-IRL",
  },
  {
    src: "/images/blahaj.jpg",
    alt: "Blåhaj",
    description: "My beloved sharkkkk.",
  },
  {
    src: "/images/stair.jpg",
    alt: "Lorong",
    description: "Do it! - (call of the void)",
  },
  {
    src: "/images/lorong-1.jpg",
    alt: "Lorong",
    description: "2020, kupikir dunia akan berakhir, mehh.",
  },
  {
    src: "/images/sunset.jpg",
    alt: "Lorong",
    description: <Redacted>Tekan &apos;/&apos; di halaman home. </Redacted>,
  },
  {
    src: "/images/comic/comic-1.png",
    alt: "Entahlah",
    description: (
      <Link href={"/art/komik"} className="animate-pulse">
        01
      </Link>
    ),
  },
  {
    src: "https://media.discordapp.net/attachments/1130127766021472296/1136725296704397412/cover-b.jpg?width=598&height=449",
    alt: "03-08-2023",
    description: "03-08-2023",
    slideshow: [
      {
        src: "https://media.discordapp.net/attachments/1130127766021472296/1136725296704397412/cover-b.jpg?width=598&height=449",
        alt: "03-08-2023",
        description: "03-08-2023",
      },
      {
        src: "https://media.discordapp.net/attachments/1130127766021472296/1136724705466921020/hand-sand.jpg?width=336&height=449",
        alt: "hand-sand",
        description: "hand",
      },
      {
        src: "https://media.discordapp.net/attachments/1130127766021472296/1136724706297397368/night-1.jpg?width=598&height=449",
        alt: "night-1",
        description: "night 1",
      },
    ],
  },
];

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

          <div className="prose prose-invert mt-10 lg:prose-sm">
            <h3 className="text-center">
              Selamat datang di gallery, tempatku berbagi gambar acak untuk
              kesenangan{" "}
              <Link href={"/art/avatar"} className="no-underline">
                pribadi
              </Link>
              .
            </h3>
          </div>

          <div className="mx-auto mt-10 flex w-full flex-wrap items-end justify-evenly gap-y-8 px-2 lg:px-0">
            {images.map((image) => (
              <GalleryImage
                key={image.src}
                imageSrc={image.src}
                imageAlt={image.alt}
                description={image.description}
                slideshow={image.slideshow}
              />
            ))}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
