import React, { useState, useEffect } from "react";
import { FaGlobe, FaCode, FaServer, FaInfoCircle, FaTimes } from "react-icons/fa";

// Project data — note images array instead of single image
const projects = [
  {
    title: "Active Arena",
    description:
      "A production-ready play ground management app featuring real-time synchronization, JWT authentication, and optimized performance.",
    features: [
      "Payment integration with Stripe",
      "JWT Authentication flow",
      "Full CRUD operations",
    ],
    techStack: ["React 19", "Stripe", "Firebase"],
    liveLink: "https://buildbox-a12.web.app",
    frontendRepo:
      "https://github.com/mehedi-hasan1102/Active-Arena-Client",
    backendRepo:
      "https://github.com/mehedi-hasan1102/Active-Arena-Server",
    images: [
      "https://i.ibb.co/Rkvdr5YS/pexels9773.jpg",
      "https://i.ibb.co/7d9jJw84/Active-Arena-111.webp", 
      "https://i.ibb.co/xtPXvDhH/pexels-ajaybhargavguduru-863988.jpg", 
    ],
  },
  {
    title: "Food Garden",
    description:
      "A production-ready food management app featuring real-time synchronization, JWT authentication, and optimized performance.",
    features: [
      "Real-time synchronization with Firebase",
      "JWT Authentication flow",
      "Full CRUD operations",
    ],
    techStack: ["React 19", "Tailwind CSS", "Firebase"],
    liveLink: "https://food-garden-bd.web.app",
    frontendRepo:
      "https://github.com/mehedi-hasan1102/Food-Garden-Client",
    backendRepo:
      "https://github.com/mehedi-hasan1102/Food-Garden-Server",
    images: [
      "https://i.ibb.co/NnQx5NND/Food-Guardian-06-29-2025-01-13-AM.png",
      "https://i.ibb.co/7x50g4Vj/meet2.jpg",
      "https://i.ibb.co/cSqTBKXF/meet5.jpg", 
    ],
  },
  {
    title: "Plant Care Tracker",
    description:
      "Helps users manage and track plant care routines with reminders and notes.",
    features: ["Add/Edit Plants", "Reminders", "Light/Dark Theme"],
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://plant-care-tracker-bd.web.app",
    frontendRepo:
      "https://github.com/mehedi-hasan1102/Plant-Care-Client",
    backendRepo:
      "https://github.com/mehedi-hasan1102/Plant-Care-Server",
    images: [
      "https://i.ibb.co/27ssr5tp/Plant-Care-06-29-2025-12-43-AM.png",
      "https://i.ibb.co/5Xd0czvc/Houseplant-Primer-A-Guide-to-Basic-Care-and-Durable-Plants.jpg", 
      "https://i.ibb.co/DyWjQ7G/maxresdefault.jpg", 
    ],
  },
  {
    title: "Event Explorer",
    description:
      "A full-stack event booking platform where users can browse and reserve seats for local events.",
    features: ["Authentication", "Booking System", "Firebase Integration"],
    techStack: ["React", "Firebase", "Node.js"],
    liveLink: "https://event-explorer-bd.netlify.app",
    frontendRepo:
      "https://github.com/mehedi-hasan1102/Event-Explorer",
    images: [
      "https://i.ibb.co/VWcfS0BV/Home-Event-Explorer-06-29-2025-01-07-AM.png",
      "https://i.ibb.co/nqDYhzLP/image5.jpg", 
      "https://i.ibb.co/N26HnVz1/image8.jpg", 
    ],
  },
];

