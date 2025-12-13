import React from "react";
import { TrendingUp, Users, Award, Target } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Container from "../ui/Container";

const StatsSection = ({ stats }) => {
  const defaultStats = [
    {
      icon: TrendingUp,
      value: "1+",
      label: "Years Experience",
      color: "from-accent to-success",
    },
    {
      icon: Users,
      value: "5+",
      label: "Happy Clients",
      color: "from-success to-accent",
    },
    {
      icon: Award,
      value: "4+",
      label: "Projects Delivered",
      color: "from-accent to-primary",
    },
    {
      icon: Target,
      value: "98%",
      label: "Client Satisfaction",
      color: "from-primary to-accent",
    },
  ];

  const displayStats = stats || defaultStats;

  return (
    <SectionWrapper background="secondary" padding="default">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {displayStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
              >
                <IconComponent size={28} className="text-white" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;
