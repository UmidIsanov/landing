import { Stack } from "@mui/material";
import { ReactNode } from "react";

export default function CreateApplicationLayout({ children }: { children: ReactNode }) {
  return <Stack className="max-w-[876px] mx-auto mt-[50px]">{children}</Stack>;
}
