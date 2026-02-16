// src/components/sections/Hero.jsx
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import profilePicture from '../../assets/profile.jpeg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  const springY = useSpring(y, springConfig);
  const springScale = useSpring(scale, springConfig);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' }
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 via-teal-400/20 to-transparent dark:from-emerald-500/30 dark:via-teal-500/30 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
          className="absolute -bottom-32 -left-20 w-[700px] h-[700px] bg-gradient-to-tr from-teal-400/20 via-emerald-400/20 to-transparent dark:from-teal-500/30 dark:via-emerald-500/30 rounded-full blur-3xl"
        />

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-emerald-200/50 dark:text-emerald-800/30" />
              </pattern>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-emerald-300/30 dark:text-emerald-700/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent dark:via-emerald-400/30"
              style={{
                top: `${20 + i * 15}%`,
                left: '-10%',
                right: '-10%',
              }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y: springY, opacity, scale: springScale }}
        className="relative z-20 min-h-screen flex items-center px-6 lg:px-12 xl:px-16 pt-24 pb-20"
      >
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -50 }
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-8"
            >
              {/* Status Badge with Animation */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 w-fit group hover:scale-105 transition-transform duration-300"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Available for Opportunities
                </span>
                <span className="px-2 py-0.5 text-xs bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 rounded-full">
                  Remote
                </span>
              </motion.div>

              {/* Heading with Gradient */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">
                  Daniel Maseya
                </p>
                
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                  Building Digital{' '}
                  <motion.span
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-400 bg-[length:200%_auto]"
                  >
                    Experiences
                  </motion.span>
                </h1>
              </motion.div>

              {/* Description with Typing Effect */}
              <motion.p
                variants={textVariants}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
              >
                I craft{' '}
                <span className="relative inline-block">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    high-performance applications
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>{' '}
                and intuitive interfaces that transform ideas into powerful digital solutions.
              </motion.p>

              {/* Tech Stack with Hover Effects */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { name: 'React', icon: '⚛️' },
                  { name: 'Django', icon: '🐍' },
                  { name: 'Tailwind', icon: '🎨' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Node.js', icon: '🟢' }
                ].map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group relative px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-default"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-lg">{tech.icon}</span>
                      {tech.name}
                    </span>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ filter: 'blur(8px)' }}
                    />
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-base overflow-hidden shadow-xl"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-2">
                    View My Work
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="group relative px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-700 rounded-xl font-semibold text-base hover:border-emerald-500/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Let's Talk
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 pt-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Location & Availability */}
              <motion.div
                variants={textVariants}
                transition={{ delay: 1 }}
                className="flex items-center gap-5 pt-2 text-slate-600 dark:text-slate-400 text-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  <span className="font-medium">Kigali, Rwanda</span>
                </span>
                <div className="h-1 w-1 rounded-full bg-slate-400" />
                <span className="flex items-center gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="font-medium">Open to Remote</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: Profile Picture with Advanced Animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={isVisible ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[500px] h-[500px] border-2 border-dashed border-emerald-500/20 dark:border-emerald-400/20 rounded-full"
              />
              
              {/* Second Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border border-emerald-500/10 dark:border-emerald-400/10 rounded-full"
              />

              {/* Main Image Container */}
              <motion.div
                animate={{
                  y: mousePosition.y * 0.5,
                  x: mousePosition.x * 0.5,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className="relative group w-full max-w-[400px]"
              >
                {/* Multiple Glow Layers */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-8 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-emerald-500/30 rounded-full blur-3xl"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-2xl"
                />

                {/* Main Card with 3D Effect */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    rotateX: mousePosition.y * 0.1,
                    rotateY: mousePosition.x * 0.1,
                  }}
                  className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Glass Morphism Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/30 dark:to-teal-500/30 backdrop-blur-sm" />

                  {/* Image */}
                  <motion.img
                    src={profilePicture}
                    alt="Daniel Maseya"
                    className="h-full w-full object-cover object-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Corner Decorations */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-emerald-500 rounded-tl-3xl"
                  />
                  
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                    className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-teal-500 rounded-br-3xl"
                  />

                  {/* Floating Info Card */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.p
                          animate={{
                            backgroundPosition: ['0%', '100%', '0%'],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 bg-[length:200%_auto] uppercase tracking-wider"
                        >
                          Software Engineer
                        </motion.p>
                        <p className="text-slate-900 dark:text-white font-bold text-xl mt-1">
                          Daniel Maseya
                        </p>
                      </div>
                      
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.5, duration: 1 }}
                      className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-3"
                      style={{ originX: 0 }}
                    />
                  </motion.div>

                  {/* Particle Effects */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-500 rounded-full"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Scroll
          </span>
          <div className="w-5 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;