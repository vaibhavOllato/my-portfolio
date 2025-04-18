import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Contact />
        {/* Add other sections here */}
      </div>
    </>
  );
}

export default App;
