import { SpecialNeedsObjectType } from "@/src/shared/types/specialNeeds";
import React, { Dispatch, FC, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

export interface SpecialNeedsContextIProps {
  specialNeeds: SpecialNeedsObjectType;
  children: ReactNode;
  setSpecialNeeds: Dispatch<SetStateAction<SpecialNeedsObjectType>>;
  isOpen: boolean;
}

/*eslint-disable */

export const SNContext = createContext<{
  activeCategory: number | null;
  setActiveCategory: Dispatch<SetStateAction<number | null>>;
  addSpecialNeeds: (snKey: number, snName: string) => void;
  removeSpecialNeeds: (snKey: number) => void;
  localSpecialNeeds: SpecialNeedsObjectType;
  clearAll(): void;
} | null>(null);
const SNProvider = SNContext.Provider;

const SpecialNeedsContext: FC<SpecialNeedsContextIProps> = ({ isOpen, specialNeeds, children }) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [localSpecialNeeds, setLocalSpecialNeeds] = useState<SpecialNeedsObjectType>(specialNeeds);

  useEffect(() => {
    setLocalSpecialNeeds(specialNeeds);
  }, [isOpen]);

  const addSpecialNeeds = (snKey: number, snName: string) => {
    setLocalSpecialNeeds(prev => {
      const newObj = JSON.parse(JSON.stringify(prev));
      if (activeCategory) {
        if (newObj[activeCategory]) {
          newObj[activeCategory][snKey] = snName;
        } else {
          newObj[activeCategory] = { [snKey]: snName };
        }
      }
      return newObj;
    });
  };

  const clearAll = () => {
    setLocalSpecialNeeds({});
  };

  const removeSpecialNeeds = (snKey: number) => {
    setLocalSpecialNeeds(prev => {
      const newObj = JSON.parse(JSON.stringify(prev));
      if (activeCategory) {
        if (newObj[activeCategory] && Object.keys(newObj[activeCategory]).length === 1) {
          delete newObj[activeCategory];
        } else if (newObj[activeCategory]) {
          delete newObj[activeCategory][snKey];
        }
      }
      return newObj;
    });
  };

  return (
    <SNProvider
      value={{
        clearAll,
        localSpecialNeeds,
        addSpecialNeeds,
        removeSpecialNeeds,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </SNProvider>
  );
};

export default SpecialNeedsContext;
