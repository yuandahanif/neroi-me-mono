import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { useEffect, useRef, useState } from "react";
import MainNavigation from "~/components/navigation/main.navigation";
import { signIn } from "next-auth/react";
import Logo from "~/components/logo/logo";

const Home: NextPage = () => {
  const inputRef = useRef<null | HTMLDivElement>(null);
  const [isLoginWindowVisible, setisLoginWindowVisible] = useState(false);
  const followMouseRef = useRef<null | HTMLDivElement>(null);

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
    const ref = followMouseRef.current;
    const listener = (e: MouseEvent) => {
      if (ref != null) {
        ref.animate(
          [
            {
              top: `${e.clientY}px`,
              left: `${e.clientX}px`,
            },
          ],
          {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out",
          }
        );
      }
    };
    if (window != null) {
      window.addEventListener("mousemove", listener);
    }

    return () => {
      removeEventListener("mousemove", listener);
    };
  }, []);

  return (
    <>
      <HeadSEO />
      <MainLayout>
        {isLoginWindowVisible && (
          <div className="fixed left-1/2 top-1/2 m-auto hidden h-96 w-5/6 max-w-screen-sm -translate-x-1/2 -translate-y-1/2 overflow-auto border bg-main-600 p-5 md:w-full md:max-w-screen-md lg:block">
            <div className="flex">
              <span>root@user:</span>
              <div className="flex flex-col">
                <span>Welcome to nextOS v0.0.1</span>
                <span>
                  Please enter the password to{" "}
                  <button
                    type="button"
                    onClick={() => void signIn()}
                    className=""
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

        <div
          ref={followMouseRef}
          className="pointer-events-none absolute -left-full -top-full z-auto h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white backdrop-blur-sm"
        />

        <main
          className={`flex min-h-screen grow flex-col items-center justify-center cursor-none`}
        >
          <div className="">
            <Logo />
          </div>

          <MainNavigation />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
