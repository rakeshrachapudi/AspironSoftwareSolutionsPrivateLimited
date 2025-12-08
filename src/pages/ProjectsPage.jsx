import React from "react";
import { ExternalLink, CheckCircle, ArrowRight } from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCard from "../components/sections/ProjectCard";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import projects from "@data/projects";

const ProjectsPage = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Project Portfolio"
        subtitle="Delivered Excellence"
        description="Explore the diverse range of projects we've successfully delivered across various industries and technologies"
        primaryCta={{ text: "View Case Studies", link: "#projects" }}
        secondaryCta={{ text: "Start Your Project", link: "/contact" }}
        variant="gradient"
      />

      {/* Featured Projects */}
      <SectionWrapper id="projects">
        <SectionHeader
          subtitle="Featured Projects"
          title="Showcase of Innovation"
          description="Our most impactful projects that demonstrate our expertise and delivery excellence"
        />
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                idx !== 0 ? "pt-12 border-t" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  {project.status}
                </div>
                <h2 className="text-4xl font-bold text-primary mb-4">
                  {project.tagline}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(project.metrics)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <div key={key} className="bg-secondary p-3 rounded-lg">
                        <div className="text-xl font-bold text-accent">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.url && (
                    <Button
                      href={project.url}
                      target="_blank"
                      variant="primary"
                      icon={ExternalLink}
                    >
                      Visit Website
                    </Button>
                  )}
                  <Button to="/contact" variant="secondary">
                    Similar Project?
                  </Button>
                </div>
              </div>
              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-2xl w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Key Metrics Section */}
      <SectionWrapper background="secondary">
        <SectionHeader
          title="Our Track Record"
          description="Proven results across all our projects"
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Happy Clients", value: "100+" },
            { label: "Team Members", value: "50+" },
            { label: "Tech Stack", value: "20+" },
          ].map((stat) => (
            <Card key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-accent mb-3">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* All Projects Grid */}
      {otherProjects.length > 0 && (
        <SectionWrapper>
          <SectionHeader
            subtitle="Case Studies"
            title="More Success Stories"
            description="Additional projects showcasing our versatility and expertise"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* Project Highlights */}
      <SectionWrapper background="secondary">
        <SectionHeader
          title="Why Our Projects Succeed"
          description="Key factors that drive our project success"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Agile Methodology",
              description:
                "Flexible, iterative development approach ensuring rapid delivery and continuous improvement",
              icon: "🚀",
            },
            {
              title: "Expert Team",
              description:
                "Highly skilled developers and architects with deep expertise across multiple technologies",
              icon: "👥",
            },
            {
              title: "Quality Assurance",
              description:
                "Rigorous testing and QA processes ensuring robust, reliable, and bug-free applications",
              icon: "✓",
            },
          ].map((highlight) => (
            <Card key={highlight.title}>
              <div className="text-5xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Technologies Used */}
      <SectionWrapper>
        <SectionHeader
          title="Technologies We Master"
          description="A comprehensive stack of modern technologies we use in our projects"
        />
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "React",
            "Node.js",
            "Java",
            "Spring Boot",
            "Python",
            "AWS",
            "Docker",
            "Kubernetes",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
            "Redis",
            "Firebase",
            "GraphQL",
            "REST APIs",
            ".NET Core",
            "Azure",
            "GCP",
          ].map((tech) => (
            <span
              key={tech}
              className="px-6 py-3 bg-gradient-to-r from-accent/10 to-success/10 border border-accent/20 rounded-lg font-medium text-primary hover:border-accent transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper background="secondary">
        <SectionHeader
          title="Our Development Process"
          description="A proven methodology that ensures project success"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Discovery",
              desc: "Understand requirements and vision",
            },
            {
              step: "02",
              title: "Planning",
              desc: "Create roadmap and architecture",
            },
            {
              step: "03",
              title: "Development",
              desc: "Build with quality and precision",
            },
            {
              step: "04",
              title: "Deployment",
              desc: "Launch and monitor success",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <Card>
                <div className="text-5xl font-bold text-accent/20 mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="gradient-bg text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of satisfied clients who've transformed their business
            with our expertise
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Started Today
            </Button>
            <Button
              to="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Learn Our Services
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ProjectsPage;
