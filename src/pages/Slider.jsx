import React, { useState } from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Slider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "/2 (1).jpg",
    "/2 (3).jpg",
    "/z (3).jpeg",
    "/2 (4).jpg",
    "/z (5).jpeg",
    "/2 (6).jpg",
    "/1 (10).jpeg",
    "/1 (12).jpeg",
  ];

  // Arc settings for static layout
  const arcSettings = [
    { rotate: "-15deg", top: "40px" },
    { rotate: "-7deg", top: "20px" },
    { rotate: "0deg", top: "10px" },
    { rotate: "7deg", top: "20px" },
    { rotate: "15deg", top: "40px" },
  ];

  // Handlers for pausing/resuming animation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full p-4 sm:p-6 md:p-8 bg-white'>
      {/* main-title */}
      <div className="main-titlesection px-4 sm:px-10 pt-10 sm:pt-16 md:pt-20 flex justify-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight md:leading-none font-medium text-center w-full sm:w-[60%]">
          Smart Products drive real{' '}
          <span className="relative inline-block text-[#FF4B2B]">
            business
            <span className="block h-2 mt-1">
              <img
                className="absolute left-0 w-full object-contain bottom-[-0.5rem] sm:bottom-[-1rem] md:bottom-[-1.5rem] lg:bottom-[-2rem] xl:bottom-[-2.5rem]"
                src="/line svg.svg"
                alt=""
              />
            </span>
          </span>{' '}
          results.
        </h1>
      </div>

      {/* Infinite Marquee Arc Image Row */}
      <div className="w-full overflow-hidden mt-12 px-4 h-[50vh] flex justify-center items-center">
        <div 
          className="marquee-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`marquee-track ${isPaused ? 'paused' : ''}`}>
            {/* First set of images */}
            <div className="marquee-set">
              {images.map((src, i) => (
                <img
                  key={`set1-${i}`}
                  src={src}
                  alt={`slide${i}`}
                  className="marquee-image"
                  style={{
                    transform: `rotate(${arcSettings[i % arcSettings.length].rotate})`,
                    marginTop: arcSettings[i % arcSettings.length].top
                  }}
                />
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="marquee-set">
              {images.map((src, i) => (
                <img
                  key={`set2-${i}`}
                  src={src}
                  alt={`slide${i}`}
                  className="marquee-image"
                  style={{
                    transform: `rotate(${arcSettings[i % arcSettings.length].rotate})`,
                    marginTop: arcSettings[i % arcSettings.length].top
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Button */}
      {/* <div className="explore-btn group flex items-center justify-center mt-8">
        <button 
          onClick={scrollToContact}
          className="bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#e63e1d] transition-all duration-300 whitespace-nowrap cursor-pointer"
        >
          Get In Touch
        </button>
        <div className="arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 group-hover:ml-2 transition-all duration-300">
          <BsArrowUpRightCircle />
        </div>
      </div> */}

      {/* Seamless Marquee CSS */}
      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding-bottom: 2rem;
        }

        .marquee-track {
          display: flex;
          width: fit-content;
          animation: seamless-marquee 60s linear infinite;
          will-change: transform;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        .marquee-set {
          display: flex;
          gap: 1rem;
          flex-shrink: 0;
        }

        .marquee-image {
          width: 9rem;
          height: 9rem;
          object-fit: cover;
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
          margin-bottom: 1rem;
        }

        @media (min-width: 640px) {
          .marquee-set {
            gap: 1.5rem;
          }
          .marquee-image {
            width: 12rem;
            height: 12rem;
          }
        }

        @media (min-width: 768px) {
          .marquee-image {
            width: 14rem;
            height: 14rem;
          }
        }

        @keyframes seamless-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
