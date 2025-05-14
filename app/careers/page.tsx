import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CareersServices from '@/components/sections/CareersServices';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function CareersPage() {
  return (
	<>
	  <PageHeader 
		title="Careers" 
		description="Great People. Great Work. Great Place to Grow.Careers in KVS Techflow"
	  />
	  <CareersServices />
	  {/* <Team /> */}
	</>
  );
}