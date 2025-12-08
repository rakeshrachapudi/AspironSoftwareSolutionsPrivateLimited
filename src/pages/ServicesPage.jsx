import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import services from "@data/services";

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="What We Do"
        description="Comprehensive IT solutions tailored to your business needs"
        primaryCta={{ text: "Get Started", link: "/contact" }}
        variant="gradient"
      />

      {/* Services Overview */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Service Portfolio"
          title="Expertise Across Technologies"
          description="From ideation to deployment, we cover every aspect of your digital journey"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <Card key={service.id} className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.shortDescription}
                </p>
                <a
                  href={`#${service.slug}`}
                  className="inline-flex items-center text-accent hover:text-success font-semibold group transition-colors duration-300"
                >
                  View Details
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Detailed Services */}
      {services.map((service, index) => {
        const IconComponent = Icons[service.icon] || Icons.Code2;
        const bgColor = index % 2 === 0 ? "white" : "secondary";

        return (
          <SectionWrapper
            key={service.id}
            id={service.slug}
            background={bgColor}
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  {service.technologies && service.technologies.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white border border-secondary-dark rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button to="/contact" variant="primary">
                    Get a Quote
                  </Button>
                </div>

                {/* Features */}
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <Card padding="lg">
                    <h3 className="text-xl font-semibold text-primary mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle
                            size={20}
                            className="text-success mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Industries Served */}
                    {service.industries && service.industries.length > 0 && (
                      <div className="mt-8 pt-6 border-t border-secondary-dark">
                        <h4 className="font-semibold text-primary mb-3">
                          Industries We Serve:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry) => (
                            <span
                              key={industry}
                              className="text-sm px-3 py-1 bg-secondary rounded-full text-gray-700"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Process Section */}
      <SectionWrapper background="gradient">
        <SectionHeader
          title="Our Process"
          description="A systematic approach to delivering exceptional results"
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "We understand your business, goals, and challenges",
            },
            {
              step: "02",
              title: "Strategy",
              description: "We design a customized solution roadmap",
            },
            {
              step: "03",
              title: "Development",
              description: "We build and test your solution iteratively",
            },
            {
              step: "04",
              title: "Delivery",
              description: "We deploy, train, and provide ongoing support",
            },
          ].map((phase, index) => (
            <div
              key={phase.step}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {phase.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {phase.title}
              </h3>
              <p className="text-white/80">{phase.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss your project and find the perfect solution for your
            business
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Request a Consultation
            </Button>
            <Button to="/products" variant="secondary" size="lg">
              View Our Work
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ServicesPage;
