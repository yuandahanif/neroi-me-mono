"use client";

import { Source_Code_Pro } from "next/font/google";
const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <button onClick={() => reset()}>Try again</button>
        <div className="flex w-full bg-main-600" style={source_Code_Pro.style}>
          <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl grow flex-col bg-main-600 text-white">
            <h2>Something went wrong!</h2>
            {error.message}
          </div>
        </div>
      </body>
    </html>
  );
}
