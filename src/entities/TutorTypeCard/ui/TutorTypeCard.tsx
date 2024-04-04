import React from "react";
import { ITutorTypeCArd } from "../types";

const TutorTypeCard = ({ title, img }: ITutorTypeCArd) => {
  return (
    <>
      <article className="w-[204px] flex flex-col  items-center gap-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="">{img}</div>
      </article>
    </>
  );
};

export default TutorTypeCard;
