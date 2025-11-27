// src/App.jsx
import { useEffect, useState } from "react";

import BackToTop from "./components/layout/BackToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import About from "./components/sections/About";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage on first render
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
      // default to dark on first visit
      setTheme("dark");
    }
  }, []);

  // Apply theme to <html> and save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navbar receives the theme + toggle function */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main content */}
      <main>
        {/* Full-bleed Hero:
            outer wrapper stretches full width using negative margins
            inner container keeps hero content aligned with the page grid */}
        <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </div>

        {/* Centered content for the rest of the site */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Blog />
          <Contact />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
