"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import SkillDataIcons from "../sub/SkillDataIcons";

interface Skill {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
}

interface Props {
  title: string;
  skills: Skill[];
  marquee?: boolean; // default false
}

const SkillCategory: React.FC<Props> = ({ title, skills, marquee = false }) => {
  return (
    <div className="card card-border timeline-card rounded-xl p-5 w-full">
      {marquee ? (
        // Marquee layout: heading left, skills scrolling right
        <div className="flex flex-row items-center gap-5 w-full">
          <div className="w-1/5 flex justify-center">
            <h1 className="text-white text-lg text-center font-bold animate-pulse">
              {title}
            </h1>
          </div>
          <div className="w-4/5">
            <Marquee gradient={true} gradientColor={"[17, 24, 39]"} speed={50} pauseOnHover>
              {[...skills,...skills].map(({ skill_name, Image, width, height }, index) => (
                <div key={skill_name} className="flex items-center p-2">
                  <SkillDataIcons
                    skill={skill_name}
                    idx={index}
                    src={Image}
                    width={width}
                    height={height}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      ) : (
        // Grid layout: heading top, icons below
        <>
          <h1 className="text-white text-center text-3xl font-bold animate-pulse mb-6">
            {title}
          </h1>
          <div className="flex flex-row justify-center flex-wrap gap-5">
            {skills.map(({ skill_name, Image, width, height }, index) => (
              <SkillDataIcons
                key={skill_name}
                skill={skill_name}
                idx={index}
                src={Image}
                width={width}
                height={height}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SkillCategory;
