import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";

import { Source_Code_Pro } from "next/font/google";
const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    out: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
    in: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`w-full overflow-hidden bg-main-600 ${source_Code_Pro.className}`}
    >
      <motion.div
        key={asPath}
        variants={!shouldReduceMotion ? variants : undefined}
        initial="out"
        animate="in"
        exit="out"
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="mx-auto min-h-screen max-w-screen-2xl bg-main-600 text-white">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default MainLayout;
