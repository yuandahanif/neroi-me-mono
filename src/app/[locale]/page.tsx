import type { Metadata } from "next";
import SubdomainSelect from "~/components/landing/subdomain-select";
import TerminalAnimation from "~/components/terminal/terminal-animation";
import { env } from "~/env.mjs";

export const metadata: Metadata = {
  title: "Entry Point",
  description: "-",
};

const isProduction = env.NODE_ENV === "production";

export default function Pages() {
  return (
    <div className="relative flex h-full max-h-screen w-full grow">
      <TerminalAnimation className="absolute z-10" />
      <SubdomainSelect
        domain={env.NEXT_PUBLIC_DOMAIN}
        isProduction={isProduction}
      />
    </div>
  );
}
