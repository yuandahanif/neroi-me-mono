import Image from "next/image";
import { useRef, type ReactNode, useState, useEffect } from "react";

interface Props {
  imageSrc: string;
  imageAlt?: string;
  description: ReactNode;
  slideshow?: { src: string; alt?: string; description: ReactNode }[];
}

const GalleryImage: React.FC<Props> = ({
  imageSrc,
  imageAlt = "",
  description,
  slideshow,
}) => {
  const [imgIndex, setImageIndex] = useState(0);
  const largePreviewDialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    setImageIndex(0);
    largePreviewDialogRef.current?.showModal();
  };

  const cycleSlideshow = (dir: "next" | "prev") => {
    if (slideshow && slideshow.length > 0) {
      setImageIndex((s) => {
        if (dir == "next") {
          s += 1;
          if (s > slideshow.length - 1) {
            s = 0;
          }
        } else {
          s -= 1;
          if (s < 0) {
            s = slideshow.length - 1;
          }
        }

        return s;
      });
    }
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
    <div className="">
      <dialog
        ref={largePreviewDialogRef}
        className="max-h-[80vh] min-h-[60vh] w-auto max-w-screen-lg overflow-auto border bg-main-600 text-white backdrop:bg-opacity-80 backdrop:backdrop-blur-sm"
      >
        {!slideshow && (
          <>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="m-auto object-contain"
              fill
            />
            <div className="relative flex flex-col">
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                src:
              </span>
              <span className="mb-2 w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{imageSrc}&quot;
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                alt:
              </span>
              <span className="mb-2 w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{imageAlt}&quot;
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                description:
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{description}&quot;
              </span>
            </div>
          </>
        )}

        {slideshow && slideshow.length > 0 && (
          <>
            <Image
              src={slideshow[imgIndex]?.src ?? ""}
              alt={slideshow[imgIndex]?.alt ?? ""}
              className="object-contain object-center"
              fill
            />

            <div className="relative flex flex-col">
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                src:
              </span>
              <span className="mb-2 w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{slideshow[imgIndex]?.src ?? ""}&quot;
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                alt:
              </span>
              <span className="mb-2 w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{slideshow[imgIndex]?.alt ?? ""}&quot;
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                description:
              </span>
              <span className="w-fit bg-main-300 bg-opacity-50 text-xs">
                &quot;{slideshow[imgIndex]?.description ?? ""}&quot;
              </span>
            </div>

            <div className="absolute left-0 top-1/2 z-10 flex h-80 w-full -translate-y-1/2 items-center justify-between bg-opacity-20 p-8">
              <button onClick={() => cycleSlideshow("prev")}>ba{"<"}k</button>
              <button onClick={() => cycleSlideshow("next")}>n{">"}xt</button>
            </div>
          </>
        )}
      </dialog>

      <div className="w-[80vw] sm:w-fit">
        <div
          className="relative mx-auto aspect-square h-fit w-full sm:h-96 sm:w-96 "
          onClick={handleClick}
        >
          <Image
            title={imageAlt}
            src={imageSrc}
            alt={imageAlt}
            className="cursor-pointer object-contain object-bottom"
            sizes="384px 384px"
            fill
          />

          {slideshow && (
            <div className="absolute inset-0 m-auto flex h-fit w-fit translate-y-20 flex-col items-center justify-center bg-main-600 bg-opacity-70 p-1">
              <button type="button">(Slides)</button>
            </div>
          )}
        </div>

        <div className="prose prose-sm prose-invert mx-auto mt-3 text-center">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
