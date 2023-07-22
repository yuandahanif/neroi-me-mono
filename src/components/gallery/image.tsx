import Image from "next/image";
import { type ReactNode } from "react";

interface Props {
  imageSrc: string;
  imageAlt?: string;
  description: ReactNode;
}

const GalleryImage: React.FC<Props> = ({
  imageSrc,
  imageAlt = "",
  description,
}) => {
  return (
    <div className="w-full sm:w-fit">
      <div className="relative mx-auto h-fit w-full sm:w-96 sm:h-96 aspect-square ">
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
    </div>
  );
};

export default GalleryImage;
