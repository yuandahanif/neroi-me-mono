import { PrismaClient } from "@prisma/client";
import csv_to_seed from "./csv-to-seed";
const prisma = new PrismaClient();

async function main() {
  try {
    await csv_to_seed();
  } catch (error) {
    console.log(error);
  }
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
