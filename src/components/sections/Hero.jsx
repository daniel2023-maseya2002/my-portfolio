// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import profilePicture from '../../assets/profile.jpeg';

const Hero = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
    { name: 'Django', icon: '🐍', color: 'from-emerald-400 to-teal-500' },
    { name: 'Tailwind', icon: '🎨', color: 'from-sky-400 to-blue-500' },
    { name: 'PostgreSQL', icon: '🐘', color: 'from-indigo-400 to-purple-500' }
  ];

  return (
    <section
      id="home"
      className="relative w-screen min-h-screen overflow-hidden"
      style={{ 
        width: '100vw',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    >
      {/* ===== THEME-AWARE BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-gradient-to-br dark:from-[#0A0F1C] dark:via-[#0F1525] dark:to-[#0A0F1C] transition-colors duration-500">
        
        {/* Animated gradient orbs with theme awareness */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${document.documentElement.classList.contains('dark') ? 'rgba(20, 184, 166, 0.25)' : 'rgba(20, 184, 166, 0.08)'}, transparent 70%)`,
          }}
        />
        
        {/* Dynamic glow orbs - Light theme variants */}
        <div 
          className="absolute top-1/4 -right-[15%] w-[1000px] h-[1000px] bg-gradient-to-r from-teal-500/20 via-emerald-500/15 to-transparent rounded-full blur-[120px] dark:from-teal-500/20 dark:via-emerald-500/15 dark:to-transparent from-teal-500/5 via-emerald-500/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        
        <div 
          className="absolute bottom-1/4 -left-[15%] w-[900px] h-[900px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-[120px] dark:from-emerald-500/15 dark:via-teal-500/10 dark:to-transparent from-emerald-500/5 via-teal-500/5 to-transparent"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        />
        
        {/* Top accent glow - Theme aware */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1500px] h-[600px] bg-gradient-to-b from-teal-500/10 to-transparent dark:from-teal-500/10 from-teal-500/3 rounded-full blur-[100px]" />
        
        {/* Modern grid pattern - Theme aware */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
        
        {/* Radial gradient overlay for depth */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, transparent 0%, ${document.documentElement.classList.contains('dark') ? 'rgba(10, 15, 28, 0.4)' : 'rgba(255, 255, 255, 0.1)'} 100%)`
          }}
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">
          
          {/* LEFT COLUMN - Enhanced Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Modern Status Badge with glow */}
            <div className="group relative inline-flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-500/10 dark:bg-teal-500/10 bg-teal-500/5 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30 border-teal-500/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
                </span>
                <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 tracking-wide">
                  {t("hero.status")}
                </span>
              </div>
            </div>

            {/* Premium Heading */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">
                {t("hero.name")}
              </p>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] tracking-tight">
                <span className="text-slate-900 dark:text-white block">{t("hero.title")}</span>
                <span className="text-slate-900 dark:text-white block mt-2">Digital</span>
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent block mt-2 animate-gradient">
                  {t("hero.titleHighlight")}
                </span>
              </h1>
            </div>

            {/* Role */}
            <div className="mt-4">
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {t("hero.role")}
              </span>
            </div>

            {/* Description with icon */}
            <div className="flex items-start gap-3 max-w-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{t("hero.techStack")}</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group relative transition-all duration-500`}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative px-4 py-2.5 rounded-full bg-white/5 dark:bg-white/5 bg-slate-100 backdrop-blur-sm border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-teal-500/50 transition-all duration-300 group-hover:scale-105 cursor-default flex items-center gap-2">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-4">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  {t("hero.viewProjects")}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-white/5 dark:bg-white/5 bg-slate-100 backdrop-blur-sm text-slate-900 dark:text-white border border-teal-500/30 dark:border-teal-500/30 border-teal-500/20 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-teal-500/10 hover:border-teal-400 hover:scale-105 active:scale-95"
              >
                <span className="relative flex items-center gap-2">
                  {t("hero.contactMe")}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Location Info */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium">{t("hero.location")}</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                  </svg>
                </div>
                <span className="font-medium">{t("hero.remote")}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-medium">{t("hero.timezone")}</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Profile Card */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group w-full max-w-[420px]">
              
              {/* Floating Badge - Modern Design */}
              <div className="absolute -top-6 -right-6 z-30 px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-100 to-white dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-xl border border-teal-500/40 dark:border-teal-500/40 border-teal-500/20 shadow-2xl flex items-center gap-2 animate-float">
                <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">{t("hero.softwareEngineer") || "Software Engineer"}</span>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Outer glow ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Main Card - Premium Glassmorphism */}
              <div className="relative bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-3xl border border-slate-200/50 dark:border-white/20 shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-teal-500/20">
                
                {/* Card header gradient */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-500/20 to-transparent pointer-events-none" />
                
                {/* Image Container */}
                <div className="relative p-4 pb-0">
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Animated border gradient */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    
                    <div className="relative bg-slate-100 dark:bg-slate-900/50 rounded-2xl overflow-hidden">
                      <img 
                        src={profilePicture} 
                        alt="Daniel Maseya" 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                      />
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-12 h-12 border-t-2 border-l-2 border-teal-500/60 rounded-tl-xl z-10" />
                    <div className="absolute bottom-3 right-3 w-12 h-12 border-b-2 border-r-2 border-emerald-500/60 rounded-br-xl z-10" />
                  </div>
                </div>

                {/* Premium Info Section */}
                <div className="relative p-6 pt-4">
                  {/* Name and title */}
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Daniel Maseya</h2>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 dark:bg-teal-500/10 border border-teal-500/30 dark:border-teal-500/30">
                      <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">{t("hero.role")}</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200 dark:border-white/10">
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 dark:text-white">2+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.yearsExp") || "Years Exp"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 dark:text-white">15+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.projects") || "Projects"}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-slate-900 dark:text-white">7+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{t("hero.clients") || "Clients"}</p>
                    </div>
                  </div>

                  {/* Contact badge */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-400">{t("hero.openForWork") || "Open for work"}</span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                        <span className="text-teal-600 dark:text-teal-400 font-semibold">{t("hero.available") || "Available"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 tracking-wider">{t("hero.scroll") || "SCROLL"}</span>
          <div className="w-6 h-10 rounded-full border-2 border-teal-500/30 flex justify-center relative">
            <div className="absolute top-1 w-1 h-2 bg-teal-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0px) translateX(-50%);
          }
          50% {
            transform: translateY(10px) translateX(-50%);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;