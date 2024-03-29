import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import React, { useState } from "react";
import { Lato } from "next/font/google";
import { twMerge } from "tailwind-merge";
import TriggerWarning from "~/components/trigger_warning/trigger-warning";
import getI18nProps from "~/i18n/getStaticPropsI18n.helper";

export const getStaticProps = getI18nProps;

const main_font = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "900", "700"],
});

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="bg-main-300 p-1">{children}</span>;
};

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

          <div className={`mt-10 flex flex-col gap-y-5 ${main_font.className}`}>
            <div className="rounded-md border-2 border-red-500 bg-red-50 p-2 sm:mx-auto sm:p-6">
              <div className="prose-md prose ">
                <p className="">
                  Peringatan sekali lagi, tulisan ini tidak untuk semua orang.
                  Jika kau punya masalah dengan depresi, kecemasan, atau masalah
                  mental lainnya, lebih baik kau tinggalkan tulisan ini. Namun
                  jika kau sepenasaran itu, inti dari semua omong kosong ini
                  adalah aku ingin mengakhiri semua ini.
                  <br /> karena kau sudah tau apa yang ada disini, sekarang
                  saatnya untuk dirimu pergi dan lupakn semua ini. Chears :3
                  Semoga harimu menyenangkan.
                </p>
              </div>
            </div>

            <div className="z-20 w-fit rounded-md border border-main-300 bg-main-600 p-2 sm:mx-auto sm:p-6">
              <div
                className={twMerge(
                  "prose-md prose prose-invert w-full prose-h2:text-lg prose-pre:rounded-sm prose-pre:bg-main-400",
                  isRestrictedContent && "blur-sm"
                )}
              >
                <h1 className="text-2xl font-semibold leading-10 sm:text-3xl">
                  *draft Catatan
                </h1>

                <Heading>Umum</Heading>

                <p>
                  Pada saatnya hidup terkadang memang akan terasa berat hinggga
                  terkadang kita merasa ingin menyerah dan menangis, namun hari
                  esok pasti akan menjadi lebih baik, kan?
                </p>

                <p>
                  Kebohongan demi kebohongan yang saling menumpuk, aku berharap
                  suatu saat semua itu menjadi sebuah kenyataan.
                </p>

                <p>
                  Aku menyerah dengan semuanya, aku menyerah pada hidup ini
                  karena semuanya terasa palsu dan kosong. Hubungan, pertemanan,
                  keluarga, dan pekerjaan yang kujalani terasa tidak ada
                  artinya.
                </p>

                <p>
                  Aku tak lagi memiliki alasan untuk ada dan aku lelah dengan
                  semua ini. Aku tak tau sejak kapan semua ini bermula, tapi aku
                  tau aku tak ingin lagi melanjutkan hidup ini Aku ingin pergi
                  dan tak pernah kembali lagi.
                </p>

                <p>
                  Apa yang salah dengan dunia ini, mungin apa yang salah dengan
                  kepalaku. Aku tak tau lagi, aku tak tau lagi apa yang harus
                  aku lakukan.
                </p>

                <hr />
                <Heading>Kesehatan Mental</Heading>

                <p>
                  Aku tau aku sedang tidak baik-baik saja. Aku tau itu, lagipula
                  aku sudah mencobanya. Namun sejauh ini semuanya sia-sia, aku
                  kembali merasa seperti ini. Aku kembali merasa kosong.
                </p>

                <hr />
                <Heading>Profesional</Heading>

                <p>
                  Aku sudah mencoba untuk menjadi lebih baik, aku sudah mencoba
                  untuk berbicara dengan profesional, aku sudah mencoba untuk
                  mengubah hidupku, tapi semua itu sia-sia. Mungkin aku kurang
                  berusaha, atau mungikin dari dalam hatiku aku tak ingin
                  berubah.
                </p>

                <p>
                  Obatnya membantu, tapi itu tidak menyelesaikan masalah. Itu
                  hanya membuatmu merasa mati rasa dan kosong hingga aku tak
                  bisa merasakan apa-apa lagi.
                </p>

                <hr />
                <Heading>Kebohongan</Heading>

                <p>
                  Aku lelah untuk menangis, aku lelah untuk tertawa, pada
                  akhirnya semua akan sama saja aku kembali merasa seperti jatuh
                  kedaam lubang yang tak berdasar di dalam hatiku.
                </p>

                <p>
                  Aku lelah dengan semua kebohongan yang terus kulakukan,
                  kebohongan tentang arti dari hidup ini. Aku tak memilikinya,
                  dan aku lelah untuk terus berbohong.
                </p>

                <hr />
                <Heading>Iman</Heading>

                <p>
                  Iman, mungkin itu yang kubutuhkan. Tapi aku sudah mencoba dan
                  aku muak dengan semuanya, rasanya aku tak memiliki tempat
                  disana. Bukan aku tak percaya tuhan, tapi aku muak dengan
                  semua ini. Dimanapun aku melihat, aku hanya melihat kepalsuan
                  dan kebohongan. Aku merasa agama bukan lagi tempat untuk
                  mencari ketenangan ataupun kebahagiaan. Aku merasa agama
                  hanyalah satu dari jutaan tempat pelarian.
                </p>

                <p>
                  Aku tidak masalah kepada orang yang beragama ataupun tidak.
                  Tapi aku merasa agama bukan lagi tempat untukku. Jika tuhan
                  memang ada, aku mohon tiadakan aku.
                </p>

                <hr />
                <Heading>Perbandigan</Heading>

                <p>
                  Aku yang kurang bersyukur, diluar sana banyak orang yang jauh
                  lebih menderita daripada diriku. Aku memiliki tempat untuk
                  tinggal, aku memiliki makanan, aku memiliki keluarga, aku
                  memiliki segalanya. Tapi aku masih merasa kosong, aku masih
                  merasa tak bahagia, aku masih merasa tak memiliki arti.
                </p>

                <hr />
                <Heading>Hubungan</Heading>

                <p>
                  Aku tak berencana memiliki hubungan dengan manusia lain. Bukan
                  aku membenci manusia, aku hanya tak bisa merasakan apa-apa
                  lagi. Lagipula aku juga tak ingin membawa orang lain kedalam
                  masalahku.
                </p>

                <p>
                  Mungkin aku akan sendiri hingga akhir, dan aku tak apa dengan
                  itu. Lagipula siapa aku, aku hanya orang lain yang bermasalah.
                </p>

                <hr />
                <Heading>Terakhir</Heading>

                <p>
                  Terakhir, aku rasa aku akan melakukanya, saat aku menginjak 25
                  dan aku berada di dasar dari semua ini. Aku tak peduli,
                  lagipula aku bukan siapa-siapa, mungkin aku akan menjadi
                  berita sesaat lalu dilupakan. Tapi aku tak pernah berharap itu
                  terjadi, aku harap aku dilupakan sebelum itu terjadi.
                </p>

                <p>
                  Lagipula aku tak memiliki siapa-siapa. Aku tak pernah bisa
                  menjalin hubungan dengan manusia lain. Aku selalu merasa
                  memandang mereka semua dari kejauhan, aku selalu merasa ada
                  tembok yang memisah diriku dengan manusia lain, bahkan
                  keluagaku sendiri.
                </p>

                <p>
                  Aku tak memiliki tujuan, dan apa gunanya hidup tanpa hal itu.
                  Apa bedanya diriku dengan mayat hidup. Seonggok daging yang
                  dapat berbicara dan berpikir.
                </p>

                <p>
                  Maaf untuk semua orang yang pernah mengenal diriku, maaf untuk
                  apa yang akan kulakukan. Tapi kurasa dunia ini bukan tempat
                  untukku.
                </p>

                <hr />
                <Heading>Maaf</Heading>

                <p>
                  Aku tak ingin menyalahkan siapapun untuk semua ini. ini semua
                  salahku dan diriku seorang. Aku berharap semua ini dapat
                  berakhir.
                </p>

                <p>
                  Aku tak ingin orang lain merasakan apa yang kurasakan, tapi
                  apa yang bisa kulakukan.
                </p>

                <hr />
                <Heading>Terimakasih</Heading>

                <p>
                  Terimakasih jika kau sudah membaca hingga titik ini, aku tak
                  peduli apa dirimu tapi jika kau merasa kasihan kepadaku lebih
                  baik lupakan saja. Aku tak ingin merepotkan dirimu, dan
                  sebaiknya lupakan apa yang barusan kau baca.
                </p>

                <p>
                  Sekali lagi maaf jika semua ini mengganggumu, tapi aku sudah
                  memberi peringatan di awal dan sekarang ini semua salahmu :D
                </p>

                <p>
                  Jika tulisan ini mengganggumu, mengkin ini saatnya kau untuk
                  mulai tidak peduli dengan kehiduan orang lain.
                </p>
              </div>
            </div>
            <div className="flex justify-end text-sm">
              <span>Diubah 20/7/2023</span>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default NoteToAll;
