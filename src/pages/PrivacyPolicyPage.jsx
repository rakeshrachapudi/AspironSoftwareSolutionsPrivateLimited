import React from "react";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import company from "@data/company";

const PrivacyPolicyPage = () => {
  const lastUpdated = "December 3, 2025";

  return (
    <>
      {/* Header */}
      <SectionWrapper background="gradient" padding="default">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Shield size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/90 text-lg">Last Updated: {lastUpdated}</p>
        </div>
      </SectionWrapper>

      {/* Content */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed">
              At {company.name} ("{company.shortName}", "we", "us", or "our"),
              we are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <UserCheck size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Information We Collect
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily
                  provide when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Fill out contact forms on our website</li>
                  <li>
                    Subscribe to our newsletters or marketing communications
                  </li>
                  <li>Request quotes or consultations</li>
                  <li>Apply for job positions</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p className="text-gray-600 mt-3">
                  This information may include: name, email address, phone
                  number, company name, job title, and any other information you
                  choose to provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  When you visit our website, we may automatically collect
                  certain information about your device and browsing behavior,
                  including: IP address, browser type, operating system,
                  referring URLs, pages viewed, and time spent on pages. This
                  information is collected using cookies and similar tracking
                  technologies.
                </p>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Eye size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  How We Use Your Information
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Responding to your inquiries and providing customer support
                </li>
                <li>Processing job applications and recruitment activities</li>
                <li>
                  Sending you marketing communications (with your consent)
                </li>
                <li>Improving our website, products, and services</li>
                <li>Analyzing website usage and trends</li>
                <li>Detecting and preventing fraud and security issues</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </Card>

          {/* Information Sharing */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Lock size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Information Sharing and Disclosure
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  service providers who assist us in operating our website and
                  services (e.g., hosting, analytics, email services)
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you have given us
                  permission to share your information
                </li>
              </ul>
            </div>
          </Card>

          {/* Data Security */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Card>

          {/* Cookies */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. Cookies are small text files stored on
              your device that help us understand how you use our website.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You can control cookie settings through your browser preferences.
              However, disabling cookies may limit your ability to use certain
              features of our website.
            </p>
          </Card>

          {/* Your Rights */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your information
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data
                in a portable format
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, please contact us at{" "}
              {company.contact.email}
            </p>
          </Card>

          {/* Third-Party Links */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Third-Party Websites
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these websites. We
              encourage you to review the privacy policies of any third-party
              sites you visit.
            </p>
          </Card>

          {/* Children's Privacy */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you believe we have collected information from a child, please
              contact us immediately.
            </p>
          </Card>

          {/* Changes to Policy */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date. We encourage you
              to review this Privacy Policy periodically.
            </p>
          </Card>

          {/* Contact */}
          <Card padding="lg" className="bg-secondary">
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>{company.name}</strong>
              </p>
              <p>{company.location.address}</p>
              <p>
                {company.location.city}, {company.location.state} -{" "}
                {company.location.country}
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-accent hover:text-success"
                >
                  {company.contact.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${company.contact.phone}`}
                  className="text-accent hover:text-success"
                >
                  {company.contact.phone}
                </a>
              </p>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
};

export default PrivacyPolicyPage;
