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
      <div className="relative mx-auto h-fit min-h-[384px] w-96 ">
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
