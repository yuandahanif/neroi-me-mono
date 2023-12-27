"use client";

import Link from "next/link";
import { useRef, type FC, type PropsWithChildren, useEffect } from "react";

const getBaseUrl = (subdomain: string, domain: string) => {
  if (process.env.VERCEL_URL)
    return `https://${subdomain}${process.env.VERCEL_URL}`;
  return `http://${subdomain}.${domain}:${process.env.PORT ?? 3000}`;
};

const SubdomainSelect: FC<PropsWithChildren<{ domain: string }>> = ({
  domain,
}) => {
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

  return (
    <div
      className="mt-10 flex flex-col gap-3 text-center"
      ref={linkContainerRef}
    >
      <Link
        href={getBaseUrl("personal", domain)}
        target="_self"
        className="before:ml-3 before:mr-2 before:content-[''] has-[.selected]:animate-pulse has-[.selected]:before:ml-0 has-[.selected]:before:content-['>']"
      >
        <span className="selected">Default</span>
      </Link>
      <Link
        className="before:ml-3 before:mr-2 before:content-[''] has-[.selected]:animate-pulse has-[.selected]:before:ml-0 has-[.selected]:before:content-['>']"
        href={getBaseUrl("work", domain)}
        target="_self"
      >
        <span>Profesional</span>
      </Link>
      <span className="cursor-default line-through before:ml-3 before:mr-2 before:content-['']">
        Random
      </span>
    </div>
  );
};

export default SubdomainSelect;
