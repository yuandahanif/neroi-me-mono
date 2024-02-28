"use client";

import { type PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";

import "~/styles/globals.css";

export function ClientProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
