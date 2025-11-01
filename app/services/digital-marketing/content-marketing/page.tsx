import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Content Marketing Services - KVS",
  description: "Elevate your brand with our expert content marketing services. We create engaging, valuable content that drives traffic and converts leads.",
};

export default function ContentMarketingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero
        title="Content Marketing Services"
        subtitle="Create engaging content that resonates with your audience and drives results"
        // imageUrl="/images/content-marketing-hero.jpg"
      />
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Content Marketing Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Strategic Planning</h3>
              <p className="text-gray-600">Develop comprehensive content strategies aligned with your business goals and target audience.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600">Create high-quality, engaging content across various formats and platforms.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Distribution</h3>
              <p className="text-gray-600">Strategically distribute content across multiple channels to maximize reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Blog Writing & Management</h3>
              <p className="text-gray-600">Regular, high-quality blog posts that establish thought leadership and drive organic traffic.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Strategy</h3>
              <p className="text-gray-600">Comprehensive content planning aligned with your business objectives.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Creation</h3>
              <p className="text-gray-600">Expert creation of various content types including articles, whitepapers, and case studies.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Analytics</h3>
              <p className="text-gray-600">Regular performance analysis and optimization of content strategies.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}