// "use client"
import React, { Fragment } from 'react'
import { PiStarFourFill } from "react-icons/pi";

const TapeSection = () => {
    const words = [
        "Adaptability",
        "Problem-solving",
        "Communication",
        "Collaboration",
        "Detail",
        "Curiosity",
        "Accountability",
        "Thinking",
        "Creativity",
        "Timekeeping",
        "Integrity",
        "Empathy",
        "Proficiency",
        "Teamwork",
        "Ownership",
        "Discipline",
        "Leadership",
        "Strategy",
        "Decisiveness",
        "Learning",
        "Reliability",
        "Acumen",
        "Design",
        "Analysis",
        "Execution",
        "Motivation",
        "Resilience",
        "Feedback",
        "Intelligence",
        "Openness"
    ];
    return (
        <div className='py-16 lg:py-24 overflow-x-clip'>
            <div className=' -rotate-3 -mx-1 '>
                <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] '>
                    <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left'>
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {words.map((word) => (
                                    <div className=' inline-flex gap-4 items-center' key={word}>
                                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-lg uppercase' >{word}</span>
                                        <PiStarFourFill className='size-4  -rotate-122 text-white' />
                                    </div>
                                ))}
                            </Fragment>
                        ))}

                    </div>
                </div>

            </div>


        </div>
    )
}

export default TapeSection
