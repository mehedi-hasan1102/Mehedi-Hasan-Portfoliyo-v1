


import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaTools,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman, SiJsonwebtokens, SiExpress, SiMongoose
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";
import GitHubCalendar from 'react-github-calendar';


const skills = [
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Mongoose", icon: <SiMongoose className="text-red-400 text-5xl" /> },
  { name: "REST APIs", icon: <MdOutlineApi className="text-blue-300 text-5xl" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-pink-400 text-5xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
  {
    name: "HTML & CSS",
    icon: (
      <>
        <FaHtml5 className="text-orange-600 text-5xl inline-block mr-1" />
        <FaCss3Alt className="text-blue-500 text-5xl inline-block" />
      </>
    ),
  },
  { name: "React Router", icon: <FaReact className="text-pink-300 text-5xl" /> },
  { name: "SSR", icon: <FaTools className="text-gray-400 text-5xl" /> },
  { name: "SSG", icon: <FaTools className="text-gray-400 text-5xl" /> },
];

const AboutMe = () => {
  return (
    <section id="about"  >
      
      <div className="md:pl-24  min-h-screen px-6 py-20 bg-base-100 text-base-content">


   
        {/* About Header */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Me</h2>
        {/* <hr className="border-base-content opacity-30 mb-10" /> */}
         <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>

        {/* Bio Section */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="bg-base-200 text-base-content shadow-lg  p-6 md:p-8 border border-base-content/10">
            <h2 className="text-lg font-semibold  pb-2 mb-3">The Developer Story</h2>
              <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
            <p className="text-base-content/70 leading-relaxed text-sm md:text-base">
              Hi, I’m <span className="font-semibold italic">Mehedi Hasan</span> — a passionate MERN Stack Developer based in Bangladesh. I specialize in building modern, responsive web applications using technologies like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
            </p>
          </div>
        </div>
{/* Education Section */}
<div className="mb-12 w-full overflow-hidden px-4 ">
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">Education</h2>
  {/* <hr className="border-base-content opacity-30 mb-10" /> */}
   <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
  
  <div className="max-w-3xl mx-auto grid gap-6 border-base-content/10">
    <div className="bg-base-200 p-5  shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default border border-base-content/10">
      <h3 className="text-lg font-semibold  pb-2 mb-2">
        BSc (Honours) in Physics
      </h3>
        <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
      <p className="text-base-content/90">National University, Bangladesh</p>
      <p className="text-sm text-base-content/70 mt-1">Expected Graduation: 2025</p>
    </div>
  </div>
</div>



        {/* Services Section */}
        <div className="mb-12 w-full overflow-hidden px-4 ">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Services</h2>
          {/* <hr className="border-base-content opacity-30 mb-10" /> */}
           <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
          <div className="mb-12 max-w-3xl mx-auto  grid gap-6 md:grid-cols-3 ">
            {[
              ["UI & UX Design", "Creating user-centered interfaces with responsive design."],
              ["Frontend Development", "Building fast, responsive UIs using React and Tailwind."],
              ["MERN Stack ", "Full-stack development with MongoDB, Express, React, Node."],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="border border-base-content/10 bg-base-200 p-5  shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                
                <h3 className="text-lg font-semibold  pb-2 mb-3">{title}</h3>
                
                  <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
<p className="text-base-content/80">{desc}</p>
                
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-12 w-full overflow-hidden px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
          {/* <hr className="border-base-content opacity-30 mb-10" /> */}
           <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
          <div className="py-6 relative">
            <div className="flex space-x-6 w-max animate-scroll-horizontal">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className=" border border-base-content/10 h-24 flex flex-col items-center justify-center md:min-w-[140px] md:h-44 bg-base-200 text-base-content  p-4 shadow-md hover:scale-105 transition"
                >
                  <div className="mb-3">{skill.icon}</div>
                  <div className="text-sm font-medium">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
          <style>
            {`
              @keyframes scroll-horizontal {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll-horizontal {
                animation: scroll-horizontal 30s linear infinite;
              }
            `}
          </style>
        </div>

        {/* GitHub Activity Section */}
        <div className="mb-12 w-full overflow-hidden px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">GitHub Activity</h2>
          {/* <hr className="border-base-content opacity-30 mb-10" /> */}
           <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
          <div className="flex justify-center items-center bg-base-200 p-6  shadow-md border border-base-content/10 max-w-6xl mx-auto">
            <GitHubCalendar
              username="mehedi-hasan1102"
              colorScheme="light"
              blockSize={14}
              blockMargin={4}
              fontSize={16}
            />
          </div>

        </div>




      </div>
      
    </section>
  );
};

export default AboutMe;