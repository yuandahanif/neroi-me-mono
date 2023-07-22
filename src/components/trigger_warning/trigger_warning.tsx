import React from "react";

const TriggerWarning: React.FC<{ onAccept?: () => void }> = ({ onAccept }) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-50 mx-auto w-auto -translate-x-1/2 rounded-md border border-main-300 bg-main-600 p-3 text-white shadow-lg">
      <div className="prose prose-sm prose-invert flex lg:max-w-sm flex-col text-sm">
        <blockquote className="">
          Terkadang menjadi tidak peduli adalah berkah, dan mungkin ini saatnya
          dirimu melakukanya.
        </blockquote>

        <p>
          Trigger Warning: Konten ini bukan untuk semua orang, terkadang ini
          berisi masalah teramat personal yang harus ku ungkapkan dan mungkin
          berisi hal-hal yang tidak pantas untuk di baca{" "}
          <span className="bg-main-600 text-main-600 underline decoration-white hover:text-white">
            seperti krisis eksistensi :D{" "}
          </span>
          .
        </p>

        <button className="mt-3 p-px px-2" type="button" onClick={onAccept}>
          Lanjutkan
        </button>
      </div>
    </div>
  );
};

export default TriggerWarning;
