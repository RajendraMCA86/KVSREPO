"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from "@/components/sections/Hero";

export default function ComplianceFrameworksPage() {
  return (
  <div>
        <div className='bg-gradient-to-r from-gray-700 to-gray-900 py-16'>
        </div>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
       <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Packages & Pricing Page</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Here’s a <b>fully structured, professional webpage content draft</b> for your <b>Digital Marketing Packages & Pricing</b> page, based on the details you provided. It’s optimized for clarity, readability, and client engagement:
        </p>
              </motion.div>
        <br></br>
        <h6 className="text-3xl  text-center mb-12">Complete Digital Marketing Package</h6>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At KVS Techflow, we specialize in data-driven digital marketing strategies designed to grow your brand visibility, generate leads, and boost conversions.
        </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">Social Media Optimization (SMO)</h3>
          <p> Social Media Optimization is a cost-efficient and ongoing strategy to increase brand visibility and engagement. Best results are achieved over 3–4 months of consistent activity.</p>
        </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">Search Engine Optimization (SEO)</h3>
          <p> SEO is the foundation of digital growth. Our white-hat SEO strategies improve rankings, drive qualified traffic, and support long-term business growth.</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>On-Page SEO</li>
          <li>Technical SEO.</li>
          <li>Off-Page SEO (Backlinks Submission).</li>
        </ul>
        </div>


          <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">Social Media Marketing (SMM)</h3>
          <p> Our Facebook & Instagram campaigns help businesses.</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Build relationships & improve customer experience </li>
          <li>Drive website traffic & conversions.</li>
          <li>Increase brand authority & audience engagement.</li>
        </ul>
        </div>

          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Compliance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Google My Business (GMB) Optimization</h3>
              <p className="text-gray-600">GMB optimization helps improve local search visibility and customer engagement.</p>
              <p className="text-gray-600">Our GMB Services Include:</p>
                 <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Profile setup, category & service area optimization </li>
          <li>Photo & logo optimization, reviews management.</li>
          <li>Services, products, labels, and attributes addition.</li>
          <li>Insights analysis & reporting.</li>
        </ul>

            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Google Ads Management
</h3>
              <p className="text-gray-600">Google Ads helps generate leads, traffic, and conversions quickly.</p>
                         <p className="text-gray-600">Our Google Ads Services Include:</p>

           <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Account setup & linking with Google Analytics </li>
          <li>Keyword research & competitor analysis.</li>
          <li>Ad copy creation, bid optimization, landing page recommendations.</li>
          <li>Conversion tracking, remarketing, and ad optimization.</li>
        </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Industries We Serve (Optional but Powerful)</h3>
              <p className="text-gray-600">Key Sections:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li><b>7–9 standalone service pages</b> (like WebFX) </li>
                <li>Retail / eCommerce.</li>
                <li>Healthcare.</li>
                <li>Real Estate</li>
                <li>Education</li>
                <li>Startups</li>

          </ul> 
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Final Deliverable</h3>
              <p className="text-gray-600">This structure will give KVS Techflow.</p>
                 <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li><b>7–9 standalone service pages</b> (like WebFX) </li>
          <li>Strong <b>SEO presence</b> (each page ranks for its niche).</li>
          <li>Better <b>conversion funnel</b> (overview → service detail → packages → CTA).</li>
          <li>Clear <b>client journey</b> with packages, results, and proposal request.</li>
        </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}