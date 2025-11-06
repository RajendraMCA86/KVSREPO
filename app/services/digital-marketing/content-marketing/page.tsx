"use client";
import { Metadata } from "next";
import Hero from "@/components/sections/Hero";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function ContentMarketingPage() {
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
          Content Marketing
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Perfect! Here’s a complete, ready-to-publish webpage content draft for your Content Marketing Services page. I’ve included headings, subheadings, descriptive text, and package details:
        </p>
      </motion.div>

      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Content Marketing Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Why Content Marketing Works</h3>
         <p className="text-gray-600">Content marketing is more than just writing—it’s a strategic approach that helps your business</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li><b>Improve SEO:</b> Drive organic traffic and boost search engine rankings.</li>
              <li><b>Build Trust:</b> Establish your brand as an authority in your industry.</li>
              <li><b>Generate Leads:</b> Convert readers into prospects and loyal customers.</li>
             <li><b>Support Growth:</b> Nurture your audience throughout the buyer’s journey..</li>
           </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Our Content Marketing Services</h3>
         <p className="text-gray-600">We provide a full range of content creation services tailored to your business needs</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li><b>Blog Writing:</b> Engaging, SEO-friendly articles that attract and educate your audience.</li>
              <li><b>Web & Landing Page Content::</b> Clear, persuasive content designed to convert visitors.</li>
              <li><b>Infographics / Visual Content:</b> Data-driven visuals that simplify complex ideas.</li>
             <li><b>eBooks, Case Studies & Whitepapers:</b> Long-form content to demonstrate expertise and authority.</li>
           </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Our Process</h3>
         <p className="text-gray-600">We follow a proven, step-by-step content marketing process <b>Research → Creation → Distribution → Reporting
</b></p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li><b>Research:</b> Audience analysis, industry trends, and keyword research.</li>
              <li><b>Creation:</b> High-quality content crafted to engage and convert..</li>
              <li><b>Distribution:</b> Share across blogs, social media, email campaigns, and other channels.</li>
             <li><b>Reporting:</b> Track performance, engagement, and ROI with detailed analytics.</li>
           </ul>
      </div>

      


          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Content Marketing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Basic Packag</h3>
         <p className="text-gray-600">Ideal for startups & small businesses</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>4 Blog Posts / Month.</li>
              <li>2 Custom Graphics / Month.</li>
              <li>1 Infographic or Visual Content</li>
             <li>Monthly Performance Report.</li>
           </ul>
      </div>

 <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Growth Package </h3>
         <p className="text-gray-600">Designed for growing brands</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>8 Blog Posts / Month.</li>
              <li>5 Custom Graphics / Month</li>
              <li>2 Infographics or Visual Conten</li>
             <li>1 eBook or Case Study per quarter.</li>
           </ul>
      </div>

       <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
              </div>
          <h3 className="text-xl font-semibold mb-3">Premium Package</h3>
         <p className="text-gray-600">Full-scale content marketing</p>
             <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li>12 Blog Posts / Month.</li>
              <li>8 Custom Graphics / Month.</li>
              <li>4 Infographics / Visual Content
</li>
             <li>1 eBook, Case Study, or Whitepaper per month.</li>
             <li>Weekly Performance Reports
.</li>

           </ul>
      </div>

          </div>
        </div>
      </section>
    </div>
    </div>
  );
}