import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MainNavigation from "~/components/navigation/main.navigation";
import ScrollToProject from "./_scrollToProject";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Some of my projects, experiments, and things that I've been working on.",
};

const ProjectsPage = () => {
  return (
    <div
      className={`flex max-h-svh grow flex-col items-center justify-start py-10`}
    >
      <h1 className="text-5xl">{"<Projects/>"}</h1>
      <MainNavigation />

      <div className="flex h-full w-full max-w-screen-lg flex-grow flex-col gap-8">
        <div className="prose prose-invert mx-auto text-center">
          <h3 className="text-center">
            Beberapa project yang ku kerjakan, eksperimen, dan hal-hal yang
            mungkin menarik untuk diceritakan.
          </h3>
        </div>

        <ScrollToProject />

        <div className="flex h-full w-full flex-grow gap-2 pb-5">
          <div className="flex w-full max-w-xs flex-col overflow-auto border border-white">
            <h3 className="p-1">list project</h3>
            <div>
              <ul className="p-1">
                <li className="sticky top-0 bg-main-600 py-2">ongoing</li>
                <li>
                  <Link href="/projects/1">Project name Lorem ipsum dolor</Link>
                </li>
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

          <div className="flex h-auto w-full flex-grow flex-col overflow-auto border border-white p-2">
            <section className="">
              <div className="prose prose-invert">
                <h2
                  className="inline"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 80%, #0000ff 0%)",
                  }}
                >
                  Project name Lorem ipsum dolor,
                </h2>
              </div>

              <hr className="my-4" />

              <div className="my-5 flex flex-wrap gap-2 overflow-auto pb-2">
                {[1, 2, 3, 4, 5].map((v) => (
                  <Image
                    key={v}
                    src="https://via.placeholder.com/150"
                    alt="project"
                    className="rounded-sm object-contain"
                    width={160}
                    height={160}
                  />
                ))}
              </div>

              <div className="flex w-full">
                <div>
                  <a
                    className="text-blue-500 hover:underline"
                    href="http://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tautan
                  </a>
                </div>

                <div className="prose prose-invert ml-auto flex gap-5">
                  <h4 className="inline-block font-bold">
                    Status: <span className="font-normal">Ongoing</span>
                  </h4>
                  <h4 className="inline-block font-bold">
                    Dibuat: <span className="font-normal">21 Juni 2024</span>
                  </h4>
                </div>
              </div>

              <hr className="my-4" />

              <div className="prose prose-invert">
                <h4>Deskripsi</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores magnam in ut facilis iure veniam asperiores quae
                  quisquam aspernatur laborum, rerum libero, sapiente eaque
                  quasi sequi, nesciunt praesentium eum hic! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Dolores magnam in ut
                  facilis iure veniam asperiores quae quisquam aspernatur
                  laborum, rerum libero, sapiente eaque quasi sequi, nesciunt
                  praesentium eum hic! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dolores magnam in ut facilis iure veniam
                  asperiores quae quisquam aspernatur laborum, rerum libero,
                  sapiente eaque quasi sequi, nesciunt praesentium eum hic!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores magnam in ut facilis iure veniam asperiores quae
                  quisquam aspernatur laborum, rerum libero, sapiente eaque
                  quasi sequi, nesciunt praesentium eum hic! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Dolores magnam in ut
                  facilis iure veniam asperiores quae quisquam aspernatur
                  laborum, rerum libero, sapiente eaque quasi sequi, nesciunt
                  praesentium eum hic!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
