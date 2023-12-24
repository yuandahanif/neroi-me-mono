import "server-only";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { env } from "~/env.mjs";
import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";

// export API handler
function handler(req: Request) {
  return fetchRequestHandler({
    req,
    endpoint: "/api/trpc",
    router: appRouter,
    createContext: () => createTRPCContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
            );
          }
        : undefined,
  });
}

export { handler as GET, handler as POST };
