import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Redacted from "~/components/text/redacted";
import useOnClickOutside from "~/hooks/useClickOutside";

const LINKS = [
  { id: "home-index", href: "/dashboard", label: "Home" },
  { id: "blog-index", href: "/dashboard/blog", label: "Blog" },
  { id: "note-index", href: "/dashboard/note", label: "Note" },
  { id: "gallery-index", href: "/dashboard/gallery", label: "Gallery" },
  { id: "me-index", href: "/dashboard/me", label: "Me" },
];

const AdminNavigation = () => {
  const router = useRouter();
  const navigationref = useRef<null | HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useOnClickOutside(navigationref, () => {
    setIsNavVisible(false);
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
          <button type="button" onClick={() => setIsNavVisible((s) => !s)}>
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

        {isNavVisible && (
          <>
            <div className="fixed  left-0 top-0 z-40 h-full w-full bg-main-600 bg-opacity-80 backdrop-blur-sm"></div>
            <div
              ref={navigationref}
              className="min-h-96 fixed left-1/2 top-1/2 z-50 m-auto w-full max-w-screen-md -translate-x-1/2 -translate-y-1/2 overflow-auto border bg-main-600 p-5"
            >
              <span>Navigasi</span>
              <div className="flex w-full">
                <ul className="flex w-full justify-center">
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
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default AdminNavigation;
