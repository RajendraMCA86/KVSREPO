"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from "@/components/sections/Hero";


export default function SocialMediaMarketingPage() {
  return (
     <div>
        <div className='bg-gradient-to-r from-gray-700 to-gray-900 py-16'>
        </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
           <div className="max-w-7xl mx-auto px-8 py-16">
              {/* Hero Section */}
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Media Management</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Elevate your brand's presence on social media with our expert management services.
                </p>
              </motion.div>
              </div>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Hero Section</h3>
              <p className="text-gray-600"><b>Headline:</b> Grow Your Brand with Social Media.</p>
              <p className="text-gray-600"><b>Subheadline:</b> Build meaningful connections, increase engagement, and drive business growth across your social platforms</p>
              <p className="text-gray-600"><b>Call to Action:</b> Get Started / Request a Quote.</p>

            </div>
            <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Platforms We Cover</h3>
                <p className="text-gray-600">Facebook</p>
              <p className="text-gray-600">Instagram</p>
              <p className="text-gray-600">Twitter</p>
              <p className="text-gray-600">LinkedIn</p> 
          </div>

          </div>
        </div>
      </div>
       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Paid Campaigns (Social Ads)</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">  
              <li className="text-gray-600">Audience-specific campaigns to boost reach and conversions </li>
              <li className="text-gray-600">Continuous optimization for ROI</li>
              <li className="text-gray-600">Conversion tracking and reporting</li>
             </ul>
          </div>
                   <div className="flex flex-col items-left text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Case Studies / Results</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">  
              <li className="text-gray-600">Showcase examples of <b>follower growth, engagement rates, and campaign ROI</b> 
</li>
              <li className="text-gray-600">Include metrics such as “40% increase in followers in 3 months” to demonstrate results</li>
              <li className="text-gray-600">Conversion tracking and reporting</li>
             </ul>
          </div>

          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Packages
       </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Package 1 – 2 Platforms</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
              <li className="text-gray-600">Organic management for 2 platforms.</li>
              <li className="text-gray-600">12–16 posts per month</li>
              <li className="text-gray-600">Monthly performance report</li>
</ul>
            </div>
            <div className="flex flex-col items-left text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Package 2 – 4 Platforms</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">  
              <li className="text-gray-600">Organic management for 4 platforms </li>
              <li className="text-gray-600">20–25 posts per month</li>
              <li className="text-gray-600">2 Paid Campaigns per month</li>
              <li className="text-gray-600">Bi-weekly performance reports</li>

             </ul>
          </div>
              <div className="flex flex-col items-left text-left p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Package 3 – Full Suite (5 Platforms)</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">  
              <li className="text-gray-600">Management for all 5 platforms</li>
              <li className="text-gray-600">Paid campaigns on all platforms</li>
              <li className="text-gray-600">Influencer collaborations (optional)</li>
              <li className="text-gray-600">Weekly performance reports</li>

             </ul>
          </div>

          </div>
        </div>
      </section>
   </div>
  );
}