import React from 'react';
import { BsArrowUpRightCircle } from 'react-icons/bs';

const AboutCard = ({
  number = '01',
  title = 'Shared Growth',
  description = "Our collective progress is our greatest achievement. We invest in each other's development, fostering an environment of continuous growth.",
  image = '/about1.png',
}) => {
  return (
    <div className="group relative w-[20rem] sm:w-[25rem] lg:w-[35rem] h-[35rem] rounded-[1.5rem] overflow-hidden cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[1.5rem]"
      />

      {/* Expanding Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-8 
                    h-[8rem] group-hover:h-full transition-all duration-500 ease-in-out"
      >
        {/* Top Section with Number and Icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#FF4B26] font-medium">{number}</span>
            <div className="w-8 h-[2px] bg-[#FF4B26]"></div>
          </div>
          <div className="text-[#FF4B26]">
            <BsArrowUpRightCircle className="text-xl" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
          {title}
        </h3>

        {/* Description - Hidden by default, shown on hover */}
        <p className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
