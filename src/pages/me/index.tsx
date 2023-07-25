import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const MePage: NextPage = () => {
  const profileImageRef = useRef<SVGImageElement>(null);
  const [rotateDeg, setRotateDeg] = useState(5);

  useEffect(() => {
    if (profileImageRef.current) {
      // profileImageRef.current.addEventListener("click", () => {
      //   console.log("click");
      // });

      profileImageRef.current.addEventListener("mouseover", () => {
        profileImageRef.current?.animate(
          [
            { transform: `rotate(${rotateDeg - 5}deg)` },
            { transform: `rotate(${rotateDeg}deg)` },
          ],
          {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            endDelay: 1000,
            fill: "forwards",
          }
        );

        setRotateDeg((s) => s + 5);
      });
    }
  }, [rotateDeg]);

  return (
    <>
      <HeadSEO title="Me" description="" />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10 `}
        >
          <h1 className="text-5xl">{"<Me/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3 className="text-center" id="tentangku">
              Tentang
              <Link className="no-underline" href={"/static/note-to-all"}>
                ku
              </Link>
            </h3>

            <div className="relative mx-auto h-96 md:w-auto">
              <svg className="h-full w-full">
                <image
                  ref={profileImageRef}
                  xlinkHref="/images/me.png"
                  className="h-full w-full origin-center rotate-12 cursor-pointer object-contain object-center"
                ></image>
              </svg>
            </div>

            <p>
              Halo dan selamat datang di duniaku, Namaku Yuanda Hanif Hisyam,
              seorang nihilis yang mencintai dan terlalu bergantung pada
              internet. Mencintai filosofi dan teknologi terutama internet
              sebagai salah satu pencapaian terbaik dari umat manusia.
              {/* <span
                className="text-main-600 selection:text-white"
                draggable={false}
              >
                Tidak terlalu menyukain keramaian dan hampir selalu mengurung
                diri di dalam kosnya. Mendapat diagnosa depresi pada usia 20
                tahun dan punya kesulitan berinteraksi dengan manusia lain.
              </span> */}
            </p>

            <p>
              Mengambil nilai dari{" "}
              <span className="italic">kekosongan eksistensial</span> dan
              kehampaan, menemukan perspektif unik yang memengaruhi pendekatan
              dan cara untuk memandang kehidupan.
            </p>

            <p>
              Nihilisme kulihat bukanlah sebagai sebuah doktrin keputusasaan,
              melainkan sebuah katalist untuk mempertanyakan norma-norma dan
              asumsi-asumsi tradisional.
            </p>

            <p>
              Meski demikian, aku paham arti penting dari berkolaborasi. Mencoba
              untuk saling memahami dan menjaga hubungan antar manusia amatlah
              penting.
            </p>

            {/* <p
              className="text-sm text-main-600 selection:text-red-500"
              draggable={false}
            >
              Tidak berencana untuk memiliki hubungan dengan manusia lain dan
              tidak berencana untuk memiliki keturunan. Memiliki keinginan untuk
              hidup tidak lebih dari 25 tahun dengan akhir yang tanpa
              penyesalan. Setidaknya itu yang ku inginkan untuk saat ini,{" "}
              <Redacted>
                <Link
                  className="text-sm text-main-600 selection:text-red-500"
                  href={"#tentangku"}
                >
                  atas
                </Link>
              </Redacted>
              .
            </p> */}

            <p>
              Hobiku adalah bermain internet, duduk mendengarkan orang lain,
              menulis, dan terjun kedaalam jurang kehampaan mencari makna dan
              arti dari kehidupan
              <span className="text-xs">(entah apapun itu)</span>.
            </p>

            <p>
              Bersahabat dengan kesendirian membuatku bisa belajar banyak hal,
              salah satunya adalah web development.{" "}
              <span className="text-xs">
                *Aku nggak jago-jago amat, tapi aku PD sama kemampuanku.
              </span>{" "}
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
              , so lets mimic one. Liminal Space, Weird Core, brrrr.{" "}
              <span className="text-xs">
                Terakhir, ada beberapa easter egg di web ini, mungkin kau bisa
                cari jika waktu luangmu terlalu banyak{" "}
                <Link
                  className="text-main-600 selection:text-white"
                  href={"/note"}
                >
                  seperti ini
                </Link>
                . Tapi jangan terjun terlalu dalam :D
              </span>
            </p>

            <blockquote className="prose-sm">
              &quot;Let&apos;s embark on this digital journey together,
              embracing the void and weaving meaningful experiences in the
              ever-changing digital cosmos.&quot;
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
                    className="flex justify-center gap-1 hover:underline"
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
