import CabinetHeader from "@/src/widgets/CabinetHeader/ui/CabinetHeader";
import React, { ReactNode } from "react";

export default function CabinetLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CabinetHeader />
      {children}
    </>
  );
}
