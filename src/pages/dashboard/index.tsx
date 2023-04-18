import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import { useEffect, useState } from "react";

const DashboardindexPage: NextPage = () => {
  const [dilateRadius, setDilateRadius] = useState(3);
  const cycleDilateRadius = () => {
    setDilateRadius((dilateRadius) => {
      return dilateRadius <= 8 ? dilateRadius + 2 : 0;
    });
  };

  useEffect(() => {
    const t = setInterval(() => {
      cycleDilateRadius();
    }, 3000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-4xl">{"<Dashboard/>"}</h1>
        </main>
      </MainLayout>
    </>
  );
};

export default DashboardindexPage;
