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
    <div className="">
      <div className="relative mx-auto h-96 w-96">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain object-bottom"
        />
      </div>
      <div className="prose prose-sm prose-invert mx-auto text-center">
        <div>{description}</div>
      </div>
    </div>
  );
};

export default GalleryImage;
