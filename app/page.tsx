import Hero from "@/components/main/Hero"
import Skills from "@/components/main/Skills"
import Projects from "@/components/main/Projects"
// Make sure the file exists at components/main/ContactMe.tsx
import ContactMe from "@/components/main/Contactme";
import AboutMe from "@/components/main/AboutMe";
import TapeSection from "@/components/main/TapeSection";
// import ExperienceSection from "@/components/main/ExperienceSection";
import ProjectsNew from "@/components/main/ProjectsNew"

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        {/* hero section */}
        <Hero/>
        <Skills/>
        <TapeSection/>
        <AboutMe/>
        <Projects/>
        <ProjectsNew/>
        {/* contact me form */}
        <ContactMe/>
      </div>
    </main>
  );
}
