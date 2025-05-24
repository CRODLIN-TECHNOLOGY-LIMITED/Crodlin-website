"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from 'next-auth/react';
import { useUserContext } from '@/app/context/Userinfo';
import { motion } from "framer-motion";
import img from '../../public/logo.png';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useRouter } from "next/navigation";
import GetUserInfo from "./GetUserInfo";

function Navbar() {
  const { data: session } = useSession();
  const { contextisLoggedIn, contextsetIsLoggedIn, contextsetName, contextsetEmail,contextorganisation,contextsetorganisation } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const router = useRouter();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const userDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Client-side only code
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (session) {
      contextsetIsLoggedIn(true);
      contextsetEmail(session.user.email);
      contextsetName(session.user.name);
    }
  }, [session]);

  // Handle clicks outside the user dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

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
  
  const authMenuItems = [
    { label: "Home", href: "/Main" },
    { label: "About", href: "/About" },
    { label: "Community", href: "/ChatRoom/django" },
  ];
  
  const nonAuthMenuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Blog", href: "/Blog" },
  ];
  
  const menuItems = contextisLoggedIn ? authMenuItems : nonAuthMenuItems;

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

  const Logout = () => {
    localStorage.setItem('authToken', "-");
    contextsetIsLoggedIn(false);
    contextsetEmail('');
    contextsetName('');
    contextsetorganisation([]);
    router.push('/');
    setShowUserDropdown(false);
    setIsOpen(false);
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

  const userDropdownVariants = {
    closed: { 
      opacity: 0, 
      y: -10,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: { 
      opacity: 1, 
      y: 0,
      height: 'auto',
      scale: 1,
      transition: {
        duration: 0.2
      }
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
      <GetUserInfo />
      <div className="mx-2 sm:mx-4 mt-2 sm:mt-4">
        <div className={`relative ${getNavbarStyles()} rounded-xl sm:rounded-2xl shadow-2xl border transition-all duration-300`}>
          {/* Gradient border top */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-ai-blue-500/50 to-transparent rounded-t-xl sm:rounded-t-2xl" />
          
          {/* Additional ambient glow effect for non-logged in users on landing page */}
          {!contextisLoggedIn && isHomePage && (
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

              {/* Auth Buttons */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {contextisLoggedIn ? (
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Logout button - Only visible on desktop */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => signOut() && Logout()}
                      className="hidden md:block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white rounded-xl text-xs sm:text-sm transition-all duration-200 border border-white/10 hover:border-white/20 backdrop-blur-md relative group overflow-hidden"
                    >
                      <span className="relative z-10">Logout</span>
                      {/* Hover gradient effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-ai-blue-900/30 to-ai-teal-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </motion.button>

                    {/* User Profile - Desktop and Mobile */}
                    <div className="relative" ref={userDropdownRef}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        className="cursor-pointer relative"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-ai-blue-500/30 to-ai-teal-500/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          <AnimatedTooltip
                            items={[{
                              id: 1,
                              name: session?.user?.name || "User",
                              designation: contextorganisation.length!=0 ? "Organization" : "Member",
                              image: session?.user?.image || "/default-avatar.png",
                            }]}
                          />
                        </div>
                      </motion.div>
                      
                      {/* User dropdown menu */}
                      <motion.div 
                        initial="closed"
                        animate={showUserDropdown ? "open" : "closed"}
                        variants={userDropdownVariants}
                        className="absolute right-0 mt-2 w-48 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden z-50"
                      >
                        <div className="py-1">
                          <div className="px-4 py-2 border-b border-white/10">
                            <p className="text-sm font-medium text-white truncate">{session?.user?.name || "User"}</p>
                            <p className="text-xs text-neutral-400 truncate">{session?.user?.email}</p>
                          </div>
                          
                          <button 
                            onClick={() => {
                              setShowUserDropdown(false);
                              contextorganisation.length!=0 
                                ? router.push("/organization/dashboard") 
                                : router.push(`/UserInfo/${session?.user?.email}`);
                            }}
                            className="w-full px-4 py-2 text-sm text-left text-neutral-300 hover:bg-white/5 hover:text-white transition-all"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                              </svg>
                              Profile
                            </span>
                          </button>
                          
                          <button 
                            onClick={() => signOut() && Logout()} 
                            className="w-full px-4 py-2 text-sm text-left text-rose-400 hover:bg-rose-500/10 transition-all"
                          >
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                              </svg>
                              Logout
                            </span>
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Sign Up Button - Hidden on smallest screens */}
                    <Link href="/Signup" className="hidden xs:block">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-2 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center">
                          Sign Up
                          <svg 
                            className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 transition-transform"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/0 via-ai-blue-500/10 to-ai-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.button>
                    </Link>
                    
                    {/* Login Button */}
                    <Link href="/Login">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0 0 20px rgba(10, 132, 255, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-ai-blue-600 to-ai-teal-600 hover:from-ai-blue-500 hover:to-ai-teal-500 text-white rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 shadow-lg shadow-ai-blue-900/20 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center">
                          Login
                          <svg 
                            className="w-3 h-3 sm:w-4 sm:h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-1 transition-transform"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                        {/* Animated gradient shine effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        {/* Additional glow effect on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-ai-blue-500/0 via-ai-blue-500/10 to-ai-blue-500/0 blur-md" />
                      </motion.button>
                    </Link>
                  </div>
                )}

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
                
                {/* Show auth buttons in mobile menu */}
                {!contextisLoggedIn ? (
                  <>
                    <motion.div variants={mobileMenuItemVariants}>
                      <Link href="/Login" onClick={() => setIsOpen(false)}>
                        <motion.span
                          whileHover={{ x: 4 }}
                          className="block px-4 py-2 text-sm text-white bg-gradient-to-r from-ai-blue-600/80 to-ai-teal-600/80 hover:from-ai-blue-500 hover:to-ai-teal-500 rounded-lg transition-all duration-200 font-medium"
                        >
                          Login
                        </motion.span>
                      </Link>
                    </motion.div>
                    
                    <motion.div variants={mobileMenuItemVariants}>
                      <Link href="/Signup" onClick={() => setIsOpen(false)}>
                        <motion.span
                          whileHover={{ x: 4 }}
                          className="block px-4 py-2 text-sm text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20 font-medium"
                        >
                          Sign Up
                        </motion.span>
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Simplified user controls for mobile - Removed profile photo, name, and email */}
                    <motion.div variants={mobileMenuItemVariants} className="px-4 py-1 border-t border-neutral-800/30 mt-1">
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={() => {
                          setIsOpen(false);
                          contextorganisation.length!=0 
                            ? router.push("/organization/dashboard") 
                            : router.push(`/UserInfo/${session?.user?.email}`);
                        }}
                        className="w-full mt-1 flex items-center text-sm text-white py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        View Profile
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={() => signOut() && Logout()}
                        className="w-full mt-2 flex items-center text-sm text-rose-400 hover:text-rose-300 py-2 px-3 rounded-lg hover:bg-rose-500/10 transition-all border border-transparent hover:border-rose-500/20"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                        </svg>
                        Logout
                      </motion.button>
                    </motion.div>
                  </>
                )}
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