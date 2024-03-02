"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Redacted from "~/components/text/redacted";

const LINKS = [
  { id: "home-index", href: "/admin", label: "Home" },
  { id: "blog-index", href: "/admin/blogs", label: "Blogs" },
  { id: "note-index", href: "/admin/notes", label: "Notes" },
];

const AdminNavigation = () => {
  const pathname = usePathname();

  const navigationref = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (navigationref.current == null) {
      alert("oops");
    }
    navigationref.current?.showModal();
  };

  useEffect(() => {
    const ref = navigationref.current;
    const clickHandler = (e: MouseEvent) => {
      const dialogDimensions = ref?.getBoundingClientRect();

      if (
        dialogDimensions &&
        (e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom)
      ) {
        ref?.close();
      }
    };

    if (ref) {
      ref.addEventListener("click", clickHandler);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("click", clickHandler);
      }
    };
  });

  return (
    <div className="mt-8 flex gap-x-2 text-xl">
      <nav className="flex w-full flex-wrap justify-center gap-2 px-4 py-6 text-xl backdrop-blur-lg lg:px-0">
        {LINKS.map((link, idx) => (
          <div key={link.href} className="text-sm md:text-base">
            {pathname == link.href ? (
              <Redacted>{link.label}</Redacted>
            ) : (
              <Link href={link.href} className={twMerge(`hover:underline`)}>
                {link.label}
              </Link>
            )}
            {idx < LINKS.length - 1 && <span> &#183; </span>}
          </div>
        ))}
      </nav>

      <nav>
        <div className="fixed bottom-10 right-10 z-30 flex flex-col items-center justify-center gap-2">
          <button type="button" onClick={openDialog} title="navigation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>
          </button>
        </div>

        <dialog
          ref={navigationref}
          className="w-full max-w-screen-md overflow-auto border bg-main-600 p-5 text-white backdrop:bg-opacity-80 backdrop:backdrop-blur-sm"
        >
          <ul className="flex w-full flex-col items-center justify-center gap-4">
            <li>
              <Link href={"/"} target="_self">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  void signOut();
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </dialog>
      </nav>
    </div>
  );
};

export default AdminNavigation;
