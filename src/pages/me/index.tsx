import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import Redacted from "~/components/text/redacted";
import { useEffect, useState } from "react";

const MePage: NextPage = () => {
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
          <h1 className="text-5xl">{"<Me/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3 className="text-center">Tentangku</h3>

            <div className="relative mx-auto h-96 md:w-auto">
              <svg className="h-full w-full ">
                <filter id="blur">
                  <feMorphology
                    in="SourceGraphic"
                    operator="dilate"
                    radius={dilateRadius}
                  ></feMorphology>
                </filter>
                <image
                  xlinkHref="/images/lorong-1.jpg"
                  filter="url(#blur)"
                  onClick={cycleDilateRadius}
                  className="h-full w-full cursor-pointer object-contain object-center"
                ></image>
              </svg>
            </div>

            <p>
              Halo, Namaku <Redacted>Yuanda Hanif Hisyam</Redacted>, seorang
              yang mencintai dan terlalu bergantung pada internet. Mahasiswa
              jurusan Informatika di salah satu kampus swasta di{" "}
              <Redacted>Yogyakarta</Redacted>. Mencintai teknologi terutama
              internet sebagai salah satu pencapaian terbaik dari umat manusia.
              Tidak terlalu menyukain keramaian dan hampir mengurung diri 24/7
              di dalam kosnya.{" "}
              <span className="hidden">
                Didiagnosa depresi pada usia 20 tahun dan punya kesulitan
                berinteraksi dengan manusia lain.
              </span>
            </p>

            <p className="hidden">
              Tidak berencana untuk memiliki hubungan dengan manusia lain, dan
              tidak berencana untuk memiliki keturunan. Memiliki keinginan untuk
              hidup tidak lebih dari 25 tahun dengan akhir yang tanpa
              penyesalan. Setidaknya itu yang ku inginkan untuk saat ini.
            </p>

            <p>
              Hobiku adalah bermain internet, duduk mendengarkan orang lain
              berbicara, dan menulis. Setidaknya itu yang boleh kutulis,
              selebihnya adalah rahasia. Seperti <Redacted>cosplay</Redacted>{" "}
              dan <Redacted>Stalking(OSINT)</Redacted>.
            </p>

            <p className="hidden">
              Tidak memiliki ketergantungan kepada rokok, alkohol, maupun
              obat-obatan. Tujuanku saat ini adalah menyelesaikan web ini{" "}
              <span
                className="cursor-wait"
                title="Disclaimer: Semua yang kutulis disini hanyalah roleplay semata"
              >
                :D
              </span>{" "}
              Oh, apakah ini termasuk.
            </p>

            <p>
              Also Suka{" "}
              <a
                href="https://en.wikipedia.org/wiki/Alternate_reality_game"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ARG
              </a>
              , so lets mimic one. Liminal Space, Weird Core, brrrr.
            </p>

            <blockquote className="prose-sm">
              Bagaimana kau menjelaskan tentang dirimu? diantara jutaan manusia
              apa yang membuat dirimu berbeda? Kurasa itu tidaklah penting, usia
              kita terlalu pendek untuk menjawab ini. Kebanyakan dari kita semua
              akan mati lalu dilupakan.
            </blockquote>
          </div>

          <div className="mt-10">
            <h3 className="text-center">
              Kontak <br />
              <span className="text-sm">(profesional)</span>
            </h3>
            <div className="mt-5">
              <ul className="flex flex-wrap justify-center gap-5">
                <li>
                  <a
                    href="https://github.com/yuandahanif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
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
                <li>
                  <a
                    href="http://discordapp.com/users/378907976267726859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-center">Tambahan</h3>
            <div className="mt-5">
              <ul className="flex flex-wrap justify-center gap-5">
                <li>
                  <a
                    href="/me/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-1 hover:underline justify-center"
                  >
                    <span>Resume</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
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
