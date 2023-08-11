import { type GetStaticProps } from "next";
import { type Locales } from "./i18n-types";
import { loadedLocales } from "./i18n-util";
import { loadLocaleAsync } from "./i18n-util.async";

const getI18nProps: GetStaticProps = async (context) => {
  const locale = context.locale as Locales;
  await loadLocaleAsync(locale);

  return {
    props: {
      i18n: {
        locale: locale,
        dictionary: loadedLocales[locale],
      },
    },
  };
};

export default getI18nProps;
