"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const categories = [
  {
    name: "Artificail Intelligence",
    href: "/blog/rise-of-ai-in-software-development",
    description: "Latest in AI chips and hardware innovations",
  },
  {
    name: "Web Development",
    href: "/blog/nextjs-14-new-era-web-development",
    description: "Next.js, React, and modern web frameworks",
  },
  {
    name: "Mobile Development",
    href: "/blog/mobile-development-trends-2024",
    description: "iOS, Android, and cross-platform development",
  },
  {
    name: "Cloud & DevOps",
    href: "/blog/devops-evolution-chatops-ai",
    description: "Cloud infrastructure and DevOps practices",
  },
  {
    name: "Computing & Quantum",
    href: "/blog/quantum-computing-preparing-tomorrow",
    description: "AI/ML breakthroughs and applications",
  },
];

type DropdownType = "blog" | "services" | null;

type BlogSubmenuProps = {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  activeDropdown?: DropdownType;
  setActiveDropdown?: React.Dispatch<React.SetStateAction<DropdownType>>;
};

const BlogSubmenu: React.FC<BlogSubmenuProps> = ({
  isOpen,
  setIsOpen,
  activeDropdown,
  setActiveDropdown,
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
  const toggleMenu = () => {
  if (setActiveDropdown) {
    // If blog is open, close it and open services
    setActiveDropdown(prev =>
      prev === "services" ? "blog" : (open ? null : "services")
    );
  }
  setOpen(!open);
};
  // const toggleMenu = () => {
  //   setOpen(!open);
  //   if (setActiveDropdown) {
  //     setActiveDropdown(null);
  //   }
  // };
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768); // <768px = mobile
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={!isMobile ? () => setOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => setOpen(false) : undefined}
    >
      <button
        className="flex items-center space-x-1 font-medium transition-colors"
        aria-expanded={open}
        onClick={() => isMobile ? toggleMenu() : null}
        // onClick={toggleMenu}
      >
        <span>Blog</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 rounded-md bg-white shadow-lg z-50"
          >
            <div className="p-2 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  onClick={handleLinkClick}
                  className="flex flex-col px-4 py-2 text-sm rounded-md  hover:bg-primary/80 transition-colors  text-gray-900 hover:text-white"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs mt-0.5">{category.description}</span>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="flex items-center px-4 py-2 text-sm text-primary hover:text-white hover:bg-primary/90 rounded-md transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogSubmenu;
