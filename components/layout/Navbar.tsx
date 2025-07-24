"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import BlogSubmenu from "./BlogSubmenu";
import ServicesSubmenu from "./ServicesSubmenu";

interface NavComponentProps {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
  activeDropdown?: DropdownType;
  setActiveDropdown?: React.Dispatch<React.SetStateAction<DropdownType>>;
}

type DropdownType = "blog" | "services" | null;

type NavLink =
  | {
      href: string;
      label: string;
      dropdown?: never;
      type?: never;
      component?: never;
    }
  | {
      type: "component";
      component: React.ComponentType<NavComponentProps>;
      href?: never;
      label?: never;
      dropdown?: never;
    };

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { type: "component", component: ServicesSubmenu },
  { type: "component", component: BlogSubmenu },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
  // { href: '/auth/login', label: 'Login' },
  // { href: '/auth/signup', label: 'Sign Up' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const isDropdownActivate = activeDropdown === "blog";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) =>
            link.type === "component" ? (
              <div
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                key={index}
                className={cn(scrolled ? "text-gray-700" : "text-white")}
              >
                <link.component
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                />
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors",
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-primary"
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
            className={cn("p-2", scrolled ? "text-gray-800" : "text-white")}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            {" "}
            <div className="container mx-auto py-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ }}
                >
                  {link.type === "component" ? (
                    <div className="py-2 text-gray-700">
                      <link.component isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
