import { type PropsWithChildren, type FC } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full">
      <main className="mx-auto min-h-screen w-full max-w-screen-2xl grow text-white">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
