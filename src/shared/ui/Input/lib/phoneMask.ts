import { ChangeEvent, ChangeEventHandler } from "react";

const regEx = /\D/g;

export const getPhoneMask = (onChange: ChangeEventHandler<HTMLInputElement>) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const ownTel = event.target.value.replaceAll(regEx, "").slice(1);
    if (ownTel.length >= 11) return;
    let resultTel = "";
    for (let i = 0; i < ownTel.length; i++) {
      if (i === 0 || i === 3 || i === 6) {
        resultTel += "-" + ownTel[i];
      } else {
        resultTel += ownTel[i];
      }
    }
    event.target.value = "+7" + resultTel;
    onChange(event);
  };
};
