import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white rounded-3xl px-8 pt-8 pb-4 m-4 font-sans relative overflow-hidden">
      {/* Top Row */}
      <div className="flex flex-wrap justify-between items-start gap-8 md:gap-12">
        {/* Left: Tagline & Socials */}
        <div className="flex-1 min-w-[220px] mb-4 md:mb-0">
          <div className="text-2xl font-semibold leading-snug mb-4">
            Transforming healthcare<br />through cutting-edge<br />technology<span className="text-[#FF4B26]">.</span>
          </div>
          <div className="flex gap-2">
            {/* LinkedIn */}
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center">
            <SiLinkedin />
            </a>
            {/* X (Twitter) */}
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center">
            <FaXTwitter />
            </a>
            {/* Facebook */}
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center">
            <FaFacebook />
            </a>
            {/* Behance */}
            <a href="" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center">
            <FaInstagram />
            </a>
            {/* Dribbble */}
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center">
              <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#fff" strokeWidth="1" fill="none"/><path d="M2.5 10.5c2.5-1 7-1 11 0M3.5 5.5c2.5 1 7 1 9 0M6.5 2.5c1.5 2 3.5 6 4 11" stroke="#fff" strokeWidth="1" fill="none"/></svg>
            </a>
          </div>
        </div>
        {/* Right: Address & Contact */}
        <div className="flex-1 justify-end  flex gap-8 md:gap-12">
          <div>
            <div className="text-xs font-bold tracking-wider mb-1">ADDRESS</div>
            <div className="text-sm leading-snug">
              Cirakas Consulting Private Limited<br />
              TC VIII / 1590, Venchavodu,<br />
              Sreekaryam, Trivandrum.
            </div>
          </div>
          <div>
            <div className="text-xs font-bold tracking-wider mb-1">CONTACT US</div>
            <div className="text-sm leading-snug">
              info@cirakas.com<br />
              +91 7025216219
            </div>
          </div>
        </div>
      </div>
      {/* Bottom row: Logo and copyright */}
      <div className="flex flex-col items-center mt-8">
        <div className="text-[72px] md:text-[96px] font-extrabold italic tracking-tight font-sans mb-2 select-none">
          <span className="text-[#FF4B26]">cir</span><span className="text-[#6CB2F7]">akas</span>
        </div>
        <div className="border-t border-[#222] w-full mt-2 pt-3 text-xs text-[#aaa] text-center">
          © 2025 Cirakas Consulting Private Limited &nbsp;|&nbsp; All Rights Reserved &nbsp;|&nbsp; <a href="#" className="text-[#aaa] underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;