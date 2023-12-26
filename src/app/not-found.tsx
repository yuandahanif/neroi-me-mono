import { type Metadata } from "next";
import Image from "next/image";
import NotFoundAnimation from "./_errors/not-found-animation";

export const metadata: Metadata = {
  title: "Oops",
  description: "Halaman tidak ditemukan",
};

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-main-600 text-white">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <Image
          src="/images/tenta/tenta-2.png"
          alt="tentacle 2"
          width={250}
          height={250}
          className="hidden sm:block"
        />
        <Image
          src="/images/tenta/tenta-3.png"
          alt="tentacle 3"
          width={250}
          height={250}
        />
        <Image
          src="/images/tenta/tenta-1.png"
          alt="tentacle 1"
          width={250}
          height={250}
          className="hidden sm:block"
        />
      </div>

      <NotFoundAnimation />
    </div>
  );
}
