"use client";

import Image from "~/components/gallery/image";
import { type Media } from "@prisma/client";

const ImageGallery: React.FC<{ images: Media[] }> = ({ images }) => {
  return (
    <>
      {images.map((img) => (
        <Image key={img.id} image={img} alt="image" />
      ))}
    </>
  );
};

export default ImageGallery;
