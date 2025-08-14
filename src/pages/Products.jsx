import React, { useState, useMemo, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Memoized Project Card Component
const ProjectCard = memo(({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  const imagesToShow = useMemo(() => 
    isHovered ? project.images.slice(0, 3) : project.images.slice(0, 1), 
    [isHovered, project.images]
  );

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 flex flex-col sm:flex-row items-center justify-between ${
        isHovered ? 'bg-black text-white' : project.color
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-2 sm:space-y-0 flex-1 min-w-0 w-full">
        <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${isHovered ? 'text-white' : ''}`}>
          Project <span className="text-[#FF4B26]">{project.id}</span>
        </span>
        <h3 className={`text-lg sm:text-2xl truncate w-full ${isHovered ? 'text-white' : ''}`}>
          {project.title}
        </h3>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 ml-0 sm:ml-4 mt-2 sm:mt-0">
        {isHovered ? (
          <>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: -20 }}
              transition={{ type: "tween", duration: 0.2 }}
              className={`w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#FF4B26] bg-black rounded-full flex items-center justify-center shadow-lg z-10`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF4B26]" />
            </motion.div>
            <div className="flex space-x-1 sm:space-x-2">
              {imagesToShow.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="shadow-md bg-white p-2 w-25 h-12 sm:w-40 sm:h-20 rounded-[1rem]"
                >
                  <img
                    src={image}
                    alt={`${project.title} preview ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
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
                  className="shadow-md bg-white w-25 h-12 sm:w-40 sm:h-20 p-2 rounded-[1rem]"
                >
                  <img
                    src={image}
                    alt={`${project.title} preview ${imgIndex + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              transition={{ type: "tween", duration: 0.2 }}
              className={`w-8 h-8 sm:w-12 sm:h-12 border-2 border-[#FF4B26] bg-[#FF4B26] rounded-full flex items-center justify-center shadow-lg z-10`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Memoized More Projects Card
const MoreProjectsCard = memo(({ isHovered, onMouseEnter, onMouseLeave }) => (
  <div
    className={`relative rounded-2xl px-4 py-2 sm:px-8 sm:py-4 cursor-pointer transition-all duration-300 flex items-center justify-center mx-auto w-full max-w-full ${
      isHovered ? 'bg-black text-white' : 'bg-gray-100 text-black'
    }`}
    style={{ minHeight: '40px', maxWidth: '100%' }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <span className={`text-base sm:text-lg font-medium transition-all duration-300 ${isHovered ? 'text-white' : 'text-black'}`}>
      More Projects
    </span>
  </div>
));

MoreProjectsCard.displayName = 'MoreProjectsCard';

const ProductsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [moreHovered, setMoreHovered] = useState(false);

  // Memoize projects data to prevent unnecessary re-renders
  const projects = useMemo(() => [
    {
      id: '01',
      title: 'Heart Flow Med',
      description: 'Heart Flow Med',
      images: [
        '/HFM- Ver_Blue Logo- Horizontal.svg',
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '02',
      title: 'DictateMed',
      description: 'DictateMed',
      images: [
        '/DictateMed.png'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '03',
      title: 'PracticeMed',
      description: 'PracticeMed',
      images: [
        '/practice med.svg'
      ],
      color: 'bg-gray-100 text-black'
    },
    {
      id: '04',
      title: 'SynapseMed',
      description: 'SynapseMed',
      images: [
        '/SynapseMed Logo.svg'
      ],
      color: 'bg-gray-100 text-black'
    }
  ], []);

  // Memoize event handlers
  const handleProjectMouseEnter = useCallback((projectId) => {
    setHoveredProject(projectId);
  }, []);

  const handleProjectMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  const handleMoreMouseEnter = useCallback(() => {
    setMoreHovered(true);
  }, []);

  const handleMoreMouseLeave = useCallback(() => {
    setMoreHovered(false);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 md:p-8" id="products">
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => handleProjectMouseEnter(project.id)}
              onMouseLeave={handleProjectMouseLeave}
            />
          ))}

          {/* More Projects Card */}
          <MoreProjectsCard
            isHovered={moreHovered}
            onMouseEnter={handleMoreMouseEnter}
            onMouseLeave={handleMoreMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;