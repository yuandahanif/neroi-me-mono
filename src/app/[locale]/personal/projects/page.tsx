import { type Metadata } from "next";
import MainNavigation from "~/components/navigation/main.navigation";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Some of my projects, experiments, and things that I've been working on.",
};

const randomText = [
  "[Object object]",
  "Sepi sekali disini, seperti kehidupanku.",
  "Kosongnyaaa, seperti didalam hatiku.",
  "No thoughts, head empty.",
  "if (projects.length === 0) return;",
  `> "i'll do astelfo cosplay for u"\n> refuse to elaborate\n> last online 1 years ago\n> u/asobi-tea__`.trim(),
  "I miss the feeling of loving someone.",
  "People scare me.",
  "I miss my manic episodes.",
  `So, with sadness in my heart\nFeel the best thing I could do\nIs end it all and leave forever`,
];

const ProjectsPage = () => {
  const index = Math.floor(Math.random() * (randomText.length - 1));
  return (
    <div
      className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
    >
      <h1 className="text-5xl">{"<Projects/>"}</h1>
      <MainNavigation />

      <div className="prose prose-invert mt-10 lg:prose-sm">
        {/* <h3 className="text-center">
          Selamat datang di project, disini berisi project yang sedang atau
          sudah selesai ku kerjakan dan yang sekiranya boleh ku tampilkan.
        </h3> */}
      </div>

      <div className="prose prose-invert mt-10 flex grow">
        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="mt-auto flex flex-col items-center">
            <pre className={`text-md mb-2 text-green-500`}>
              {randomText[index]}
            </pre>
            <span>
              {index + 1}/{randomText.length}
            </span>
          </div>

          <h4 className="mt-auto text-xs">
            loading . . . loading . . . i&apos;m working on it.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
