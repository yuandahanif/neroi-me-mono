import { type Prisma, PrismaClient } from "@prisma/client";
import parse_csv from "./parse-csv";
const prisma = new PrismaClient();

function str_to_null(str: string) {
  return str === "null" ? null : str;
}

function str_to_int(str: string) {
  const i = parseInt(str, 10);
  return isNaN(i) ? str_to_null(str) : i;
}

function try_parser(str: string) {
  return str_to_int(str);
}

async function key_value_index_mapper<T>(
  raw: string[][],
  cb: (data: T[]) => Promise<void>
) {
  const data_arr = raw;

  const data: T[] = [];

  const header_idx_kv = data_arr[0]?.map((v, i) => [v, i]);
  for (let i = 1; i < data_arr.length; i++) {
    const values: Array<string | number | boolean | null | undefined> =
      data_arr[i] as Array<string>;

    const record: Partial<T> = {};

    header_idx_kv?.forEach(([key, idx]) => {
      const typed_key = key as keyof T;
      const typed_idx = idx as number;
      let val = values[typed_idx];

      if (typed_key.toString().endsWith("_at")) {
        val = str_to_int(String(val));
      }

      if (typed_key.toString() == "isDraft") {
        val = Boolean(val);
      }

      //   eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //   @ts-ignore
      record[typed_key] = str_to_null(val);
    });

    data.push(record as T);
  }

  await cb(data);
}

async function csv_to_seed() {
  const datas = await parse_csv();

  await key_value_index_mapper<Prisma.UserCreateManyInput>(
    datas.user ?? [],
    async (data) => {
      await prisma.user.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} user records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.AccountCreateManyInput>(
    datas.account ?? [],
    async (data) => {
      await prisma.account.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} account records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.NoteCreateInput>(
    datas.note ?? [],
    async (data) => {
      await prisma.note.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} note records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.SessionCreateManyInput>(
    datas.session ?? [],
    async (data) => {
      await prisma.session.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} session records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.TagCreateManyInput>(
    datas.tags ?? [],
    async (data) => {
      await prisma.tag.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} tags records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.BlogCreateManyInput>(
    datas.blog ?? [],
    async (data) => {
      await prisma.blog.createMany({
        data,
        skipDuplicates: true,
      });

      console.log(`${data.length} blog records seeded`);
    }
  );

  await key_value_index_mapper<Prisma.BlogVisitCreateManyInput>(
    datas.blogVisit ?? [],
    async (data) => {
      await prisma.blogVisit.createMany({
        data: data.map((d) => ({
          id: d.id,
          blogId: d.blogId,
          //   eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //   @ts-ignore
          ip_address: d?.ip as string,
          hash: d.hash,
          createdAt: d.createdAt,
          updatedAt: d.updatedAt,
        })),
        skipDuplicates: true,
      });

      console.log(`${data.length} blog visit records seeded`);
    }
  );
}

export default csv_to_seed;
