import React from "react";
import {
  Heart,
  Users,
  TrendingUp,
  Coffee,
  BookOpen,
  Award,
  MapPin,
  Briefcase,
  Clock,
} from "lucide-react";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths and opportunities for advancement",
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description:
        "Annual allowance for courses, conferences, and certifications",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours and work-from-home options",
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Collaborative environment with talented professionals",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Industry-leading salary and performance bonuses",
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "Node.js", "Spring Boot", "AWS", "MySQL"],
      description:
        "We are looking for an experienced full-stack developer to lead complex projects and mentor junior developers.",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Hyderabad / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      skills: [
        "Figma",
        "Adobe XD",
        "User Research",
        "Prototyping",
        "Design Systems",
      ],
      description:
        "Join our design team to create beautiful, user-centered interfaces for web and mobile applications.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Hyderabad",
      type: "Full-time",
      experience: "4+ years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      description:
        "Help us build and maintain robust, scalable infrastructure for our growing product portfolio.",
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Hyderabad / Remote",
      type: "Full-time",
      experience: "2+ years",
      skills: [
        "SEO",
        "Content Marketing",
        "Google Analytics",
        "Social Media",
        "PPC",
      ],
      description:
        "Drive our digital marketing initiatives and help grow our brand presence online.",
    },
    {
      id: 5,
      title: "Business Development Executive",
      department: "Sales",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3+ years",
      skills: [
        "B2B Sales",
        "Lead Generation",
        "Client Relations",
        "Proposal Writing",
      ],
      description:
        "Identify new business opportunities and build relationships with potential clients.",
    },
  ];

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      duration: "3-6 months",
      description:
        "Work on real projects with our engineering team and learn modern development practices.",
    },
    {
      id: 2,
      title: "UI/UX Design Intern",
      duration: "3-6 months",
      description:
        "Assist in creating user interfaces and conducting user research for our products.",
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      duration: "3-6 months",
      description:
        "Support our marketing team with content creation, social media, and analytics.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Join Our Team"
        subtitle="Careers at Aspiron"
        description="Build your career with a dynamic team that values innovation, collaboration, and excellence"
        primaryCta={{ text: "View Open Positions", link: "#positions" }}
        variant="gradient"
      />

      {/* Why Work With Us */}
      <SectionWrapper>
        <SectionHeader
          subtitle="Why Aspiron"
          title="Build Your Career With Us"
          description="We believe in creating an environment where talented people can thrive"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-white" />
              </div>
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

      {/* Our Culture */}
      <SectionWrapper background="secondary">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              subtitle="Our Culture"
              title="Where Innovation Meets Collaboration"
              align="left"
            />
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Aspiron, we've built a culture that celebrates creativity,
              encourages learning, and values diverse perspectives. We believe
              that great work happens when talented people are given the freedom
              to innovate and the support to succeed.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team is our greatest asset. We invest in continuous learning,
              provide mentorship opportunities, and create an environment where
              everyone can contribute their best work.
            </p>
            <div className="space-y-3">
              {[
                "Collaborative, non-hierarchical work environment",
                "Regular team events and knowledge-sharing sessions",
                "Modern office with state-of-the-art facilities",
                "Opportunities to work on cutting-edge technologies",
              ].map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award size={14} className="text-success" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-lg blur-2xl"></div>
          </div>
        </div>
      </SectionWrapper>

      {/* Open Positions */}
      <SectionWrapper id="positions">
        <SectionHeader
          subtitle="Open Positions"
          title="Current Job Openings"
          description="Join our team and work on exciting projects that make a difference"
        />
        <div className="space-y-6">
          {openPositions.map((position) => (
            <Card
              key={position.id}
              padding="lg"
              className="hover:border-accent border-2 border-transparent transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {position.type}
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                      {position.experience}
                    </span>
                  </div>
                </div>
                <Button to="/contact" variant="primary">
                  Apply Now
                </Button>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {position.description}
              </p>

              <div>
                <h4 className="font-semibold text-primary mb-2">
                  Required Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {position.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Internship Opportunities */}
      <SectionWrapper background="secondary">
        <SectionHeader
          subtitle="Internships"
          title="Launch Your Career"
          description="Gain real-world experience and learn from industry professionals"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((internship) => (
            <Card key={internship.id}>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {internship.title}
              </h3>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                {internship.duration}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {internship.description}
              </p>
              <Button variant="outline" className="w-full">
                Apply for Internship
              </Button>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Application Process */}
      <SectionWrapper>
        <SectionHeader
          title="Our Hiring Process"
          description="Simple, transparent, and designed to find the best fit"
        />
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Apply Online",
              description:
                "Submit your resume and portfolio through our website",
            },
            {
              step: "02",
              title: "Initial Screening",
              description:
                "Our HR team reviews your application and background",
            },
            {
              step: "03",
              title: "Technical Interview",
              description:
                "Discuss your skills and experience with our team leads",
            },
            {
              step: "04",
              title: "Final Round",
              description: "Meet the team and discuss role expectations",
            },
          ].map((phase) => (
            <Card key={phase.step} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {phase.step}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                {phase.title}
              </h3>
              <p className="text-sm text-gray-600">{phase.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA - Resume Upload */}
      <SectionWrapper background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See a Perfect Match?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Send Your Resume
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
};

export default CareersPage;
