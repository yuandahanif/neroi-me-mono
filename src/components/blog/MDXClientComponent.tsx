"use client";

import Image from "next/image";

const MdxImg = (props: (typeof Image)["defaultProps"]) => {
  return (
    <figure className="flex flex-col items-center justify-center">
      <div className="not-prose relative flex h-96 w-full flex-grow">
        <Image
          className="not-prose h-auto w-full object-contain"
          alt={props?.alt ?? "paceholder"}
          src={String(props?.src)}
          fill
        />
      </div>
      <figcaption>{props?.alt ?? "Lupa ngasih caption hehe"}</figcaption>
    </figure>
  );
};

export default MdxImg;
