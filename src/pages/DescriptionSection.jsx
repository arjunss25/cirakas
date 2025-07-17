import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const DescriptionSection = () => {
  // Refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // InView hooks
  const section1InView = useInView(section1Ref, { once: true, margin: '-100px' });
  const section2InView = useInView(section2Ref, { once: true, margin: '-100px' });
  const section3InView = useInView(section3Ref, { once: true, margin: '-100px' });

  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>

        <div className="main w-full md:w-[85%] lg:w-[90vw]">
          {/* section-1 */}
        <motion.div
          ref={section1Ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
          className="section1 flex flex-col md:flex-row items-start justify-between p-4 md:py-10 gap-6 md:gap-0"
        >
            <div className="img-section w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                <img className='w-full max-w-xs sm:max-w-md md:w-[30rem]' src="/description1.png" alt="" />
            </div>
            <div className="text-section w-full md:w-[50rem] mt-2 md:mt-0">
                <h1 className='text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center md:text-right font-medium'>The name <span className='text-[#FF4B26]'>CIRAKAS</span> combines two sanskrit words: Cira, meaning “long lasting” and Kas, meaning “Shine”.We always try to keep a long lasting ralationship with our team</h1>
            </div>
        </motion.div>

        {/* section-2 */}
        <motion.div
          ref={section2Ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          className="section2 flex flex-col md:flex-row items-start justify-between p-4 md:py-10 gap-6 md:gap-0"
        >
            <div className="text-section w-full md:w-[50rem] order-2 md:order-1 mt-2 md:mt-0">
                <h1 className='text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center md:text-left font-medium'>From daily catch-ups to group celebrations, our bond goes beyond the workplace. We grow together, laugh together, and always have <span className='text-[#FF4B26]'>each other’s back</span>.</h1>
            </div>
            <div className="img-section w-full md:w-auto flex justify-center md:justify-end order-1 md:order-2 mb-4 md:mb-0">
                <img className='w-full max-w-xs sm:max-w-md md:w-[30rem]' src="/description2.png" alt="" />
            </div>
        </motion.div>
        
        {/* section-3 */}
        <motion.div
          ref={section3Ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={section3InView ? "visible" : "hidden"}
          className="section3 flex flex-col md:flex-row items-start justify-between p-4 md:py-10 gap-6 md:gap-0"
        >
            <div className="img-section w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                <img className='w-full max-w-xs sm:max-w-md md:w-[30rem]' src="/description3.png" alt="" />
            </div>
            <div className="text-section w-full md:w-[50rem] mt-2 md:mt-0">
                <h1 className='text-[1.1rem] sm:text-[1.25rem] md:text-[1.5rem] text-center md:text-right font-medium'>At <span className='text-[#FF4B26]'>CIRAKAS</span> , we work like a team but connect like a family. Every day is filled with shared smiles, support, and genuine care.</h1>
            </div>
        </motion.div>
        </div>
    </div>
  )
}

export default DescriptionSection