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
import BlogPage from "./pages/BlogPage";

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentPage, setCurrentPage] = useState("home");

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

  // Handle navigation
  const navigateToBlog = () => {
    setCurrentPage("blog");
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo(0, 0);
  };

  // Render different pages based on currentPage state
  const renderContent = () => {
    if (currentPage === "blog") {
      return <BlogPage onBackToHome={navigateToHome} />;
    }

    return (
      <main>
        {/* Hero - Full width */}
        <Hero />

        {/* About - Full width with its own internal container */}
        <About />

        {/* Skills - Full width with its own internal container */}
        <Skills />

        {/* Projects - Full width with its own internal container */}
        <Projects />

        {/* Experience - Full width with its own internal container */}
        <Experience />

        {/* Education - Full width with its own internal container */}
        <Education />

        {/* Blog - Full width with its own internal container */}
        <Blog onViewAll={navigateToBlog} />

        {/* Contact - Full width with its own internal container */}
        <Contact />
      </main>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navbar receives the theme + toggle function and navigation props */}
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={navigateToHome}
      />

      {/* Main content */}
      {renderContent()}

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;