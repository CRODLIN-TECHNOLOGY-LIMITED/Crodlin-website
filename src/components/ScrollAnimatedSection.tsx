
import React, { useEffect, useState } from "react";
import { motion,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      setLastScrollY(scrollY);
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection, lastScrollY]);

  return scrollDirection;
};

// Scroll-linked animation component
interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className = "", delay = 0 }) => {
  const controls = useAnimation();
  const scrollDirection = useScrollDirection();
  const [elementRef, elementInView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (elementInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1]
        }
      });
    } else {
      controls.start({
        y: scrollDirection === "down" ? 100 : -100,
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1]
        }
      });
    }
  }, [elementInView, controls, scrollDirection, delay]);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedSection;