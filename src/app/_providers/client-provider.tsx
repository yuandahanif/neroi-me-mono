"use client";

import { type PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/atom-one-dark.css";
import "~/styles/globals.css";

export function ClientProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <ToastContainer theme="dark" position="top-center" />
      <Analytics />
    </>
  );
}
