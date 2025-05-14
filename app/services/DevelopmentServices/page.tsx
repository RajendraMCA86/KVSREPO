import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CareersServices from '@/components/sections/CareersServices';
import DevelopmentServices from '@/components/sections/Development';
import Development from '@/components/sections/Development';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function DevelopmentServicesPage() {
  return (
	<>
	  <PageHeader 
		title="Development Services"
		// subtitle="Explore our range of development services tailored to meet your business needs." 
		description="Explore our range of development services tailored to meet your business needs. Development Services in KVS Techflow"
	  />
	  <Development/>
	  {/* <Team /> */}
	</>
  );
}