import React, { FC } from "react";

import { IStepsCard } from "../types";

const StepsCard: FC<IStepsCard> = ({ id, stepNumber, title, desc }) => {
  return (
    <article className="w-[500px] h-[306px] bg-main rounded-[45px] p-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-green font-bold text-xl">{stepNumber}</h1>
        <h1 className="text-black font-bold text-4xl">{title}</h1>
        <p className="text-pcolor text-xl font-light">{desc}</p>
      </div>
    </article>
  );
};

export default StepsCard;
