"use client";

import { type Media } from "@prisma/client";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import local_date from "~/lib/local_date";
import { cn } from "~/lib/utils";

type Props = (typeof Image)["defaultProps"] & {
  className?: string;
  title?: string;
  isNsfw?: boolean;
  image: Media;
};

const GalleryImage: React.FC<Props> = ({
  image: { title, url, alt, description, isNsfw, createdAt },
  className,
}) => {
  const largePreviewDialogRef = useRef<HTMLDialogElement>(null);
  const [isNfswVisible, setIsNfswVisible] = useState(false);

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
    setIsNfswVisible(false);
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
        setIsNfswVisible(false);
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
        <figure className="relative flex w-full flex-col items-center justify-center gap-y-2 sm:h-full">
          <div className="not-prose relative flex h-4/5 w-full flex-grow overflow-y-hidden">
            <Image
              onContextMenu={(e) => e.preventDefault()}
              src={url}
              alt={String(alt)}
              className={cn(
                "not-prose h-auto w-auto object-contain object-center",
                !isNfswVisible && isNsfw ? "blur-xl filter" : ""
              )}
              fill
            />

            {!isNfswVisible && isNsfw && (
              <button
                tabIndex={-1}
                className="absolute left-1/2 top-1/2 box-content inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-x-2 rounded-full border-2 border-main-500 bg-main-500 bg-opacity-30 px-4 py-2 text-white transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => setIsNfswVisible(true)}
              >
                <EyeOpenIcon className="h-4 w-4" />
                show
              </button>
            )}
          </div>

          <figcaption className="text-center text-sm opacity-50">
            {title}
          </figcaption>
        </figure>

        <div className="flex flex-col items-center">
          <div className="prose prose-invert mx-auto inline-flex w-full flex-wrap bg-gradient-to-t from-main-600 to-transparent py-3 text-justify text-xs">
            <p className="">{description}</p>
            <span className="ml-auto mt-2">
              {local_date(createdAt, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </span>
          </div>

          <Button
            variant="link"
            title="close"
            type="button"
            className="mx-auto w-fit"
            onClick={closeLargePreview}
            tabIndex={1}
          >
            close
          </Button>
        </div>
      </dialog>

      <div
        className="relative aspect-square h-fit w-full overflow-hidden sm:h-96 sm:w-96"
        onClick={openLargePreview}
      >
        <Image
          onContextMenu={(e) => e.preventDefault()}
          src={url}
          alt={String(alt)}
          className={cn(
            "cursor-pointer object-cover object-center ",
            isNsfw
              ? "blur-xl filter"
              : "duration-500 ease-in-out group-hover:scale-105"
          )}
          sizes="384px 384px"
          fill
        />

        <div className="absolute bottom-0 mx-auto inline-flex w-full flex-wrap bg-gradient-to-t from-main-600 to-transparent p-3 text-left text-xs">
          <p className="mb-1 line-clamp-1 w-full text-sm">{title}</p>
          <p className="line-clamp-2 w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
