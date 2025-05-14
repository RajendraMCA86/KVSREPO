import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import CareersServices from '@/components/sections/CareersServices';
import CloudSolutions from '@/components/sections/CloudSolutions';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function CloudSolutionsPage() {
  return (
	<>
	  <PageHeader 
		title="Cloud Solutions" 
		description="Scalable, Secure, and Smart Cloud Solutions for Your Business.CloudSolutions in KVS Techflow"
	  />
	  <CloudSolutions />
	  {/* <Team /> */}
	</>
  );
}