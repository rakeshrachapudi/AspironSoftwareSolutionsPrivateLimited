import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import SectionWrapper from "../ui/SectionWrapper";

const CTASection = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  background = "gradient",
}) => {
  return (
    <SectionWrapper background={background} padding="default">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            background === "gradient" || background === "dark"
              ? "text-white"
              : "text-primary"
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed ${
              background === "gradient" || background === "dark"
                ? "text-white/90"
                : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryButton && (
            <Button
              to={primaryButton.link}
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              {primaryButton.text}
            </Button>
          )}

          {secondaryButton && (
            <Button
              to={secondaryButton.link}
              variant={
                background === "gradient" || background === "dark"
                  ? "outline"
                  : "secondary"
              }
              size="lg"
              className={
                background === "gradient" || background === "dark"
                  ? "border-white text-white hover:bg-white hover:text-primary"
                  : ""
              }
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTASection;
