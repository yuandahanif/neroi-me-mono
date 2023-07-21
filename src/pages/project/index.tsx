import { type NextPage } from "next";
import Image from "next/image";
import HeadSEO from "~/components/head/headSEO";
import MainNavigation from "~/components/navigation/main.navigation";
import MainLayout from "~/layouts/main.layout";

const projects = [
  {
    title: "Informatics-expo",
    description: `Tempat untuk archive dan vote project dari mahasiswa Informatika Universitas Islam Indonesia pada tiap akhir semester. Project ini merupakan bagian dari pekerjaan selama menjadi Student staff di jurusan Informatika Universitas Islam Indonesia. Menerapkan aksesibilitas dan multibahasa, serta menggunakan teknologi terbaru seperti NextJs, Typescript, Tailwind, dan Prisma ORM. Saya berperan sebagai front-end developer pada iterasi kedua dan sebagai lead developer pada iterasi ketiga project ini.`,
    image:
      "https://github.com/yuandahanif/discord-theme-portfolio/blob/main/src/assets/images/expo.png?raw=true",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "SCSS",
      "tRPC",
      "Prisma ORM",
      "MYSQL",
      "Railway.app",
    ],
    links: [
      {
        label: "Project",
        link: "https://expo.informatics-expo.id/en",
      },
    ],
  },
  {
    title: "Qual-tech",
    description: `Qual-tech adalah sebuah platform yang berfokus pada pengembangan kualitas sumber daya manusia terutama pengajar dengan berbasis AI. Merupakan bagian dari program UII Bussiness & Innovation Challenge (UBIC). Peran saya dalam project ini adalah sebagai hacker, memastikan produk yang dibuat sesuai dengan kebutuhan dan memastikan kualitas produk yang dibuat.`,
    image: "/images/project/qual.png",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "tRPC",
      "Prisma ORM",
      "MYSQL",
      "Docker",
    ],
    links: [
      {
        label: "Repository",
        link: "https://github.com/Qual-tech/qual-mono",
      },
      {
        label: "Seleksi",
        link: "https://simpultumbuh.uii.ac.id/pengumuman-hasil-seleksi-proposal-ubic-2023/",
      },
    ],
  },
  {
    title: "moo-space",
    description: `moo-space adalah sebuah platform forum diskusi yang dibuat untuk memenuhi persyaratan Kelas Menjadi React Web Developer Expert pada platform Dicoding. Pada project ini saya belajar banyak hal dari React, React Router, React Context, Clean Code, React Redux, Automation Testing, hingga CI/CD menggunakan Github dan Vercel.`,
    image: "/images/project/meme.jpg",
    technologies: ["React", "Tailwind", "Typescript", "Vercel", "Redux"],
    links: [
      {
        label: "Demo",
        link: "https://moo-space.vercel.app/",
      },
      {
        label: "Repository",
        link: "https://github.com/yuandahanif/moo-space",
      },
      {
        label: "Sertifikat",
        link: "https://www.dicoding.com/certificates/L4PQG36K2ZO1",
      },
    ],
  },
  {
    title: "Res.to",
    description: `Res.to ini dibuat untuk memenuhi persyaratan Kelas Menjadi Front-End Web Developer Expert pada platform Dicoding. Dalam Project ini saya belajar banyak hal dari Web Accessibility, Clean Code, Testing, hingga Web Performance.`,
    image:
      "https://yuandahanif.github.io/portfolio/static/media/project-1.1a7023d3.png",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    links: [
      {
        label: "Demo",
        link: "https://res-to.web.app/",
      },
      {
        label: "Repository",
        link: "https://github.com/yuandahanif/Res.to",
      },
      {
        label: "Sertifikat",
        link: "https://www.dicoding.com/certificates/53XEEOMORXRN",
      },
    ],
  },
  {
    title: "Discord portfolio",
    description: `Discord portfolio adalah sebuah web berisis portfolio project yang pernah ku kerjakan dengan tampilan menyerupai aplikasi Discord. Dibuat karena aku sangat menyukai discord, bukan sebagai alat komunikasi tapi sebagai CDN dan alat untuk sinkronisasi catatan atau file antar device yang kumiliki.`,
    image: "/images/project/portfolio.png",
    technologies: ["React", "Typescript", "Tailwind", "Github-pages"],
    links: [
      {
        label: "Demo",
        link: "https://yuandahanif.github.io/discord-theme-portfolio/server/portfolio/portfolio-1",
      },
      {
        label: "Repository",
        link: "https://github.com/yuandahanif/discord-theme-portfolio",
      },
    ],
  },
];

const ProjectPage: NextPage = () => {
  return (
    <>
      <HeadSEO />
      <MainLayout>
        <div className="flex w-full justify-center">
          <main
            className={`flex min-h-screen grow flex-col items-center justify-start p-2 py-10`}
          >
            <h1 className="text-5xl">{"<Project/>"}</h1>
            <MainNavigation />

            <div className="prose prose-invert mb-10 mt-10 lg:prose-sm">
              <h3 className="text-center" id="tentangku">
                Selamat datang di project, disini berisi project yang sedang
                atau sudah selesai ku kerjakan dan yang sekiranya boleh ku
                tampilkan.
              </h3>
            </div>

            <div className="flex w-full flex-col items-center gap-10">
              {projects.map((project) => (
                <div className="flex gap-6" key={project.title}>
                  <div className="relative aspect-square w-96">
                    <Image
                      src={project.image}
                      fill
                      className="h-full w-full object-contain object-center"
                      alt={project.title}
                    />
                  </div>

                  <div className="prose prose-invert">
                    <h4 className="text-xl font-semibold">{project.title}</h4>

                    <p>{project.description}</p>

                    <div className="mb-2">
                      <span>Teknologi: </span>{" "}
                      {project.technologies.map((item, idx) => (
                        <span key={item}>
                          {idx != 0 ? ", " : ""}
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="">
                      <span>Tautan: </span>

                      <div className="inline-flex gap-3">
                        {project.links.map((item) => (
                          <a
                            key={item.link}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            [{item.label}]
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </MainLayout>
    </>
  );
};

export default ProjectPage;
