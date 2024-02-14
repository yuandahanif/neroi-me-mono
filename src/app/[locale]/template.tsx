"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
      className="mx-auto flex min-h-screen w-full max-w-screen-2xl grow flex-col text-white"
    >
      {children}
    </motion.main>
  );
}
