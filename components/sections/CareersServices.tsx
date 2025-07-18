"use client";
import React, { useState } from 'react';

const CareersServices: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		resume: null as File | null,
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFormData({ ...formData, resume: e.target.files[0] });
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log('Form submitted:', formData);
	};

	return (
		
		<div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
			 <img
		  src="/images/career.jpg" // Replace with the actual path to your image
		  alt="About Us Banner"
		  style={{ width: '100%', height: 'auto', borderRadius: '18px' }}
		/>
			 <h2 
				className="text-3xl font-bold mb-8" 
				style={{ 
					textAlign: 'center', 
					background: 'linear-gradient(to right, #ff7e5f, #feb47b)', 
					WebkitBackgroundClip: 'text', 
					WebkitTextFillColor: 'transparent' 
				}}
			>
				Why Join Our Team
			</h2>
			 <p className="text-gray-600 mb-6">We are growing fast and continuously looking to hire enterprising young engineers and management graduates to partner in our continued success

              If you are a young graduate looking for an enriching work environment in the technology domain and are excited by tremendous professional and personal growth opportunities, KVS is the place for you .</p>
			
			<form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
				<div style={{ marginBottom: '15px' }}>
					<label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Full Name</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
					/>
				</div>

				<div style={{ marginBottom: '15px' }}>
					<label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
					/>
				</div>

				<div style={{ marginBottom: '15px' }}>
					<label htmlFor="resume" style={{ display: 'block', marginBottom: '5px' }}>Upload Resume</label>
					<input
						type="file"
						id="resume"
						name="resume"
						accept=".pdf,.doc,.docx"
						onChange={handleFileChange}
						required
						style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
					/>
				</div>

				<div style={{ marginBottom: '15px' }}>
					<label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows={4}
						style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
					/>
				</div>

				<button
					type="submit"
					style={{
						backgroundColor: '#007BFF',
						color: '#fff',
						padding: '10px 15px',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					Submit Application
				</button>
			</form>
		</div>
	);
};

export default CareersServices;