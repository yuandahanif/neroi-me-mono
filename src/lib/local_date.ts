const local_date = (
  date: string | Date,
  options?: {
    timeStyle?: "full" | "long" | "medium" | "short";
    dateStyle?: "full" | "long" | "medium" | "short";
  }
) => {
  let d;

  if (typeof date === "string") {
    d = new Date(date);
  } else {
    d = date;
  }

  const formater = new Intl.DateTimeFormat("id", {
    dateStyle: options?.dateStyle ?? "full",
    timeStyle: options?.timeStyle ?? "full",
  });

  return formater.format(d);
};

export default local_date;
