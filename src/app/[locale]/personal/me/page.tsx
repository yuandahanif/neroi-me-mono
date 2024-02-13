import { type Metadata } from "next";

import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import AboutMeMoreSection from "./_aboutMeMoreSection";
import Redacted from "~/components/text/redacted";

export const metadata: Metadata = {
  title: "Me",
  description:
    "Somethings about me, if you are interested, of course, no pressure.",
};

const Divider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="not-prose flex items-center justify-center gap-4">
    <hr className="w-full border-t" />
    <span className="whitespace-nowrap text-sm">{children}</span>
    <hr className="w-full border-t" />
  </div>
);

const MePage = () => {
  return (
    <MainLayout>
      <main
        className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10 `}
      >
        <h1 className="text-5xl">{"<Me/>"}</h1>
        <MainNavigation />

        <div className="prose prose-invert mt-10 lg:prose-lg">
          <h3 className="text-center" id="tentangku">
            About Me
          </h3>
          <div
            className="relative mx-auto mb-10 h-96 md:w-auto"
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
          <div>
            <p>
              Hello and welcome to my world, my name is{" "}
              <Redacted>[redacted]</Redacted>, an optimistic nihilist who loves
              and relies too much on the internet. Loves philosophy and
              technology especially the internet as one of the best achievements
              of humanity.
            </p>
          </div>

          <Divider>v1</Divider>

          <AboutMeMoreSection />

          <span className="text-center text-xs">
            I think thats enough info for you all to social engineering me. If
            you need more info feel free to DM me on Discord bellow.
          </span>
        </div>

        <div className="mt-10" id="contact">
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
      </main>
    </MainLayout>
  );
};

export default MePage;
