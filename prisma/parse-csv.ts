import { parse } from "csv-parse";
import fs from "node:fs";

async function parse_csv() {
  const csv_dir = "docker/csv";
  const filenames = fs.readdirSync(csv_dir);
  const records: Record<string, Array<Array<string>>> = {};

  for await (const filename of filenames) {
    const parser = fs
      .createReadStream(`${csv_dir}/${filename}`)
      .pipe(parse({}));
    const key = filename.split(".")[0] ?? "unknown";

    for await (const record of parser) {
      // Work with each record
      const typed_record = record as Array<string>;

      if (records[key] === undefined) {
        records[key] = [typed_record];
      } else {
        records[key].push(typed_record);
      }
    }
  }

  return records;
}

export default parse_csv;
