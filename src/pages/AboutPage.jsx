import React from "react";
import {
  Mail,
  Linkedin,
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import company from "@data/company";
import leadership from "@data/leadership";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Aspiron"
        subtitle="Our Story"
        description="Transforming businesses through innovative technology solutions since 2025"
        variant="gradient"
      />

      {/* Company Story */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            className="text-white"
            subtitle="Our Journey"
            title="Building Digital Excellence"
          />
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2025, Aspiron Software Solutions emerged from a simple
              yet powerful vision: to empower businesses with technology that
              drives real growth and transformation. What started as a small
              team of passionate developers has grown into a comprehensive IT
              solutions provider serving clients across India and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our journey has been marked by continuous innovation, unwavering
              commitment to quality, and a client-first approach. We've had the
              privilege of working with diverse organizations, from ambitious
              startups to established enterprises, helping them navigate the
              complexities of digital transformation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Aspiron stands as a trusted technology partner, known for
              delivering solutions that not only meet but exceed expectations.
              Our success is measured by the success of our clients, and we're
              proud of the lasting relationships we've built along the way.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission, Vision, Values */}
      <SectionWrapper background="secondary">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">{company.mission}</p>
          </Card>

          {/* Vision */}
          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-success to-accent flex items-center justify-center mb-4">
              <Eye size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">{company.vision}</p>
          </Card>

          {/* Values Preview */}
          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Heart size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Our Values
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, Excellence, Integrity, Collaboration, and Customer
              Focus drive everything we do.
            </p>
          </Card>
        </div>

        {/* Detailed Values */}
        <div className="mt-16">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide our work and relationships"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.values.map((value) => (
              <Card key={value.title} padding="default">
                <h4 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Our Leadership"
          title="Meet the Team Behind Aspiron"
          description="Experienced leaders driving innovation and excellence"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader) => (
            <Card key={leader.id} padding="none" className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {leader.name}
                </h3>
                <p className="text-accent font-medium mb-2">{leader.role}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {leader.bio}
                </p>
                <div className="flex items-center space-x-3">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label={`${leader.name} LinkedIn`}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${leader.email}`}
                    className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label={`Email ${leader.name}`}
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Milestones Timeline */}
      <SectionWrapper background="gradient">
        <SectionHeader
          title="Our Journey"
          description="Key milestones in our company's growth"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {company.milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex items-start space-x-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Work With Us */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Why Choose Aspiron"
          title="What Sets Us Apart"
          description="The advantages of partnering with Aspiron Software Solutions"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4">
              <Users size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Expert Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our team brings {company.stats.experience} years of combined
              experience across diverse technologies and industries.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-success to-accent flex items-center justify-center mb-4">
              <TrendingUp size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Proven Track Record
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {company.stats.projects} successfully delivered projects with{" "}
              {company.stats.satisfaction} client satisfaction rate.
            </p>
          </Card>

          <Card>
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
              <Award size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Quality Assurance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ISO certified processes ensure the highest quality standards in
              every project we undertake.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how Aspiron can help transform your business through
            technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
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

export default AboutPage;
