import React, { useState } from 'react';

// Assuming you have a Button component, if not, you can replace it with a regular <button>
// Example Button component (if you don't have one):
const Button = ({ children, className, ...props }:any) => (
  <button className={`py-2 px-4 rounded-md font-semibold ${className}`} {...props}>
    {children}
  </button>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://assets.macaly-user-data.dev/i7nrqdl37g1kttgs6uyyg5vw/e933vqask62ero33pi5dgp9n/aH-DrnLScU6SxzsqZYpsi/logo-1-.png"
              alt="Pearl House Garments"
              className="h-8 w-auto"
              data-macaly="logo"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-900 transition-colors">Blog</a>
            <a href="/pearltees" className="text-gray-700 hover:text-blue-900 transition-colors">PearlTees</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </div>

          {/* Desktop Button and Mobile Hamburger */}
          <div className="flex items-center">
            {/* "Get Free Quote" Button - visible only on medium screens and up */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white hidden md:block">
              Get Free Quote
            </Button>

            {/* Hamburger Menu Button - visible only on mobile (below medium screens) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                // Close icon (X)
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">Services</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">Portfolio</a>
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">Blog</a>
            <a href="/pearltees" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">PearlTees</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors">Contact</a>
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4">
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;