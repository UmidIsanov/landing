import React, { FC, PropsWithChildren, createContext, useContext, useState } from "react";

interface DContextIProps {
  currDropdownId: string | null;
  setCurrDropdownId(dId: string): void;
  closeAllDropdowns(): void;
}

const DContext = createContext<DContextIProps | null>(null);

const DProvider = DContext.Provider;

export const useDropdownContext = () => useContext(DContext);

const DropdownContext: FC<PropsWithChildren> = ({ children }) => {
  const [currDropdownId, setCurrDropdownId] = useState<string | null>(null);

  const closeAllDropdowns = () => {
    setCurrDropdownId(null);
  };

  const setCurrDropdown = (id: string) => {
    setCurrDropdownId(id);
  };

  return (
    <DProvider value={{ setCurrDropdownId: setCurrDropdown, currDropdownId, closeAllDropdowns }}>{children}</DProvider>
  );
};

export default DropdownContext;
