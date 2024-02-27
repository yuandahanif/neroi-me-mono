import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest } from "next/server";

const locales = ["en", "id"] as const;

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

const getValidSubdomain = (host: string | null) => {
  let subdomain: string | null = null;

  if (host && host.includes(".")) {
    const candidate = host.split(".")[0];

    switch (candidate) {
      case "localhost":
      case "personal":
      case "business":
        subdomain = candidate;
        break;
    }
  }
  return subdomain;
};

const getValidLocale = (pathname: string) => {
  const locale = pathname.split("/")[1] ?? "";
  return locales.includes(locale as (typeof locales)[number])
    ? `/${locale}`
    : "";
};

const sanitizeLocalePathname = (pathname: string, locale: string) => {
  return locale ? pathname.replace(locale, "") : pathname;
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const subdomain = getValidSubdomain(request.headers.get("host"));

  if (subdomain) {
    let finalPathname = url.pathname;

    const locale = getValidLocale(url.pathname);
    if (locale) {
      console.log(">>> Locale:", locale);

      const pathname = sanitizeLocalePathname(url.pathname, locale);
      finalPathname = `${locale}${pathname}`;
    } else {
      finalPathname = `${subdomain}${url.pathname}`;
    }

    request.nextUrl.pathname = finalPathname;
    console.log(`>>> Rewriting: ${url.pathname} to ${finalPathname}`);
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
