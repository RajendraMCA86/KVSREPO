'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile App Development', href: '/services/mobile-apps' },
  { name: 'Cloud Solutions', href: '/services/cloud-services' },
  { name: 'CyberSecurity', href: '/services/cybersecurity' },
  { name: 'IT Consulting', href: '/services/it-consulting' },
];

const ServicesSubmenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center space-x-1 font-medium transition-colors"
        aria-expanded={open}
      >
        <span>Services</span>
        <ChevronDown 
        className={`transition-transform duration-200 ${
            open ? 'rotate-180' : ''}`}
        />
      </button>

    <AnimatePresence>
          {open && (
         <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
        <div className="p-2 space-y-1">
          <ul className="py-2 text-sm text-gray-700">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="flex flex-col px-4 py-2 text-sm rounded-md  hover:bg-primary/80 transition-colors  text-gray-900 hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="border-t border-gray-100 my-2" >
            <Link
                href="/services"
                className="flex items-center px-4 py-2 text-sm text-primary hover:text-white hover:bg-primary/90 rounded-md transition-colors"
              >
                View All Posts →
              </Link>
          </div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
};

export default ServicesSubmenu;
