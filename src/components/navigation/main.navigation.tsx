import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import Redacted from "~/components/text/redacted";

const LINKS = [
  { id: "home-index", href: "/", label: "Home" },
  { id: "blog-index", href: "/blog", label: "Blog" },
  { id: "note-index", href: "/note", label: "Note" },
  { id: "gallery-index", href: "/gallery", label: "Gallery" },
  { id: "me-index", href: "/me", label: "Me" },
];

const MainNavigation = () => {
  const router = useRouter();

  return (
    <div className="mt-8 flex gap-x-2 text-xl">
      {LINKS.map((link, idx) => (
        <div key={link.href}>
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
    </div>
  );
};

export default MainNavigation;
