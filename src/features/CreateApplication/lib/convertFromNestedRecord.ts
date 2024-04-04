import { SpecialNeedsContextIProps } from "@/src/widgets/SpecialNeedsChoice/providers/SpecialNeedsContext";
import { convertFromRecord } from "./convertFromRecord";

export const convertFromNestedRecord = (nestedRecord: SpecialNeedsContextIProps["specialNeeds"]) => {
  const result = Object.values(nestedRecord).reduce((acc, val, index, arr) => {
    const nestedResult = convertFromRecord(val);
    return acc + nestedResult + (index === arr.length - 1 ? "" : ",");
  }, "");
  return result as string;
};
