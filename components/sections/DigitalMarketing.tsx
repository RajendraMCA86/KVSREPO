// src/pages/DigitalMarketing.tsx
import React from 'react';
import { Metadata } from 'next';
import styles from './css/DigitalMarketing.module.css'; // Assuming you have a CSS module for styles
const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website’s visibility on search engines and drive organic traffic.',
  },
  {
    title: 'Search Engine Marketing (SEM)',
    description: 'Use paid advertising to boost your presence on search engines like Google.',
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand and connect with customers on platforms like Instagram, Twitter, and LinkedIn.',
  },
  {
    title: 'Google Ads',
    description: 'Run targeted ad campaigns on Google to get instant traffic and leads.',
  },
  {
    title: 'Facebook Ads',
    description: 'Reach specific audiences through cost-effective Facebook advertising.',
  },
  {
    title: 'Content Writing',
    description: 'Create high-quality content that engages your audience and boosts SEO.',
  },
];

const DigitalMarketing = () => {
  return (
    <div className={styles.container}>
       <img
		  src="/images/DG.jpg" // Replace with the actual path to your image
		  alt="About Us Banner"
		  style={{ width: '100%', height: 'auto', borderRadius: '18px' }}
		/>

      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
