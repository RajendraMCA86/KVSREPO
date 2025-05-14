"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Services',
    dropdown: [
      { href: '/services', label: 'IT Consulting' },
      { href: '/services/DevelopmentServices', label: 'Development Services' },
      { href: '/services/DigitalMarketing', label: 'Digital Marketing' },
      { href: '/services/CloudSolutions', label: 'Cloud Solutions' },


    ],
  },
  { href: '/blog', label: 'Blog' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-6'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span
                  className={cn(
                    "font-medium transition-colors cursor-pointer",
                    scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary"
                  )}
                >
                  {link.label}
                </span>
                {dropdownOpen && (
                  <div className="absolute center  mt-0 bg-white shadow-lg rounded-lg py-2 w-auto min-w-[10rem]">
                    {link.dropdown.map((sublink) => (
                        <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block px-4 py-2 text-gray-900 hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
                        >
                        {sublink.label}
                        </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  pathname === link.href ? "text-primary font-bold" : "",
                  scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={cn(
              "p-2",
              scrolled ? "text-gray-800" : "text-white"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto py-4 space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="space-y-2">
                    <span className="block font-medium text-gray-700">{link.label}</span>
                    <div className="pl-4 space-y-2">
                      {link.dropdown.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-700 hover:text-primary transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-2 font-medium transition-colors",
                      pathname === link.href ? "text-primary font-bold" : "text-gray-700 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}