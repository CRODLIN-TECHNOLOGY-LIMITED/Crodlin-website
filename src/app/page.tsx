"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/Features";
import  ScrollAnimatedSection from "@/components/ScrollAnimatedSection";
import LearningPathSection from "@/components/Learningpath";
import TestimonialsSection from "@/components/Testimonials";
import StatsSection from "@/components/stat";
import CTASection from "@/components/cta";
import TechStackSection from "@/components/techstack";
// Hero section with 3D mesh animation


// Tech stack section with infinite scroll

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Smooth scroll setup
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />
     
      <HeroSection />
      <FeaturesSection />
      <LearningPathSection />
      {/* <StatsSection/> */}
      <TestimonialsSection />
      <CTASection />
      <TechStackSection />
      <ContactSection />

      <Footer />

      {/* Skeleton loader for initial loading state */}
    </div>
  );
}