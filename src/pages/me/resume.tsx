import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";

const ResumePage: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="flex h-screen w-full justify-center">
          <iframe
            className="h-full border"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUwVs2OBi9hYhhxleQXEkE2%2FResume%3Fnode-id%3D1%253A210%26t%3D7YxDGs0ehA3pOOZZ-1"
            allowFullScreen
          ></iframe>
        </div>
      </MainLayout>
    </>
  );
};

export default ResumePage;
