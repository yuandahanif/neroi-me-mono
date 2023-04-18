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

async function main() {
  await prisma.note.createMany({ data: NOTES });
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
