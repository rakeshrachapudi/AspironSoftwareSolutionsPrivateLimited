import React from "react";
import {
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Users,
  Database,
  Shield,
} from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/sections/ProjectCard";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import projects from "@data/projects";

const ProductsPage = () => {
  const featuredProject = projects.find((p) => p.slug === "propertydealz");
  const otherProjects = projects.filter((p) => p.slug !== "propertydealz");

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Products & Projects"
        subtitle="Innovation in Action"
        description="Discover our portfolio of innovative solutions and successful project deliveries"
        primaryCta={{ text: "View PropertyDealz", link: "#propertydealz" }}
        variant="gradient"
      />

      {/* Featured Product - PropertyDealz */}
      {featuredProject && (
        <SectionWrapper id="propertydealz">
          <SectionHeader
            subtitle="Featured Product"
            title="PropertyDealz.in"
            description="Our flagship real estate platform revolutionizing property transactions"
          />

          {/* Product Hero */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Live & Active
              </div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                {featuredProject.tagline}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {featuredProject.longDescription}
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <Button
                  href={featuredProject.url}
                  target="_blank"
                  variant="primary"
                  icon={ExternalLink}
                >
                  Visit Website
                </Button>
                <Button to="/contact" variant="secondary">
                  Discuss Similar Project
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-lg blur-2xl"></div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {Object.entries(featuredProject.metrics).map(([key, value]) => (
              <Card key={key} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600 capitalize">{key}</div>
              </Card>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Key Features
              </h3>
              <ul className="space-y-3">
                {featuredProject.features.slice(0, 5).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-success mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Additional Capabilities
              </h3>
              <ul className="space-y-3">
                {featuredProject.features.slice(5).map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-success mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Stack */}
          <Card padding="lg" className="bg-secondary">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-secondary-dark rounded-lg text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Testimonial */}
          {featuredProject.testimonial && (
            <div className="mt-16">
              <Card padding="lg" className="border-l-4 border-accent">
                <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{featuredProject.testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-white font-bold">
                    {featuredProject.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">
                      {featuredProject.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {featuredProject.testimonial.role}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </SectionWrapper>
      )}

      {/* Other Projects */}
      <SectionWrapper background="secondary">
        <SectionHeader
          subtitle="Case Studies"
          title="More Success Stories"
          description="Explore our portfolio of successful project deliveries across industries"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </SectionWrapper>

      {/* Future SaaS Products */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Coming Soon"
          title="Future SaaS Products"
          description="We're constantly innovating and building new solutions"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Business Analytics Suite",
              description:
                "Comprehensive business intelligence and analytics platform for data-driven decision making",
              status: "In Planning",
            },
            {
              icon: Users,
              title: "HR Management System",
              description:
                "Complete HRMS solution for recruitment, onboarding, payroll, and employee management",
              status: "In Development",
            },
            {
              icon: Database,
              title: "Inventory Management",
              description:
                "Smart inventory tracking and management system for retail and e-commerce businesses",
              status: "In Planning",
            },
          ].map((product) => (
            <Card key={product.title}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4">
                <product.icon size={28} className="text-white" />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-3">
                {product.status}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in early access or partnership opportunities?
          </p>
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </SectionWrapper>

      {/* Why Choose Our Products */}
      <SectionWrapper background="gradient">
        <SectionHeader
          title="Why Our Products Stand Out"
          description="Built with excellence, designed for success"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Enterprise-Grade Security",
              description:
                "Built with industry-leading security practices and compliance standards",
            },
            {
              icon: TrendingUp,
              title: "Scalable Architecture",
              description:
                "Designed to grow with your business, handling increasing loads effortlessly",
            },
            {
              icon: Users,
              title: "User-Centric Design",
              description:
                "Intuitive interfaces that users love, reducing training time and increasing adoption",
            },
          ].map((benefit) => (
            <Card key={benefit.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Have a Product Idea?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's collaborate to bring your vision to life with our proven
            development expertise
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

export default ProductsPage;
