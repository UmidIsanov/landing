"use client";

import React, { FC } from "react";
import styles from "../styles/button.module.scss";
import { IButton } from "../types";
import { Variants } from "../lib/variants";

const Button: FC<IButton> = ({ disabled, type, onClick, className, variant, children }) => {
  const getStylesOfVariant = Variants[variant];
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className + " " + styles.button} transition-all
      ${getStylesOfVariant}
      ${disabled ? "bg-grayCus" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
