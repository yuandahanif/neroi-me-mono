"use client";

import Image from "next/image";

const MdxImg = (props: (typeof Image)["defaultProps"]) => {
  return (
    <figure className="flex flex-col items-center justify-center">
      <div className="not-prose h-96 flex relative w-full flex-grow">
        <Image
          className="not-prose h-auto w-full object-contain"
          alt={props?.alt ?? "paceholder"}
          src={
            "https://safebooru.org//images/4590/8b9eaceb49800bb4e832f15ed7d14db3513a3215.png"
          }
          fill
        />
      </div>
      <figcaption>{props?.alt ?? "Lupa ngasih caption hehe"}</figcaption>
    </figure>
  );
};

export default MdxImg;
