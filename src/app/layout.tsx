import { type Viewport, type Metadata } from "next";

import { type PropsWithChildren } from "react";
import { getServerSession } from "next-auth";

import { authOptions } from "~/server/auth";
import { AuthProvider } from "~/app/_providers/auth-provider";
import { ClientProvider } from "./_providers/client-provider";
import { cn } from "~/lib/utils";
import { Source_Code_Pro } from "next/font/google";

export const metadata: Metadata = {
  title: {
    template: "%s | Neroi",
    default: "Neroi",
  },
  description: "Selamat data di Neroi.space, web pribadi milik [Redacted].",
  manifest: "/icons/site.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      {
        url: "/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        rel: "icon",
      },
      {
        rel: "mask-icon",
        color: "#5bbad5",
        url: "/icons/safari-pinned-tab.svg",
      },
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        url: "/icons/favicon.ico",
      },
    ],
    apple: {
      rel: "apple-touch-icon",
      sizes: "120x120",
      url: "/icons/apple-touch-icon.png",
    },
  },
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/icons/browserconfig.xml",
  },

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

export const viewport: Viewport = {
  themeColor: "#171717",
};

const source_Code_Pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  variable: "--font-scp",
});

export default async function PageLayout({ children }: PropsWithChildren) {
  const session = await getServerSession(authOptions);
  return (
    <html className="dark">
      <body className={cn("font-sans antialiased", source_Code_Pro.variable)}>
        <AuthProvider session={session}>
          <ClientProvider>{children}</ClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
