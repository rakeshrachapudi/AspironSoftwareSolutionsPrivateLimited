import React from "react";
import { Star, Quote } from "lucide-react";
import Card from "../ui/Card";

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="h-full flex flex-col">
      {/* Quote Icon */}
      <div className="flex items-start justify-between mb-4">
        <Quote size={32} className="text-accent opacity-20" />

        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 flex-grow leading-relaxed italic">
        "{testimonial.text}"
      </p>

      {/* Project Tag */}
      {testimonial.project && (
        <div className="mb-4">
          <span className="text-xs px-3 py-1 bg-secondary rounded-full text-gray-600">
            {testimonial.project}
          </span>
        </div>
      )}

      {/* Author Info */}
      <div className="flex items-center space-x-4 pt-4 border-t border-secondary-dark">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.role} <span className="text-gray-400">at</span>{" "}
            {testimonial.company}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
