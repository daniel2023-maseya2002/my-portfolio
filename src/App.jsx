// src/App.jsx
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import About from './components/sections/About';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

import BlogIndexPage from './pages/Blog';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import DigitalTwin from './pages/DigitalTwin';
import LifeOS from './pages/LifeOS';
import ProjectDetail from './pages/ProjectDetail';
import ProjectsPage from './pages/Projects';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    setTheme(saved === 'light' || saved === 'dark' ? saved : 'dark');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  // Clean Home Page - Digital Twin and LIFE OS removed
  const Home = () => (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Blog />
      <Contact />
    </main>
  );

  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog-all" element={<BlogPage onBackToHome={() => window.location.assign('/')} />} />
        {/* Preserved routes for legacy pages */}
        <Route path="/digital-twin" element={<DigitalTwin />} />
        <Route path="/lifeos" element={<LifeOS />} />
      </Routes>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;