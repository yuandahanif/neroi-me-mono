import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import HeadSEO from "~/components/head/headSEO";
import getI18nProps from "~/i18n/getStaticPropsI18n.helper";
import MainLayout from "~/layouts/main.layout";

export const getStaticProps = getI18nProps;

const NotAdmin: NextPage = () => {
  const router = useRouter();
  const { data } = useSession();
  console.log("file: not-admin.tsx:11 ~ data:", data);

  const backToLanding = () => {
    void router.push("/");
  };
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="mr-2">You dont have </div>
            <div>
              <div>a̶̱͝</div>
              <div>a̸͚͊</div>
              <div>ą̷̛̃̄̈</div>
              <div>á̷̡̼͍̩̼̈́̍</div>
              <div>ą̶̧̦͕̐͆̈́͊̚͠</div>
              <div>a̵</div>
              <div className="text-red-800">access</div>
            </div>
            <div className="mt-auto text-red-800">!</div>
          </div>

          <div className="mt-10 flex gap-20">
            <button
              onClick={backToLanding}
              type="button"
              autoFocus
              className="focus:animate-pulse focus:underline focus:outline-none"
            >
              No
            </button>

            <button
              onClick={backToLanding}
              type="button"
              className="focus:animate-pulse focus:underline focus:outline-none"
            >
              No
            </button>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default NotAdmin;
