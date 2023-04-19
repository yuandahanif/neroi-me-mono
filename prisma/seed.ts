import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const NOTES = [
  {
    content:
      "CNAME is to point a domain to subdomain. And A record is to point a domain name to v4 Ip address.",
  },
  {
    content: `In React there are 2 way to display an image
  first using /folder_name/file_name  ->  is pointing to /public folder on react.
  second is to import it manually if the assets is on src folder`,
  },
  { content: "Jam tidur yang rutin itu penting!" },
];

const TAGS = [{ title: "tect" }, { title: "personal" }, { title: "CMS" }];

const BLOGS = [
  {
    content: `<p>React changed how developers build for the web, popularizing breaking down UI into reusable components and emphasizing incremental adoption.
While it's certainly still a library that can be sprinkled into any webpage, the React architecture is a blueprint for frameworks to follow to create interactive, resilient, and performant frontend patterns.
<p/>`,
    slug: "react-change",
    title: "Why react is change, and its better",
    visit: 100,
  },
  {
    content: `<p>React changed how developers build for the web, popularizing breaking down UI into reusable components and emphasizing incremental adoption.
While it's certainly still a library that can be sprinkled into any webpage, the React architecture is a blueprint for frameworks to follow to create interactive, resilient, and performant frontend patterns.
<p/>`,
    slug: "react-evolving",
    title: "Why react is change, and its better 2",
    visit: 100,
  },
];

async function main() {
  await prisma.note.createMany({ data: NOTES });
  await prisma.tag.createMany({ data: TAGS });
  await prisma.blog.createMany({ data: BLOGS });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
