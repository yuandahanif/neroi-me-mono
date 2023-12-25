import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { type Locales, type Translation } from "~/i18n/i18n-types";

import { api } from "~/utils/api";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { loadedLocales } from "~/i18n/i18n-util";
import { loadFormatters } from "~/i18n/i18n-util.async";
import TypesafeI18n from "~/i18n/i18n-react";
import { Analytics } from "@vercel/analytics/react";

import "react-toastify/dist/ReactToastify.css";
import "highlight.js/styles/atom-one-dark.css";
import "~/styles/globals.css";
import { ReactNode } from "react";

const MyApp: AppType<{
  session: Session | null;
  i18n: { locale: Locales; dictionary: Translation };
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const Wrapper_n_i18n = ({ children }: { children: ReactNode }) => (
    <SessionProvider session={session}>
      <AnimatePresence mode="wait" initial={false}>
        {children}
      </AnimatePresence>
      <Analytics />
      <ToastContainer theme="dark" position="top-center" />
    </SessionProvider>
  );

  if (!pageProps.i18n) {
    // probably an Error page
    return (
      <Wrapper_n_i18n>
        <Component {...pageProps} />
      </Wrapper_n_i18n>
    );
  }

  const locale: Locales = pageProps.i18n.locale;
  const dictionary: Translation = pageProps.i18n.dictionary;

  loadedLocales[locale] = dictionary;
  loadFormatters(locale);

  return (
    <Wrapper_n_i18n>
      <TypesafeI18n locale={locale}>
        <Component {...pageProps} />
      </TypesafeI18n>
    </Wrapper_n_i18n>
  );
};

export default api.withTRPC(MyApp);
