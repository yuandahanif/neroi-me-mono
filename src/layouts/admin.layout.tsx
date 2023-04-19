import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/router";

import { Source_Code_Pro } from "next/font/google";
import { useSession } from "next-auth/react";
const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const AdminLayout: React.FC<Props> = ({ children }) => {
  useSession({ required: true });
  return (
    <div
      className={`w-full overflow-hidden bg-main-600 ${source_Code_Pro.className}`}
    >
      <div className="mx-auto min-h-screen max-w-screen-2xl bg-main-600 text-white">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
