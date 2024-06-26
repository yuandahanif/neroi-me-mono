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
      className={`flex max-h-svh grow flex-col items-center justify-start py-10`}
    >
      <h1 className="text-5xl">{"<Projects/>"}</h1>
      <MainNavigation />

      <div className="flex h-full w-full max-w-screen-lg flex-grow flex-col gap-4">
        <h3 className="text-center">
          Selamat datang di project, disini berisi project yang sedang atau
          sudah selesai ku kerjakan dan yang sekiranya boleh ku tampilkan.
        </h3>

        <div className="flex h-full w-full flex-grow gap-2">
          <div className="flex w-full max-w-xs flex-col overflow-auto border border-white">
            <h3 className="p-1">list project</h3>
            <div>
              <ul className="p-1">
                <li className="sticky top-0 bg-main-600 py-2">ongoing</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
                <li>project 1</li>
                <li>project 2</li>
                <li>project 3</li>
                <li>project 4</li>
                <li>project 5</li>
              </ul>
            </div>
          </div>

          <div className="flex h-auto w-full flex-grow flex-col border border-white p-1">
            detail project
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolores magnam in ut facilis iure veniam asperiores quae
                quisquam aspernatur laborum, rerum libero, sapiente eaque quasi
                sequi, nesciunt praesentium eum hic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
