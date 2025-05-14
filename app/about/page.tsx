import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AboutContent from '@/components/sections/AboutContent';
import Team from '@/components/sections/Team';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function AboutPage() {
  return (
    <>
          <PageHeader title="About Us" 
      description="Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions." />
   


      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-6">About KVS Techflow</h1>
        <p className="text-gray-600 mb-4">
          KVS Techflow is a leading IT solutions provider, dedicated to delivering innovative technology solutions that empower businesses to thrive in the digital age. Our team of experts is committed to providing exceptional service and support, ensuring that our clients achieve their goals and maximize their potential.
        </p>
        <p className="text-gray-600 mb-4">
          With a focus on quality, reliability, and customer satisfaction, we offer a wide range of services including software development, digital marketing, and IT consulting. Our mission is to help businesses leverage technology to drive growth, efficiency, and competitive advantage.
        </p>
      </div>
      <AboutContent />
      {/* <Team /> */}
    </>
  );
}