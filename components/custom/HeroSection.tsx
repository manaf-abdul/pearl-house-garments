"use client";

import React, { useState, useEffect, FC, ReactNode, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import the icons

// Interface for a single media item
interface MediaItem {
  public_id: string;
  type: "image" | "video";
  src: string;
}

// Type for Button component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => (
  <button
    className={`py-2 px-4 rounded-md font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

const HeroSection: FC = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch media from the API on initial render
  useEffect(() => {
    fetch("/api/media")
      .then((res) => res.json())
      .then((data: MediaItem[]) => {
        if (data && data.length > 0) {
          setMedia(data);
        }
      })
      .catch(console.error);
  }, []);

  // --- NEW: Navigation functions ---
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  }, [media.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  // Autoplay functionality
  useEffect(() => {
    if (media.length > 1) {
      const interval = setInterval(nextSlide, 7000); // Autoplay every 7 seconds
      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [media.length, nextSlide]);

  const containerVariants: Variants = {
    // ... your variants
  };

  const itemVariants: Variants = {
    // ... your variants
  };

  const currentMedia = media[currentIndex];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Media */}
      <AnimatePresence>
        {currentMedia && (
          <motion.div
            key={currentMedia.public_id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full z-0"
          >
            {currentMedia.type === "video" ? (
              <video
                key={currentMedia.src}
                className="w-full h-full object-cover"
                src={currentMedia.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                className="w-full h-full object-cover"
                src={currentMedia.src}
                alt="background"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-blue-900/70 z-10"></div>

      {/* --- NEW: Navigation Arrows --- */}
      {media.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 z-30"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 z-30"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </>
      )}


      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Your h2, p, and Button components remain the same */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Your Vision, Our Craftsmanship
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8 drop-shadow-md"
          variants={itemVariants}
        >
          Leading Specialists in Sublimation, Screen Printing, and Custom Team
          Apparel
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Get a Free Quote
          </Button>
          <Button className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900">
            View Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;