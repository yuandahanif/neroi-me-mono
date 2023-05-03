import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const ComicPanel: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <div className={twMerge("relative mx-auto h-96 w-96", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-bottom"
      />
    </div>
  );
};

const ArtAvatar: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="relative flex">
          <main
            className={`flex min-h-screen grow flex-col justify-center p-10`}
          >
            <ComicPanel src="/images/comic/comic-1.png" alt="01" />
            <ComicPanel src="/images/comic/comic-2.png" alt="02" />
            <ComicPanel src="/images/comic/comic-3.png" alt="03" />
            <ComicPanel
              src="/images/comic/comic-4.png"
              alt="04"
              className="h-24"
            />
            <ComicPanel
              src="/images/comic/comic-4-.gif"
              alt="04-gif"
              className="h-52 w-52"
            />
            <ComicPanel
              src="/images/comic/comic-5.png"
              alt="05"
              className="h-32 w-96"
            />
            <ComicPanel
              src="/images/comic/comic-6.png"
              alt="06"
              className="h-32 w-32"
            />
            <ComicPanel src="/images/comic/comic-7.png" alt="07" />

            <ComicPanel
              src="/images/comic/comic-8.png"
              alt="08"
              className="h-20 w-96"
            />

            <ComicPanel
              src="/images/comic/comic-9.png"
              alt="09"
              className="h-80 w-96"
            />

            <ComicPanel
              src="/images/comic/comic-10.png"
              alt="10"
              className="h-80 w-96"
            />

            <ComicPanel
              src="/images/comic/comic-11.png"
              alt="11"
              className="h-80 w-96"
            />

            <ComicPanel
              src="/images/comic/comic-12.png"
              alt="12"
              className="h-96 mt-10 w-96"
            />
          </main>
        </div>
      </MainLayout>
    </>
  );
};

export default ArtAvatar;
