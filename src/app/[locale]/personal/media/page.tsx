import { type Metadata } from "next";
import React, { Suspense } from "react";

import MainNavigation from "~/components/navigation/main.navigation";
import { getI18n } from "~/locales/server";
import { prisma } from "~/server/db";
import ImageGallery from "./imageGallery";
import { Skeleton } from "~/components/ui/skeleton";
import Image from "~/components/gallery/image";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Some are mine, some are not (see credits for the original owner). Enjoy.",
};

const GallerySkeleton: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((id) => (
        <Skeleton
          className="relative aspect-square h-fit w-full overflow-hidden sm:h-96 sm:w-96"
          key={id}
        />
      ))}
    </>
  );
};

const MediaPage: React.FC = async () => {
  const t = await getI18n();

  const images = prisma.media.findMany({
    orderBy: { createdAt: "desc" },
    where: { visibility: "PUBLIC" },
    include: { File: true },
  });

  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start py-10 `}
    >
      <h1 className="text-5xl">{"<Media/>"}</h1>
      <MainNavigation />

      <div className="prose prose-invert mt-10">
        <h3 className="text-center text-sm sm:text-xl">{t("MesiaSubtitle")}</h3>
      </div>

      <div className="mx-auto mt-10 flex w-full flex-wrap items-end justify-center gap-1">
        <Suspense fallback={<GallerySkeleton />}>
          {(await images).map(
            (img) =>
              img.File.length != 0 && (
                <Image
                  key={img.id}
                  image={{
                    alt: img.alt ?? "no alt",
                    createdAt: img.createdAt,
                    description: img.description ?? "",
                    isNsfw: img.isNsfw ?? false,
                    title: img.title ?? "",
                    file: img?.File ?? [],
                  }}
                  alt="image"
                />
              )
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MediaPage;
