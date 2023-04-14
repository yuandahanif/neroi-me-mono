import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const source_Code_Pro = Source_Code_Pro({ subsets: ["latin", "cyrillic"] });

const Home: NextPage = () => {
  const [greating, setGreating] = useState("");

  useEffect(() => {
    const newGreating = "< Halo Dunia/>";
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
          className={`flex min-h-screen grow flex-col items-center justify-center ${source_Code_Pro.className}`}
        >
          <h1 className="text-7xl">{greating}</h1>

          <div className="mt-8">
            <Link href={"/blog"}>Blog</Link>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default Home;
