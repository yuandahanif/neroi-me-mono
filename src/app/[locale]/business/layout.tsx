import { type Metadata } from "next";
import type { ReactElement } from "react";
import { I18nProviderClient } from "~/locales/client";

export const metadata: Metadata = {
  description: "Selamat data di Neroi.space.",
};

export default function SubLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
