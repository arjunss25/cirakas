import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs';
const Card = ({
  image = '/about1.png',
  number = '01',
  title = 'Shared Growth',
  description = "Our collective progress is our greatest achievement. We invest in each other's development, fostering an environment of continuous growth.",
}) => {
  return (
    <div className='group w-full sm:w-[18rem] md:w-[20rem] xl:w-[26rem] h-[30rem] md:h-[35rem] rounded-[1.5rem] bg-green-200 flex items-end justify-center p-2 sm:p-3 md:p-4 relative overflow-hidden'>
      {/* Background Image */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] z-0" />
      <div className="content-section w-full h-[8rem] bg-white/80 rounded-[1.5rem] flex flex-col items-center group-hover:items-start justify-center group-hover:justify-start p-2 sm:p-3 md:p-4 transition-all duration-500 ease-in-out group-hover:h-[14rem] group-hover:p-6 overflow-hidden z-10 relative">
        <div className="title-main flex gap-2 items-center w-full justify-between transition-all duration-500 ease-in-out">
          {/* number-section */}
          <div className="number-section w-[3.5rem] h-[2rem] rounded-[1rem] border-[2px] border-[#FF4B26] flex items-center justify-center transition-all duration-500 ease-in-out">
            <h1 className='text-[1.2rem] md:text-[1.5rem] text-[#FF4B26]'>{number}</h1>
          </div>

          {/* text-section */}
          <div className="text-section transition-all duration-500 ease-in-out">
            <h1 className='text-[1.2rem] sm:text-[1.1rem] md:text-[1.2rem] xl:text-[1.5rem] sec-font'>{title}</h1>
          </div>

          {/* round-component */}
          <div className="round-component transition-all duration-500 ease-in-out">
            <div className="arrow-icon text-[1rem] md:text-[1.2rem] p-2 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 group-hover:ml-2 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-100 opacity-90 will-change-transform">
              <BsArrowUpRightCircle />
            </div>
          </div>
        </div>
        {/* Description Paragraph - below title, only visible on hover */}
        <p className="mt-4 text-black text-sm md:text-base leading-relaxed w-full opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card