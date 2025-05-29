'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, ChevronRight, ExternalLink, ArrowDown, Users, Sparkles, GraduationCap, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
export default function About() {
  // State for tab selection in stats section
  const [activeTab, setActiveTab] = useState('students');
  
  const team = [
    {
      name: "Nitin Gupta",
      role: "UI/UX Designer & Frontend Developer",
      image: "https://avatars.githubusercontent.com/u/140688515?s=400&u=2c964b96bb84104da1515a863e6425e70063d854&v=4",
      github: "https://github.com/nitin14gupta",
      bio: "Passionate about creating beautiful and intuitive user experiences. Specializes in modern web design and frontend development."
    },
    {
      name: "Fareed Sayyed",
      role: "ML and Backend Developer",
      image: "/Fareed.jpg",
      github: "https://github.com/Fareed95",
      bio: "Expert in machine learning and backend development. Focuses on building scalable and efficient AI solutions."
    },
    {
      name: "Rehbar Khan",
      role: "Frontend Developer",
      image: "https://avatars.githubusercontent.com/u/136853370?v=4",
      github: "https://github.com/thisisarsh1",
      bio: "Skilled in modern frontend technologies and responsive design. Creates engaging and performant web applications."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries in AI education through cutting-edge technology and methodologies.",
      icon: "🚀",
      color: "from-ai-blue-500/20 to-ai-purple-500/20"
    },
    {
      title: "Excellence",
      description: "Committed to delivering the highest quality learning experiences and outcomes.",
      icon: "⭐",
      color: "from-ai-yellow-500/20 to-ai-orange-500/20"
    },
    {
      title: "Accessibility",
      description: "Making quality education accessible to everyone, regardless of background.",
      icon: "🌍",
      color: "from-ai-teal-500/20 to-ai-green-500/20"
    },
    {
      title: "Community",
      description: "Building a supportive learning community where everyone can thrive.",
      icon: "🤝",
      color: "from-ai-purple-500/20 to-ai-pink-500/20"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Platform Launch",
      description: "Successfully launched Ape.AI with initial course offerings.",
      icon: <Sparkles className="w-6 h-6 text-ai-blue-400" />
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded course catalog and reached 10,000+ active learners.",
      icon: <Users className="w-6 h-6 text-ai-teal-400" />
    },
    {
      year: "2025",
      title: "Innovation",
      description: "Introduced AI-powered learning paths and personalized recommendations.",
      icon: <GraduationCap className="w-6 h-6 text-ai-purple-400" />
    },
    {
      year: "2026",
      title: "Global Recognition",
      description: "Recognized as a leading platform for AI education worldwide.",
      icon: <Award className="w-6 h-6 text-ai-yellow-400" />
    }
  ];

  // Stats for the interactive stats section
  const stats = {
    students: { count: "50,000+", label: "Active Students" },
    courses: { count: "120+", label: "AI Courses" },
    countries: { count: "75+", label: "Countries" },
    rating: { count: "4.8/5", label: "Average Rating" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Enhanced particle effect for hero section with more variety
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 0.5,
    duration: Math.random() * 15 + 8,
    color: [
      'rgba(59, 130, 246, 0.6)', // blue
      'rgba(45, 212, 191, 0.6)', // teal
      'rgba(168, 85, 247, 0.6)', // purple
      'rgba(255, 255, 255, 0.4)' // white
    ][Math.floor(Math.random() * 4)]
  }));

  return (
    <>
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background elements */}
      <Navbar />
      <div className="fixed inset-0 bg-gradient-to-b from-black via-ai-blue-900/5 to-black -z-10" />
      <div className="fixed inset-0 bg-grid-small-white/[0.05] -z-10" />
      <div className="fixed inset-0 bg-dot-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] -z-10" />
      
      {/* Animated gradient blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="fixed top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ai-blue-500/5 blur-[150px] -z-5"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1],
          rotate: [0, -15, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="fixed bottom-0 right-1/4 transform translate-x-1/2 w-[500px] h-[500px] rounded-full bg-ai-teal-500/5 blur-[130px] -z-5"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          scale: [1, 1.1, 1],
          rotate: [0, 20, 0]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="fixed top-3/4 right-1/3 transform translate-x-1/2 w-[400px] h-[400px] rounded-full bg-ai-purple-500/5 blur-[120px] -z-5"
      />

      {/* Hero Section - Enhanced with better animations and layout */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto z-10">
          {/* Floating particles */}
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full opacity-70"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
              }}
              animate={{
                x: [
                  Math.random() * 120 - 60,
                  Math.random() * 120 - 60,
                  Math.random() * 120 - 60
                ],
                y: [
                  Math.random() * 120 - 60,
                  Math.random() * 120 - 60,
                  Math.random() * 120 - 60
                ],
                scale: [1, particle.size > 2 ? 1.5 : 1.2, 1],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-left"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm text-white mb-6 border border-white/20 shadow-lg shadow-ai-teal-900/20"
              >
                <span className="flex items-center">
                  <span className="relative">
                    <span className="absolute inset-0 rounded-full bg-ai-teal-400/30 animate-ping"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-ai-teal-400 mr-2.5 relative"></span>
                  </span>
                  <span className="font-sans tracking-wide">Transforming AI Education</span>
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 font-heading leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="block mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-300"
                >
                  About
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="relative inline-block"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-400 via-ai-teal-400 to-ai-blue-300">
                    Crodlin
                  </span>
                  <motion.div 
                    className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-ai-blue-500 via-ai-teal-500 to-ai-blue-400 rounded-full" 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                  <motion.div 
                    className="absolute -bottom-3 left-0 w-full h-1.5 blur-sm bg-gradient-to-r from-ai-blue-500 via-ai-teal-500 to-ai-blue-400 rounded-full" 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.6 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed mb-10 font-sans"
              >
                <span className="text-white font-medium">Empowering businesses worldwide</span> through innovative design and development solutions. 
                We transform your digital presence with cutting-edge technology and expert craftsmanship to create experiences that resonate and perform.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-5 mb-14"
              >
                <motion.a
                  href="#mission"
                  whileHover={{ scale: 1.04, y: -3, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-ai-blue-500 to-ai-teal-500 text-white font-medium flex items-center justify-center transition-all duration-300 shadow-lg shadow-ai-blue-900/20 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ai-teal-500 to-ai-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center z-10">
                    Our Mission
                    <ChevronRight className="w-5 h-5 ml-1.5 group-hover:ml-2.5 transition-all duration-300" />
                  </span>
                </motion.a>
                
                <motion.a
                  href="#team"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:border-white/30 group"
                >
                  <span className="flex items-center">
                    Meet The Team
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 ml-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>
              
              {/* Interactive Stats Section */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex space-x-2 mb-4">
                  {Object.keys(stats).map((statKey) => (
                    <button
                      key={statKey}
                      onClick={() => setActiveTab(statKey)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                        activeTab === statKey 
                          ? 'bg-gradient-to-r from-ai-blue-500/30 to-ai-teal-500/30 text-white' 
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {statKey.charAt(0).toUpperCase() + statKey.slice(1)}
                    </button>
                  ))}
                </div>
                
                <motion.div
                  key={activeTab}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center p-2"
                >
                  <span className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-400 to-ai-teal-400">
                    {stats[activeTab].count}
                  </span>
                  <span className="text-neutral-300 text-sm">
                    {stats[activeTab].label}
                  </span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* 3D Interactive Element */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/20 to-ai-teal-500/20 rounded-2xl" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Orbiting elements */}
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center"
                        style={{
                          left: "calc(50% - 24px)",
                          top: "calc(50% - 24px)",
                        }}
                        animate={{
                          x: [
                            Math.cos((i * Math.PI) / 2) * 100,
                            Math.cos((i * Math.PI) / 2 + Math.PI / 4) * 100,
                            Math.cos((i * Math.PI) / 2 + Math.PI / 2) * 100,
                            Math.cos((i * Math.PI) / 2 + (3 * Math.PI) / 4) * 100,
                            Math.cos((i * Math.PI) / 2 + Math.PI) * 100,
                            Math.cos((i * Math.PI) / 2 + (5 * Math.PI) / 4) * 100,
                            Math.cos((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 100,
                            Math.cos((i * Math.PI) / 2 + (7 * Math.PI) / 4) * 100,
                            Math.cos((i * Math.PI) / 2 + 2 * Math.PI) * 100,
                          ],
                          y: [
                            Math.sin((i * Math.PI) / 2) * 100,
                            Math.sin((i * Math.PI) / 2 + Math.PI / 4) * 100,
                            Math.sin((i * Math.PI) / 2 + Math.PI / 2) * 100,
                            Math.sin((i * Math.PI) / 2 + (3 * Math.PI) / 4) * 100,
                            Math.sin((i * Math.PI) / 2 + Math.PI) * 100,
                            Math.sin((i * Math.PI) / 2 + (5 * Math.PI) / 4) * 100,
                            Math.sin((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 100,
                            Math.sin((i * Math.PI) / 2 + (7 * Math.PI) / 4) * 100,
                            Math.sin((i * Math.PI) / 2 + 2 * Math.PI) * 100,
                          ],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {i === 1 && <GraduationCap className="w-6 h-6 text-ai-blue-400" />}
                        {i === 2 && <Users className="w-6 h-6 text-ai-teal-400" />}
                        {i === 3 && <Sparkles className="w-6 h-6 text-ai-purple-400" />}
                        {i === 4 && <Award className="w-6 h-6 text-ai-yellow-400" />}
                      </motion.div>
                    ))}
                    
                    {/* Center element */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-r from-ai-blue-500/30 to-ai-teal-500/30 backdrop-blur-md flex items-center justify-center border border-white/20"
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="/logo.png"
                        alt="Ape.AI Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-neutral-400 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5 text-ai-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-24 px-4 sm:px-6 lg:px-8 relative"
        id="mission"
      >
        {/* Decorative elements */}
        <div className="absolute left-0 top-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-0" />
        <div className="absolute left-0 bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-0" />
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-white/10 overflow-hidden shadow-2xl shadow-ai-blue-900/10"
          >
            {/* Enhanced ambient glow effects */}
            <motion.div 
              animate={{
                opacity: [0.05, 0.1, 0.05],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -top-40 -left-40 w-96 h-96 bg-ai-blue-500/10 rounded-full blur-[120px]" 
            />
            <motion.div 
              animate={{
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.15, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className="absolute -bottom-40 -right-40 w-96 h-96 bg-ai-teal-500/10 rounded-full blur-[120px]" 
            />
            
            {/* Enhanced gradient border with animation */}
            <motion.div 
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(45, 212, 191, 0.05) 100%)",
                  "linear-gradient(180deg, rgba(59, 130, 246, 0.07) 0%, rgba(45, 212, 191, 0.07) 100%)",
                  "linear-gradient(270deg, rgba(59, 130, 246, 0.05) 0%, rgba(45, 212, 191, 0.05) 100%)",
                  "linear-gradient(0deg, rgba(59, 130, 246, 0.07) 0%, rgba(45, 212, 191, 0.07) 100%)",
                  "linear-gradient(90deg, rgba(59, 130, 246, 0.05) 0%, rgba(45, 212, 191, 0.05) 100%)"
                ]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-2xl border border-white/10" 
            />
            
            <div className="relative">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="flex items-center mb-10"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mr-5 p-4 rounded-xl bg-gradient-to-r from-ai-blue-500/20 to-ai-teal-500/20 backdrop-blur-md border border-white/10 shadow-lg shadow-ai-blue-900/10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-xl border border-white/10 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 bg-ai-blue-500/50 rounded-full" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-ai-teal-500/50 rounded-full" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-ai-purple-500/50 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-ai-yellow-500/50 rounded-full" />
                  </motion.div>
                  <Sparkles className="w-7 h-7 text-ai-blue-400 relative z-10" />
                </motion.div>
                <div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    className="text-sm font-medium text-ai-blue-400 mb-1 uppercase tracking-wider"
                  >
                    Why we exist
                  </motion.div>
                  <motion.h2 
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                    }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-ai-blue-200 to-ai-teal-200"
                  >
                    Our Mission
                  </motion.h2>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } }
                  }}
                >
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
                    }}
                    className="text-xl text-white leading-relaxed mb-8 font-sans border-l-4 border-ai-blue-500/50 pl-6 py-2"
                  >
                    At Crodlin, we're on a mission to <span className="text-ai-blue-400 font-medium">transform digital experiences</span> through innovative design and cutting-edge technology.
                  </motion.p>
                  
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } }
                    }}
                    className="text-lg text-neutral-300 leading-relaxed mb-6 font-sans"
                  >
                    We believe that every business deserves a powerful digital presence that not only looks stunning but delivers measurable results. Our team combines creative expertise with technical excellence to craft websites and applications that stand out in today's competitive landscape.
                  </motion.p>
                  
                  <motion.p 
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
                    }}
                    className="text-lg text-neutral-300 leading-relaxed font-sans"
                  >
                    Through continuous innovation and a commitment to excellence, we're helping businesses of all sizes achieve their digital goals and create meaningful connections with their audiences.
                  </motion.p>
                  
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }
                    }}
                    className="mt-8 flex items-center"
                  >
                    <div className="h-px flex-grow bg-gradient-to-r from-ai-blue-500/50 to-transparent"></div>
                    <span className="px-4 text-ai-blue-400 font-medium">Our Promise</span>
                    <div className="h-px flex-grow bg-gradient-to-l from-ai-teal-500/50 to-transparent"></div>
                  </motion.div>
                </motion.div>
                
                <div className="relative">
                  {/* 3D floating blocks */}
                  <div className="relative h-64 w-full">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        className={`absolute rounded-xl backdrop-blur-md border border-white/10 shadow-lg flex items-center p-4 ${
                          i % 2 === 0 
                            ? 'bg-gradient-to-r from-ai-blue-500/10 to-ai-blue-500/5' 
                            : 'bg-gradient-to-r from-ai-teal-500/10 to-ai-teal-500/5'
                        }`}
                        style={{
                          width: `${100 - i * 10}%`,
                          height: `${50 - i * 4}px`,
                          left: `${i * 5}%`,
                          top: `${i * 40}px`,
                          zIndex: 5 - i,
                        }}
                        animate={{
                          y: [0, 10, 0],
                          rotate: [0, i % 2 === 0 ? 1 : -1, 0],
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                      >
                        <motion.div 
                          className="absolute inset-0 opacity-0 bg-gradient-to-r from-white/5 to-transparent"
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: i * 0.3,
                          }}
                        />
                        
                        <div className="flex items-center gap-3">
                          {i === 1 && (
                            <>
                              <GraduationCap className="w-5 h-5 text-ai-blue-400" />
                              <span className="text-white font-medium">Personalized Learning</span>
                            </>
                          )}
                          {i === 2 && (
                            <>
                              <Users className="w-5 h-5 text-ai-teal-400" />
                              <span className="text-white font-medium">Expert Guidance</span>
                            </>
                          )}
                          {i === 3 && (
                            <>
                              <Award className="w-5 h-5 text-ai-yellow-400" />
                              <span className="text-white font-medium">Quality Content</span>
                            </>
                          )}
                          {i === 4 && (
                            <>
                              <Sparkles className="w-5 h-5 text-ai-purple-400" />
                              <span className="text-white font-medium">Innovative Approach</span>
                            </>
                          )}
                          {i === 5 && (
                            <>
                              <Mail className="w-5 h-5 text-ai-pink-400" />
                              <span className="text-white font-medium">Global Accessibility</span>
                            </>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm text-white mb-6 border border-white/10">
              <span className="w-2 h-2 bg-ai-teal-400 rounded-full mr-2"></span>
              <span className="font-sans">What Drives Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-500 to-ai-teal-500 font-heading">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-300 font-sans">
              These principles guide everything we do, from product development to community engagement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group h-full"
              >
                {/* 3D card effect with gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative h-full flex flex-col bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  {/* Icon container with floating animation */}
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl mb-6 border border-white/10 relative"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {/* Floating particles around icon */}
                    <motion.div 
                      className="absolute w-2 h-2 rounded-full bg-white/30"
                      animate={{
                        x: [0, 10, -10, 0],
                        y: [0, -10, 10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      style={{ left: "50%", top: "20%" }}
                    />
                    
                    <motion.div 
                      className="absolute w-1 h-1 rounded-full bg-white/50"
                      animate={{
                        x: [0, -10, 10, 0],
                        y: [0, 10, -10, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      style={{ right: "30%", bottom: "30%" }}
                    />
                    
                    {value.icon}
                    
                    {/* Shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 5,
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-ai-blue-300 transition-colors duration-300 font-heading">
                    {value.title}
                  </h3>
                  
                  <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 font-sans">
                    {value.description}
                  </p>
                  
                  {/* Learn more button that appears on hover */}
                  <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-ai-blue-400 hover:text-ai-blue-300 text-sm flex items-center transition-colors font-sans">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
        id="team"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm text-white mb-6 border border-white/10">
              <span className="w-2 h-2 bg-ai-purple-400 rounded-full mr-2"></span>
              <span className="font-sans">Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-500 to-ai-purple-500 font-heading">
              Meet The Minds Behind Ape.AI
            </h2>
            <p className="text-lg text-neutral-300 font-sans">
              Passionate experts dedicated to revolutionizing AI education and empowering learners worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="relative group"
              >
                {/* Ambient glow effect */}
                <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-r from-ai-blue-500/5 via-ai-purple-500/5 to-ai-teal-500/5 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:translate-y-[-8px]">
                  {/* Curved header background */}
                  <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-r from-ai-blue-500/20 via-ai-purple-500/20 to-ai-teal-500/20" />
                  
                  <div className="relative pt-12 px-6 pb-6">
                    {/* Team member image */}
                    <div className="relative flex justify-center">
                      <div className="absolute -top-2 w-28 h-28 bg-gradient-to-r from-ai-blue-500/30 to-ai-teal-500/30 rounded-full blur-xl opacity-60" />
                      <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-black/30 ring-offset-4 ring-offset-black/50 group-hover:ring-ai-blue-500/30 transition-all duration-300">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 96px, 96px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-ai-blue-300 transition-colors duration-300 font-heading">
                        {member.name}
                      </h3>
                      <p className="text-ai-teal-400 mb-4">{member.role}</p>
                      
                      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-ai-blue-500/50 to-transparent mx-auto mb-4"></div>
                      
                      <p className="text-neutral-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 font-sans">
                        {member.bio}
                      </p>
                      
                      <div className="flex justify-center space-x-4">
                        <motion.a 
                          whileHover={{ y: -3, scale: 1.1 }}
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/icon"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-purple-500/40 rounded-full opacity-0 group-hover/icon:opacity-100 blur-md transition-opacity" />
                          <Github className="w-5 h-5 text-neutral-300 group-hover/icon:text-white relative z-10" />
                        </motion.a>
                        
                        <motion.a 
                          whileHover={{ y: -3, scale: 1.1 }}
                          href="#"
                          className="relative p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/icon"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-purple-500/40 rounded-full opacity-0 group-hover/icon:opacity-100 blur-md transition-opacity" />
                          <Linkedin className="w-5 h-5 text-neutral-300 group-hover/icon:text-white relative z-10" />
                        </motion.a>
                        
                        <motion.a 
                          whileHover={{ y: -3, scale: 1.1 }}
                          href="#"
                          className="relative p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors group/icon"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/40 to-ai-purple-500/40 rounded-full opacity-0 group-hover/icon:opacity-100 blur-md transition-opacity" />
                          <Twitter className="w-5 h-5 text-neutral-300 group-hover/icon:text-white relative z-10" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Milestones Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm text-white mb-6 border border-white/10">
              <span className="w-2 h-2 bg-ai-yellow-400 rounded-full mr-2"></span>
              Our Progress
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ai-blue-500 to-ai-yellow-500">
              Milestones on Our Journey
            </h2>
            <p className="text-lg text-neutral-300">
              From launch to global recognition, follow our path of innovation and growth.
            </p>
          </motion.div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Glowing timeline track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-ai-blue-500/50 via-ai-teal-500/50 to-ai-purple-500/50 rounded-full blur-[1px]" />
            
            {/* Solid timeline track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-ai-blue-500/80 via-ai-teal-500/80 to-ai-purple-500/80" />
            
            {/* Milestones */}
            <div className="relative space-y-20">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.7,
                        delay: index * 0.2 
                      }
                    }
                  }}
                  className={`relative flex flex-col ${
                    index % 2 === 0 
                      ? 'md:flex-row items-center' 
                      : 'md:flex-row-reverse items-center'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div 
                      className="relative w-10 h-10 rounded-full bg-black border-2 border-ai-blue-500 flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-ai-blue-500/30 to-ai-teal-500/30 animate-pulse" />
                      {milestone.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 
                      ? 'md:pr-16 text-right' 
                      : 'md:pl-16 text-left'
                  } mb-10 md:mb-0`}>
                    <motion.div 
                      className="relative bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                      whileHover={{ 
                        y: -5,
                        boxShadow: "0 10px 30px -10px rgba(2, 132, 199, 0.2)" 
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-ai-blue-500/[0.03] to-ai-teal-500/[0.03] rounded-xl" />
                      
                      <div className="relative">
                        <div className="px-3 py-1 rounded-full bg-white/10 inline-block text-ai-blue-400 font-semibold mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                        <p className="text-neutral-400">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for the right/left side */}
                  <div className="w-full md:w-[calc(50%-3rem)]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* Contact Section */}
    </div>
     
      <ContactSection/>
      <Footer/>
      </>
  );
} 