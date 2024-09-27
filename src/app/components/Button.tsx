import React from "react";

const Button = ({ title, ...props }) => {
  return (
    <button
      className="bg-orange-300 text-white p-1 rounded-full w-24 font-semibold"
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
