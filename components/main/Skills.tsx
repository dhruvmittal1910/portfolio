import React from "react";
import SkillText from "../sub/SkillText";
import SkillCategory from "./SkillCategory";
import {
  programming,
  frontend,
  backend,
  cloud,
  databases,
  dataeng,
  analytics,
} from "@/constants";

const Skills = () => {
  return (
    <section
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden pb-30 md:py-20 p-10"
      id="skills"
    >
      <SkillText />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <SkillCategory key={1} title="Programming Languages" skills={programming} marquee />
        <SkillCategory key={2} title="Frontend" skills={frontend} marquee />
        <SkillCategory key={3} title="Backend" skills={backend} marquee />
        <SkillCategory key={4} title="Cloud" skills={cloud} marquee />
        <SkillCategory key={5} title="Data Engineering" skills={dataeng} marquee />
        <SkillCategory key={6} title="Databases" skills={databases} marquee />
        <SkillCategory key={7} title="Analytics & Visualization" skills={analytics} marquee />
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-50 absolute flex items-center justify-center bg-cover">
          <video
            className="h-[300px] md:w-full md:h-[600px] object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
