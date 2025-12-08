import React from "react";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ServiceCard = ({ service, featured = false }) => {
  const IconComponent = Icons[service.icon] || Icons.Code2;

  return (
    <Card
      className={`h-full flex flex-col ${
        featured ? "border-2 border-accent" : ""
      }`}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent size={28} className="text-white" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
        {service.shortDescription}
      </p>

      {/* Technologies (if available) */}
      {service.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {service.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-secondary rounded-full text-gray-700"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="text-xs px-3 py-1 bg-secondary rounded-full text-gray-700">
              +{service.technologies.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Learn More Link */}
      <a
        href={`/services#${service.slug}`}
        className="inline-flex items-center text-accent hover:text-success font-semibold group transition-colors duration-300"
      >
        Learn More
        <ArrowRight
          size={18}
          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
        />
      </a>
    </Card>
  );
};

export default ServiceCard;
