import { type Metadata } from "next";

import MainNavigation from "~/components/navigation/main.navigation";
import AboutMeV1 from "./_aboutMeV1";
import Link from "next/link";
import AboutMeV2 from "./_aboutMeV2";
import AboutMeGift from "./_gift";

export const metadata: Metadata = {
  title: "Me",
  description:
    "Somethings about me, if you are interested, of course, no pressure.",
};

const Divider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="not-prose flex items-center justify-center gap-4">
    <hr className="w-full border-t" />
    <span className="whitespace-nowrap text-sm">{children}</span>
    <hr className="w-full border-t" />
  </div>
);

const MePage = () => {
  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start py-10 `}
    >
      <h1 className="text-5xl">{"<Me/>"}</h1>
      <MainNavigation />

      <div className="prose prose-sm prose-invert mt-10 px-2 md:prose-base lg:prose-lg">
        <h3 className="text-center" id="tentangku">
          About Me
        </h3>

        <div
          className="relative mx-auto mb-10 h-96 p-5 sm:p-0 md:w-auto"
          title="silly me"
        >
          <svg className="h-full w-full" aria-label="silly me">
            <image
              xlinkHref="/images/me.png"
              className="h-full w-full origin-center rotate-12 object-contain object-center"
            ></image>
          </svg>
        </div>
        <Divider>v3</Divider>

        <div className="mx-auto text-justify">
          <section>
            Halo, selamat datang di antah berantah. Sebelumnya selamat, dirimu
            telah menemukan gubuk vertual tempat seorang self proclaim
            optimistic nihilist tinggal. Tolong, terimalah hadiah sederhana{" "}
            <AboutMeGift>ini</AboutMeGift> dariku.
          </section>

          <p>
            Perkenalkan, namaku Yuanda, seekor kucing abadi yang sedang
            menjalani krisis seperempat masa kehidupan. Paradoks? abadi dengan
            seperempat masa kehidupan? definisi abadi disini bukan berarti aku
            tidak bisa mati, tapi aku bisa memilih kapan aku akan pergi dari
            sini.
          </p>

          <p>
            Aku ingin bercerita sedikit soal diriku di halaman ini, jadi tolong
            bersabar dan maaf atas apa yang ingin kusampaikan.{" "}
            <span className="text-sm">
              Sebenarnya ini iterasai ke-3 dari halaman ini, jika kau mau
              melihat seperti apa diriku berubah, ada tombol untuk versi
              sebelumnya di bagian bawah halaman ini (spoiler: tidak banyak).
            </span>
          </p>

          <p>
            Seperti orang pada umumnya aku punya{" "}
            <span className="italic">interest</span> dan juga hobi. Salah satu
            bidang yang kutekuni adalah teknologi, namun lebih mengarah ke
            bagian perangkat lunak. Ketertarikan lain yang kumiliki adalah
            Jejepangan, Psikologi, dan Filsafat. Beberapa hobiku yang sebagian
            besar masih terkait dengan ketertarikan yang kumiliki antara lain:
            hal-hal soal Jejepangan, mengotak-atik software, menulis, dan
            <span className="italic"> cosplay</span>.
          </p>

          <p>
            Selain itu aku juga menyukai hal-hal berbau misteri, terutama
            internet misteri seperti ARG(
            <span className="italic">Alternate Reality Game</span>), crepypasta,
            dan analog horror. Hal ini juga yang menjadi tema dari website ini,
            aku ingin membuat tempat ini memiliki suasana internet misteri dan
            berkesan tua. Selain tempat ini, aku juga memiliki beberapa tempat
            lain di internet, bahkan di <span className="italic">deep web</span>
            (situs <span className="italic">onion</span>). Jadi jika kalian
            menemukan diriku di internet, jangan sungkan untuk menyapa (akan
            kutinggalkan semua yang kumiliki di section kontak). Sejujurnya,
            mungkin tidak akan mudah untuk menemukan mereka, karena manurutku
            mereka seperti orang yang benar-benar berbeda dari diriku.
          </p>

          <p>
            Terakhir, aku akan bercerita hal buruk soal diriku,
            <span className="text-sm">
              {" "}
              (karena aku mempercayai kalian, wahai orang asing di internet)
            </span>
            . Aku memiliki kesulitan dalam interaksi sosial, aku hampir selalu
            melakukan semua hal sendiri, dan sekarang kemampuan bersosialisasi
            ku adalah nol besar.
          </p>
        </div>

        <Divider>v2</Divider>
        <AboutMeV2 />

        <Divider>v1</Divider>
        <AboutMeV1 />
      </div>

      <div className="mt-10 px-2" id="contact">
        <h3 className="text-center">Contacts</h3>
        <div className="mt-5">
          <ul className="flex flex-wrap justify-center gap-5">
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
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                Reddit
              </a>
            </li>
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                BlueSky
              </a>
            </li>
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                Shrine
              </a>
            </li>
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                Onion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MePage;
