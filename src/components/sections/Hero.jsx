// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react';
import profilePicture from '../../assets/profile.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Subtle Interactive Gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700 opacity-40"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(16, 185, 129, 0.08), transparent 50%)`
          }}
        />
        
        {/* Ambient Orbs - Emerald/Teal Only */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/10 via-teal-400/10 to-transparent dark:from-emerald-500/20 dark:via-teal-500/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-400/10 to-emerald-400/10 dark:from-teal-500/20 dark:to-emerald-500/15 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-pulse-slow delay-1000" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center px-6 lg:px-12 xl:px-16 pt-20 pb-16">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className={`flex flex-col justify-center space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Available for Opportunities
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Daniel Maseya
                </p>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  Building Digital
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
                    Experiences
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                I craft <span className="font-semibold text-emerald-600 dark:text-emerald-400">high-performance applications</span> and intuitive interfaces that transform ideas into powerful digital solutions.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Django', 'Tailwind', 'PostgreSQL'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#projects" 
                  className="group px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-base overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    View My Work
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-base hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105"
                >
                  Let's Talk
                </a>
              </div>

              {/* Info */}
              <div className="flex items-center gap-5 pt-2 text-slate-600 dark:text-slate-400 text-sm">
                <span className="font-medium">📍 Kigali, Rwanda</span>
                <div className="h-1 w-1 rounded-full bg-slate-400" />
                <span className="font-medium">Open to Remote</span>
              </div>
            </div>

            {/* Right Column: Profile Picture (Smaller) */}
            <div className={`flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Ambient Glow */}
              <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 rounded-full blur-3xl" />
              
              {/* Card Container - Smaller Size */}
              <div className="relative group w-full max-w-[350px] aspect-[3/4]">
                
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-emerald-500 dark:to-teal-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700" />
                
                {/* Main Card */}
                <div className="relative h-full w-full rounded-3xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-2xl p-3 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                  
                  {/* Image Frame */}
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent dark:from-slate-950/30 z-10" />
                    
                    {/* Profile Image */}
                    <img 
                      src={profilePicture} 
                      alt="Daniel Maseya" 
                      className="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700" 
                    />

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-500/50 dark:border-emerald-400/50 rounded-tl-2xl z-20" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-teal-500/50 dark:border-teal-400/50 rounded-br-2xl z-20" />

                    {/* Info Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 z-20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                            Software Engineer
                          </p>
                          <p className="text-slate-900 dark:text-white font-bold text-lg mt-0.5">
                            Daniel Maseya
                          </p>
                        </div>
                        
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Simple Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .delay-300 { animation-delay: 0.3s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
};

export default Hero;