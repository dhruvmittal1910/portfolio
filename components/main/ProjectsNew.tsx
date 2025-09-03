import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import Marquee from 'react-fast-marquee'
import {projects1} from "@/constants/index"

const ProjectsNew = () => {
    return (
        <div className='flex flex-col items-center justify-center py-10' id='projects'>
            
            <div className='h-full w-full gap-10 px-10 items-center justify-center z-20'>
                <Marquee speed={200} pauseOnHover={true} direction='right'>
                    {projects1.map((project,idx)=>(
                        <ProjectCard
                            key={idx}
                            src={project.src}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                          />
                    ))}
                </Marquee>
            </div>

        </div >
    )
}

export default ProjectsNew
