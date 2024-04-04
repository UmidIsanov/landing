import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center m-auto container">
      <div className="flex w-full justify-center gap-10 items-center">{children}</div>
    </div>
  );
}
