import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Social Media Marketing Services - KVS",
  description: "Transform your social media presence with our expert marketing services. Engage your audience and drive growth across all platforms.",
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Social Media Marketing"
        subtitle="Build meaningful connections and drive engagement across social platforms"
        // imageUrl="/images/social-media-hero.jpg"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Social Media Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Platform Strategy</h3>
              <p className="text-gray-600">Tailored strategies for each social media platform to maximize engagement and reach.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600">Eye-catching, platform-optimized content that resonates with your audience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Community Management</h3>
              <p className="text-gray-600">Active engagement with your audience to build lasting relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Social Media Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Social Media Strategy</h3>
              <p className="text-gray-600">Custom strategies aligned with your business goals and target audience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Calendar Planning</h3>
              <p className="text-gray-600">Strategic content planning and scheduling across platforms.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Paid Social Advertising</h3>
              <p className="text-gray-600">Targeted advertising campaigns to reach and engage your ideal audience.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600">Detailed performance tracking and optimization recommendations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}