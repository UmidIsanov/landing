export type InputVariants = "default" | "application";
export const variants: { [key in InputVariants]: string } = {
  default: "outline-none disabled:bg-white py-3 px-3 text-black border border-grayModal  rounded-md",
  /*eslint-disable */
  application:
    "disabled:bg-neutral-50 border placeholder:text-[16px] placeholder:text-[var(--color-200)] border-[var(--input-border-color)] shadow-sm outline-none disabled:bg-white rounded-[8px]",
};
