import { type NextPage } from "next";

import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";
import MainNavigation from "~/components/navigation/main.navigation";
import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import Redacted from "~/components/text/redacted";
import getI18nProps from "~/i18n/getStaticPropsI18n.helper";
import { I18nContext } from "~/i18n/i18n-react";

export const getStaticProps = getI18nProps;

const Divider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="not-prose flex items-center justify-center gap-4">
    <hr className="w-full border-t" />
    <span className="whitespace-nowrap text-sm">{children}</span>
    <hr className="w-full border-t" />
  </div>
);

const MePage: NextPage = () => {
  const { LL } = useContext(I18nContext);

  const profileImageRef = useRef<SVGImageElement>(null);
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
    <>
      <HeadSEO title="Me" description="" />
      <MainLayout>
        <main
          className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10 `}
        >
          <h1 className="text-5xl">{"<Me/>"}</h1>
          <MainNavigation />

          <div className="prose prose-invert mt-10 lg:prose-lg">
            <h3 className="text-center" id="tentangku">
              {LL.AboutMe()}
            </h3>
            <div
              className="relative mx-auto mb-10 h-96 md:w-auto"
              title="silly me"
            >
              <svg className="h-full w-full" aria-label="silly me">
                <image
                  ref={profileImageRef}
                  xlinkHref="/images/me.png"
                  className="h-full w-full origin-center rotate-12 object-contain object-center"
                ></image>
              </svg>
            </div>

            <Divider>{LL.Professional()}</Divider>

            <div dangerouslySetInnerHTML={{ __html: LL.ProfessionalMotto() }} />

            <Link
              href="/me#contact"
              className="mx-auto mb-10 flex w-fit justify-center text-center text-base no-underline hover:underline"
            >
              &#8595; Contacts , CV, and Resume down below &#8595;
            </Link>

            <Divider>Personal</Divider>

            <div
              dangerouslySetInnerHTML={{
                __html: LL.PersonalMotto({
                  redacted: <Redacted>Hanif Hisyam</Redacted>,
                }),
              }}
            ></div>

            <blockquote className="prose-sm">
              &quot;Let&apos;s embark on this digital journey together,
              embracing the void and weaving meaningful experiences in the
              ever-changing digital cosmos.&quot;
            </blockquote>

            <div className="flex flex-col">
              <button
                type="button"
                className="mx-auto text-center"
                onClick={openUnimportantDetail}
              >
                <span className="mx-auto text-center text-xs underline">
                  {LL.ProfileMore()}
                </span>
              </button>

              <div
                ref={nonImportantDetailRef}
                className="hidden origin-top duration-200"
              >
                <Divider>More Personal</Divider>

                <div
                  dangerouslySetInnerHTML={{ __html: LL.MorePersonalMotto() }}
                ></div>

                <span className="text-center text-xs">
                  I think thats enough info for you all to social engineering
                  me. If you need more info feel free to DM me on Discord
                  bellow.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10" id="contact">
            <h3 className="text-center">
              {LL.Contacts()} <br />
              <span className="text-sm">({LL.Professional()})</span>
            </h3>
            <div className="mt-5">
              <ul className="flex flex-wrap justify-center gap-5">
                <li>
                  <a
                    href="https://github.com/yuandahanif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yuanda-hanif-hisyam-1432701aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:yuan.nanode@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    yuan.nanode@gmail.com
                  </a>
                </li>
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
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10">
            <div className="mt-10">
              <h3 className="text-center">Playground</h3>
              <div className="mt-5">
                <ul className="flex flex-wrap justify-center gap-5">
                  <li>
                    <a
                      href="https://www.hackerrank.com/yuanda_Hanif?hr_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Hackerrank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://play.picoctf.org/users/asobi-tea__"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      picoCTF
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-center">Tambahan</h3>
              <div className="mt-5">
                <ul className="flex flex-wrap justify-center gap-5">
                  <li>
                    <a
                      href="/me/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center gap-1 hover:underline"
                    >
                      <span>CV dan Resume</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default MePage;
