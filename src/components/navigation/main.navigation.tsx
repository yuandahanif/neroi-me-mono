import Link from "next/link";

const LINKS = [
  { id: "home-index", href: "/", label: "Home" },
  { id: "blog-index", href: "/blog", label: "Blog" },
  { id: "til-index", href: "/today-i-learn", label: "TIL" },
  { id: "me-index", href: "/me", label: "Me" },
];

const MainNavigation = () => {
  return (
    <div className="mt-8 flex gap-x-2 text-xl">
      {LINKS.map((link, idx) => (
        <>
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
          {idx < LINKS.length - 1 && <span> . </span>}
        </>
      ))}
    </div>
  );
};

export default MainNavigation;
