import { type Project_status } from "@prisma/client";

type project_status_label_type = { [key in Project_status]?: string };

const project_status_label: project_status_label_type = {
  ABANDONED: "Ditinggalkan T_T",
  DONE: "Selesai :D",
  FUTURE: "Baru ngide",
  ONGOING: "Lagi dikerjain",
};

const project_status_label_kv: Array<Record<string, string>> = [];

for (const key in project_status_label) {
  project_status_label_kv.push({
    value: key,
    label: project_status_label[key as Project_status] as string,
  });
}

export { project_status_label, project_status_label_kv };
