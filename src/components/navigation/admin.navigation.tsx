import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import Redacted from "~/components/text/redacted";

const LINKS = [
  { id: "home-index", href: "/dashboard", label: "Home" },
  { id: "blog-index", href: "/dashboard/blog", label: "Blog" },
  { id: "note-index", href: "/dashboard/note", label: "Note" },
  { id: "gallery-index", href: "/dashboard/gallery", label: "Gallery" },
  { id: "me-index", href: "/dashboard/me", label: "Me" },
];

const AdminNavigation = () => {
  const router = useRouter();

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
    </div>
  );
};

export default AdminNavigation;
