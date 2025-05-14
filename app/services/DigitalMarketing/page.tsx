import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CareersServices from '@/components/sections/CareersServices';
import DigitalMarketing from '@/components/sections/DigitalMarketing';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function DigitalMarketingPage() {
  return (
	<>
	  <PageHeader 
		title="Digital Marketing" 
		description="Accelerate Your Online Growth with Expert Digital Marketing Solutions. Digital Marketing in KVS Techflow"
	  />
	  <DigitalMarketing />
	  {/* <Team /> */}
	</>
  );
}