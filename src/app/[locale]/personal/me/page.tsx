import { type Metadata } from "next";

import MainNavigation from "~/components/navigation/main.navigation";
import AboutMeMoreSection from "./_aboutMeMoreSection";

export const metadata: Metadata = {
  title: "Me",
  description:
    "Somethings about me, if you are interested, of course, no pressure.",
};

const Divider: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="not-prose flex items-center justify-center gap-4">
    <hr className="w-full border-t" />
    <span className="whitespace-nowrap text-sm">{children}</span>
    <hr className="w-full border-t" />
  </div>
);

const MePage = () => {
  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start py-10 `}
    >
      <h1 className="text-5xl">{"<Me/>"}</h1>
      <MainNavigation />

      <div className="prose prose-sm prose-invert mt-10 px-2 md:prose-base lg:prose-lg">
        <h3 className="text-center" id="tentangku">
          About Me
        </h3>

        <div
          className="relative mx-auto mb-10 h-96 p-5 sm:p-0 md:w-auto"
          title="silly me"
        >
          <svg className="h-full w-full" aria-label="silly me">
            <image
              xlinkHref="/images/me.png"
              className="h-full w-full origin-center rotate-12 object-contain object-center"
            ></image>
          </svg>
        </div>

        <Divider>v2</Divider>
        <div className="mx-auto text-justify">
          <p>
            Hello, and welcome to the abyss of my existence. You&apos;ve
            stumbled upon the <b>virtual dwelling</b> of a self-professed
            optimistic nihilist who finds joy in the paradoxes of life and has a
            peculiar penchant for both philosophy and tech.
          </p>

          <p>
            Chronically online doesn&apos;t even begin to cover{" "}
            <b>my relationship with the internet</b>. It&apos;s more like
            we&apos;re in a co-dependent union, bordering on unhealthy
            obsession. But let&apos;s not fret over my questionable lifestyle
            choices. I mean, who needs sunlight and physical interaction when
            you have the radiant glow of your screen and countless Reddit
            threads at 3 am?
          </p>

          <p>
            Stimulating my mind with <b>existential dread</b> is my idea of a
            riveted evening - you know, because nothing screams
            &apos;comfort&apos; like pumping my anxiety meat with caffeine while
            contemplating our insignificance in the vast cosmic horror we call
            the universe.
          </p>

          <p>
            Ah, yes! <b>My mental health!</b> It&apos;s a lot like
            Schrodinger&apos;s cat - both alive and dead until one musters the
            courage (or desperation) to open the box. Newton&apos;s Law of
            Emotion perhaps? For every bout of joy, there is an equal and
            opposite existential crisis. It&apos;s a fun ride really, like a
            roller coaster designed by Dali and Escher. You never know where you
            are - upside down, inside out, or if you&apos;ve been morphing into
            a clock the whole time.
          </p>

          <p>
            But I digress. I do have a soft spot for the human experience and
            the importance of human connection. I believe that understanding and
            empathizing with each other is crucial to our{" "}
            <b>survival as a species</b>. It&apos;s the only way we can hope to
            navigate the labyrinth of life and find some semblance of meaning in
            the chaos.
          </p>
        </div>

        <Divider>v1</Divider>
        <AboutMeMoreSection />
      </div>

      <div className="mt-10 px-2" id="contact">
        <h3 className="text-center">Contacts</h3>
        <div className="mt-5">
          <ul className="flex flex-wrap justify-center gap-5">
            <li>
              <a
                href="http://discordapp.com/users/378907976267726859"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="#message-me-if-you-found-me"
                className="cursor-default opacity-50"
              >
                Reddit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MePage;
