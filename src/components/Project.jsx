import React from "react";
import project1 from "../assets/project_1.png";

const projects = [
    {
        title: "Portfolio Website",
        description:
          "A personal portfolio built with Next.js. It showcases my projects, skills, and experience.",
        imageUrl:
          "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
        link: "#portfolio",
        github: "https://github.com/your-username/portfolio",
        live: "https://yourportfolio.vercel.app",
        techStack: ["Next.js", "Tailwind CSS"],
      },
  {
    title: "E-commerce Web App",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB...",
    imageUrl: project1,
    link: "#ecommerce",
    github: "https://github.com/your-username/ecommerce-app",
    live: "https://ecommerce-demo.vercel.app",
    techStack: ["React", "Node.js", "MongoDB"],
  },
 
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js. It showcases my projects, skills, and experience.",
    imageUrl:
      "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
    link: "#portfolio",
    github: "https://github.com/your-username/portfolio",
    live: "https://yourportfolio.vercel.app",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js. It showcases my projects, skills, and experience.",
    imageUrl: project1,
    link: "#portfolio",
    github: "https://github.com/your-username/portfolio",
    live: "https://yourportfolio.vercel.app",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js. It showcases my projects, skills, and experience.",
    imageUrl:
      "https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg",
    link: "#portfolio",
    github: "https://github.com/your-username/portfolio",
    live: "https://yourportfolio.vercel.app",
    techStack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js. It showcases my projects, skills, and experience.",
    imageUrl: project1,
    link: "#portfolio",
    github: "https://github.com/your-username/portfolio",
    live: "https://yourportfolio.vercel.app",
    techStack: ["Next.js", "Tailwind CSS"],
  },
 

  // other projects...
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-lg">
          My Projects
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          🚧 Crafted with passion using modern tech.
        </p>

        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] hover:shadow-[0_4px_40px_rgba(0,0,0,0.4)] transition duration-300 backdrop-blur-md"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <a
                    href={project.link}
                    className="inline-block mt-2 px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 hover:scale-105 transition-all duration-300"
                  >
                    View Project
                  </a> */}
                {/* <a href={project.link}>View Project</a> */}
                <hr />
                <div className="flex gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full transition"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-105 transition-all rounded-full"
                  >
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curve Bottom SVG (optional) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#111827"
            d="M0,160L60,186.7C120,213,240,267,360,272C480,277,600,235,720,213.3C840,192,960,192,1080,192C1200,192,1320,192,1380,192L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Projects;
