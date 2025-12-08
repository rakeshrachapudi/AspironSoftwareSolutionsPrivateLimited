import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-12 md:mb-16 ${alignments[align]} ${className}`}>
      {subtitle && (
        <p className="text-accent font-semibold text-sm md:text-base uppercase tracking-wider mb-2 animate-fade-in">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in-up animation-delay-200">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
