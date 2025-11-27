
const About = () => {
  // Data for the tech skills and statistic cards
  const techSkills = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Figma'];
  
  const stats = [
    {
      title: "Experience",
      value: "2+ Years",
      detail: "Building & Delivering Solutions",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-500", // New color for a fresh look
    },
    {
      title: "Focus",
      value: "Web Apps & UX",
      detail: "Full-Stack Design Thinking",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "Location",
      value: "Kigali, Rwanda",
      detail: "Open to Remote Work",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Projects",
      value: "10+ Systems",
      detail: "Deployed Real-World Impact",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-red-500 to-yellow-600",
    },
  ];

  return (
    // 1. Removed fixed background colors (bg-[#e4e4e7] dark:bg-[#0f172a])
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">
              About Me
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight mb-4">
            Crafting Digital Solutions with Purpose
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Description & Skills */}
          <div className="space-y-10">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I'm a <span className="font-bold text-slate-900 dark:text-white">Full-Stack Engineer and UX Enthusiast</span> passionate about turning complex challenges into intuitive, beautiful digital products. I enjoy bridging the gap between design thinking and robust backend infrastructure.
              </p>
              <p>
                My experience spans diverse domains, including fintech, mobility platforms, and critical healthcare systems. I am deeply committed to <span className="font-bold text-blue-500 dark:text-teal-400">clarity, performance, and maximizing user impact</span> in every project I undertake.
              </p>
            </div>

            {/* Skills/Technologies */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-5">
                Modern Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techSkills.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 text-sm font-medium rounded-full 
                               bg-slate-100 dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               border border-slate-200 dark:border-slate-600 
                               shadow-md dark:shadow-none
                               hover:border-blue-500 dark:hover:border-blue-500 
                               transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {stats.map((stat) => (
              <div 
                key={stat.title}
                className={`group rounded-2xl p-6 transition-all duration-500 
                            border border-slate-200 dark:border-slate-700 
                            bg-white dark:bg-slate-800 shadow-lg 
                            hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-indigo-500/10`}
              >
                <div className="flex items-start gap-4">
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} 
                                  flex items-center justify-center flex-shrink-0 
                                  shadow-xl shadow-slate-300/50 dark:shadow-slate-900/50`}>
                    {stat.icon}
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {stat.title}
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {stat.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Updated Design */}
        <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to transform your vision?
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Let's collaborate on innovative, scalable, and user-centered projects.
              </p>
            </div>
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 
                         text-white rounded-xl font-semibold text-base 
                         shadow-lg shadow-blue-500/40 
                         hover:shadow-xl hover:shadow-indigo-600/50 
                         transition-all duration-300 hover:scale-[1.02] 
                         flex items-center gap-2 flex-shrink-0"
            >
              Start a Conversation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;