import { Handlee } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import HeadSEO from "~/components/head/headSEO";

const main_font = Handlee({ weight: ["400"], subsets: ["latin"] });

export default function Custom404() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-main-600 text-white">
      <HeadSEO title="Oops" description={"Halaman tidak ditemukan"} />

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

      <motion.div
        animate={{
          scale: [1, 1.1, 1, 1],
          rotate: [0, 5, -2, 0, -5, 0],
        }}
        transition={{ duration: 3, times: [0, 0.2, 1], repeat: Infinity }}
        style={main_font.style}
      >
        <h1 className="text-xl sm:text-4xl">404 - Page Not Found</h1>
      </motion.div>
    </div>
  );
}
