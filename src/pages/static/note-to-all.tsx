import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { Lato } from "next/font/google";
import { twMerge } from "tailwind-merge";
import TriggerWarning from "~/components/trigger_warning/trigger_warning";

const main_forn = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

const NoteToAll: NextPage = () => {
  const [isRestrictedContent, setIsRestrictedContent] = useState(true);

  return (
    <>
      {isRestrictedContent && (
        <TriggerWarning onAccept={() => setIsRestrictedContent(false)} />
      )}

      <HeadSEO
        title="note to all"
        description="catatan singkat untuk kalian semua"
      />

      <MainLayout>
        <main
          className={`flex grow flex-col items-center justify-start p-2 py-10`}
        >
          <h1 className="text-5xl">{"<Blog/>"}</h1>
          <MainNavigation />

          <div
            className={`mt-10  flex flex-col gap-y-5 ${main_forn.className}`}
          >
            <div className="mt-5 flex flex-col-reverse sm:flex-row">
              <div>
                <div className="z-20 w-fit rounded-md border border-main-300 bg-main-600 p-2 sm:mx-auto sm:p-6">
                  <div
                    className={twMerge(
                      "prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400",
                      isRestrictedContent && "blur-sm"
                    )}
                  >
                    <h1 className="text-2xl font-semibold leading-10 sm:text-3xl">
                      Catatan untuk pembaca
                    </h1>

                    <p>
                      Pada saatnya hidup terkadang memang akan terasa berat
                      hinggga terkadang kita merasa ingin menyerah dan menangis,
                      namun hari esok pasti akan menjadi lebih baik, kan?
                    </p>

                    <p>
                      Kebohongan demi kebohongan yang saling menumpuk, aku
                      berharap suatu saat semua itu menjadi sebuah kenyataan.
                    </p>

                    <p>
                      Aku sudah menyerah dengan semuanya, aku menyerah pada
                      hidup ini karena semuanya terasa palsu dan kosong.
                      Hubungan, pertemanan, keluarga, dan pekerjaan yang
                      kujalani terasa tidak ada artinya.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default NoteToAll;
