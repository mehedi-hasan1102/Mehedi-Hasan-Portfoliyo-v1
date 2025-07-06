import { Helmet } from 'react-helmet-async';
import React from "react";

const phrases = [
  "I craft stunning UIs with React & Tailwind",
  "I build modern web applications",
  "I develop responsive and beautiful websites",
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
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
      {text}
      <span className="border-r-2 border-current animate-pulse ml-1"></span>
    </h1>
  );
};

const HeroSection = () => {
  return (
    <>
      <Helmet>
        <title>Mehedi Hasan - Home</title>
      </Helmet>
      {/* <div className="pl-24 min-h-screen px-6 py-10 bg-base-100 text-base-content"> */}
      <div className="md:pl-24 mb-16 mt-16 min-h-screen px-0 py-0 bg-base-100 text-base-content">



        <main className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
          {/* Image (single) */}
          <div className="flex-1 flex justify-center order-first md:order-last mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/jZkXcSJJ/6b2a9bc5-6b88-468c-93a6-ff8d4e71cd1c33.png"
              alt="Mehedi Hasan"
              className="object-cover border-b-4 rounded-2xl w-[250px] sm:w-[300px] h-auto"
            />
          </div>

          {/* Text content */}
          <div className="text-center md:text-left px-6 py-10 flex-1 space-y-8">
            <p className=" text-xl font-light font-serif">Hi, I’m</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-serif">Mehedi Hasan</h1>
            <Typewriter />
            <p className="text-base sm:text-lg font-light max-w-md">
              A passionate Frontend Developer based in Bangladesh, I specialize in React, Tailwind CSS, and Next.js.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Resume Button */}

                {/* <a
    href="https://drive.google.com/file/d/1855oZnOicLuZU-ZLXQUxO-hj1hXI9LH8/view"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-primary  shadow-md hover:scale-105 transition-transform duration-300"
  > */}

                <a
                  href="https://drive.google.com/uc?export=download&id=1855oZnOicLuZU-ZLXQUxO-hj1hXI9LH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary shadow-md hover:scale-105 transition-transform duration-300"
                >
                  📄 My Resume
                </a>

                {/* Contact Me Button */}
                <a
                  href="/contact"
                  className="btn btn-outline  hover:scale-105 transition-transform duration-300"
                >
                  ✉️ Contact Me
                </a>
              </div>


            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default HeroSection;
