import { type Metadata } from "next";
import type { ReactElement } from "react";
import { I18nProviderClient } from "~/locales/client";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
