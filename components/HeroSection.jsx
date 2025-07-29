import React from "react";
import { Helmet } from 'react-helmet-async';
import { FileText, Mail } from 'lucide-react';

const phrases = [
  "I craft stunning UIs with React & Tailwind",
  "I build full-stack web apps with the MERN stack",
  "I develop responsive, scalable applications using MongoDB, Express, React & Node.js",
  "I create dynamic APIs with Express and Node.js",
  "I design and manage NoSQL databases with MongoDB",
  "I implement seamless user experiences with React",
  "I integrate backend services and frontend interfaces",
];

const Typewriter = () => {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[phraseIndex];
      if (!deleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === current.length) setDeleting(true);
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, deleting ? 40 : 120);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left">
      {text}
      <span className="border-r-2 border-current animate-pulse ml-1"></span>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Mehedi Hasan | Full-Stack Developer Portfolio</title>
      </Helmet>

      <section id="home">
        <div className="md:pl-24 min-h-screen px-6 py-20 bg-base-100 text-base-content flex items-center">
          <main className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12 w-full">

            {/* Text content */}
            <div className="flex-1 text-center md:text-left px-6 py-10 space-y-8">
              <p className="text-xl font-light font-serif">Hi, I’m</p>
              <h1 className="text-4xl sm:text-5xl font-bold font-serif">Mehedi Hasan</h1>
              <Typewriter />

              <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
                <a
                  href="https://drive.google.com/uc?export=download&id=1855oZnOicLuZU-ZLXQUxO-hj1hXI9LH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2 px-5 py-2 font-semibold shadow hover:scale-105 transition-transform duration-300"
                >
                  <FileText className="w-5 h-5" />
                  My Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-outline flex items-center gap-2 px-5 py-2 font-semibold shadow hover:scale-105 transition-transform duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center order-first md:order-last mt-8 md:mt-0">
              <img
                src="https://i.ibb.co/jZkXcSJJ/6b2a9bc5-6b88-468c-93a6-ff8d4e71cd1c33.png"
                alt="Mehedi Hasan"
                className="bg-base-200 text-base-content max-h-[500px] w-auto shadow-lg p-6 md:p-8 border border-base-content/10"
              />
            </div>
            
          </main>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
