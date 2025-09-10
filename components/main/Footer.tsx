import React from "react";
import Image from "next/image"; // Omit if not using Next.js
import { Socials } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-200 border-t border-neutral-900 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
        
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start gap-4 min-w-[180px] z-100">
          <div className="font-bold text-lg mb-1">Social Media</div>
          <div className="flex flex-row gap-5">
            {Socials.map(({ name, src, link }) => (
              <a
                key={name}
                href={link}
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform group"
              >
                <Image
                  src={src}
                  alt={name}
                  width={28}
                  height={28}
                  className="opacity-80 group-hover:opacity-100"
                />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* About/Contact Section */}
        <div className="flex flex-col items-center md:items-start gap-2 min-w-[180px] z-100">
          <div className="font-bold text-lg mb-1 ">About</div>
          {/* <a href="#sponsor" className="text-sm hover:underline">Become Sponsor</a> */}
          <a href="#about-me" className="text-sm hover:underline p-2">Learning about me</a>
          
          <a
            href="mailto:dhruvmittal1910@gmail.com"
            className="text-sm hover:underline break-all cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5 p-2"
          >
            dhruvmittal1910@gmail.com
          </a>
          <a href="tel:+19452325649" className="text-sm hover:underline break-all cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5 p-2"
          >+19452325649</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-neutral-400 py-4 border-t border-neutral-900">
        &copy; Dhruv Mittal 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
