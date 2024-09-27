import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      className="w-full bg-transparent focus:outline-none p-1 border-b-2"
      {...props}
    />
  );
};

export default Input;
