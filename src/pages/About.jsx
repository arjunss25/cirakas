import React, { useRef, useEffect, useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import Card from '../components/Card';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';

const aboutCards = [
  {
    number: '01',
    title: 'Shared Growth',
    description: "Our collective progress is our greatest achievement. We invest in each other's development, fostering an environment of continuous growth.",
    image: '/about1.png',
  },
  {
    number: '02',
    title: 'Transparent Talk',
    description: "Transparency and honesty are at the heart of our team. We encourage open dialogue and value every voice.",
    image: '/about2.png',
  },
  {
    number: '03',
    title: 'Mutual Support',
    description: "We stand by each other through challenges and celebrate our successes as one.",
    image: '/about3.png',
  },
];

const SplitText = ({ text, isInView }) => {
  return (
    <span className="inline-block">
      {text.split(" ").map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block" style={{ whiteSpace: 'pre' }}>
          {word.split("").map((char, charIdx) => (
            <motion.span
              key={charIdx}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 20 
              }}
              transition={{
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
                delay: (wordIdx * 0.05) + (charIdx * 0.02)
              }}
            >
              {char}
            </motion.span>
          ))}
          {" "}
        </span>
      ))}
    </span>
  );
};

const About = () => {
  // Refs for scroll animations
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
  const isTitleInView = useInView(titleRef, { once: true });

  // Scroll progress animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [100, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0, 1]), springConfig);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full px-4 sm:px-6 md:px-10 py-10 sm:py-16 md:py-10"
      id="about"
    >
      <motion.div 
        className="btn-section w-full flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.button 
          className="flex gap-2 sm:gap-5 items-center px-4 sm:px-5 py-2 rounded-full border-[2px] border-black text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Know Us
          <motion.span 
            className="text-[1.2rem] sm:text-[1.5rem]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <BsArrowUpRightCircle />
          </motion.span>
        </motion.button>
      </motion.div>

      {/* content-sec */}
      <div className="content-title-section w-full mt-8 sm:mt-10">
        <div className="title-sec w-full flex justify-center px-4" ref={titleRef}>
          <div className="overflow-hidden">
            <motion.h1 
              className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-center w-full sm:w-[60rem] leading-tight sm:leading-[4rem]"
              initial={{ y: "100%" }}
              animate={{ y: isTitleInView ? "0%" : "100%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            >
              Our Culture of Care and Collaboration
            </motion.h1>
          </div>
        </div>
      </div>

      {/* content-sec */}
      <div className="content-section w-full mt-8 sm:mt-10">
  <div className="title-sec w-full relative flex justify-center px-4">
    <div 
      ref={descriptionRef}
      className="relative inline-block w-full sm:w-[80%] max-w-[1200px]"
    >
      <motion.p 
        className="text-center text-[1.2rem] sm:text-[1.4rem] leading-snug sm:leading-normal"
        initial={{ 
          opacity: 0, 
          y: 40,
          filter: "blur(10px)"
        }}
        animate={{ 
          opacity: isDescriptionInView ? 1 : 0,
          y: isDescriptionInView ? 0 : 40,
          filter: isDescriptionInView ? "blur(0px)" : "blur(10px)"
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        At Cirakas, we believe that true innovation and success stem from a foundation of strong relationships. We've cultivated a unique 'family' culture where every team member is valued, supported, and encouraged to thrive. Here, your colleagues aren't just co-workers; they're our brothers and sisters in a shared journey.
      </motion.p>
      {/* <motion.img
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] sm:bottom-[-3rem] md:bottom-[-4rem] lg:bottom-[-5rem] 
                   w-[80%] sm:w-[70%] md:w-[40%] lg:w-[30%] max-w-[600px]
                   object-contain"
        src="/line svg.svg"
        alt=""
        initial={{ 
          opacity: 0,
          scaleX: 0,
          originX: 0.5
        }}
        animate={{ 
          opacity: isDescriptionInView ? 1 : 0,
          scaleX: isDescriptionInView ? 1 : 0
        }}
        transition={{ 
          duration: 1.2, 
          ease: "easeInOut",
          delay: isDescriptionInView ? 0.4 : 0
        }}
      /> */}
    </div>
  </div>
</div>

      {/* card-section */}
      {/* <div className="cards-section-main w-full flex items-center justify-center px-4">

      <motion.div 
        className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 w-full max-w-[1600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {aboutCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.2,
              ease: [0.76, 0, 0.24, 1]
            }}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[33.333%]"
          >
            <Card {...card} />
          </motion.div>
        ))}
      </motion.div>

      </div> */}
    </motion.div>
  );
};

export default About;
