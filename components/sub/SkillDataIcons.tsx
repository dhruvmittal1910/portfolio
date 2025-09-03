"use client"
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
interface Props {
    skill:string, src: string, width: number, height: number, idx: number
}
const SkillDataIcons = ({ skill, src, width, height, idx }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true //measn the user will see the animation but only once
    })

    const imageVariants = {
        hidden: { opactity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3;
    return (
        <div className='inline-flex items-center gap-2 py-2 px-3 outline-2 outline-white/10 rounded-lg card'>
            <motion.div ref={ref} initial="hidden" custom={idx} transition={{ delay: idx * animationDelay }} variants={imageVariants} animate={inView ? "Visible" : "hidden"} >
                <Image key={idx} src={src} width={width} height={height} alt="skills icon images" />
            </motion.div>
            <span className='text-white font-semibold'>{skill}</span>
        </div>
        
    )
}

export default SkillDataIcons
