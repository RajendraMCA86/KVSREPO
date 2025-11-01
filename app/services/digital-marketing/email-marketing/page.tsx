import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Email Marketing Services - KVS",
  description: "Drive conversions with targeted email marketing campaigns. Our experts help you create personalized email strategies that deliver results.",
};

export default function EmailMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Email Marketing Services"
        subtitle="Create targeted campaigns that convert and drive customer engagement"
        // imageUrl="/images/email-marketing-hero.jpg"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Email Marketing Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">List Management</h3>
              <p className="text-gray-600">Expert segmentation and maintenance of your email lists for optimal targeting.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Campaign Creation</h3>
              <p className="text-gray-600">Compelling email campaigns that engage and convert your audience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Automation</h3>
              <p className="text-gray-600">Streamlined workflows and triggered emails for consistent engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Email Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Email Strategy Development</h3>
              <p className="text-gray-600">Comprehensive email marketing strategies aligned with your business goals.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Template Design</h3>
              <p className="text-gray-600">Custom, responsive email templates that reflect your brand identity.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Marketing Automation</h3>
              <p className="text-gray-600">Automated email sequences and drip campaigns for consistent engagement.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">Detailed tracking and optimization of email campaign performance.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}