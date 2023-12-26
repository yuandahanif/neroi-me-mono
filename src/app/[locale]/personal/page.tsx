import { getI18n } from "~/locales/server";

const Home = async () => {
  const t = await getI18n();

  return (
    <main
      className={`flex min-h-screen grow flex-col items-center justify-center`}
    >
      <h1>{t("Quote")}</h1>
      {/* <div className="">
          <Logo />
        </div> */}

      {/* <MainNavigation /> */}

      <div className="prose prose-sm prose-invert mt-10 px-4 text-center lg:px-0">
        {/* <p ref={quoteRef} data-quote={LL.Quote()} /> */}
      </div>

      <div className="mt-10 flex gap-2 target:animate-bounce" id="change_lang">
        {/* {locales.map((locale_, idx) => (
            <div key={locale_} className="flex gap-2">
              <button
                type="button"
                className={twMerge("hover:underline")}
                onClick={() => void chanegLanguage(locale_)}
                disabled={locale_ == locale}
              >
                {locale_ == locale ? <Redacted>{locale_}</Redacted> : locale_}
              </button>
              {idx !== locales.length - 1 && <span>|</span>}
            </div>
          ))} */}
      </div>
    </main>
  );
};

export default Home;
