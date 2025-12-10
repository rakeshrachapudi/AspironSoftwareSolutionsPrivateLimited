import React from "react";
import { FileText, AlertCircle, Scale, CheckCircle } from "lucide-react";
import SectionWrapper from "../components/ui/SectionWrapper";
import Card from "../components/ui/Card";
import company from "@data/company";

const TermsConditionsPage = () => {
  const lastUpdated = "December 3, 2025";

  return (
    <>
      {/* Header */}
      <SectionWrapper background="gradient" padding="default">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <FileText size={32} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and Conditions
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
              Welcome to {company.name}. These Terms and Conditions ("Terms")
              govern your use of our website and services. By accessing or using
              our website, you agree to be bound by these Terms. If you do not
              agree to these Terms, please do not use our website or services.
            </p>
          </div>

          {/* Definitions */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Definitions
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <p>
                <strong>"Company", "we", "us", or "our"</strong> refers to{" "}
                {company.name}
              </p>
              <p>
                <strong>"Client", "you", or "your"</strong> refers to the
                individual or entity using our services
              </p>
              <p>
                <strong>"Services"</strong> refers to all services provided by
                the Company, including web development, IT consulting, design,
                and digital marketing
              </p>
              <p>
                <strong>"Website"</strong> refers to our website at
                aspironsoftware.com
              </p>
              <p>
                <strong>"Agreement"</strong> refers to the contract between the
                Company and Client for specific services
              </p>
            </div>
          </Card>

          {/* Services */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Services
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                We provide various IT services including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Full-stack web development</li>
                <li>IT consulting and strategy</li>
                <li>UI/UX design services</li>
                <li>Digital marketing and SEO</li>
                <li>Custom software development</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Specific terms for each service will be outlined in individual
                service agreements or proposals provided to clients.
              </p>
            </div>
          </Card>

          {/* Client Responsibilities */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Client Responsibilities
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>Clients agree to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provide accurate and complete information required for service
                  delivery
                </li>
                <li>Respond to requests for information in a timely manner</li>
                <li>
                  Review and approve deliverables within agreed timeframes
                </li>
                <li>Make payments according to agreed terms</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Maintain confidentiality of any credentials or access provided
                </li>
              </ul>
            </div>
          </Card>

          {/* Payment Terms */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Payment Terms
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Payment terms will be specified in individual service
                agreements. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>A deposit may be required before work commences</li>
                <li>
                  Milestone payments may be structured based on project phases
                </li>
                <li>
                  Final payment is due upon project completion or as specified
                  in the agreement
                </li>
                <li>
                  Late payments may incur additional fees or interest charges
                </li>
                <li>
                  All fees are exclusive of applicable taxes unless stated
                  otherwise
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                We accept payment via bank transfer, online payment gateways, or
                as specified in the service agreement.
              </p>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Scale size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Intellectual Property Rights
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Client-Owned Content
                </h3>
                <p className="leading-relaxed">
                  All content, materials, and assets provided by the Client
                  remain the property of the Client. The Client grants us a
                  license to use such materials solely for the purpose of
                  delivering the agreed services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Work Product
                </h3>
                <p className="leading-relaxed">
                  Upon full payment, the Client will own the final deliverables
                  as specified in the service agreement. We retain the right to
                  use general methodologies, frameworks, and pre-existing
                  components in future projects.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Portfolio Rights
                </h3>
                <p className="leading-relaxed">
                  We reserve the right to display completed projects in our
                  portfolio and marketing materials unless otherwise agreed in
                  writing.
                </p>
              </div>
            </div>
          </Card>

          {/* Confidentiality */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Confidentiality
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Both parties agree to maintain confidentiality of any proprietary
              information shared during the course of the engagement. This
              includes business strategies, technical information, financial
              data, and any information marked as confidential. This obligation
              continues even after the termination of services.
            </p>
          </Card>

          {/* Warranties and Disclaimers */}
          <Card padding="lg" className="mb-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle size={24} className="text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Warranties and Disclaimers
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We warrant that our services will be performed with reasonable
                skill and care in accordance with industry standards. However:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>We do not guarantee specific results or outcomes</li>
                <li>
                  We are not responsible for third-party services, platforms, or
                  tools
                </li>
                <li>
                  Website/software performance may vary based on factors outside
                  our control
                </li>
                <li>
                  We disclaim all other warranties, express or implied, to the
                  fullest extent permitted by law
                </li>
              </ul>
            </div>
          </Card>

          {/* Limitation of Liability */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Our total liability shall not exceed the amount paid by the
                  Client for the specific services
                </li>
                <li>
                  We shall not be liable for any indirect, incidental,
                  consequential, or punitive damages
                </li>
                <li>
                  We are not liable for any losses resulting from unauthorized
                  access, data breaches at third-party services, or force
                  majeure events
                </li>
              </ul>
            </div>
          </Card>

          {/* Termination */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Termination
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Either party may terminate services under the following
                conditions:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>By Client:</strong> With written notice as specified
                  in the service agreement. The Client remains responsible for
                  payment of work completed and any termination fees
                </li>
                <li>
                  <strong>By Company:</strong> If the Client fails to meet their
                  obligations, including non-payment or failure to provide
                  necessary materials
                </li>
                <li>
                  <strong>Mutual Agreement:</strong> Both parties may agree to
                  terminate at any time
                </li>
              </ul>
            </div>
          </Card>

          {/* Dispute Resolution */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Dispute Resolution
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In the event of any dispute, both parties agree to first attempt
              resolution through good faith negotiations. If unsuccessful,
              disputes will be resolved through arbitration in{" "}
              {company.location.city}, {company.location.state}, in accordance
              with Indian law. The prevailing party may be entitled to recover
              reasonable attorney fees.
            </p>
          </Card>

          {/* Governing Law */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of India. The courts of {company.location.city},{" "}
              {company.location.state} shall have exclusive jurisdiction over
              any disputes arising from these Terms.
            </p>
          </Card>

          {/* Changes to Terms */}
          <Card padding="lg" className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the updated Terms
              on our website and updating the "Last Updated" date. Your
              continued use of our services after changes constitutes acceptance
              of the modified Terms.
            </p>
          </Card>

          {/* Contact */}
          <Card padding="lg" className="bg-secondary">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please
              contact us:
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

export default TermsConditionsPage;
