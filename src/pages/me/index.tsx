import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";

const MePage: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-10`}
        >
          <h1 className="text-7xl">{"<Me/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3>Tentangku</h3>

            <p>
              Halo, Namaku Yuanda <Redacted>Hanif Hisyam</Redacted>, seorang
              yang mencintai dan terlalu bergantung pada internet. Mahasiswa
              jurusan Informatika di salah satu kampus swasta di Yogyakarta.
              Mencintai teknologi terutama internet sebagai salah satu
              pencapaian terbaik dari umat manusia. Tidak terlalu menyukain
              keramaian dan hampir mengurung diri 24/7 di dalam kosnya.
              Didiagnosa depresi pada usia 20 tahun dan punya kesulitan
              berinteraksi dengan manusia lain.
            </p>

            <p>
              Tidak berencana untuk memiliki hubungan dengan manusia lain, dan
              tidak memiliki rencana untuk memiliki keturunan. Memiliki
              keinginan untuk hidup tidak lebih dari 25 tahun dengan akhir yang
              tanpa penyesalan.
            </p>

            <p>
              Hobiku adalah bermain internet, duduk mendengarkan orang lain
              berbicara, dan menulis. Setidaknya itu yang boleh kutulis,
              selebihnya adalah rahasia. Seperti <Redacted>Crossdress</Redacted>{" "}
              dan <Redacted>Stalking(OSINT)</Redacted>.
            </p>

            <p>
              Tidak memiliki ketergantungan kepada rokok, alkohol, maupun
              obat-obatan. Tujuanku saat ini adalah menyelesaikan web ini :D
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-center">
              Kontak <br />
              (profesional)
            </h3>
            <div className="mt-5">
              <ul className="flex gap-5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuanda-hanif-hisyam-1432701aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yuan.nanode@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    yuan.nanode@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
