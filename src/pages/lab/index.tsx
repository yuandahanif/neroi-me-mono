import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import ImageAvatar from "~/components/images/imageAvatar";
import MainNavigation from "~/components/navigation/main.navigation";
import MainLayout from "~/layouts/main.layout";

const LabPage: NextPage = () => {
  return (
    <>
      <HeadSEO
        title="Lab"
        description="Tempat apapun yaang terlalu sederhana untuk disebut project."
      />
      <MainLayout>
        <div className="flex w-full justify-center">
          <main
            className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
          >
            <h1 className="text-5xl">{"<Lab/>"}</h1>
            <MainNavigation />

            <div className="lg:prose-md prose prose-sm prose-invert mb-10 mt-10 lg:prose-sm">
              <h3 className="text-center" id="tentangku">
                Selamat datang di <i>ground zero</i> tempat pengujian dan
                eksperimen. Disini berisi <i>proof of concept</i> terkit
                teknologi atau hal-hal aneh yang kubuat.
              </h3>
            </div>

            <div className="hidden flex-col flex-wrap items-center gap-10 md:flex">
              <div className="flex flex-wrap items-end justify-center gap-24">
                <div className="flex h-auto flex-col gap-3">
                  <div className="relative flex h-[500px] w-[500px]">
                    <iframe
                      className="h-full w-full"
                      src="https://editor.p5js.org/yuandahanif/full/W4qwywUDt"
                    />
                  </div>
                  <div className="flex justify-center">
                    <p>Tugas multimedia menggunakan p5.js - (2022)</p>
                  </div>
                </div>
                <div className="flex h-auto flex-col gap-3">
                  <div className="relative flex ">
                    <ImageAvatar />
                  </div>
                  <div className="flex justify-center">
                    <p>SVG + framer-motion - (2022)</p>
                  </div>
                </div>
              </div>

              <div className="flex h-auto w-full flex-col gap-3">
                <div className="relative flex h-[750px] w-full 2xl:w-[1500px]">
                  <iframe
                    className="h-full w-full"
                    src="https://editor.p5js.org/yuandahanif/full/8d_NRegB3"
                  />
                </div>
                <div className="flex justify-center">
                  <p>p5.js part 2 - (2022)</p>
                </div>
              </div>

              {/* <div className="flex h-auto flex-col gap-3">
                <div className="relative flex aspect-video h-[750px]">
                  <iframe
                    // width="560"
                    // height="315"
                    className="w-full"
                    src="https://www.youtube.com/embed/bobRTBrieME"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="flex justify-center">
                  <p>RPG MAKER MV - (2022)</p>
                </div>
              </div> */}
            </div>

            <div className="prose prose-invert flex h-full items-center px-4 text-center md:hidden">
              <span>
                (Maaf, lab tidak tersedia di perangkat mobile. Silahkan gunakan
                PC atau desktop mode.)
              </span>
            </div>
          </main>
        </div>
      </MainLayout>
    </>
  );
};

export default LabPage;
