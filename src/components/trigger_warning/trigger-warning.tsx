"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const TriggerWarning: React.FC<{
  isDefaultOpen: boolean;
}> = ({ isDefaultOpen = false }) => {
  const dialogRef = useRef<React.ElementRef<"dialog">>(null);

  const hideModal = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    if (isDefaultOpen && dialogRef.current) {
      dialogRef.current?.showModal();
    }
  }, [isDefaultOpen, dialogRef]);

  return (
    <dialog
      ref={dialogRef}
      className="rounded-md border border-main-300 bg-main-600 p-3 text-white shadow-lg backdrop:backdrop-blur-md"
    >
      <div className="prose prose-sm prose-invert flex flex-col text-sm lg:max-w-sm">
        <p>
          Konten ini mungkin mengandung hal-hal yang tidak cocok untuk semua
          orang.
        </p>

        <div className="flex justify-center flex-row-reverse">
          <Link href={"/blogs"} className="mt-3 p-px px-2 text-green-500">
            Kembali
          </Link>
          <button
            className="mt-3 p-px px-2 text-red-500"
            type="button"
            onClick={hideModal}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TriggerWarning;
