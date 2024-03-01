import { type PropsWithChildren, type FC } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl grow text-white">
      {children}
    </main>
  );
};

export default MainLayout;
