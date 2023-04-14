import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
