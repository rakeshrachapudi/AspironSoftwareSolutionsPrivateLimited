import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  variant = "gradient", // 'gradient' | 'image' | 'minimal'
}) => {
  const backgrounds = {
    gradient: "gradient-bg",
    image: `bg-cover bg-center bg-no-repeat ${
      backgroundImage ? `bg-[url('${backgroundImage}')]` : "gradient-bg"
    }`,
    minimal: "bg-white",
  };

  const textColors = {
    gradient: "text-white",
    image: "text-white",
    minimal: "text-primary",
  };

  return (
    <section className={`relative ${backgrounds[variant]} overflow-hidden`}>
      {/* Background Pattern/Overlay */}
      {variant !== "minimal" && (
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      )}

      <Container>
        <div className="relative py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Subtitle/Badge */}
            {subtitle && (
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 animate-fade-in">
                <Sparkles size={16} className={textColors[variant]} />
                <span
                  className={`text-sm font-semibold ${textColors[variant]}`}
                >
                  {subtitle}
                </span>
              </div>
            )}

            {/* Main Title */}
            <h1
              className={`font-heading font-bold mb-6 leading-tight ${textColors[variant]} animate-fade-in-up animation-delay-200`}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p
                className={`text-lg md:text-xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 ${
                  variant === "minimal" ? "text-gray-600" : "text-white"
                }`}
              >
                {description}
              </p>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
              {primaryCta && (
                <Button
                  to={primaryCta.link}
                  variant={variant === "minimal" ? "primary" : "primary"}
                  size="lg"
                  icon={ArrowRight}
                >
                  {primaryCta.text}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  to={secondaryCta.link}
                  variant={variant === "minimal" ? "secondary" : "outline"}
                  size="lg"
                  className={
                    variant !== "minimal"
                      ? "border-white text-white hover:bg-white hover:text-primary"
                      : ""
                  }
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>

          {/* Decorative Elements */}
          {variant !== "minimal" && (
            <>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-success/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
