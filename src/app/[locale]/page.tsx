import type { Metadata } from "next";
import SubdomainSelect from "~/components/landing/subdomain-select";
import { env } from "~/env.mjs";

/**
 * idea
 * - booting sequence animation
 * - keyboard navigation
 *  */

export const metadata: Metadata = {
  title: "Entry Point",
  description: "-",
};

export default function Pages() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>r/Outside</h1>
      <p>Chose the personality preset:</p>

      <SubdomainSelect domain={env.DOMAIN} />
    </div>
  );
}
