import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import HeroSection from "../components/sections/HeroSection";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import company from "@data/company";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    try {
      await emailjs.send(
        "service_31m8cxi",
        "template_dz6pi9c",
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || "Not provided",
          service: formData.service || "Not specified",
          message: formData.message,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Kolkata",
          }),
          year: new Date().getFullYear(),
        },
        "zTKyg30IyKdzEjA6Y"
      );

      setSubmitSuccess(true);
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: company.contact.phone,
      link: `tel:${company.contact.phone}`,
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: Mail,
      title: "Email",
      value: company.contact.email,
      link: `mailto:${company.contact.email}`,
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Office",
      value: company.location.address,
      description: `${company.location.city}, ${company.location.state}`,
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: company.workingHours.weekdays,
      description: company.workingHours.saturday,
    },
  ];

  const services = [
    "Web Development",
    "IT Consulting",
    "UI/UX Design",
    "Digital Marketing",
    "Custom Software",
    "Other",
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Us"
        description="Let's discuss how we can help transform your business with technology"
        variant="gradient"
      />

      {/* Contact Form & Info */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <SectionHeader
              subtitle="Send us a message"
              title="Let's Start a Conversation"
              align="left"
            />

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Thank you for reaching out! We'll get back to you within 24
                  hours.
                </p>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ✗ Failed to send message. Please try again or email us
                  directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`input-field ${
                    errors.fullname ? "border-red-500" : ""
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullname && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input-field ${
                      errors.phone ? "border-red-500" : ""
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Company & Service */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`input-field ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <SectionHeader
              subtitle="Contact Information"
              title="We're Here to Help"
              align="left"
            />

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <Card key={info.title} padding="default">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-success flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-accent hover:text-success transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">
                          {info.value}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card padding="none" className="overflow-hidden">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="mx-auto mb-4 text-accent" />
                  <h4 className="font-semibold text-primary mb-2">
                    Visit Our Office
                  </h4>
                  <p className="text-gray-600">{company.location.address}</p>
                  <p className="text-gray-600">
                    {company.location.city}, {company.location.state}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Additional CTA */}
      <SectionWrapper background="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Prefer a Direct Call?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our team is available during business hours to discuss your
            requirements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={`tel:${company.contact.phone}`}
              variant="primary"
              size="lg"
              icon={Phone}
            >
              Call Us Now
            </Button>
            <Button
              href={`mailto:${company.contact.email}`}
              variant="outline"
              size="lg"
              icon={Mail}
            >
              Email Us
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default ContactPage;
