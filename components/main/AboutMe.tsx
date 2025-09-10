"use client";
import React,{useRef} from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { expCards } from "../../constants/index";
import {utdallas,bmw,unitas,revmeup,memoji,map} from "@/constants"
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";


const AboutMe = () => {


  const containerRef = useRef<HTMLDivElement>(null);

  // Each word has position (x, y) and velocity (dx, dy)
  // const [items, setItems] = useState([
  //   { text: "Data Engineer", x: 20, y: 20, dx: 2, dy: 1.5 },
  //   { text: "Full Stack Developer", x: 100, y: 60, dx: -2, dy: 1.2 },
  //   { text: "Data Analyst", x: 50, y: 120, dx: 1.5, dy: -2 },
  // ]);

  // useEffect(() => {
  //   let animationFrame: number;

  //   const animate = () => {
  //     setItems((prev) =>
  //       prev.map((item) => {
  //         const container = containerRef.current;
  //         if (!container) return item;

  //         const rect = container.getBoundingClientRect();
  //         const maxX = rect.width - 150; // account for box width
  //         const maxY = rect.height - 40; // account for box height

  //         let { x, y, dx, dy } = item;

  //         x += dx;
  //         y += dy;

  //         // Bounce logic
  //         if (x <= 0 || x >= maxX) dx = -dx;
  //         if (y <= 0 || y >= maxY) dy = -dy;

  //         return { ...item, x, y, dx, dy };
  //       })
  //     );

  //     animationFrame = requestAnimationFrame(animate);
  //   };

  //   animationFrame = requestAnimationFrame(animate);
  //   return () => cancelAnimationFrame(animationFrame);
  // }, []);

  return (
    <section className="w-full md:mt-40 mt-20 section-padding xl:px-0" id="about-me">
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between mt-10 md:px-20 px-5 gap-10 relative">
        {/* Left: About Me */}
        
        <div className="w-full md:w-2/6 flex flex-col space-y-10">

            <motion.h1
            variants={slideInFromTop}
            className="text-[32px] md:text-[40px] font-semibold text-transparent 
                       bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center "
          >
            About Me
            </motion.h1>

          {/* Card 1 */}
          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="mt-5 flex flex-col items-center ">
                <div className="text-white flex gap-2">
                    <PiStarFourFill size={27} className="animate-spin"/>
                    <h2 className="text-2xl font-semibold text-white mb-8"> Who I Am</h2>
                </div>
              <p className="text-[#839cb5] mt-2 text-center">
                Passionate about building scalable application, ETL Pipelines and AI-driven apps.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="mt-5 flex flex-col items-center">
              <div className="text-white flex gap-2  mb-5">
                    <PiStarFourFill size={27} className="animate-spin"/>
                    <h2 className="text-2xl font-semibold text-white "> Interests</h2>
              </div>


                <div ref={containerRef} className="flex flex-wrap gap-2">

                    <motion.div
                      variants={slideInFromTop}
                      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                      <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                      <h1 className="Welcome-text text-[13px] ">
                          Data Engineer
                      </h1>
                    </motion.div>

                    <motion.div
                        variants={slideInFromTop}
                        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    >
                        <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                        <h1 className="Welcome-text text-[13px]">
                            Full Stack Developer
                        </h1>
                    </motion.div>

                    <motion.div
                      variants={slideInFromTop}
                      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                    > 
                      <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                      <h1 className="Welcome-text text-[13px]">
                          Data Analyst 
                      </h1>
                    </motion.div>

                </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="mt-2 flex flex-col items-center">
                <div className="text-white flex gap-2">
                    <PiStarFourFill size={27} className="animate-spin"/>
                    <h2 className="text-2xl font-semibold text-white mb-10"> Beyond Code </h2>
                </div>
              
                <div className="flex gap-2">

                  <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                  >
                    <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px] ">
                        Volleyball
                    </h1>
                  </motion.div>

                  <motion.div
                      variants={slideInFromTop}
                      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                  >
                      <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                      <h1 className="Welcome-text text-[13px]">
                          Soccer
                      </h1>
                  </motion.div>

                  <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <PiStarFourFill className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        Fitness 
                    </h1>
                </motion.div>

                </div>
                

                

            </div>
          </div>

          {/* Card 4 map*/}
          <div className="card card-border timeline-card rounded-xl p-0.5 relative">
            <div className=" flex flex-col justify-center">
               <Image src={map.Image} alt="map" width={1000} height={40} className="relative z-0 rounded-xl"/>
                {/* Gradient Circle */}
              <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                {/* Memoji Image */}
                <button
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/3000+Northside+Blvd,+Richardson,+TX+75080/@32.9950458,-96.7511974,17z/data=!3m1!4b1!4m6!3m5!1s0x864c22075fa8a2b1:0xadd2a14b8f8ef82e!8m2!3d32.9944077!4d-96.7487302!16s%2Fg%2F11j1m2lgp0?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D", // replace with your coordinates
                      "_blank"
                    )
                  }
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer "
                >
                  <Image
                    src={memoji.Image}
                    alt="memoji"
                    width={90}
                    height={90}
                  />
                </button>
              </div>
            </div>

        </div>


        {/* Vertical Timeline Line (Hidden on mobile) */}
        <div className="hidden md:block w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500 relative top-0"></div>

        {/* Right: Work Experience */}
      
        <div className="w-full md:w-4/6 space-y-10 md:mt-0 mt-[30%] ">

        {/* Right Heading */}
        <motion.h1
          variants={slideInFromTop}
          className="w-full md:w-4/6 text-[32px] md:text-[40px] font-semibold text-transparent 
                     bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center"
        >
          Work Experience
        </motion.h1>

          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="flex items-start mt-5 gap-5">
              <Image src={utdallas.Image} alt="dallas" width={utdallas.width} height={utdallas.height} />
              <div className="text-white">
                <h3 className="font-semibold text-2xl ">Graduate Teaching Assistant</h3>
                <p className="my-2 text-white-50 ">🗓️ August 2024 - December 2024</p>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="list-disc ml-5">
                  {expCards[0].responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 1 */}
          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="flex items-start mt-5 gap-5">
                <Image src={bmw.Image} alt="dallas" width={bmw.width} height={bmw.height}/>
              <div className="text-white">
                <h3 className="font-semibold text-2xl ">Analytics Engineer</h3>
                <p className="my-2 text-white-50 ">🗓️ May 2023 - December 2023</p>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="list-disc ml-5">
                  {expCards[1].responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="flex items-start mt-5 gap-5">
                <Image src={unitas.Image} alt="dallas" width={unitas.width} height={unitas.height}/>
              <div className="text-white">
                <h3 className="font-semibold text-2xl ">Software Developer</h3>
                <p className="my-2 text-white-50 ">🗓️ Jan 2022 - July 2022</p>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="list-disc ml-5">
                  {expCards[2].responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="card card-border timeline-card rounded-xl p-10">
            <div className="flex items-start mt-5 gap-5">
                <Image src={revmeup.Image} alt="dallas" width={revmeup.width} height={revmeup.height}/>
              <div className="text-white">
                <h3 className="font-semibold text-2xl ">Software Developer</h3>
                <p className="my-2 text-white-50 ">🗓️ January 2021 - July 2021</p>
                <p className="text-[#839cb5] italic">Responsibilities</p>
                <ul className="list-disc ml-5">
                  {expCards[3].responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


        </div>


      </div>

    </section>
  );
};

export default AboutMe;
