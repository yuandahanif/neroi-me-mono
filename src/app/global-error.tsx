"use client";

import { Source_Code_Pro } from "next/font/google";
const source_Code_Pro = Source_Code_Pro({
  subsets: ["latin", "cyrillic"],
  preload: true,
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html className="dark">
      <body>
        <div className="flex min-h-screen items-center justify-center">
          <button onClick={() => reset()}>Try again</button>
          <div className="flex w-full" style={source_Code_Pro.style}>
            <div className="mx-auto flex min-h-screen w-full max-w-screen-2xl grow flex-col text-white">
              <h2>Something went wrong!</h2>
              {error.message}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