// Project Card Component with auto image slideshow
const ProjectCard = ({ project, onDetailsClick }) => {
  const {
    title,
    description,
    features,
    techStack,
    liveLink,
    frontendRepo,
    backendRepo,
    images,
  } = project;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="border border-base-content/10  p-6 flex flex-col md:flex-row gap-6 bg-base-200 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="w-full md:w-1/2">
        <img
          src={images[currentImageIndex]}
          alt={`${title} screenshot ${currentImageIndex + 1}`}
          className=" object-cover w-full h-full max-h-[250px]"
        />
      </div>

      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl font-bold mb-2 text-base-content">{title}</h2>
        <p className="text-sm mb-3 text-base-content/80">{description}</p>
        <ul className="text-sm mb-4 list-disc list-inside space-y-1 text-base-content/80">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4 justify-start">
          {techStack.map((tech, i) => (
            <span key={i} className="badge badge-outline text-xs px-3 py-1">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-start">
          {liveLink && (
            <a
              href={liveLink}
              className="btn btn-sm btn-outline gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe /> Live Site
            </a>
          )}
          {frontendRepo && (
            <a
              href={frontendRepo}
              className="btn btn-sm btn-outline gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode /> Client Code
            </a>
          )}
          {backendRepo && (
            <a
              href={backendRepo}
              className="btn btn-sm btn-outline gap-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaServer /> Server Code
            </a>
          )}
          <button
            onClick={() => onDetailsClick(project)}
            className="btn btn-sm btn-outline gap-2 "
          >
            <FaInfoCircle /> Details 
          </button>
        </div>
      </div>
    </div>
  );
};


const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0); // reset modal image to first on open
    document.getElementById("project_modal").showModal();
  };

  // Auto slide modal image every 3 seconds when modal open & project selected
  useEffect(() => {
    if (!selectedProject) return;

    const interval = setInterval(() => {
      setModalImageIndex((prevIndex) => {
        return prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 3000);

    // Cleanup on close or change
    return () => clearInterval(interval);
  }, [selectedProject]);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects">
      <div className="md:pl-24 min-h-screen px-6 py-20 bg-base-100 text-base-content text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">My Projects</h2>
        {/* <hr className="border-base-content opacity-30 mb-10" /> */}
         <div className="relative mb-12">
  <div className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-primary to-transparent animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}

        
        <dialog 
  id="project_modal" 
  className="modal backdrop-blur-sm bg-black/30 "
  aria-labelledby="project-modal-title"
  aria-modal="true"
>
  <div className="modal-box max-w-3xl bg-base-200 text-base-content rounded-none border border-base-content/10 shadow-xl">
    {selectedProject && (
      <article>
        <header className="mb-6">
          <figure className="relative aspect-video mb-6 overflow-hidden">
            <img
              src={selectedProject.images[modalImageIndex]}
              alt={`Screenshot of ${selectedProject.title} project`}
              className="w-full h-full object-cover shadow-md"
              loading="lazy"
            />
          </figure>
          
          <h2 id="project-modal-title" className="text-2xl font-bold text-primary mb-2">
            {selectedProject.title}
          </h2>
          
          <p className="text-base-content/80 leading-relaxed">
            {selectedProject.description}
          </p>
        </header>

        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-3">Key Features</h3>
          <ul className="space-y-2 text-base-content/80">
            {selectedProject.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="inline-block mr-2 text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold text-lg mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {selectedProject.techStack.map((tech, i) => (
              <span
                key={i}
                className="badge badge-outline px-3 py-1 text-xs hover:bg-base-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <footer className="flex flex-col space-y-4">
          <div className="flex flex-wrap gap-3">
            {selectedProject.liveLink && (
              <a
                href={selectedProject.liveLink}
                className="btn btn-outline btn-sm gap-2 hover:bg-base-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit live site"
              >
                <FaGlobe aria-hidden="true" /> 
                Live Site
              </a>
            )}
            {selectedProject.frontendRepo && (
              <a
                href={selectedProject.frontendRepo}
                className="btn btn-outline btn-sm gap-2 hover:bg-base-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View client code repository"
              >
                <FaCode aria-hidden="true" /> 
                Client Code
              </a>
            )}
            {selectedProject.backendRepo && (
              <a
                href={selectedProject.backendRepo}
                className="btn btn-outline btn-sm gap-2 hover:bg-base-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View server code repository"
              >
                <FaServer aria-hidden="true" /> 
                Server Code
              </a>
            )}
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button 
                className="btn btn-error btn-sm text-white gap-2 hover:bg-error/90 transition-colors"
                aria-label="Close project details"
              >
                <FaTimes aria-hidden="true" /> 
                Close
              </button>
            </form>
          </div>
        </footer>
      </article>
    )}
  </div>
</dialog>
      </div>
    </section>
  );
};
export default ProjectSection;
