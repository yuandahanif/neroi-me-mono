import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { useEffect, useRef, useState } from "react";
import MainNavigation from "~/components/navigation/main.navigation";
import { signIn } from "next-auth/react";
import Logo from "~/components/logo/logo";

const quote =
  '"Hidup dalam kehampaan sembari terus berjalan mencari makna dari kehidupan."';

const Home: NextPage = () => {
  const inputRef = useRef<null | HTMLDivElement>(null);
  const [isLoginWindowVisible, setisLoginWindowVisible] = useState(false);

  const quoteRef = useRef<null | HTMLParagraphElement>(null);
  const quoteWordIntervalRef = useRef<null | NodeJS.Timer>(null);

  useEffect(() => {
    const ref = inputRef.current;
    const listener = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setisLoginWindowVisible((s) => !s);
        ref?.focus();
      }
    };
    if (window != null) {
      window.addEventListener("keydown", listener);
    }

    return () => {
      removeEventListener("keydown", listener);
      ref?.blur();
    };
  }, []);

  useEffect(() => {
    const ref = quoteRef.current;
    const words = quote.split(" ");
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
      <HeadSEO />
      <MainLayout>
        {isLoginWindowVisible && (
          <div className="fixed left-1/2 top-1/2 z-50 m-auto hidden h-96 w-5/6 max-w-screen-sm -translate-x-1/2 -translate-y-1/2 overflow-auto border bg-main-600 p-5 md:w-full md:max-w-screen-md lg:block">
            <div className="flex">
              <span>root@user:</span>
              <div className="flex flex-col">
                <span> Welcome to yume OS v0.0.1</span>
                <span>
                  Please enter the password to{" "}
                  <button
                    type="button"
                    onClick={() => void signIn()}
                    className="cursor-text"
                  >
                    continue
                  </button>
                  .{" "}
                </span>
              </div>
            </div>

            <div className="flex">
              <span>password:</span>
              <div
                ref={inputRef}
                tabIndex={1}
                className="inline-flex w-full outline-none"
                contentEditable
              ></div>
            </div>
          </div>
        )}

        <main
          className={`flex min-h-screen grow flex-col items-center justify-center`}
        >
          <div className="">
            <Logo />
          </div>

          <MainNavigation />

          <div className="prose prose-sm prose-invert mt-10 px-4 text-center lg:px-0">
            <p ref={quoteRef} />
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
