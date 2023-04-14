import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "~/components/navigation/main.navigation";

const Home: NextPage = () => {
  const [greating, setGreating] = useState("");

  useEffect(() => {
    const newGreating = "<​Halo Dunia/>";
    let letterIndex = -1;
    const t = setInterval(() => {
      if (letterIndex < newGreating.length - 1) {
        setGreating((s) => `${s}${newGreating[letterIndex] ?? ""}`);
        ++letterIndex;
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

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-center`}
        >
          <h1 className="text-7xl">{greating}</h1>

          <MainNavigation />
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
