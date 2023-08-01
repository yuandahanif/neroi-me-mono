import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Redacted from "~/components/text/redacted";

const Divider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="not-prose flex items-center justify-center gap-4">
    <hr className="w-full border-t" />
    <span className="whitespace-nowrap text-sm">{children}</span>
    <hr className="w-full border-t" />
  </div>
);

const MePage: NextPage = () => {
  const profileImageRef = useRef<SVGImageElement>(null);
  const rotateDegRef = useRef(0);
  const nonImportantDetailRef = useRef<HTMLDivElement>(null);

  const openUnimportantDetail = () => {
    if (nonImportantDetailRef.current) {
      nonImportantDetailRef.current.classList.toggle("hidden");
      nonImportantDetailRef.current.animate(
        [
          { transform: "scaleY(0.5)", opacity: 0 },
          { transform: "scaleY(1)", opacity: 1 },
        ],
        {
          duration: 400,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  };

  useEffect(() => {
    if (profileImageRef.current) {
      profileImageRef.current.addEventListener("mouseover", () => {
        profileImageRef.current?.animate(
          [{ transform: `rotate(${rotateDegRef.current}deg)` }],
          {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            endDelay: 1000,
            fill: "forwards",
          }
        );

        rotateDegRef.current = (rotateDegRef.current + 30) % 360;
      });
    }
  }, [rotateDegRef]);

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

            <div className="relative mx-auto mb-10 h-96 md:w-auto">
              <svg className="h-full w-full" aria-label="silly me">
                <image
                  ref={profileImageRef}
                  xlinkHref="/images/me.png"
                  className="h-full w-full origin-center rotate-12 object-contain object-center"
                ></image>
              </svg>
            </div>

            <Divider>Profesional</Divider>

            <p>
              Halo, namaku Yuanda aku seorang web developer dengan dua tahun
              pengalaman yang memiliki passion terkait desain minimalis dan
              absurd. Memiliki pengalaman dalam membuat website dan aplikasi web
              dengan menggunakan ekosistem teknologi modern seperti React, NextJS, dan
              TailwindCSS.
            </p>

            <p>
              Saat ini sedang bekerja sebagai <b>Part Time Web Developer</b> di{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                href="https://informatics.uii.ac.id/student-staff/"
              >
                Student Staff Universitas Islam Indonesia
              </a>{" "}
              dan kadang melakukan freelance.
            </p>

            <p>
              Punya semangat belajar yang tinggi terutama soal teknologi dan
              hal-hal baru. Mudah beradaptasi dan berkolaborasi dengan
              lingkungan baru. Dan suka berbagi tentang hal-hal yang ku sukai.
            </p>

            <p>
              Tujuanku saat ini adalah untuk terus memperluas pengetahuan dan
              keterampilanku untuk suatu saat dapat berkontribusi terhadap
              kemajuan umat manusia.
            </p>

            <Link
              href="/me#contact"
              className="mx-auto mb-10 flex w-fit justify-center text-center text-base no-underline hover:underline"
            >
              &#8595; Contact, CV, and Resume down below &#8595;
            </Link>

            <Divider>Personal</Divider>

            <p>
              Halo dan selamat datang di duniaku, namaku Yuanda{" "}
              <Redacted>Hanif Hisyam</Redacted>, seorang optimistik nihilis yang
              mencintai dan terlalu bergantung pada internet. Mencintai filosofi
              dan teknologi terutama internet sebagai salah satu pencapaian
              terbaik dari umat manusia.
            </p>

            <p>
              Mengambil nilai dari{" "}
              <span className="italic">kekosongan eksistensial</span> dan
              kehampaan, mencari perspektif berbeda dengan pendekatan dan cara
              untuk memandang kehidupan.
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

            <p>
              Mempunyai ketertatikan pada bidang teknologi, filsafat, dan
              psikologi. Mencintai konsep desain minimalis, absurd, dan
              antimainstream. Selain itu suka menjelajah dan mencoba hal-hal
              baru.
            </p>

            <p>
              Hobiku adalah bermain internet, duduk mendengarkan orang lain,
              menulis, dan terjun kedaalam jurang kehampaan mencari makna dan
              arti dari kehidupan
              <span className="text-xs">(entah apapun itu)</span>.
            </p>

            <blockquote className="prose-sm">
              &quot;Let&apos;s embark on this digital journey together,
              embracing the void and weaving meaningful experiences in the
              ever-changing digital cosmos.&quot;
            </blockquote>

            <div className="flex flex-col">
              <button
                type="button"
                className="mx-auto text-center"
                onClick={openUnimportantDetail}
              >
                <span className="mx-auto text-center text-xs underline">
                  Tampilkan lebih banyak
                </span>
              </button>

              <div
                ref={nonImportantDetailRef}
                className="hidden origin-top duration-200"
              >
                <Divider>More Personal</Divider>
                <p>
                  Kadang suka main CTF atau ngerjain soal-soal algoritma di
                  Hackerrank.
                </p>

                <p>
                  Suka main game, tapi bukan gamer, genre game favorit adalah
                  RPG, Open World, dan FPS terutama yang ceritanya ribet atau
                  multiple ending. Juga suka nonton film, genre film atau cerita
                  favorit adalah Horor, Sci-Fi, Misteri, dan Psychological
                  terutama yang bertema post apocalyptic.
                </p>

                <p>
                  Hampir ngopi tiap hari, tapi bukan pecandu kopi. Juga suka
                  makanan pedes meski sering bikin sakit perut.
                </p>

                <p>
                  Vtuber favoritku{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg"
                  >
                    Ninomae Ina&apos;nis
                  </a>
                  , cause she is talented, chearful, and wholesome. Also
                  eldritch/cosmic horror concept is soooo cool.
                </p>

                <p>
                  Masih single pastinya, tapi bukan incel, karena tipeku memang
                  agak rumit. Tapi kalau bisa ku kloning diriku sendiri, mungkin
                  aku akan menikah dengan diriku sendiri \jk.
                </p>

                <p>
                  Pengen suatu saat bisa kontribusi ke Linux kernel atau
                  software Open Source lainnya. Usaha yang sedang dilakukan
                  adalah belajar low level programming language (Rust) dan
                  belajar buat berkomunikasi lebih baik.
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
                    Terakhir, ada beberapa easter egg di web ini, mungkin kau
                    bisa cari jika waktu luangmu terlalu banyak{" "}
                    <Link
                      className="text-main-600 selection:text-white"
                      href={"/note"}
                    >
                      seperti ini
                    </Link>
                    . Tapi jangan terjun terlalu dalam :D
                  </span>
                </p>

                <span className="text-center text-xs">
                  I think thats enough info for you all to social engineering
                  me. If you need more info feel free to DM me on Discord
                  bellow.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10" id="contact">
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

          <div className="flex flex-wrap justify-center gap-x-10">
            <div className="mt-10">
              <h3 className="text-center">Playground</h3>
              <div className="mt-5">
                <ul className="flex flex-wrap justify-center gap-5">
                  <li>
                    <a
                      href="https://www.hackerrank.com/yuanda_Hanif?hr_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Hackerrank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.picoctf.org/users/asobi-tea__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      picoCTF
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
                      <span>CV dan Resume</span>
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
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
