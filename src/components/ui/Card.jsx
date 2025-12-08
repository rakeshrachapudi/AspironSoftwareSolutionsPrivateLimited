import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "default",
  ...props
}) => {
  const paddings = {
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
    none: "p-0",
  };

  const hoverEffect = hover ? "hover:shadow-xl hover:-translate-y-1" : "";

  return (
    <div
      className={`bg-white rounded-lg shadow-md transition-all duration-300 ${hoverEffect} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
