import { type NextPage } from "next";
import Image from "next/image";
import HeadSEO from "~/components/head/headSEO";
import MainNavigation from "~/components/navigation/main.navigation";
import MainLayout from "~/layouts/main.layout";

const projects = [
  {
    title: "Neroi.space",
    description: `Personal website yang dibuat untuk iseng karena udah beli domain dan belum sempat dipakai. Dibuat dengan stack yang semurah mungkin dengan menggunakan Vercel dan PlanetScale sebagai backbone dari berdirinya web ini. Selain itu sebagai tempat <b>belajar mengembangkan CMS dari awal</b>. Mencoba merefleksikan diri kedalam project ini dengan desain bertema minimalis dan juga sederhana.`,
    image: "/images/project/neroi.jpg",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "tRPC",
      "Prisma ORM",
      "MYSQL",
      "Vercel",
      "CMS",
      "PlanetScale",
    ],
    links: [
      {
        label: "Project",
        link: "https://neroi.space/",
      },

      {
        label: "Repository",
        link: "https://github.com/yuandahanif/neroi-me-mono",
      },
    ],
  },
  {
    title: "Informatics-expo",
    description: `Tempat untuk archive dan vote project dari mahasiswa Informatika Universitas Islam Indonesia pada tiap akhir semester. Project ini merupakan <b>bagian dari pekerjaan selama menjadi Student staff di jurusan Informatika Universitas Islam Indonesia</b>. Menerapkan aksesibilitas dan multibahasa, serta menggunakan teknologi terbaru seperti NextJs, Typescript, Tailwind, dan Prisma ORM. Saya berperan sebagai front-end developer pada iterasi kedua dan sebagai lead developer pada iterasi ketiga project ini.`,
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
    title: "Sekawan",
    description: `Sekawan merupakan sistem yang digunakan untuk menunjang kegiatan kuliah atau penjaluran tugas akhir pada tahun ke-empat jurusan Informatika Universitas Islam Indonesia. Saya berperan sebagai front-end developer yang bertugas menterjemahkan desain dari Figma ke dalam kode, dan juga sekaligus DevOps yag bertugas melakukan deployment dan maintenance server pada project ini.`,
    image: "/images/project/sekawan.png",
    technologies: [
      "NextJs",
      "Typescript",
      "Tailwind",
      "Go",
      "PostgreSQL",
      "Linux Server",
      "AWS S3",
    ],
    links: [
      {
        label: "Project",
        link: "https://sekawan.informatics.uii.ac.id",
      },
      {
        label: "Figma",
        link: "https://www.figma.com/file/Fmp5QSJYz1j6VSPy2mwrcc/Sekawan-Ver.2?type=design&node-id=2113-20996&mode=design&t=FVEnj6NPdxw88fDp-0",
      },
    ],
  },
  {
    title: "Qual-tech",
    description: `Qual-tech adalah sebuah platform yang berfokus pada pengembangan kualitas sumber daya manusia terutama pengajar dengan berbasis AI. Merupakan <b>bagian dari program UII Bussiness & Innovation Challenge (UBIC)</b>. Peran saya dalam project ini adalah sebagai hacker, memastikan produk yang dibuat sesuai dengan kebutuhan dan memastikan kualitas produk yang dibuat.`,
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
    description: `moo-space adalah sebuah platform forum diskusi yang dibuat untuk memenuhi persyaratan Kelas <b>Menjadi React Web Developer Expert</b> pada platform Dicoding. Pada project ini saya belajar banyak hal dari React, React Router, React Context, Clean Code, React Redux, Automation Testing, hingga CI/CD menggunakan Github dan Vercel.`,
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
    description: `Res.to ini dibuat untuk memenuhi persyaratan Kelas <b>Menjadi Front-End Web Developer Expert</b> pada platform Dicoding. Dalam Project ini saya belajar banyak hal dari Web Accessibility, Clean Code, Testing, hingga Web Performance.`,
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
    title: "Shoot and Share(SnS)",
    description: `Hasil dari bootcamp <b>React Native - Mobile App Development (Lanjutan, Batch Juli 2020)</b> di SanberCode, Aplikasi berbagi foto sederhana yang terinspirasi dari Instagram. Menggunakan Firebase sebagai Backend dengan beberapa fitur aplikasi diantaranya autentikasi(menggunakan akun google dan manual), kamera, upload foto, push notifikasi, dan chat.`,
    image:
      "https://yuandahanif.github.io/portfolio/static/media/project-7.e0037838.png",
    technologies: ["React native", "Javascript", "Firebase", "One signal"],
    links: [
      {
        label: "Demo",
        link: "https://github.com/yuandahanif/shoot-and-share/releases",
      },
      {
        label: "Repository",
        link: "https://github.com/yuandahanif/shoot-and-share",
      },
      {
        label: "Sertifikat",
        link: "https://sanbercode.com/sertifikat/generate/40923602-db97-4ea0-a56e-311f87cbe4b1",
      },
    ],
  },
  {
    title: "Discord portfolio",
    description: `Discord portfolio adalah sebuah web berisis portfolio project yang pernah ku kerjakan dengan tampilan menyerupai aplikasi Discord. Dibuat karena aku sangat menyukai discord, bukan sebagai alat komunikasi tapi <b>sebagai CDN dan alat untuk sinkronisasi catatan atau file</b> antar device yang kumiliki.`,
    image: "/images/project/portfolio.png",
    technologies: ["React", "Typescript", "Tailwind", "Github pages"],
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
                <div
                  className="group flex flex-wrap justify-center gap-6 pb-3 lg:justify-start"
                  key={project.title}
                >
                  <div className="relative border bg-main-600 p-1 before:absolute before:-z-0 before:h-full before:w-full before:border before:duration-300 before:content-[''] group-hover:before:translate-x-1 group-hover:before:translate-y-1">
                    <div className="relative aspect-square h-auto w-96 ">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain object-center"
                        alt={project.title}
                      />
                    </div>
                  </div>

                  <div className="prose prose-invert px-8 lg:px-0">
                    <h4 className="relative inline-flex text-2xl font-semibold  before:absolute before:bottom-0 before:-z-0 before:h-0.5 before:w-2/3 before:origin-left before:scale-x-0 before:bg-white before:duration-300 before:content-[''] group-hover:before:scale-x-100">
                      {project.title}
                    </h4>

                    <div
                      className="mb-6"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />

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
