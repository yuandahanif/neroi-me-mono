"use client";

import Link from "next/link";
import { useRef, type FC, type PropsWithChildren, useEffect } from "react";

const getBaseUrl = (
  subdomain: string,
  domain: string,
  isProduction: boolean
) => {
  return `${isProduction ? "https" : "http"}://${subdomain}.${domain}`;
};

const SubdomainSelect: FC<
  PropsWithChildren<{ domain: string; isProduction: boolean }>
> = ({ domain, isProduction }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const linkContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const links = linkContainerRef?.current?.querySelectorAll("a");

    if (!links) return;

    const mouseEnterHandler = (i: number) => (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const spanChild = target.querySelector("span");
      spanChild?.classList.add("selected");

      links.forEach((link, j) => {
        if (i !== j) {
          const spanChild = link.querySelector("span");
          spanChild?.classList.remove("selected");
        }
      });
    };

    links.forEach((link, i) => {
      link.addEventListener("mouseenter", mouseEnterHandler(i));
    });

    return () => {
      links.forEach((link, i) => {
        link.removeEventListener("mouseenter", mouseEnterHandler(i));
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    const timeout = setTimeout(() => {
      container.classList.remove("opacity-0");
      container.classList.add("animate-fade-in");
    }, 150 * 36);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-20 mx-auto my-auto flex h-auto w-auto flex-col items-center justify-center border border-main-300 bg-main-600 p-10 opacity-0 duration-300"
    >
      <h1 className="mb-2 text-xl font-semibold">Manual Selection Required!</h1>
      <p className="text-sm">Chose the personality preset:</p>

      <div
        className="mt-10 flex flex-col gap-3 text-center"
        ref={linkContainerRef}
      >
        <Link
          prefetch={false}
          target="_self"
          href={getBaseUrl("business", domain, isProduction)}
          className="before:ml-3 before:mr-2 before:content-[''] has-[.selected]:animate-pulse has-[.selected]:before:ml-0 has-[.selected]:before:content-['>']"
        >
          <span className="selected">Profesional</span>
        </Link>

        <Link
          prefetch={false}
          target="_self"
          href={getBaseUrl("personal", domain, isProduction)}
          className="before:ml-3 before:mr-2 before:content-[''] has-[.selected]:animate-pulse has-[.selected]:before:ml-0 has-[.selected]:before:content-['>']"
        >
          <span>Default</span>
        </Link>
        <span className="cursor-default line-through before:ml-3 before:mr-2 before:content-['']">
          Random
        </span>
      </div>
    </div>
  );
};

export default SubdomainSelect;
