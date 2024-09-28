import React from "react";
import { ButtonType } from "../types/button";

const Button = ({ className, title, ...props }: ButtonType) => {
  return (
    <button
      className={` text-white p-1 rounded-full w-24 font-semibold ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
