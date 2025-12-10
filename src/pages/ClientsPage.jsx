import React from "react";
import { Star, Quote, Building2 } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import TestimonialCard from "../components/sections/TestimonialCard";
import ProjectCard from "../components/sections/ProjectCard";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import testimonials from "@data/testimonials";
import projects from "@data/projects";

const ClientsPage = () => {
  const paaraniProject = projects.find((p) => p.slug === "paarani");
  const allProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Clients & Success Stories"
        subtitle="Client Testimonials"
        description="Trusted by businesses across industries to deliver exceptional results"
        primaryCta={{ text: "Work With Us", link: "/contact" }}
        variant="gradient"
      />

      {/* Client Stats */}
      <SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          {[
            { value: "2+", label: "Satisfied Clients" },
            { value: "3+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Industry Verticals" },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Client Project - Paarani */}
      {paaraniProject && (
        <SectionWrapper background="secondary">
          <SectionHeader
            subtitle="Featured Client Project"
            title="Paarani Fashion E-commerce"
            description="Building a modern fashion and lifestyle platform"
          />
          <div className="max-w-5xl mx-auto">
            <ProjectCard project={paaraniProject} featured />

            {paaraniProject.testimonial && (
              <Card padding="lg" className="mt-8 border-l-4 border-accent">
                <div className="flex items-start justify-between mb-4">
                  <Quote size={32} className="text-accent opacity-20" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{paaraniProject.testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-white font-bold">
                    {paaraniProject.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {paaraniProject.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {paaraniProject.testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </SectionWrapper>
      )}

      {/* All Testimonials */}
      {/* FEEDBACK SECTION */}
      {/* <SectionWrapper>
        <SectionHeader
          subtitle="Client Testimonials"
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </SectionWrapper> */}

      {/* Client Projects Portfolio */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Our Work"
          title="Client Success Stories"
          description="Explore the projects that have made a difference"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Industries We Serve */}
      <SectionWrapper background="secondary">
        <SectionHeader
          subtitle="Industries"
          title="Diverse Industry Experience"
          description="We've successfully delivered solutions across multiple sectors"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Real Estate",
            "E-commerce",
            "Healthcare",
            "Finance",
            "Education",
            // "Manufacturing",
            "Logistics",
            // "Hospitality",
            "Technology",
            "Professional Services",
            // "Retail",
            // "Government",
          ].map((industry) => (
            <Card key={industry} className="text-center" padding="default">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                <Building2 size={24} className="text-accent" />
              </div>
              <h4 className="font-semibold text-primary">{industry}</h4>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Client Partnership Process */}
      <SectionWrapper background="gradient">
        <SectionHeader
          title="How We Work With Clients"
          description="Our collaborative approach ensures your success"
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Initial Consultation",
              description:
                "We listen to understand your vision, challenges, and goals",
            },
            {
              step: "02",
              title: "Proposal & Planning",
              description:
                "We present a detailed plan with timeline, deliverables, and costs",
            },
            {
              step: "03",
              title: "Agile Development",
              description:
                "We build iteratively with regular feedback and updates",
            },
            {
              step: "04",
              title: "Launch & Support",
              description:
                "We ensure smooth deployment and provide ongoing support",
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

      {/* Client Benefits */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Why Clients Choose Us"
          title="Your Success is Our Priority"
          description="The advantages of partnering with Aspiron"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Transparent Communication",
              description:
                "Regular updates, clear timelines, and open dialogue throughout the project lifecycle",
            },
            {
              title: "Dedicated Support",
              description:
                "A committed team that's available when you need us, ensuring smooth project execution",
            },
            {
              title: "Quality Assurance",
              description:
                "Rigorous testing and quality checks to deliver bug-free, high-performance solutions",
            },
            {
              title: "On-Time Delivery",
              description:
                "We respect deadlines and work efficiently to deliver projects as promised",
            },
            {
              title: "Cost-Effective Solutions",
              description:
                "Maximum value for your investment with transparent pricing and no hidden costs",
            },
            {
              title: "Long-Term Partnership",
              description:
                "We don't just deliver and leave - we build lasting relationships and provide ongoing support",
            },
          ].map((benefit) => (
            <Card key={benefit.title}>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your business with
            technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ClientsPage;
