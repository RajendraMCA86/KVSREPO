import BlogSection from '@/components/sections/BlogSection';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import Careers from '@/components/sections/Careers';
import Team from '@/components/sections/Team';

export default function Home() {
  return (
    <>
      <Hero 
        title="Innovative Technology Solutions for Modern Businesses"
        subtitle="Transform your business with cutting-edge technology and expert solutions. We help companies navigate digital transformation successfully."
      />
      <About />
      <Services />
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <BlogSection />
      <CTA />
      {/* <Careers /> */}
      <Contact />
    
    </>
  );
}