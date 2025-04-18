// const About = () => {
//     const educationData = [
//       {
//         degree: "Bachelor of Technology (B.Tech)",
//         institution: "XYZ University",
//         year: "2018 - 2022",
//         details: "Specialized in Computer Science and Engineering. Learned about software development, data structures, algorithms, and more.",
//       },
//       {
//         degree: "Full Stack Web Development",
//         institution: "ABC Bootcamp",
//         year: "2022 - 2023",
//         details: "Completed an intensive bootcamp on Full Stack Web Development, focusing on React, Node.js, Express, MongoDB, and modern web technologies.",
//       },
//       {
//         degree: "Full Stack Web Development",
//         institution: "ABC Bootcamp",
//         year: "2022 - 2023",
//         details: "Completed an intensive bootcamp on Full Stack Web Development, focusing on React, Node.js, Express, MongoDB, and modern web technologies.",
//       },
//     ];
  
//     const experienceData = [
//       {
//         role: "Software Developer",
//         company: "Tech Innovations Pvt. Ltd.",
//         year: "2023 - Present",
//         details: "Developing and maintaining web applications using React and Node.js. Working with a team to build scalable solutions for clients.",
//       },
//       {
//         role: "Intern - Web Developer",
//         company: "Startup Labs",
//         year: "2022",
//         details: "Worked as an intern, building responsive websites and user interfaces using HTML, CSS, and JavaScript. Assisted senior developers with project delivery.",
//       },
//       {
//         role: "Intern - Web Developer",
//         company: "Startup Labs",
//         year: "2022",
//         details: "Worked as an intern, building responsive websites and user interfaces using HTML, CSS, and JavaScript. Assisted senior developers with project delivery.",
//       },
//     ];
  
//     return (
//       <section id="about" className="py-24 bg-gray-900 text-white">
//         <div className="container mx-auto text-center">
//           <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600">
//             My Journey
//           </h2>
//           <p className="text-xl text-gray-400 mb-16">Here's a look at my educational path and professional experience.</p>
  
//           <div className="flex flex-col md:flex-row gap-16 justify-center relative">
//             {/* Education Timeline */}
//             <div className="md:w-1/2 space-y-12 relative">
//               <h3 className="text-3xl font-bold text-cyan-500 mb-6">Education</h3>
//               <div className="absolute left-1/2 w-px h-full bg-cyan-500 transform -translate-x-1/2 top-0"></div>
//               <div className="space-y-12">
//                 {educationData.map((edu, index) => (
//                   <div key={index} className="relative">
//                     <div className="absolute left-1/2 w-6 h-6 bg-cyan-500 rounded-full transform -translate-x-1/2 top-0 shadow-xl transition-all duration-300 hover:scale-125"></div>
//                     <div className="bg-[#1c2b38] p-8 rounded-xl shadow-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
//                       <h4 className="text-2xl font-semibold text-cyan-400">{edu.degree}</h4>
//                       <p className="text-lg text-gray-300">{edu.institution}</p>
//                       <p className="text-sm text-gray-500">{edu.year}</p>
//                       <p className="mt-2 text-gray-300">{edu.details}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
  
//             {/* Experience Timeline */}
//             <div className="md:w-1/2 space-y-12 relative">
//               <h3 className="text-3xl font-bold text-cyan-500 mb-6">Experience</h3>
//               <div className="absolute left-1/2 w-px h-full bg-cyan-500 transform -translate-x-1/2 top-0"></div>
//               <div className="space-y-12">
//                 {experienceData.map((exp, index) => (
//                   <div key={index} className="relative">
//                     <div className="absolute left-1/2 w-6 h-6 bg-cyan-500 rounded-full transform -translate-x-1/2 top-0 shadow-xl transition-all duration-300 hover:scale-125"></div>
//                     <div className="bg-[#1c2b38] p-8 rounded-xl shadow-2xl hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
//                       <h4 className="text-2xl font-semibold text-cyan-400">{exp.role}</h4>
//                       <p className="text-lg text-gray-300">{exp.company}</p>
//                       <p className="text-sm text-gray-500">{exp.year}</p>
//                       <p className="mt-2 text-gray-300">{exp.details}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };
  
//   export default About;
  

