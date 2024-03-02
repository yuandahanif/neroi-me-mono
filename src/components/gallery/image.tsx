"use client";

import Image from "next/image";
import { useRef, type ReactNode, useState, useEffect } from "react";
import { Button } from "../ui/button";

type Props = (typeof Image)["defaultProps"] & {
  description: string;
  className?: string;
};

const GalleryImage: React.FC<Props> = ({
  src,
  alt,
  description,
  className,
}) => {
  const largePreviewDialogRef = useRef<HTMLDialogElement>(null);

  const openLargePreview = () => {
    if (largePreviewDialogRef.current == null) {
      alert("oops");
    }

    largePreviewDialogRef.current?.showModal();
  };

  const closeLargePreview = () => {
    if (largePreviewDialogRef.current == null) {
      alert("oops");
    }

    largePreviewDialogRef.current?.close();
  };

  useEffect(() => {
    const ref = largePreviewDialogRef.current;
    const clickHandler = (e: MouseEvent) => {
      const dialogDimensions = ref?.getBoundingClientRect();

      if (
        dialogDimensions &&
        (e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom)
      ) {
        ref?.close();
      }
    };

    if (ref) {
      ref.addEventListener("click", clickHandler);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("click", clickHandler);
      }
    };
  });

  return (
    <div className="group relative w-[80vw] sm:w-fit">
      <dialog
        ref={largePreviewDialogRef}
        className="z-auto h-full w-full max-w-screen-lg overflow-auto border bg-main-600 p-5 text-white backdrop:bg-opacity-80 backdrop:backdrop-blur-sm sm:h-4/5"
      >
        <figure className="relative flex h-4/5 w-full flex-col items-center justify-center gap-y-2 sm:h-full">
          <figcaption className="text-center text-xs opacity-50">
            {alt}
          </figcaption>

          <div className="not-prose relative flex h-full w-full flex-grow">
            <Image
              title={alt}
              src={String(src)}
              alt={String(alt)}
              className="not-prose h-auto w-full object-contain object-center"
              sizes="384px 384px"
              fill
            />
          </div>
        </figure>

        <div className="flex flex-col items-center">
          <div className="prose prose-invert mx-auto inline-flex w-full flex-wrap bg-gradient-to-t from-main-600 to-transparent py-3 text-justify text-xs">
            <p className="">{description}</p>
            <span className="ml-auto mt-2">20/12/2025</span>
          </div>

          <Button
            variant="link"
            title="close"
            type="button"
            className="mx-auto w-fit"
            onClick={closeLargePreview}
          >
            close
          </Button>
        </div>
      </dialog>

      <div
        className="relative mx-auto aspect-square h-fit w-full overflow-hidden sm:h-96 sm:w-96"
        onClick={openLargePreview}
      >
        <Image
          title={alt}
          src={String(src)}
          alt={String(alt)}
          className="cursor-pointer object-cover object-center duration-500 ease-in-out group-hover:scale-105"
          sizes="384px 384px"
          fill
        />

        <div className="absolute bottom-0 mx-auto inline-flex w-full flex-wrap bg-gradient-to-t from-main-600 to-transparent p-3 text-left text-xs">
          <p className="line-clamp-2 w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
