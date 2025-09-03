import React from 'react'
import Image from "next/image"

interface Props {
  src: string, title: string, description: string, tech: string,link:string
}

const ProjectCard = ({ src, title, description, tech, link }: Props) => {
  return (
    <div className="relative card overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col h-[500px] w-100 mx-10  ">
      {/* Image container with fixed height */}
      <div className="w-full h-60 flex items-center justify-center bg-black/20 ">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="h-full w-auto object-contain rounded-t-lg"
        />
      </div>

      {/* Content section */}
      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 mb-2 text-gray-300 line-clamp-3">{description}</p>

        <div className="flex flex-row w-full items-center mt-auto">
          <button className="w-1/4 px-1 py-2 text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Tech Stack
          </button>
          <span className="w-3/4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pl-2">
            {tech}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
