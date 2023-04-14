const local_date = (date: string) => {
  const d = new Date(date);
  return new Intl.DateTimeFormat(["ban", "id"], {
    dateStyle: "full",
    timeStyle: "long",
  }).format(d);
};

export default local_date;
