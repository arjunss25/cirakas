import React, { useState } from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs';

const Slider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/description1.png",
    "/about1.png",
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/description1.png",
    "/about1.png",
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/description1.png",
    "/about1.png",
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/description1.png",
    "/about1.png"
  ];

  // Arc settings for static layout
  const arcSettings = [
    { rotate: "-15deg", top: "30px" },
    { rotate: "-7deg", top: "10px" },
    { rotate: "0deg", top: "0px" },
    { rotate: "7deg", top: "10px" },
    { rotate: "15deg", top: "30px" },
  ];

  // Create enough duplicates for seamless animation
  const marqueeImages = [...images, ...images];
  const marqueeArc = [...arcSettings, ...arcSettings];

  // Handlers for pausing/resuming animation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

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
      <div className="w-full overflow-hidden mt-12 px-4 sm:px-12 md:px-24 lg:px-32 h-[50vh] flex justify-center items-center">
        <div
          className={`flex gap-4 sm:gap-6 animate-marquee${isPaused ? ' paused' : ''}`}
          style={{ 
            width: 'fit-content',
            minWidth: '100%',
            willChange: 'transform'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {marqueeImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide${i}`}
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-xl shadow-lg flex-shrink-0"
              style={{
                transform: `rotate(${marqueeArc[i % arcSettings.length].rotate})`,
                marginTop: marqueeArc[i % arcSettings.length].top
              }}
            />
          ))}
        </div>
      </div>

      {/* Get In Touch Button */}
      <div className="explore-btn group flex items-center justify-center">
            <button className="bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#e63e1d] transition-all duration-300 whitespace-nowrap">
              Get In Touch
            </button>
            <div className="arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 group-hover:ml-2 transition-all duration-300">
              <BsArrowUpRightCircle />
            </div>
          </div>

      {/* Marquee animation keyframes */}
      <style>{`
        @keyframes marquee {
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-50%); 
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          animation-play-state: running;
        }
        .animate-marquee.paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Slider