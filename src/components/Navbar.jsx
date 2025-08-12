import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    console.log('Scrolling to section:', sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      console.log('Element found:', element); // Debug log
      // Close mobile menu first
      setIsMenuOpen(false);
      
      // Use setTimeout to ensure menu closes before scrolling
      setTimeout(() => {
        try {
          // Get element position
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.top + scrollTop - 100; // Offset by 100px for better positioning
          
          // Try smooth scrolling first
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
          // Fallback: if smooth scroll doesn't work, use window.scrollTo
          setTimeout(() => {
            if (window.pageYOffset < targetPosition - 10 || window.pageYOffset > targetPosition + 10) {
              console.log('Using fallback scroll method');
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
          
        } catch (error) {
          console.log('Smooth scroll failed, using instant scroll:', error);
          // Fallback to instant scroll if smooth scrolling fails
          element.scrollIntoView({ 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    } else {
      console.log('Element not found for ID:', sectionId); // Debug log
      // Fallback: try to scroll to top if section not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    console.log('Scrolling to contact section'); // Debug log
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      console.log('Contact section found'); // Debug log
      // Close mobile menu first
      setIsMenuOpen(false);
      
      // Use setTimeout to ensure menu closes before scrolling
      setTimeout(() => {
        try {
          // Get element position
          const rect = contactSection.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetPosition = rect.top + scrollTop - 100; // Offset by 100px for better positioning
          
          // Try smooth scrolling first
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
          // Fallback: if smooth scroll doesn't work, use window.scrollTo
          setTimeout(() => {
            if (window.pageYOffset < targetPosition - 10 || window.pageYOffset > targetPosition + 10) {
              console.log('Using fallback scroll method for contact');
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
          
        } catch (error) {
          console.log('Smooth scroll failed, using instant scroll:', error);
          // Fallback to instant scroll if smooth scrolling fails
          contactSection.scrollIntoView({ 
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    } else {
      console.log('Contact section not found'); // Debug log
      // Fallback: try to scroll to bottom if contact section not found
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home', sectionId: 'home' },
    { name: 'About Us', href: '#about', sectionId: 'about' },
    { name: 'Values', href: '#values', sectionId: 'values' },
    { name: 'Products', href: '#products', sectionId: 'products' },
  ];

  // Menu button lines animation variants
  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      y: i === 1 ? 0 : i === 0 ? -8 : 8,
      width: "24px",
    }),
    open: (i) => ({
      rotate: i === 1 ? 0 : i === 0 ? 45 : -45,
      y: i === 1 ? 0 : i === 0 ? 0 : 0,
      width: i === 1 ? "0px" : "24px",
    }),
  };

  // Menu container animation variants
  const menuContainerVariants = {
    closed: {
      clipPath: "circle(0% at calc(100% - 32px) 32px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      clipPath: "circle(150% at calc(100% - 32px) 32px)",
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
        y: { stiffness: 1000 }
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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
        <div className="lg:hidden relative z-50">
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
            className="fixed inset-0 bg-gradient-to-br from-white via-white/95 to-gray-50 z-40 lg:hidden overflow-hidden"
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
                    onClick={() => scrollToSection(link.sectionId)}
                    className="group flex items-center text-2xl font-medium text-gray-800 hover:text-[#FF4B26] transition-colors duration-300 cursor-pointer"
                    whileHover={{ x: 16 }}
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
                >
                  <button 
                    onClick={scrollToContact}
                    className="bg-[#FF4B26] text-white px-6 py-3 rounded-full text-base hover:bg-[#e63e1d] transition-colors duration-300 cursor-pointer"
                  >
                    Contact Us
                  </button>
                  <div className="arrow-icon text-xl p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 transform group-hover:translate-x-4 transition-transform duration-300">
                    <BsArrowUpRightCircle />
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-[#FF4B26]/10 to-[#FF6B4A]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-tr from-[#FF6B4A]/10 to-[#FF4B26]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                  rotate: [90, 0, 90],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;