import React from "react";
import { Rocket, CheckCircle, ExternalLink } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ServiceCard from "../components/sections/ServiceCard";
import ProjectCard from "../components/sections/ProjectCard";
import TestimonialCard from "../components/sections/TestimonialCard";
import StatsSection from "../components/sections/StatsSection";
import CTASection from "../components/sections/CTASection";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import company from "@data/company";
import services from "@data/services";
import projects from "@data/projects";
import testimonials from "@data/testimonials";

const HomePage = () => {
  const featuredServices = services.slice(0, 3);
  const featuredProject = projects.find((p) => p.slug === "propertydealz");
  const paaraniProject = projects.find((p) => p.slug === "paarani");
  const featuredTestimonials = testimonials
    .filter((t) => t.featured)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={company.tagline}
        subtitle="Leading IT Solutions Provider"
        description="We deliver innovative software solutions that transform businesses. From web development to digital marketing, we're your trusted technology partner."
        primaryCta={{ text: "Get Started", link: "/contact" }}
        secondaryCta={{ text: "View Our Work", link: "/projects" }}
        variant="gradient"
      />

      {/* Stats Section */}
      <StatsSection />

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Who We Are"
              title="Building Digital Excellence Since 2025"
              align="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              {company.description}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over {company.stats.experience} years of combined experience,
              we've helped {company.stats.clients} clients achieve their digital
              goals through innovative technology solutions.
            </p>
            <div className="space-y-3 mb-8">
              {company.values.slice(0, 3).map((value) => (
                <div key={value.title} className="flex items-start space-x-3">
                  <CheckCircle
                    size={20}
                    className="text-success mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-primary">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button to="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Our Team"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg blur-2xl"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Section */}
      <SectionWrapper background="secondary">
        <SectionHeader
          subtitle="Our Services"
          title="Comprehensive IT Solutions"
          description="We offer a full spectrum of technology services to meet your business needs"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </SectionWrapper>

      {/* Featured Product - PropertyDealz */}
      {featuredProject && (
        <SectionWrapper>
          <SectionHeader
            subtitle="Featured Product"
            title="PropertyDealz.in"
            description="Our flagship real estate platform revolutionizing property transactions"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-primary mb-4">
                {featuredProject.tagline}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredProject.longDescription}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(featuredProject.metrics).map(([key, value]) => (
                  <Card key={key} padding="sm">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 capitalize">
                      {key}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button to="/products" variant="primary">
                  Learn More
                </Button>
                {featuredProject.url && (
                  <Button
                    href={featuredProject.url}
                    target="_blank"
                    variant="outline"
                    icon={ExternalLink}
                  >
                    Visit Website
                  </Button>
                )}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Current Work - Paarani */}
      {paaraniProject && (
        <SectionWrapper background="secondary">
          <SectionHeader
            subtitle="Current Work"
            title="Paarani Online E-commerce"
            description="Building a modern fashion and lifestyle e-commerce platform"
          />
          <div className="max-w-4xl mx-auto">
            <ProjectCard project={paaraniProject} featured />
          </div>
        </SectionWrapper>
      )}

      {/* Certifications Preview */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Certifications & Partnerships"
          title="Trusted by Industry Leaders"
          description="Our commitment to excellence is validated by industry-leading certifications"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {company.certifications.map((cert) => (
            <Card key={cert.name} className="text-center" padding="lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Rocket size={32} className="text-accent" />
              </div>
              <h4 className="font-semibold text-primary mb-2">{cert.name}</h4>
              <p className="text-sm text-gray-600">{cert.description}</p>
              <p className="text-xs text-gray-500 mt-2">{cert.year}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="secondary">
        <SectionHeader
          subtitle="Client Success Stories"
          title="What Our Clients Say"
          description="Don't just take our word for it - hear from our satisfied clients"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/clients" variant="primary">
            View All Testimonials
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you achieve your digital goals"
        primaryButton={{ text: "Start Your Project", link: "/contact" }}
        secondaryButton={{ text: "Schedule a Consultation", link: "/contact" }}
        background="gradient"
      />
    </>
  );
};

export default HomePage;
