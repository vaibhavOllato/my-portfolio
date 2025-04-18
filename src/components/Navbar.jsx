// import { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = ["Home", "Projects", "About", "Contact"];

//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[85%] bg-[#0f172a]/80 backdrop-blur-xl border border-[#334155] rounded-full z-50 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
//       <div className="flex justify-between items-center px-6 py-3">
//         {/* Logo */}
//         {/* <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-transparent bg-clip-text animate-textShadow">
//           Vaibhav T.
//         </h1> */}
//         <h1 className="text-white text-2xl">Vaibhav T.</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="relative text-slate-100 font-medium hover:text-cyan-400 transition duration-300 group"
//             >
//               {item}
//               <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
//             </a>
//           ))}
//         </div>

//         {/* Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4">
//           <div className="flex flex-col items-start gap-3 mt-2 bg-[#1e293b]/80 p-4 rounded-xl shadow-inner">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-slate-200 hover:text-cyan-400 transition duration-300 w-full"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[85%] bg-transparent backdrop-blur-md border border-transparent rounded-full z-50 shadow-xl px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white text-gradient bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Vaibhav T.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white font-medium transition-transform duration-500 ease-in-out transform hover:scale-110 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 mt-2">
          <div className="flex flex-col items-start gap-3 bg-[#1e293b] p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-medium hover:text-cyan-400 transition-colors duration-300 w-full"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
