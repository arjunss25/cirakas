import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProductsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [moreHovered, setMoreHovered] = useState(false);

  const projects = [
    {
      id: '01',
      title: 'Community Application',
      description: 'Community Application',
      images: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=80&fit=crop&crop=faces',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=80&fit=crop&crop=center'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '02',
      title: 'DictateMed',
      description: 'DictateMed',
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=100&h=80&fit=crop&crop=faces'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '03',
      title: 'PracticeMed',
      description: 'PracticeMed',
      images: [
        'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=80&fit=crop&crop=center'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '04',
      title: 'PREP',
      description: 'PREP',
      images: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=80&fit=crop&crop=faces'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '05',
      title: 'SynapseMed',
      description: 'SynapseMed',
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=80&fit=crop&crop=center'
      ],
      color: 'bg-gray-100 text-black'
    }
  ];

  return (
    <div className=" bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-[90vw] mx-auto">
        {/* Header */}
        <div className="mb-5">
          <p className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4 tracking-wide uppercase">
            OUR EXPERTISE
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-gray-900 leading-tight">
            Products We've Built
            <span className="text-[#FF4B26]">.</span>
          </h1>
        </div>

        {/* Projects List */}
        <div className="space-y-4">
          {projects.map((project) => {
            const isHovered = hoveredProject === project.id;
            const imagesToShow = isHovered ? project.images.slice(0, 3) : project.images.slice(0, 1);
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`relative rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 flex flex-col sm:flex-row items-center justify-between ${
                  isHovered ? 'bg-black text-white' : project.color
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-2 sm:space-y-0 flex-1 min-w-0 w-full">
                  <span className={`text-xs sm:text-sm font-medium  whitespace-nowrap ${isHovered ? 'text-white' : ''}`}>
                    Project <span className="text-[#FF4B26]">{project.id}</span>
                  </span>
                  <h3 className={`text-lg sm:text-2xl truncate w-full ${isHovered ? 'text-white' : ''}`}>
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4 ml-0 sm:ml-4 mt-2 sm:mt-0">
                  {/* Conditional order: Arrow left of images on hover, right otherwise */}
                  {isHovered ? (
                    <>
                      <motion.div
                        animate={{ x: -20 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
                        className={`w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#FF4B26] bg-black rounded-full flex items-center justify-center shadow-lg z-10`}
                        style={{ position: 'relative' }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4B26]" />
                      </motion.div>
                      <div className="flex space-x-1 sm:space-x-2">
                        {imagesToShow.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-12 h-8 sm:w-16 sm:h-12 rounded-lg overflow-hidden shadow-md bg-white"
                          >
                            <img
                              src={image}
                              alt={`${project.title} preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex space-x-1 sm:space-x-2">
                        {imagesToShow.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-12 h-8 sm:w-16 sm:h-12 rounded-lg overflow-hidden shadow-md bg-white"
                          >
                            <img
                              src={image}
                              alt={`${project.title} preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <motion.div
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
                        className={`w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#FF4B26] bg-[#FF4B26] rounded-full flex items-center justify-center shadow-lg z-10`}
                        style={{ position: 'relative' }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* More Projects Card */}
          <div
            className={`relative rounded-2xl px-4 py-2 sm:px-8 sm:py-4 cursor-pointer transition-all duration-300 flex items-center justify-center mx-auto w-full max-w-full ${
              moreHovered ? 'bg-black text-white' : 'bg-gray-100 text-black'
            }`}
            style={{ minHeight: '40px', maxWidth: '100%' }}
            onMouseEnter={() => setMoreHovered(true)}
            onMouseLeave={() => setMoreHovered(false)}
          >
            <span className={`text-base sm:text-lg font-medium transition-all duration-300 ${moreHovered ? 'text-white' : 'text-black'}`}>
              More Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;