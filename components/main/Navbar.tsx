"use client"
import { Socials } from "../../constants";
import Image from "next/image";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo4.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin "
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            DHRUV MITTAL
          </span>
        </a>


        {/* desktop navbar */}
        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer transition-transform duration-200  hover:rounded-full px-2 hover:shadow-[0_0_10px_white]">
              About me
            </a>
            <a href="#skills" className="cursor-pointer transition-transform duration-200  hover:rounded-full px-2 hover:shadow-[0_0_10px_white]">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer transition-transform duration-200  hover:rounded-full px-2 hover:shadow-[0_0_10px_white]">
              Projects
            </a>
            <a href="/DhruvResume.pdf" download={'Dhruv_Mittal_resume.pdf'} className="cursor-pointer transition-transform duration-200  hover:rounded-full px-2 hover:shadow-[0_0_10px_white]">
              Resume
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-10">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              onClick={()=>window.open(social.link,"_blank")}
              className="cursor-pointer"
            />
          ))}
        </div>

        {/* mobile navbar  */}
        <div className="flex md:hidden items-center justify-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>



      </div>
      {/* dropdown in mobile view */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 border border-[#7042f861] bg-[#0300145e] mr-[15px] rounded-b-xl z-40 text-gray-200">
          <a
            href="#about-me"
            onClick={() => setIsOpen(false)}
            className="cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5"
          >
            About me
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5">
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5">
            Projects
          </a>
          <a href="/DhruvResume.pdf" download={'Dhruv_Mittal_resume.pdf'}  onClick={() => setIsOpen(false)} className="cursor-pointer px-2 transition-all duration-200 
             hover:rounded-full hover:shadow-[0_0_10px_white] hover:-translate-y-0.5
             active:rounded-full active:shadow-[0_0_10px_white] active:-translate-y-0.5">
            Download Resume
          </a>
        </div>
      )}

    </div>
  );
};

export default Navbar;