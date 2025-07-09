import { Helmet } from 'react-helmet-async';
import React from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare, FaTools,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiNextdotjs, SiMongodb, SiPostman, SiJsonwebtokens, SiExpress, SiMongoose
} from "react-icons/si";
import { MdOutlineApi } from "react-icons/md";

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
    <>
      <Helmet>
        <title>Mehedi Hasan - About</title>
      </Helmet>
      <div className="md:pl-24 mt-16 mb-16 min-h-screen px-6 py-10 bg-base-100 text-base-content">
    
      {/* Header */}
     <h2 className="text-3xl md:text-4xl  font-semibold mb-4">About Me</h2>
        <hr className="border-base-content opacity-30 mb-10" />

      {/* Bio */}
      {/* <div className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-light mb-4">About Myself</h2>
        <p className="text-base-content/70 leading-relaxed">
          Hi, I’m Mehedi Hasan — a passionate Frontend Developer based in Bangladesh. I specialize in building modern, responsive web applications using technologies like React, Tailwind CSS, and Next.js.
        </p>
      </div> */}
       <div className="mb-12 max-w-3xl mx-auto">
      <div className="bg-base-200 text-base-content shadow-lg rounded-xl p-6 md:p-8 border border-base-content/10">
        <h2 className=" text-2xl md:text-3xl font-semibold mb-4 ">The Developer Story</h2>
        <hr className="border-base-content opacity-30 mb-4" />

        
        <p className="text-base-content/70 leading-relaxed text-sm md:text-base">
          Hi, I’m <span className="font-semibold text-primary">Mehedi Hasan</span> — a passionate Frontend Developer based in Bangladesh. I specialize in building modern, responsive web applications using technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Next.js</strong>.
        </p>
      </div>
    </div>

      {/* Timeline */}
      {/* <div className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-light mb-4">Work Timeline</h2>
        {[
          ["MERN Stack Development Trainee", "Programming Hero", "2024 (6-Month Course)"],
          ["Frontend Projects & Practice", "Self-Learning", "2018–2025"],
          ["UI/UX Design Practice", "Self-Learning", "2018–2024"],
        ].map(([title, org, year], idx) => (
          <div key={idx} className="grid sm:grid-cols-3 gap-4 border-b border-base-content/40 py-2 text-sm">
            <div className="font-medium">{title}</div>
            <div className="text-base-content/60">{org}</div>
            <div className="text-base-content/60">{year}</div>
          </div>
        ))}
      </div> */}
      

      {/* Skills */}
     

       <div className="mb-12 w-full overflow-hidden px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
      <hr className="border-base-content opacity-30 mb-10" />

      <div className="py-6 relative">
        <div className="flex space-x-6 w-max animate-scroll-horizontal  ">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="h-24 flex flex-col items-center justify-center md:min-w-[140px] md:h-44 bg-base-200 text-base-content rounded-xl p-4 shadow-md hover:scale-105 transition"
            >
              <div className="mb-3">{skill.icon}</div>
              <div className="text-sm font-medium">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline animation CSS */}
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
   {/* GitHub Activity */}
        <div className="mb-12 w-full overflow-hidden px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">GitHub Activity</h2>
          <hr className="border-base-content opacity-30 mb-10" />



          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Contribution Graph */}
            <div className="flex flex-col h-full bg-base-200 text-base-content rounded-2xl shadow-xl border border-base-content/10 hover:shadow-2xl transition duration-300 p-6 md:p-8">
              <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 mb-3">Contribution Graph</h3>
              <div className="bg-base-100 rounded-xl p-4 flex-1 flex items-center justify-center">
                <img
                  src="https://ghchart.rshah.org/HasanCodeX"
                  alt="GitHub Contribution Chart"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="flex flex-col h-full bg-base-200 text-base-content rounded-2xl shadow-xl border border-base-content/10 hover:shadow-2xl transition duration-300 p-6 md:p-8">
              <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 mb-3">Stats Overview</h3>
              <div className="bg-base-100 rounded-xl p-4 flex-1 flex items-center justify-center">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=HasanCodeX&show_icons=true&hide_border=true&theme=radical`}
                  alt="GitHub Stats"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Services */}
      <div >
       <h2 className="text-2xl md:text-3xl font-semibold mb-4">Services</h2>
        <hr className="border-base-content opacity-30 mb-10" />
        
        <div className="mb-12 max-w-3xl mx-auto grid gap-6 md:grid-cols-3">
  {[
    ["UI & UX Design", "Creating user-centered interfaces with responsive design."],
    ["Frontend Development", "Building fast, responsive UIs using React and Tailwind."],
    ["MERN Stack ", "Full-stack development with MongoDB, Express, React, Node."],
  ].map(([title, desc], idx) => (
    <div
      key={idx}
      className="bg-base-200 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-default"
    >
      <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 mb-3">
        {title}
      </h3>
      <p className="text-base-content/80">{desc}</p>
    </div>
  ))}
</div>

      </div>
    </div>
    </>
  );
};

export default AboutMe;
