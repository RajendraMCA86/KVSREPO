import React from 'react';
import styles from './css/Development.module.css'; // Assuming you have a CSS module for styles

const DevelopmentServices: React.FC = () => {
	const services = [
		{
			title: 'Software Development',
			description: 'Custom software solutions tailored to your business needs using the latest technologies.',
			icon: '💻',
		},
		{
			title: 'Website Development',
			description: 'Responsive and modern websites to enhance your online presence.',
			icon: '🌐',
		},
		{
			title: 'Mobile App Development',
			description: 'Cross-platform mobile applications for iOS and Android.',
			icon: '📱',
		},
		{
			title: 'UI/UX Design',
			description: 'Intuitive and user-friendly designs to improve user experience.',
			icon: '🎨',
		},
		{
			title: 'Cloud Solutions',
			description: 'Scalable and secure cloud-based services for your business.',
			icon: '☁️',
		},
	];

	return (
		<div className={styles.container}>
		  <img
		  src="/images/DEV.jpg" // Replace with the actual path to your image
		  alt="About Us Banner"
		  style={{ width: '100%', height: 'auto', borderRadius: '18px' }}
		/>
			<h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our IT Services</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
				{services.map((service, index) => (
					<div
						key={index}
						style={{
							border: '1px solid #ddd',
							borderRadius: '8px',
							padding: '20px',
							width: '300px',
							textAlign: 'center',
							boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
						}}
					>
						<div style={{ fontSize: '40px', marginBottom: '10px' }}>{service.icon}</div>
						<h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{service.title}</h2>
						<p style={{ fontSize: '16px', color: '#555' }}>{service.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default DevelopmentServices;