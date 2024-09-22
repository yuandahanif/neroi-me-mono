"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useI18n, useChangeLocale, useCurrentLocale } from "~/locales/client";

import Redacted from "~/components/text/redacted";

const PersonalClientSection = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const quoteRef = useRef<HTMLParagraphElement | null>(null);
  const quoteWordIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const ref = quoteRef.current;
    if (ref == null) return;

    let word_attr = ref?.getAttribute("data-quote");
    word_attr = `"${word_attr ?? ""}"`;
    const words = word_attr?.split(" ") ?? "";

    let index = 0;
    quoteWordIntervalRef.current = setInterval(() => {
      if (ref != null) {
        ref.textContent += words[index] ?? "";
        ref.textContent += " ";
      }

      if (index == words.length - 1) {
        if (quoteWordIntervalRef.current != null) {
          clearInterval(quoteWordIntervalRef.current);
        }
      }
      index += 1;
    }, 200);

    return () => {
      if (quoteWordIntervalRef.current != null) {
        clearInterval(quoteWordIntervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="prose prose-sm prose-invert mt-10 px-4 text-center lg:px-0">
        <p ref={quoteRef} data-quote={t("Quote")} />
      </div>

      <div className="mt-10 flex gap-2 target:animate-bounce">
        {(["id", "en"] as const).map((locale_, idx) => (
          <div className="flex gap-2" key={locale_}>
            <button
              type="button"
              className={twMerge(locale == locale_ ? "" : "hover:underline")}
              onClick={() => void changeLocale(locale_)}
              disabled={locale == locale_}
            >
              {locale_ == locale ? <Redacted>{locale}</Redacted> : locale_}
            </button>
            {idx % 2 == 0 && <span>|</span>}
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalClientSection;
