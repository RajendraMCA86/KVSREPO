import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Identity Management Services - KVS",
  description: "Secure and streamline your digital identity management with our expert solutions. Protect your organization's assets and data.",
};

export default function IdentityManagementPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Identity Management Services"
        subtitle="Secure and streamline your organization's digital identity"
        // imageUrl="/images/identity-management-hero.jpg"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Identity Management Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Identity Governance</h3>
              <p className="text-gray-600">Comprehensive identity lifecycle management and access control.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Access Management</h3>
              <p className="text-gray-600">Secure authentication and authorization solutions.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Identity Security</h3>
              <p className="text-gray-600">Advanced security measures to protect digital identities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Identity Management Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Identity Lifecycle Management</h3>
              <p className="text-gray-600">End-to-end management of digital identities across your organization.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Access Control & Authentication</h3>
              <p className="text-gray-600">Robust authentication systems and access management solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Security Compliance</h3>
              <p className="text-gray-600">Ensure compliance with identity management regulations and standards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Audit & Reporting</h3>
              <p className="text-gray-600">Comprehensive monitoring and reporting of identity-related activities.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}