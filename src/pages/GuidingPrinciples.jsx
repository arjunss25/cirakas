import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'

const GuidingPrinciples = () => {
  const [expandedItem, setExpandedItem] = useState(0) 

  const principles = [
    {
      id: 1,
      title: "Integrity",
      content: "We operate with unwavering honesty and ethical principles in all our dealings, both internally and externally. Trust is the foundation of our family in every interaction, whether we're collaborating on a complex project or simply having a casual conversation. We believe in being transparent about our intentions, being absolute. This isn't just about avoiding mistakes; it's about actively fostering an environment where transparency is the norm and integrity guides every decision. We believe that genuine, long-lasting relationships—the kind you find in a true family—can only flourish when built on an unshakeable foundation of trust."
    },
    {
      id: 2,
      title: "Collaboration",
      content: "We believe that the best solutions emerge when diverse minds come together with a shared purpose. Collaboration isn't just about working alongside each other; it's about creating synergy where the collective output exceeds the sum of individual contributions. We foster an environment where every voice is heard, every perspective is valued, and every team member feels empowered to contribute their unique strengths toward our common goals."
    },
    {
      id: 3,
      title: "Respect",
      content: "Respect forms the cornerstone of all our interactions. We honor each individual's unique background, perspectives, and contributions. This means actively listening, valuing diverse viewpoints, and treating everyone with dignity regardless of their role or position. We create an inclusive environment where people feel safe to express themselves authentically and where differences are celebrated as strengths that make our family stronger."
    },
    {
      id: 4,
      title: "Innovation",
      content: "We embrace creativity and forward-thinking in everything we do. Innovation isn't just about technology or products; it's about continuously finding better ways to solve problems, improve processes, and serve our community. We encourage calculated risk-taking, learning from failures, and pushing boundaries while maintaining our core values. Our commitment to innovation ensures we stay relevant and continue to make meaningful impact."
    },
    {
      id: 5,
      title: "Growth",
      content: "We are committed to continuous learning and development, both as individuals and as a collective. Growth means constantly evolving, adapting to new challenges, and expanding our capabilities. We invest in our people's development, encourage skill-building, and create opportunities for advancement. We view every experience as a learning opportunity and believe that personal growth directly contributes to our shared success."
    }
  ]

  const toggleExpanded = (index) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Main Title */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* main-title */}
      <div className="main-titlesection px-10 pt-10 sm:pt-16 md:pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-none font-mdium max-w-full sm:w-[50rem] text-[#878787]">
          Our Family's Guiding Principles: The{' '}
          <span className="text-white relative inline-block">
            Cirakas
            <img
              className="absolute left-0 w-full object-contain bottom-[-0.5rem] sm:bottom-[-1rem] md:bottom-[-1.5rem] lg:bottom-[-2rem] xl:bottom-[-2.5rem]"
              src="/line svg.svg"
              alt=""
            />
          </span>{' '}
          Values
        </h1>
      </div>
      </motion.div>

      {/* Principles List */}
      <div className="w-full px-4 md:px-10">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.id}
            className="border-b border-gray-800 py-5 last:border-b-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 cursor-pointer hover:bg-gray-900/30 transition-colors duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4"
              onClick={() => toggleExpanded(index)}
            >
              {/* Number and dot: fixed width on md+, full width on mobile */}
              <div className="flex items-center gap-4 sm:gap-8 md:gap-10 w-full md:w-[220px] min-w-0 md:min-w-[220px] mb-4 md:mb-0">
                <span className='w-2 h-2 rounded-full bg-white'></span>
                <span className="text-red-500 text-[2rem] md:text-[5rem] leading-none">
                  {String(principle.id).padStart(2, '0')}
                </span>
              </div>
              {/* Title and arrow: flex-1 on md+, full width on mobile */}
              <div className="flex-1 flex items-center justify-between w-full">
                <h3 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] text-[#868686] leading-tight">
                  {principle.title}
                </h3>
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-red-500 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-black transition-colors duration-300 ml-4 md:ml-0"
                  animate={{ rotate: expandedItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedItem === index ? (
                    <FiArrowDown size={20} />
                  ) : (
                    <FiArrowRight size={20} />
                  )}
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {expandedItem === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  {/* Responsive paragraph alignment: left margin on md+, none on mobile */}
                  <div className="pb-8 md:pl-[232px] pr-2 sm:pr-4">
                    <motion.p
                      className="text-white w-full text-base sm:text-lg leading-relaxed"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {principle.content}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add a subtle animation for the background */}
      <motion.div
        className="fixed inset-0 pointer-events-none opacity-5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, red 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, red 0%, transparent 50%)',
            'radial-gradient(circle at 40% 50%, red 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </div>
  )
}

export default GuidingPrinciples