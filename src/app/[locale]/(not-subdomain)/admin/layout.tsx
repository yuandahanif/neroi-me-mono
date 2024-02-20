import { type PropsWithChildren, type FC } from "react";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

const MainLayout: FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth();

  if (!session) redirect("/auth/signin");
  if (session?.user?.role != "ADMIN") redirect("/restricted");

  return <>{children}</>;
};

export default MainLayout;
