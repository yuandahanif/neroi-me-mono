import Image from "next/image";
import { useRef, type ReactNode, useEffect } from "react";

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
  const largePreviewVisible = useRef(false);
  const largePreviewDialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    largePreviewDialogRef.current?.showModal();
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
        <div className="flex flex-col">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-contain object-bottom"
            fill
          />
        </div>

        <div className="prose prose-sm prose-invert mx-auto mt-3 text-center">
          <div>{description}</div>
        </div>
      </dialog>

      <div className="w-full sm:w-fit">
        <div
          className="relative mx-auto aspect-square h-fit w-full sm:h-96 sm:w-96 "
          onClick={handleClick}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="object-contain object-bottom"
            fill
            sizes="384px 384px"
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
