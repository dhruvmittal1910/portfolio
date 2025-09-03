import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Marquee from 'react-fast-marquee'
import {projects} from "@/constants/index"

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className='h-full w-full gap-10 px-10 items-center justify-center z-20'>
                <Marquee speed={200} pauseOnHover={true}>
                    {projects.map((project,idx)=>(
                        <ProjectCard
                            key={idx}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link ?? ""}
                          />
                    ))}
                </Marquee>
            </div>

        </div >
    )
}

export default Projects
