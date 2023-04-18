import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { useEffect, useRef, useState } from "react";
import MainNavigation from "~/components/navigation/main.navigation";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  const [greating, setGreating] = useState("");
  const inputRef = useRef<null | HTMLDivElement>(null);
  const [isLoginWindowVisible, setisLoginWindowVisible] = useState(false);

  useEffect(() => {
    const newGreating = "<​Halo Dunia/>";
    let letterIndex = -1;
    const t = setInterval(() => {
      if (letterIndex < newGreating.length - 1) {
        setGreating((s) => `${s}${newGreating[letterIndex] ?? ""}`);
        letterIndex++;
      } else {
        clearInterval(t);
      }
    }, 200);

    return () => {
      setGreating("");
      letterIndex = -1;
      clearInterval(t);
    };
  }, []);

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

  return (
    <>
      <HeadSEO />
      <MainLayout>
        {isLoginWindowVisible && (
          <div className="fixed left-1/2 top-1/2 m-auto h-96 w-full max-w-screen-md -translate-x-1/2 -translate-y-1/2 overflow-auto border bg-main-600 p-5">
            <div className="flex">
              <span>root@user:</span>
              <div className="flex flex-col">
                <span>Welcome to nextOS v0.0.1</span>
                <span>
                  Please enter the password to{" "}
                  <button
                    type="button"
                    onClick={() => void signIn()}
                    className="hover:underline"
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
          <h1 className=" text-7xl ">{greating}</h1>

          <MainNavigation />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
