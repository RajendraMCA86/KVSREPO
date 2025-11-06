"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SEOPage() {
  return (
    <div>
        <div className='bg-gradient-to-r from-gray-700 to-gray-900 py-16'>
        </div>

    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Search Engine Optimization
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At KVS Techflow, we don’t just improve your rankings—we help you generate real business growth through data-driven SEO strategies. From technical audits to content optimization, we align every step with your business goals.
        </p>
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold mb-6">
        <h2 className="text-2xl font-semibold mb-4">Why SEO Matters</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>75% of users never scroll past the first page of Google search results.</li>
          <li>Businesses that appear in the top 3 search results capture over 60% of clicks.</li>
          <li>SEO delivers one of the highest ROIs in digital marketing compared to paid channels.</li>
          <li>With billions of daily searches, SEO is no longer optional—it’s essential to connect with your audience.</li>
        </ul>
      </div>
              <h2 className="text-2xl font-semibold mb-4">Our SEO Services</h2>

      {/* Key Features */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
           <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">On-Page SEO</h3>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Optimization of titles, meta tags, headers, and URLs</li>
          <li>Content optimization with targeted keywords.</li>
          <li>Internal linking for better user flow.</li>
        </ul>
        </div>
  <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">Off-Page SEO</h3>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>High-quality backlink building</li>
          <li>Guest posting & digital PR.</li>
          <li>Reputation & authority management</li>
        </ul>
   </div>
   <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            </svg>
        </div>
          <h3 className="text-xl font-semibold mb-3">Technical & Local SEO</h3>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Website audits for crawlability & indexing
</li>
          <li>Page speed optimization.</li>
          <li>Mobile-friendly & Core Web Vitals compliance</li>
           <li>Google Business Profile (GMB) optimization</li>
          <li>Local keywords & citations</li>
          <li>Review management to boost local trust</li>
        </ul>
   </div>



 
      </motion.div>
<h2 className="text-2xl font-semibold mb-4">SEO Packages</h2>
          {/* Key Features */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
       
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Starter (Best for Small Businesses)</h3>
               <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Keyword research & setup</li>
          <li>On-page optimization (up to 10 pages).</li>
          <li>Monthly audit & report</li>
        </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Growth (For Expanding Brands)</h3>
               <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>Starter + Technical SEO fixes</li>
          <li>Local SEO setup</li>
          <li>Backlink strategy (high-quality link building) </li>
        </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Why Choose KVS Techflow</h3>
   <ul className="list-disc list-inside space-y-3 text-gray-600">
          <li>ROI-Driven Approach: Every strategy is tied to measurable business growth</li>
          <li>Future-Ready SEO: We adapt to Google algorithm updates and AI search trends</li>
          <li>Transparency: Regular reports, clear deliverables, and dedicated support </li>
          <li>Full Digital Ecosystem: Seamless integration with PPC, content marketing, and social media </li>

        </ul>
        </div>
      </motion.div>


      {/* CTA Section */}
      <motion.div 
        className="text-center bg-primary/5 rounded-2xl p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's work together to boost your website's visibility and drive more organic traffic.
        </p>
        <Link rel="stylesheet" href="/contact">
        <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Get Started
        </button>
        </Link>
      </motion.div>
      </div>
    </div>
  );
}
