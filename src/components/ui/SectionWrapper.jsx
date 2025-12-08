import React from "react";
import Container from "./Container";

const SectionWrapper = ({
  children,
  className = "",
  containerSize = "default",
  padding = "default",
  background = "white",
  id,
}) => {
  const paddings = {
    sm: "py-12 md:py-16",
    default: "py-16 md:py-24 lg:py-32",
    lg: "py-24 md:py-32 lg:py-40",
    none: "",
  };

  const backgrounds = {
    white: "bg-white",
    secondary: "bg-secondary",
    dark: "bg-primary text-white",
    gradient: "gradient-bg text-white",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`${paddings[padding]} ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default SectionWrapper;
