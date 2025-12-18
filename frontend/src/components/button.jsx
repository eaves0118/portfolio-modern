import React from "react";
import clsx from "clsx";
const Button = ({ content, className, icon }) => {
  return (
    <button
      className={clsx(
        "cursor-pointer flex items-center gap-3 font-bold w-full justify-center",
        className
      )}
    >
      {content}
      {icon}
    </button>
  );
};

export default Button;
