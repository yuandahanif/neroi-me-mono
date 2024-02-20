"use client";

import { Handlee } from "next/font/google";
import { motion } from "framer-motion";

const main_font = Handlee({ weight: ["400"], subsets: ["latin"] });

export default function NotFoundAnimation() {
  return (
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
  );
}
