"use client";

import React, { useState,useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const services = [
  { 
    name: "Web Development", 
    href: "/services/web-development", 
    Description: "Full-stack web development services",
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
    Description: "SEO, PPC, and social media marketing",
     // example children / submenu for Web Development
    children: [
      { name: 'SEO Services', href: '/services/digital-marketing/seo', Description: 'Improve search rankings and increase organic traffic.' },
      { name: 'Content Marketing', href: '/services/digital-marketing/content-marketing', Description: 'Create and share valuable content to attract customers.' },
      { name: 'Social Media Management', href: '/services/digital-marketing/social-media-marketing', Description: 'Manage and grow social media presence.' },
      { name: 'Pay per Click Advertising', href: '/services/digital-marketing/compliance-frameworks', Description: 'Run paid ads to reach targeted audiences.' },
    ],
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
  // track which service's nested submenu is open on desktop
  const [nestedOpen, setNestedOpen] = useState<string | null>(null);
  // timer ref to debounce closing nested menus to avoid flicker when moving pointer
  const nestedCloseTimer = useRef<number | null>(null);
  // track expanded service on mobile (to show children)
  const [expandedService, setExpandedService] = useState<string | null>(null);
  

  const handleLinkClick = () => {
    setOpen(false);
    if (setIsOpen) {
      setIsOpen(false);
    }
    if (setActiveDropdown) {
      setActiveDropdown(null);
    }
  };

  const toggleMenu = () => {
  if (setActiveDropdown) {
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
            className="absolute top-full left-0 mt-2 w-72 min-w-[16rem] rounded-lg bg-white shadow-xl ring-1 ring-black/10 focus:outline-none z-50" // Make full width on mobile
          >
            <div className="p-2 space-y-2">
              {services.map((service) => (
                <div
                  key={service.href}
                  className="relative group"
                  onMouseEnter={!isMobile && service.children ? () => {
                    if (nestedCloseTimer.current) {
                      window.clearTimeout(nestedCloseTimer.current);
                      nestedCloseTimer.current = null;
                    }
                    setNestedOpen(service.href);
                  } : undefined}
                  onMouseLeave={!isMobile && service.children ? () => {
                    // delay closing slightly to allow pointer to reach nested panel
                    nestedCloseTimer.current = window.setTimeout(() => {
                      setNestedOpen(prev => prev === service.href ? null : prev);
                      nestedCloseTimer.current = null;
                    }, 150);
                  } : undefined}
                >
                  {/* Desktop: if there are children, show a Link for the parent and render nested menu to the right on hover */}
                  {!isMobile && service.children ? (
                    <>
                      <Link
                        href={service.href}
                        onClick={handleLinkClick}
                        className="flex flex-col px-4 py-2 text-sm rounded-md hover:bg-primary/80 transition-colors text-gray-900 hover:text-white"
                      >
                        <span className="font-medium">{service.name}</span>
                        <span className="text-xs mt-0.5">{service.Description}</span>
                      </Link>

                      {nestedOpen === service.href && (
                        <div
                          onMouseEnter={() => {
                            if (nestedCloseTimer.current) {
                              window.clearTimeout(nestedCloseTimer.current);
                              nestedCloseTimer.current = null;
                            }
                            setNestedOpen(service.href);
                          }}
                          onMouseLeave={() => {
                            nestedCloseTimer.current = window.setTimeout(() => {
                              setNestedOpen(prev => prev === service.href ? null : prev);
                              nestedCloseTimer.current = null;
                            }, 150);
                          }}
                          className="absolute right-full top-0 ml-3 w-64 min-w-[20rem] rounded-lg bg-white shadow-2xl ring-1 ring-black/10 py-3 z-60 border border-gray-100"
                        >
                          <div className="px-3 pb-2">
                            <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{service.name}</div>
                          </div>
                          <div className="divide-y divide-gray-100">
                            {service.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={handleLinkClick}
                                className="flex items-start gap-3 px-4 py-3 text-sm text-gray-900 hover:bg-primary/90 hover:text-white transition-colors"
                              >
                                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-primary/20 ring-1 ring-primary/30" aria-hidden="true" />
                                <div className="flex-1">
                                  <div className="font-medium">{child.name}</div>
                                  <div className="text-xs mt-0.5 text-gray-500">{child.Description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : null}

                  {/* Mobile: render expandable item when children exist */}
                  {isMobile && service.children ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => setExpandedService(prev => prev === service.href ? null : service.href)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm rounded-md hover:bg-primary/80 transition-colors text-gray-900 hover:text-white"
                      >
                        <div className="flex flex-col text-left">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-xs mt-0.5">{service.Description}</span>
                        </div>
                        <ChevronDown className={`transition-transform ${expandedService === service.href ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedService === service.href && (
                        <div className="pl-4 pr-2 pt-1 pb-2 space-y-1">
                          {service.children.map(child => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={handleLinkClick}
                              className="block px-3 py-2 text-sm rounded-md text-gray-900 hover:bg-primary/90 hover:text-white transition-colors"
                            >
                              <div className="font-medium">{child.name}</div>
                              <div className="text-xs mt-0.5 text-gray-500">{child.Description}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : null}

                  {/* Default case (no children) - render a simple Link for both mobile and desktop */}
                  {!service.children && (
                    <Link
                      href={service.href}
                      onClick={handleLinkClick}
                      className="flex flex-col px-4 py-2 text-sm rounded-md hover:bg-primary/80 transition-colors text-gray-900 hover:text-white"
                    >
                      <span className="font-medium">{service.name}</span>
                      <span className="text-xs mt-0.5">{service.Description}</span>
                    </Link>
                  )}
                </div>
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
