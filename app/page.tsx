import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import BlogSection from '@/components/sections/BlogSection';
import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <BlogSection />
      <CTA />
      <Contact />
    </>
  );
}