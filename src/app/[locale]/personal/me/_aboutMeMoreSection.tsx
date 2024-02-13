"use client";
import { type NextPage } from "next";
import { useRef } from "react";
import Redacted from "~/components/text/redacted";

const AboutMeMoreSection: NextPage = () => {
  const nonImportantDetailRef = useRef<HTMLDivElement>(null);

  const openUnimportantDetail = () => {
    if (nonImportantDetailRef.current) {
      nonImportantDetailRef.current.classList.toggle("hidden");
      nonImportantDetailRef.current.animate(
        [
          { transform: "scaleY(0.5)", opacity: 0 },
          { transform: "scaleY(1)", opacity: 1 },
        ],
        {
          duration: 400,
          iterations: 1,
          easing: "ease-in-out",
          fill: "forwards",
        }
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div
        ref={nonImportantDetailRef}
        className="hidden origin-top duration-200"
      >
        <p>
          Hello and welcome to my world, my name is{" "}
          <Redacted>[redacted]</Redacted>, an optimistic nihilist who loves and
          relies too much on the internet. Loves philosophy and technology
          especially the internet as one of the best achievements of humanity.
        </p>
        <p>
          Taking value from <i>existential void and emptiness</i>, seeking
          different perspectives to approach and perceive life.
        </p>
        <p>
          I see nihilism not as a hopeless doctrine, but as a catalyst for
          questioning traditional norms and assumptions.
        </p>
        <p>
          However, I understand the importance of collaboration. Trying to
          understand each other and maintain human relationships is very
          important.{" "}
        </p>
        <p>
          Has an interest in technology, philosophy, and psychology. Loves
          minimalist, absurd, and anti-mainstream design concepts. Also loves to
          explore and try new things.
        </p>
        <p>
          My hobbies are surfing the internet, listening to others, writing, and
          plunging into the abyss of the void in search of the meaning and
          significance of life{" "}
          <span className="text-xs">(whatever that means)</span>.
        </p>

        <blockquote className="prose-sm">
          &quot;Let&apos;s embark on this digital journey together, embracing
          the void and weaving meaningful experiences in the ever-changing
          digital cosmos.&quot;
        </blockquote>

        <p>
          Sometimes I like to play CTF or do algorithm problems on Hackerrank.
        </p>
        <p>
          Like to play games, but not a gamer, favorite game genres are RPG,
          Open World, and FPS especially those with complex stories or multiple
          endings. Also like to watch movies, favorite movie genres or stories
          are Horror, Sci-Fi, Mystery, and Psychological. especially those with
          post apocalyptic themes.
        </p>
        <p>
          I enjoy coffee almost every day, but I&apos;m not a coffee junkie.
          Also like spicy food even though it often makes my stomach hurt.
        </p>
        <p>
          My favorite Vtuber is{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg"
          >
            Ninomae Ina&apos;nis
          </a>
          , cause she is talented, chearful, and wholesome. Also eldritch/cosmic
          horror concept is soooo cool.
        </p>
        <p>
          I&apos;m single for a fact, but I&apos;m not an incel, because my type
          is a bit complex. But if I can clone myself, maybe I would marry
          myself \jk.
        </p>
        <p>
          I want to be able to contribute to the Linux kernel or other Open
          Source software one day. Ongoing efforts are learning low level
          programming language (Rust) and learning to communicate better.
        </p>
        <p>
          Also like{" "}
          <a
            href="https://en.wikipedia.org/wiki/Alternate_reality_game"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            ARG
          </a>
          , so lets mimic one. Liminal Space, Weird Core, brrrr.{" "}
          <span className="text-xs">
            Lastly, there are some easter eggs on this website, maybe you can
            look for them if you have too much free time.
            <a
              className="text-main-600 decoration-white selection:text-white hover:underline"
              href="/note"
            >
              just like this
            </a>
            . But don&apos;t go too deep :D
          </span>
        </p>
      </div>

      <button
        type="button"
        className="mx-auto text-center"
        onClick={openUnimportantDetail}
      >
        <span className="mx-auto text-center text-xs underline">Show more</span>
      </button>
    </div>
  );
};

export default AboutMeMoreSection;
