"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import img from '../../public/logo.png';
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Client-side only code
  useEffect(() => {
    setMounted(true);
  }, []);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    setIsHomePage(path === '/');
  }, []);
  
  const toggleMobileMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Blog", href: "/Blog" },
    { label: "Contact us", href: "/Contact" },
  ];

  const getNavbarStyles = () => {
    if (isHomePage) {
      return isScrolled
        ? 'bg-neutral-900/80 backdrop-blur-xl border-neutral-800/70'
        : 'bg-neutral-900/40 backdrop-blur-md border-neutral-800/30';
    } else {
      return isScrolled
        ? 'bg-neutral-900/80 backdrop-blur-xl border-neutral-800/70'
        : 'bg-neutral-900/50 backdrop-blur-xl border-neutral-800/50';
    }
  };

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      maxHeight: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      maxHeight: 1000,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  };

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };
 
  if (!mounted) {
    // Avoid rendering animations before client-side hydration
    return null;
  }

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-1 sm:pt-2' : 'pt-2 sm:pt-4'}`}
    >
      <div className="mx-2 sm:mx-4 mt-2 sm:mt-4">
        <div className={`relative ${getNavbarStyles()} rounded-xl sm:rounded-2xl shadow-2xl border transition-all duration-300`}>
          {/* Gradient border top */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ai-blue-500/50 to-transparent rounded-t-xl sm:rounded-t-2xl" />
          
          {/* Additional ambient glow effect for non-logged in users on landing page */}
          {isHomePage && (
            <div className="absolute -inset-1 bg-gradient-to-r from-ai-blue-500/0 via-ai-blue-500/10 to-ai-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          )}

          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 relative group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-8 w-8 sm:h-10 sm:w-10 overflow-hidden relative"
                >
                  <img src={img.src} alt="Logo" className="h-full w-full object-cover" />
                  {/* Glow effect on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/20 via-ai-teal-500/20 to-ai-purple-500/20 blur-md z-10 rounded-lg"
                  />
                </motion.div>
                {/* Logo pulse effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-ai-blue-500/0 via-ai-blue-500/10 to-ai-blue-500/0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {menuItems.map((item, index) => {
                  // Check if this menu item corresponds to the current path
                  const isActive = 
                    (item.href === '/' && window.location.pathname === '/') || 
                    (item.href !== '/' && window.location.pathname.startsWith(item.href));
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      custom={index}
                    >
                      <Link href={item.href}>
                        <motion.span
                          whileHover={{ y: -2 }}
                          className={`relative text-sm ${isActive ? 'text-white font-medium' : 'text-neutral-300'} hover:text-white transition-colors group font-medium`}
                        >
                          {item.label}
                          <span 
                            className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-ai-blue-500 to-ai-teal-500 transform ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`} 
                          />
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMobileMenu}
                  className="p-1.5 sm:p-2 bg-white/5 hover:bg-white/10 rounded-lg text-neutral-300 hover:text-white transition-colors border border-white/10 hover:border-white/20"
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
              ref={mobileMenuRef}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="py-3 sm:py-4 border-t border-neutral-800/50 mt-2 space-y-2">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={mobileMenuItemVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        whileHover={{ x: 4 }}
                        className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-white/10"
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Gradient border bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-ai-teal-500/50 to-transparent rounded-b-xl sm:rounded-b-2xl" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;