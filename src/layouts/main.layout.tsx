import { type ReactNode } from "react";

import { Source_Code_Pro } from "next/font/google";
const source_Code_Pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  preload: true,
});

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={`w-full bg-main-600`} style={source_Code_Pro.style}>
      <div className="mx-auto min-h-screen w-full max-w-screen-2xl grow bg-main-600 text-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
