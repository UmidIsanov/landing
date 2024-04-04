export const getOwnDateTime = (date: string) => {
  try {
    const ownDate = new Date(date);
    return ownDate.toLocaleString("ru-RU", {
      month: "long",
      year: "numeric",
      day: "2-digit",
    });
  } catch (err) {
    return undefined;
  }
};
