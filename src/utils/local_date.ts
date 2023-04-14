const local_date = (date: string) => {
  const d = new Date(date);
  return new Intl.DateTimeFormat("id", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(d);
};

export default local_date;
