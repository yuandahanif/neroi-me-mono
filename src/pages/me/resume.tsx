import { type NextPage } from "next";
import HeadSEO from "~/components/head/headSEO";
import MainLayout from "~/layouts/main.layout";

const ResumePage: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="py-9">
          <div className="mx-auto mb-4 w-fit border p-4">
            <embed
              src="/files/Yuanda-Hanif Hisyam-CV.pdf"
              width="800"
              height="450"
              className=""
            ></embed>
            <a href="/files/Yuanda-Hanif Hisyam-CV.pdf" download className="hover:underline">
              Download my CV
            </a>
          </div>

          <div className="flex h-screen w-full justify-center">
            <iframe
              className="h-full border"
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FUwVs2OBi9hYhhxleQXEkE2%2FResume%3Fnode-id%3D1%253A210%26t%3D7YxDGs0ehA3pOOZZ-1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default ResumePage;
