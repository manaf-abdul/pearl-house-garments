import React from 'react';
import { motion, Variants } from 'framer-motion'; // Import Variants type
const Button = ({ children, className, ...props }:any) => (
  <button className={`py-2 px-4 rounded-md font-semibold ${className}`} {...props}>
    {children}
  </button>
);
// Assuming you have a Button component and ArrowRight icon
// import { Button } from './components/ui/button'; // Adjust path as needed
// import { ArrowRight } from 'lucide-react'; // If you're using Lucide Icons

const HeroSection = () => {
  // Animation variants for text and buttons
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Explicitly type itemVariants as Variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', // TypeScript now knows this must be a literal 'spring'
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video (or Image Slideshow) */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
         src="/videos/hero-2.mp4"
        // src="https://videos.pexels.com/video-files/29780963/29780963-hd_1920_1080_30fps.mp4" // Replace with your desired video
        autoPlay
        loop
        muted
        playsInline // Important for mobile autoplay
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Readability and Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-blue-900/70 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg" variants={itemVariants} data-macaly="hero-title">
          Your Vision, Our Craftsmanship
        </motion.h2>
        <motion.p className="text-xl md:text-2xl mb-8 drop-shadow-md" variants={itemVariants} data-macaly="hero-subtitle">
          Leading Specialists in Sublimation, Screen Printing, and Custom Team Apparel
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants} // Apply itemVariants to the container of buttons
        >
          {/* Make sure Button is properly imported or defined */}
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Get a Free Quote
            {/* If you use ArrowRight, make sure it's imported */}
            {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900">
            View Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;