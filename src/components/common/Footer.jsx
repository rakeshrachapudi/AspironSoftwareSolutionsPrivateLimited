import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
} from "lucide-react";
import Container from "../ui/Container";
import company from "@data/company";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Products", path: "/products" },
      { name: "Clients", path: "/clients" },
      { name: "Careers", path: "/careers" },
    ],
    services: [
      { name: "Web Development", path: "/services#web-development" },
      { name: "IT Consulting", path: "/services#it-consulting" },
      { name: "UI/UX Design", path: "/services#ui-ux-design" },
      { name: "Digital Marketing", path: "/services#digital-marketing" },
      { name: "Custom Software", path: "/services#custom-software" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms-conditions" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: company.social.twitter, label: "Twitter" },
    { icon: Facebook, href: company.social.facebook, label: "Facebook" },
    { icon: Instagram, href: company.social.instagram, label: "Instagram" },
    { icon: Github, href: company.social.github, label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 border-b border-primary-light">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="inline-flex items-center space-x-2 group mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-heading font-bold text-xl">
                  {company.shortName}
                </span>
              </Link>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {company.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center hover:bg-accent transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 text-sm">
                  <MapPin
                    size={18}
                    className="text-accent mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-300">
                    {company.location.address}
                  </span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <Phone size={18} className="text-accent flex-shrink-0" />
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {company.contact.phone}
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <Mail size={18} className="text-accent flex-shrink-0" />
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {company.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
