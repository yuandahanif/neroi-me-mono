"use client";
import { type NextPage } from "next";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutMeV2: NextPage = () => {
  const nonImportantDetailRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const toggleDetail = () => {
    if (nonImportantDetailRef.current) {
      const isContentVisible =
        nonImportantDetailRef.current.ariaHidden != "true";
      const contentHeight = nonImportantDetailRef.current.scrollHeight;

      setHeight(isContentVisible ? 0 : contentHeight);
      nonImportantDetailRef.current.ariaHidden = isContentVisible
        ? "true"
        : "false";
    }
  };

  return (
    <div className="mx-auto flex flex-col text-justify">
      <motion.div
        className="relative overflow-hidden"
        ref={nonImportantDetailRef}
        aria-hidden="true"
        animate={{ height }}
        transition={{ ease: "linear" }}
      >
        <p>
          Hello, and welcome to the abyss of my existence. You&apos;ve stumbled
          upon the <b>virtual dwelling</b> of a self-professed optimistic
          nihilist who finds joy in the paradoxes of life and has a peculiar
          penchant for both philosophy and tech.
        </p>

        <p>
          Chronically online doesn&apos;t even begin to cover{" "}
          <b>my relationship with the internet</b>. It&apos;s more like
          we&apos;re in a co-dependent union, bordering on unhealthy obsession.
          But let&apos;s not fret over my questionable lifestyle choices. I
          mean, who needs sunlight and physical interaction when you have the
          radiant glow of your screen and countless Reddit threads at 3 am?
        </p>

        <p>
          Stimulating my mind with <b>existential dread</b> is my idea of a
          riveted evening - you know, because nothing screams
          &apos;comfort&apos; like pumping my anxiety meat with caffeine while
          contemplating our insignificance in the vast cosmic horror we call the
          universe.
        </p>

        <p>
          Ah, yes! <b>My mental health!</b> It&apos;s a lot like
          Schrodinger&apos;s cat - both alive and dead until one musters the
          courage (or desperation) to open the box. Newton&apos;s Law of Emotion
          perhaps? For every bout of joy, there is an equal and opposite
          existential crisis. It&apos;s a fun ride really, like a roller coaster
          designed by Dali and Escher. You never know where you are - upside
          down, inside out, or if you&apos;ve been morphing into a clock the
          whole time.
        </p>

        <p>
          But I digress. I do have a soft spot for the human experience and the
          importance of human connection. I believe that understanding and
          empathizing with each other is crucial to our{" "}
          <b>survival as a species</b>. It&apos;s the only way we can hope to
          navigate the labyrinth of life and find some semblance of meaning in
          the chaos.
        </p>
      </motion.div>

      <button
        type="button"
        className="mx-auto text-center"
        onClick={toggleDetail}
      >
        <span className="mx-auto text-center text-xs underline">
          {height == 0 ? "Show" : "Hide"}
        </span>
      </button>
    </div>
  );
};

export default AboutMeV2;
