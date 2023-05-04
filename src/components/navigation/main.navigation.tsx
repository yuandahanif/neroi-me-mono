import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Redacted from "~/components/text/redacted";

const LINKS = [
  { id: "home-index", href: "/", label: "Home" },
  { id: "blog-index", href: "/blog", label: "Blog" },
  // { id: "note-index", href: "/note", label: "Note" },
  { id: "gallery-index", href: "/gallery", label: "Gallery" },
  { id: "me-index", href: "/me", label: "Me" },
];

const MainNavigation = () => {
  const router = useRouter();
  const { status } = useSession();
  const navigationref = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
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
      {LINKS.map((link, idx) => (
        <div key={link.href} className="text-sm md:text-base">
          {router.asPath == link.href ? (
            <Redacted> {link.label}</Redacted>
          ) : (
            <Link href={link.href} className={twMerge(`hover:underline`)}>
              {link.label}
            </Link>
          )}
          {idx < LINKS.length - 1 && <span> . </span>}
        </div>
      ))}

      <nav>
        <div className="fixed bottom-10 right-10 z-30 flex flex-col items-center justify-center gap-2">
          {status == "authenticated" && (
            <button
              type="button"
              onClick={() => {
                void router.push("/dashboard");
              }}
            >
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          )}

          <button type="button" onClick={openDialog}>
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

        {/* {isNavVisible && ( */}
        <>
          {/* <div className="fixed left-0 top-0 z-40 h-full w-full bg-main-600 bg-opacity-80 backdrop-blur-sm"></div> */}
          <dialog
            ref={navigationref}
            className="min-h-96 w-full max-w-screen-md overflow-auto border bg-main-600 p-5  text-white backdrop:bg-opacity-80 backdrop:backdrop-blur-sm"
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://github.com/yuandahanif/neroi-me-mono"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center gap-1 hover:underline"
                >
                  <span>View source code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </dialog>
        </>
        {/* )} */}
      </nav>
    </div>
  );
};

export default MainNavigation;
