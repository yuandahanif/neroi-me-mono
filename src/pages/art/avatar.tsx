import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import ImageAvatar from "~/components/images/imageAvatar";
import { useEffect, useState } from "react";

const ArtAvatar: NextPage = () => {
  const [errorMessagesAmount, setErrorMesagesAmount] = useState<number[]>([]);

  useEffect(() => {
    let ittr = 0;
    const t = setInterval(() => {
      setErrorMesagesAmount((s) => {
        const temp = s;
        const lastindex = s[s.length - 1];
        if (lastindex != undefined) {
          temp.push(lastindex + 1);
        } else {
          temp.push(1);
        }

        return [...temp];
      });

      if (ittr >= 500) {
        clearInterval(t);
      }

      ittr++;
    }, 200);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="relative flex">
          <div className="flex max-h-[70vh] flex-col flex-wrap gap-x-5">
            {errorMessagesAmount.map((e) => (
              <span key={e} className="text-red-500">
                ERROR: can&apos;t find boot media.
              </span>
            ))}
          </div>
          <main
            className={` absolute left-1/2 flex min-h-screen grow -translate-x-1/2 items-end justify-center p-10`}
          >
            <ImageAvatar />
          </main>
        </div>
      </MainLayout>
    </>
  );
};

export default ArtAvatar;
