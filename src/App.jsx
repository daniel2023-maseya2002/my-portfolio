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
import DigitalTwin from "./pages/DigitalTwin";
import LifeOS from "./pages/LifeOS";

function App() {
  const [theme, setTheme] = useState("dark");
  const [currentPage, setCurrentPage] = useState("home");
  const [showLifeOS, setShowLifeOS] = useState(false);
  const [showDigitalTwin, setShowDigitalTwin] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    } else {
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
    setShowLifeOS(false);
    setShowDigitalTwin(false);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    setShowLifeOS(false);
    setShowDigitalTwin(false);
    window.scrollTo(0, 0);
  };

  const navigateToLifeOS = () => {
    setCurrentPage("home");
    setShowLifeOS(true);
    setShowDigitalTwin(false);
    setTimeout(() => {
      const element = document.getElementById('lifeos');
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  const navigateToDigitalTwin = () => {
    setCurrentPage("home");
    setShowDigitalTwin(true);
    setShowLifeOS(false);
    setTimeout(() => {
      const element = document.getElementById('digital-twin');
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  // Listen for footer navigation events
  useEffect(() => {
    const handleLifeOSNavigation = () => {
      navigateToLifeOS();
    };
    
    const handleHomeNavigation = () => {
      navigateToHome();
    };
    
    const handleDigitalTwinNavigation = () => {
      navigateToDigitalTwin();
    };
    
    window.addEventListener('navigate-to-lifeos', handleLifeOSNavigation);
    window.addEventListener('navigate-to-home', handleHomeNavigation);
    window.addEventListener('navigate-to-digital-twin', handleDigitalTwinNavigation);
    
    return () => {
      window.removeEventListener('navigate-to-lifeos', handleLifeOSNavigation);
      window.removeEventListener('navigate-to-home', handleHomeNavigation);
      window.removeEventListener('navigate-to-digital-twin', handleDigitalTwinNavigation);
    };
  }, []);

  // Render different pages based on currentPage state
  const renderContent = () => {
    if (currentPage === "blog") {
      return <BlogPage onBackToHome={navigateToHome} />;
    }

    return (
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog onViewAll={navigateToBlog} />
        
        {/* Digital Twin as a section */}
        <section id="digital-twin" className="relative w-full scroll-mt-20">
          <DigitalTwin />
        </section>
        
        {/* LIFE OS as a section */}
        <section id="lifeos" className="relative w-full scroll-mt-20">
          <LifeOS />
        </section>
        
        <Contact />
      </main>
    );
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={navigateToHome}
        onNavigateToLifeOS={navigateToLifeOS}
        onNavigateToDigitalTwin={navigateToDigitalTwin}
        showLifeOS={showLifeOS}
        showDigitalTwin={showDigitalTwin}
      />

      {renderContent()}

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;