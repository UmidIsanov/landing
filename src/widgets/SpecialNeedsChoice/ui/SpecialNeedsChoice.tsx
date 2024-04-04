import { SelectWithIcon } from "@/src/shared/ui/Select/ui/SelectWithIcon";
import React, { FC, useMemo, useState } from "react";
import SNModal from "./SNModal";
import { ISpecialNeedsChoiceProps } from "../types";
import SpecialNeedsContext, { SpecialNeedsContextIProps } from "../providers/SpecialNeedsContext";

const SpecialNeedsChoice: FC<
  ISpecialNeedsChoiceProps & Pick<SpecialNeedsContextIProps, "specialNeeds" | "setSpecialNeeds">
> = ({ specialNeeds, setSpecialNeeds, ownSpecialNeeds }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onOpenHandler = () => {
    setIsOpen(true);
  };

  const readableSpecialNeeds = useMemo(() => {
    const sn = Object.values(specialNeeds).reduce((acc, specialNeed) => {
      acc = { ...acc, ...specialNeed };
      return acc;
    }, {} as Record<number, string>);
    return sn;
  }, [specialNeeds]);

  return (
    <>
      <SelectWithIcon
        selected={readableSpecialNeeds}
        width={328}
        isMultiple
        isSingle
        setIsOpenHandler={onOpenHandler}
        title="Выбрать особенности"
      />
      <SpecialNeedsContext isOpen={isOpen} setSpecialNeeds={setSpecialNeeds} specialNeeds={specialNeeds}>
        <SNModal
          setSpecialNeeds={setSpecialNeeds}
          ownSpecialNeeds={ownSpecialNeeds}
          open={isOpen}
          onClose={onCloseHandler}
        />
      </SpecialNeedsContext>
    </>
  );
};

export default SpecialNeedsChoice;
