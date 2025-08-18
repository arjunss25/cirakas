import React, { useState, useEffect } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cleanup effect to restore scroll if component unmounts
  useEffect(() => {
    return () => {
      if (isMenuOpen) {
        toggleBodyScroll(false);
      }
    };
  }, [isMenuOpen]);

  // Function to lock/unlock body scroll
  const toggleBodyScroll = (lock) => {
    if (lock) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Unlock scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  };

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    toggleBodyScroll(newMenuState);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first if it's open
      if (isMenuOpen) {
        setIsMenuOpen(false);
        toggleBodyScroll(false); // Restore scroll
      }
      
      // Use setTimeout to ensure menu closes before scrolling
      const scrollDelay = isMenuOpen ? 300 : 0; // Longer delay for mobile menu close
      
      setTimeout(() => {
        try {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.top + scrollTop - 100;
          
          // Use window.scrollTo for more reliable scrolling
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
        } catch (error) {
          // Fallback to scrollIntoView
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, scrollDelay);
    } else {
      // Close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
        toggleBodyScroll(false); // Restore scroll
      }
      // Fallback: scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, isMenuOpen ? 300 : 0);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      // Close mobile menu first if it's open
      if (isMenuOpen) {
        setIsMenuOpen(false);
        toggleBodyScroll(false); // Restore scroll
      }
      
      // Use setTimeout to ensure menu closes before scrolling
      const scrollDelay = isMenuOpen ? 300 : 0;
      
      setTimeout(() => {
        try {
          const rect = contactSection.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.top + scrollTop - 100;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
        } catch (error) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, scrollDelay);
    } else {
      // Close menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false);
        toggleBodyScroll(false); // Restore scroll
      }
      // Fallback: scroll to bottom
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, isMenuOpen ? 300 : 0);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About Us', href: '#about', sectionId: 'about' },
    { name: 'Values', href: '#values', sectionId: 'values' },
    { name: 'Products', href: '#products', sectionId: 'products' },
  ];

  // Menu container animation variants - with faster exit for better scroll timing
  const menuContainerVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 32px) 32px)",
      transition: {
        type: "spring",
        stiffness: 600, // Increased for faster close
        damping: 50,
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
    open: {
      clipPath: "polygon(0 0, calc(100% - 80px) 0, calc(100% - 80px) 80px, 100% 80px, 100% 100%, 0 100%)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  // Menu items animation variants
  const menuItemVariants = {
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
        duration: 0.2, // Faster exit
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    }
  };

  return (
    <>
      <nav className="w-full h-[12vh] flex items-center justify-between px-4 md:px-8 lg:px-16 relative z-50 bg-white/80 backdrop-blur-md">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            if (isMenuOpen) setIsMenuOpen(false);
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, isMenuOpen ? 300 : 0);
          }}
        >
          <img src="/logo.png" alt="Cirakas Logo" className="h-6 md:h-8" />
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden lg:flex items-center space-x-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.sectionId)}
              className="relative text-gray-600 hover:text-gray-900 font-medium transition-colors group cursor-pointer"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF4B26] to-[#FF6B4A] group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
          <motion.div
            className="contact-btn flex items-center group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button 
              onClick={scrollToContact}
              className="bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#e63e1d] transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              Contact Us
            </button>
            <div className="arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 transform group-hover:translate-x-4 transition-transform duration-300">
              <BsArrowUpRightCircle />
            </div>
          </motion.div>
        </motion.div>

        {/* Modern Animated Menu Button */}
        <div className="lg:hidden relative z-[600]">
          <motion.button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="absolute inset-0"
            >
              <motion.circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="1"
              />
              <motion.circle
                cx="20"
                cy="20"
                r="18"
                fill="none"
                stroke="#1f2937"
                strokeWidth="1"
                strokeDasharray="113"
                animate={{
                  strokeDashoffset: isMenuOpen ? 0 : 85,
                  rotate: isMenuOpen ? 90 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
              />
            </svg>
            
            <div className="relative w-4 h-4 flex items-center justify-center">
              <motion.span
                className="absolute w-4 h-0.5 bg-gray-800"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -4,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-4 h-0.5 bg-gray-800"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                  x: isMenuOpen ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute w-4 h-0.5 bg-gray-800"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 4,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Modern Fullscreen Design */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-white via-white/95 to-gray-50 z-[400] lg:hidden overflow-hidden"

          >
            <motion.div
              className="h-full flex flex-col justify-center items-center p-6 space-y-6"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={menuItemVariants}
                  className="overflow-hidden"
                >
                  <motion.button
                    onClick={() => {
                      scrollToSection(link.sectionId);
                    }}
                    className="group flex items-center text-2xl font-medium text-gray-800 hover:text-[#FF4B26] transition-colors duration-300 cursor-pointer relative z-10 pointer-events-auto"
                    whileHover={{ x: 16 }}
                    whileTap={{ scale: 0.95 }} // Add tap feedback
                  >
                    <span className="relative">
                      {link.name}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF4B26] origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.div
                      className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 8 }}
                    >
                      <BsArrowUpRightCircle size={20} className="text-[#FF4B26]" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              ))}

              <motion.div
                variants={menuItemVariants}
                className="mt-8"
              >
                <motion.div
                  className="flex items-center group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }} // Add tap feedback
                >
                  <button 
                    onClick={() => {
                      scrollToContact();
                    }}
                    className="bg-[#FF4B26] text-white px-6 py-3 rounded-full text-base hover:bg-[#e63e1d] transition-colors duration-300 cursor-pointer relative z-10 pointer-events-auto"
                  >
                    Contact Us
                  </button>
                  <div className="arrow-icon text-xl p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 transform group-hover:translate-x-4 transition-transform duration-300">
                    <BsArrowUpRightCircle />
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements - REMOVED to fix navigation click issues */}
              {/* These rotating elements were interfering with navigation clicks */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
