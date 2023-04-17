const local_date = (date: string | Date) => {
  let d;
  if (typeof date === "string") {
    d = new Date(date);
  }

  const formater = new Intl.DateTimeFormat("id", {
    dateStyle: "full",
    // timeStyle: "short",
  });
  return formater.format(d);
};

export default local_date;
