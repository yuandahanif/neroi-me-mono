import type { Metadata } from "next";
import SubdomainSelect from "~/components/landing/subdomain-select";
import TerminalAnimation from "~/components/terminal/terminal-animation";
import { env } from "~/env.mjs";

export const metadata: Metadata = {
  title: "Entry Point",
  description: "-",
};

export default function Pages() {
  return (
    <div className="relative flex  h-full w-full">
      <TerminalAnimation className="absolute z-10" />
      <SubdomainSelect domain={env.DOMAIN} />
    </div>
  );
}
