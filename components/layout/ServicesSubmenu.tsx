"use client";

import React, { useState,useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const services = [
  { 
    name: "Web Development", 
    href: "/services/web-development", 
    Description: "Full-stack web development services"
  },
  { 
    name: "Mobile App Development", 
    href: "/services/mobile-apps", 
    Description: "iOS, Android, and cross-platform development"
  },
  { 
    name: "Cloud Solutions", 
    href: "/services/cloud-services",
    Description: "Cloud infrastructure and DevOps practices"
  },
  { 
    name: "Digital Marketing", 
    href: "/services/digital-marketing", 
    Description: "SEO, PPC, and social media marketing"
  },
  { 
    name: "IT Consulting", 
    href: "/services/it-consulting", 
    Description: "Strategic IT consulting to optimize your business processes"
  },
];

type DropdownType = "blog" | "services" | null;

type ServiceSubmenuProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  activeDropdown?: DropdownType;
    setActiveDropdown?: React.Dispatch<React.SetStateAction<DropdownType>>;
};

const ServicesSubmenu: React.FC<ServiceSubmenuProps> = ({
  isOpen,
  setIsOpen,
  activeDropdown, setActiveDropdown
}) => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  

  const handleLinkClick = () => {
    setOpen(false);
    if (setIsOpen) {
      setIsOpen(false);
    }
    if (setActiveDropdown) {
      setActiveDropdown(null);
    }
  };

  // const toggleMenu = () => {
  //   setOpen(!open);
  //   if (setActiveDropdown) {
  //     setActiveDropdown(null);
  //   }
  // };
  const toggleMenu = () => {
  if (setActiveDropdown) {
    // If blog is open, close it and open services
    setActiveDropdown(prev =>
      prev === "blog" ? "services" : (open ? null : "services")
    );
  }
  setOpen(!open);
};
   useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768); // <768px = mobile
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  

  return (
    <div className="relative"
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined} 
      >
      <button
        className="flex items-center space-x-1 font-medium transition-colors w-full"
        aria-expanded={open}
        onClick={() => isMobile ? toggleMenu() : null}
        // onClick={toggleMenu}
      >
        <span>Services</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
          key={"dropdown"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50" // Make full width on mobile
          >
            <div className="p-2 space-y-2">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={handleLinkClick}
                  className="flex flex-col px-4 py-2 text-sm rounded-md  hover:bg-primary/80 transition-colors  text-gray-900 hover:text-white"
                >
                  <span className="font-medium">{service.name}</span>
                  <span className="text-xs mt-0.5">{service.Description}</span>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <Link
                href="/services"
                onClick={handleLinkClick}
                className="flex items-center px-4 py-2 text-sm text-primary hover:text-white hover:bg-primary/90 rounded-md transition-colors"
              >
                View All Services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSubmenu;
