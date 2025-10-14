"use client"
import React from 'react'
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { PiHexagonThin } from "react-icons/pi";


const HeroContent = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/DhruvResume.pdf';
        link.download = 'Dhruv_Mittal_resume.pdf';
        link.click();
    }
    return (
        <motion.div
            initial="hidden" animate="visible" className='flex flex-col md:flex-row  items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Dhruv Developer Portfolio
                    </h1>
                </motion.div>

                <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
                    <span>
                        Delivering
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                            {" "}
                            exceptional{" "}
                        </span>
                        digital experiences
                    </span>

                </motion.div>

                <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
                    I'm a Full Stack and Data Engineer with hands-on experience building scalable web, mobile, and analytics solutions. Explore my projects and skills.
                </motion.p>

                <motion.a
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    onClick={handleDownload}
                >
                    Download Resume
                </motion.a>
            </div>

            <div className='h-full flex items-center justify-center '>
                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="w-full h-full flex justify-center items-center"
                >

                    <Image
                      src="/photo-main-1.webp"
                      alt="Hexagon"
                      width={600} height={300}
                      className="object-cover [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)]"
                    />

                    <div className='absolute z-[1000] flex justify-center items-center animate-pulse'>
                        <PiHexagonThin className='md:h-[100%] sm:h-[120%] min-h-[600px] text-purple-500 blur-md animate-[spin_20s_linear_infinite]  w-auto ' />
                    </div>

                </motion.div>
            </div>

        </motion.div>

    )
}

export default HeroContent


