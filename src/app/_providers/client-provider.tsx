"use client";

import { type PropsWithChildren } from "react";

import "~/styles/globals.css";

export function ClientProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
