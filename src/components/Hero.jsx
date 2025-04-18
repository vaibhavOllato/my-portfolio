import React from "react";
import cover from "../assets/gradient-illustration-class-2023-celebration.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 overflow-hidden"
    >
      {/* Overlay glow and gradient */}
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-lg">
          Hi, I'm Vaibhav T.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          🚀 Passionate Full Stack Developer crafting immersive & modern web
          experiences using MERN Stack.
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            View My Projects
          </a>
        </div>
      </div>

      {/* Floating Hero Image (Optional - you can use your image or illustration) */}
      {/* <div className="absolute right-10 bottom-0 hidden md:block z-50">
        <img
          src="https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-programmer-it-developer-png-image_10439723.png"
          alt="Developer Illustration"
          className="w-[320px] drop-shadow-xl animate-float"
        />
      </div> */}

      {/* Curved bottom */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#111827"
            d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,112C840,128,960,192,1080,202.7C1200,213,1320,171,1380,149.3L1440,128V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href="#projects"
          className="animate-bounce text-white bg-white bg-opacity-10 p-3 rounded-full border border-white border-opacity-30 shadow-md hover:scale-110 transition"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
