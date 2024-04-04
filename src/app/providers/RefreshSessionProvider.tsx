"use client";

import { refreshThunk } from "@/src/entities/User/api/refreshThunk";
import { useAppDispatch } from "@/src/shared/model";
import { ReactNode, useEffect } from "react";

export default function RefreshSessionProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, []);

  return children;
}
