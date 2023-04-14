const local_date = (date: string) => {
  const d = new Date(date);
  const formater = new Intl.DateTimeFormat("id", {
    dateStyle: "full",
    // timeStyle: "short",
  });
  return formater.format(d);
};

export default local_date;
