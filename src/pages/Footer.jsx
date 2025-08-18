import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <a href="https://in.linkedin.com/company/cirakas-consulting-pvt-ltd" target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e63e1d] transition-colors duration-300">
            <SiLinkedin />
            </a>
            {/* X (Twitter) */}
            {/* <a target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e63e1d] transition-colors duration-300">
            <FaXTwitter />
            </a> */}
            {/* Facebook */}
            <a href='https://www.facebook.com/profile.php?id=100088813496171' target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e63e1d] transition-colors duration-300">
            <FaFacebook />
            </a>
            {/* Instagram */}
            <a href='https://www.instagram.com/cirakas?utm_source=qr&igsh=aGEwZmE2MjQ2bnJi' target="_blank" rel="noopener noreferrer" className="bg-[#FF4B26] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#e63e1d] transition-colors duration-300">
            <FaInstagram />
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
              <a href="mailto:info@cirakas.com" className="hover:text-[#FF4B26] transition-colors duration-300">info@cirakas.com</a><br />
              <a href="tel:+917025216219" className="hover:text-[#FF4B26] transition-colors duration-300">+91 7025216219</a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom row: Logo and copyright */}
      <div className="flex flex-col items-center mt-8">
        <button 
          onClick={scrollToTop}
          className="text-[72px] md:text-[96px] font-extrabold italic tracking-tight font-sans mb-2 select-none hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <span className="text-[#FF4B26]">cira</span><span className="text-[#6CB2F7]">kas</span>
        </button>
        <div className="border-t border-[#222] w-full mt-2 pt-3 text-xs text-[#aaa] text-center">
          © 2025 Cirakas Consulting Private Limited &nbsp;|&nbsp; All Rights Reserved &nbsp;
        </div>
      </div>
    </footer>
  );
};

export default Footer;