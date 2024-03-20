import Link from "next/link";
import type { ReactElement } from "react";

export default function SubLayout({ children }: { children: ReactElement }) {
  return (
    <div className="flex min-h-screen grow flex-col items-center justify-center gap-10 py-10">
      {children}

      <div>
        <Link href="/" className="hover:underline">
          /home/
        </Link>
      </div>
    </div>
  );
}
