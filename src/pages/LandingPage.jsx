import React, { useEffect } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { motion, useAnimate, stagger, useInView } from 'framer-motion';

const LandingPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      const sequence = [
        ['.bg-overlay', { opacity: [0, 0.5] }, { duration: 1.2, ease: [0.76, 0, 0.24, 1] }],
        ['.title-word', { y: [100, 0], opacity: [0, 1] }, { duration: 1.2, delay: stagger(0.1), ease: [0.76, 0, 0.24, 1] }],
        ['.line-svg', { scale: [0, 1], opacity: [0, 1] }, { duration: 0.8, ease: [0.76, 0, 0.24, 1] }],
        ['.btm-section', { y: [50, 0], opacity: [0, 1] }, { duration: 1, ease: [0.76, 0, 0.24, 1] }],
      ];
      animate(sequence);
    }
  }, [isInView, animate]);

  const words = ["More", "Than", "Colleagues,", "We're", "Family", "."];

  return (
    <motion.div 
      ref={scope}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-[90vh] px-2 sm:px-5 pb-10 flex items-center justify-center"
    >
      <div className="main relative w-full h-full rounded-[2rem] flex flex-col justify-between overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url(/bg-img.png)] bg-no-repeat bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
        />
        <div className="bg-overlay absolute inset-0 bg-black opacity-0" />

        <div className="title-section flex items-end h-[45vh] w-full relative pt-20 sm:pt-0 z-10">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] text-white w-full sm:w-[80rem] px-4 sm:pl-20 leading-none flex flex-wrap gap-x-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="title-word relative inline-block"
                style={{ opacity: 0, y: 100 }}
              >
                {word === "Family" ? (
                  <span className="text-[#FF4B26] relative inline-block">
                    {word}
                    <motion.img
                      className="line-svg absolute bottom-[-1rem] sm:bottom-[-1.5rem] md:bottom-[-2rem] lg:bottom-[-2.5rem] xl:bottom-[-3rem] 
                               left-0 w-full object-contain"
                      src="/line svg.svg"
                      alt=""
                      style={{ opacity: 0, scale: 0, originX: 0 }}
                    />
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div 
          className="btm-section w-full flex flex-col sm:flex-row items-center sm:items-end justify-between p-6 sm:p-10 md:p-16 lg:p-20 gap-8 sm:gap-4 z-10"
          style={{ opacity: 0, y: 50 }}
        >
          <motion.div 
            className="explore-btn group flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              className="bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#e63e1d] transition-all duration-300 whitespace-nowrap"
              whileHover={{ backgroundColor: "#e63e1d" }}
            >
              Explore Our Culture
            </motion.button>
            <motion.div 
              className="arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 group-hover:ml-2 transition-all duration-300"
              whileHover={{ backgroundColor: "#e63e1d" }}
            >
              <BsArrowUpRightCircle />
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-section flex items-center justify-center sm:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h1 className="text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center sm:text-right w-full sm:w-[62%] text-white">
              Building innovative solutions together, growing as one, and
              supporting each other every step of the way
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
