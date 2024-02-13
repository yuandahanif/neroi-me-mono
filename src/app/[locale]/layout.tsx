import { type PropsWithChildren, type FC } from "react";

import { Source_Code_Pro } from "next/font/google";
const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full bg-main-600" style={source_Code_Pro.style}>
      <main className="mx-auto min-h-screen w-full max-w-screen-2xl grow bg-main-600 text-white">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
