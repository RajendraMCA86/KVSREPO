import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Compliance Frameworks Services - KVS",
  description: "Ensure your organization meets regulatory requirements with our comprehensive compliance framework solutions.",
};

export default function ComplianceFrameworksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Compliance Frameworks"
        subtitle="Navigate regulatory requirements with confidence"
        // imageUrl="/images/compliance-frameworks-hero.jpg"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Framework Implementation</h3>
              <p className="text-gray-600">Expert implementation of industry-standard compliance frameworks.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Risk Assessment</h3>
              <p className="text-gray-600">Comprehensive evaluation of compliance risks and gaps.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">Ongoing compliance monitoring and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Compliance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Framework Selection</h3>
              <p className="text-gray-600">Expert guidance in choosing the right compliance frameworks for your organization.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Implementation Strategy</h3>
              <p className="text-gray-600">Strategic planning and execution of compliance framework implementation.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Audit Support</h3>
              <p className="text-gray-600">Comprehensive support during compliance audits and assessments.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Training & Documentation</h3>
              <p className="text-gray-600">Staff training and documentation management for compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}