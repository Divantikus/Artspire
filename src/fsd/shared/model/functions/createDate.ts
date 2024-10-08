export const createDate = (str: string | null, isForUser?: boolean) => {
  if (!str) return "Дата не указана";

  const date = new Date(str);

  if (isForUser)
    return [date.getDate(), date.getMonth(), date.getFullYear()].join(".");

  return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
};
