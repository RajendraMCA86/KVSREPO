// src/pages/CloudSolutions.jsx
import React from 'react';
import './css/CloudSolutions.css';

const services = [
  {
    title: 'DevOps Tools',
    description:
      'Leverage powerful tools like Jenkins, Docker, Kubernetes, and GitLab to automate and streamline your development lifecycle.',
  },
  {
    title: 'DevOps Consulting Services',
    description:
      'Get expert guidance to implement DevOps practices that accelerate your deployment, improve quality, and ensure scalability.',
  },
  {
    title: 'DevOps Service & Solution',
    description:
      'Comprehensive DevOps solutions including CI/CD, infrastructure automation, and cloud-native app management.',
  },
];

const CloudSolutions = () => {
  return (
    <div className="cloud-container">
     <img
		  src="/images/Cloud.jpeg" // Replace with the actual path to your image
		  alt="About Us Banner"
		  style={{ width: '100%', height: 'auto', borderRadius: '18px' }}
		/>

      <section className="cloud-services">
        {services.map((service, index) => (
          <div key={index} className="cloud-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CloudSolutions;
