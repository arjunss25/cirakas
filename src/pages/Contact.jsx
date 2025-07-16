import React from 'react'
import { BsArrowUpRightCircle } from 'react-icons/bs';
const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center  pb-8 px-4">
      <div className="w-full md:w-[80%] bg-[url(/contact.png)] bg-no-repeat bg-cover bg-center flex flex-col items-center py-32 sm:py-20 rounded-[60px] sm:rounded-[20rem]">
        <h2 className="text-white text-5xl font-bold mb-8 text-center">
          Get In Touch<span className="text-[#ff5722]">.</span>
        </h2>
        <form className="w-[80%] md:w-[60%] flex flex-col gap-4 items-center">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#ff5722]"
          />
          <input
            type="email"
            placeholder="email"
            className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#ff5722]"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:border-[#ff5722]"
          />
            {/* Get In Touch Button */}
      <div className="explore-btn group flex items-center justify-center mt-5">
            <button className="bg-[#FF4B26] text-[0.875rem] sm:text-[1rem] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-[#e63e1d] transition-all duration-300 whitespace-nowrap">
              Get In Touch
            </button>
            <div className="arrow-icon text-[1.25rem] sm:text-[1.5rem] p-2.5 sm:p-3 flex items-center justify-center rounded-full text-white bg-[#FF4B26] -ml-2 group-hover:ml-2 transition-all duration-300">
              <BsArrowUpRightCircle />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact