import { type PropsWithChildren, type FC } from "react";
import { I18nProviderClient } from "~/locales/client";

const MainLayout: FC<PropsWithChildren<{ params: { locale: string } }>> = ({
  params: { locale },
  children,
}) => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-screen-2xl grow text-white">
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </main>
  );
};

export default MainLayout;
