import { type Metadata } from "next";
import React from "react";
import Image from "~/components/gallery/image";

import MainNavigation from "~/components/navigation/main.navigation";
import { getI18n } from "~/locales/server";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Some are mine, some are not (see credits for the original owner). Enjoy.",
};

const images: {
  src: string;
  alt: string;
  description: string;
}[] = [
  {
    src: "https://safebooru.org//samples/4508/sample_d321a086a82aaed0cc0aae472986fa145650598c.jpg?4701241",
    alt: "Gura :3",
    description:
      "Me when, I mean you when you see me. I mean wearing my shark costume. No it's called irony. I mean im not realy a shark. I mean . . . I am not realy into that. Trust me.",
  },
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
    src: "/images/blahaj.jpg",
    alt: "Blåhaj",
    description: "My beloved sharkkkk.",
  },
  {
    src: "/images/stair.jpg",
    alt: "Jump? y/n",
    description: "Do it! - (call of the void)",
  },
  {
    src: "/images/lorong-1.jpg",
    alt: "so dark here!",
    description: "2020, kupikir dunia akan berakhir, mehh.",
  },
  {
    src: "/images/sunset.jpg",
    alt: "this font is just another font. try copy paste it.",
    description: "I'm not sure what to say.",
  },
  {
    src: "/images/comic/comic-1.png",
    alt: "Please just Don't",
    description: 'I just want to say "Please just Don\'t"',
  },
];

const MediaPage: React.FC = async () => {
  const t = await getI18n();

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start py-10 `}
    >
      <h1 className="text-5xl">{"<Media/>"}</h1>
      <MainNavigation />

      <div className="prose prose-invert mt-10">
        <h3 className="text-center text-sm sm:text-xl">{t("MesiaSubtitle")}</h3>
      </div>

      <div className="mx-auto mt-10 flex w-full flex-wrap items-end justify-center gap-1">
        {images.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            description={image.description}
            className="flex w-full flex-col items-center sm:w-fit"
          />
        ))}
      </div>
    </div>
  );
};

export default MediaPage;
