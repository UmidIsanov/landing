export const convertFromRecord = (record: Record<number, string>) => {
  const result = Object.keys(record).reduce((acc, val, index, arr) => {
    acc += val + (index === arr.length - 1 ? "" : ",");
    return acc;
  }, "");
  return result;
};