const AboutPathwise = () => {
    const education = [
      {
        title: "B.Tech in CSE",
        place: "XYZ University",
        year: "2018 - 2022",
        desc: "Specialized in Computer Science & Engineering. Learned DSA, DBMS, OS, etc.",
      },
      {
        title: "Full Stack Bootcamp",
        place: "ABC Bootcamp",
        year: "2022 - 2023",
        desc: "Hands-on MERN stack training with real-world projects and deployments.",
      },
    ];
  
    const experience = [
      {
        title: "Intern - Web Developer",
        place: "Startup Labs",
        year: "2022",
        desc: "Created UIs using HTML/CSS/JS, contributed to projects and agile workflow.",
      },
      {
        title: "Software Developer",
        place: "Tech Innovations Pvt. Ltd.",
        year: "2023 - Present",
        desc: "Developing scalable web apps with React, Node.js, MongoDB, and REST APIs.",
      },
    ];
  
    return (
      <section id="about" className="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-24 text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
  
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 mb-20">
            My Journey
          </h2>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-cyan-300 mb-12 text-center">🎓 Education</h3>
              <div className="relative border-l-4 border-cyan-400 pl-8 space-y-16">
                {education.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[30px] top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-md group-hover:scale-110 transition-transform"></div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-yellow-300">{item.title}</h4>
                      <p className="text-lg text-white">{item.place}</p>
                      <p className="text-sm text-gray-300">{item.year}</p>
                      <p className="mt-2 text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Experience Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-cyan-300 mb-12 text-center">💼 Experience</h3>
              <div className="relative border-l-4 border-cyan-400 pl-8 space-y-16">
                {experience.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[30px] top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-md group-hover:scale-110 transition-transform"></div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-yellow-300">{item.title}</h4>
                      <p className="text-lg text-white">{item.place}</p>
                      <p className="text-sm text-gray-300">{item.year}</p>
                      <p className="mt-2 text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutPathwise;
  



// const About = () => {
//     const educationData = [
//       {
//         degree: "Bachelor of Technology (B.Tech)",
//         institution: "XYZ University",
//         year: "2018 - 2022",
//         details: "Specialized in Computer Science and Engineering. Learned about software development, data structures, algorithms, and more.",
//       },
//       {
//         degree: "Full Stack Web Development",
//         institution: "ABC Bootcamp",
//         year: "2022 - 2023",
//         details: "Completed an intensive bootcamp on Full Stack Web Development, focusing on React, Node.js, Express, MongoDB, and modern web technologies.",
//       },
//     ];
  
//     const experienceData = [
//       {
//         role: "Software Developer",
//         company: "Tech Innovations Pvt. Ltd.",
//         year: "2023 - Present",
//         details: "Developing and maintaining web applications using React and Node.js. Working with a team to build scalable solutions for clients.",
//       },
//       {
//         role: "Intern - Web Developer",
//         company: "Startup Labs",
//         year: "2022",
//         details: "Built responsive UIs using HTML, CSS, JavaScript. Assisted senior developers in production delivery and performance optimization.",
//       },
//     ];
  
//     return (
//       <section
//         id="about"
//         className="relative py-24 px-4 sm:px-8 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 text-white overflow-hidden"
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
  
//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-lg">
//             My Journey
//           </h2>
//           <p className="text-xl text-gray-300 mb-16">
//             🎯 Exploring tech, building ideas, and growing through experience.
//           </p>
  
//           <div className="flex flex-col md:flex-row gap-16 justify-center">
//             {/* Education Section */}
//             <div className="md:w-1/2 space-y-10 relative">
//               <h3 className="text-3xl font-bold text-cyan-400 mb-4 text-left">📚 Education</h3>
//               {educationData.map((edu, index) => (
//                 <div
//                   key={index}
//                   className="relative bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl p-6 shadow-xl backdrop-blur-lg hover:scale-[1.02] transition duration-300"
//                 >
//                   <h4 className="text-2xl font-semibold text-yellow-300">{edu.degree}</h4>
//                   <p className="text-lg text-white">{edu.institution}</p>
//                   <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
//                   <p className="text-gray-200">{edu.details}</p>
//                 </div>
//               ))}
//             </div>
  
//             {/* Experience Section */}
//             <div className="md:w-1/2 space-y-10 relative">
//               <h3 className="text-3xl font-bold text-cyan-400 mb-4 text-left">💼 Experience</h3>
//               {experienceData.map((exp, index) => (
//                 <div
//                   key={index}
//                   className="relative bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl p-6 shadow-xl backdrop-blur-lg hover:scale-[1.02] transition duration-300"
//                 >
//                   <h4 className="text-2xl font-semibold text-pink-400">{exp.role}</h4>
//                   <p className="text-lg text-white">{exp.company}</p>
//                   <p className="text-sm text-gray-400 mb-2">{exp.year}</p>
//                   <p className="text-gray-200">{exp.details}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
  
//         {/* Bottom Curve */}
//         <div className="absolute bottom-0 w-full">
//           <svg
//             viewBox="0 0 1440 320"
//             className="w-full h-28"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="#111827"
//               d="M0,224L60,197.3C120,171,240,117,360,122.7C480,128,600,192,720,213.3C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
//             />
//           </svg>
//         </div>
//       </section>
//     );
//   };
  
//   export default About;
  