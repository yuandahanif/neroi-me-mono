"use client";

import { useEffect, useRef, useState } from "react";

const AboutMeGift: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, []);

  return (
    <>
      <a href="#gift" className="underline" onClick={openDialog}>
        {children}
      </a>

      <dialog
        className=" my-auto h-fit w-full bg-transparent p-20"
        ref={dialogRef}
        tabIndex={-1}
      >
        <div className="relative z-50 mx-auto h-fit w-full max-w-screen-sm bg-white p-8 text-left before:absolute before:-z-50 before:-ml-4 before:-mt-4 before:h-full before:w-full before:border-2 before:border-white before:content-['']">
          <p>
            Terimakasih telah menerima hadiah dariku.
            <br />
            <span className="text-xs text-white">
              http://reinee23xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.onion
            </span>
          </p>

          <p className="text-xs">ping Discordku, jika masih ada, ku kasih 10k :3</p>

          <div className="flex w-full justify-center">
            <button onClick={closeDialog} type="button" className="text-sm">
              Tutup
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AboutMeGift;
