// src/components/sections/About.jsx
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const techSkills = [
    { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Django', level: 85, color: 'from-slate-400 to-gray-600' },
    { name: 'Tailwind CSS', level: 95, color: 'from-sky-400 to-blue-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-600' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600' },
    { name: 'PostgreSQL', level: 85, color: 'from-indigo-500 to-purple-600' },
    { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-600' }
  ];

  const stats = [
    {
      titleKey: "about.experience",
      value: "2+",
      suffixKey: "about.years",
      detailKey: "about.building",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-teal-500 to-emerald-500",
    },
    {
      titleKey: "about.focus",
      value: "Web Apps",
      suffixKey: "about.ux",
      detailKey: "about.fullStack",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-500",
    },
    {
      titleKey: "about.location",
      value: "Kigali",
      suffixKey: "about.location",
      detailKey: "about.remote",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-teal-500 to-emerald-500",
    },
    {
      titleKey: "about.projects",
      value: "15+",
      suffixKey: "about.completed",
      detailKey: "about.impact",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: "from-rose-500 to-orange-600",
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header with animation */}
        <div className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Modern Badge */}
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("about.badge")}
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            {t("about.title")}{' '}
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t("about.titleHighlight")}
            </span>
            <br />
            {t("about.titleEnd")}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Description & Skills */}
          <div className="space-y-12">
            {/* Bio with modern typography */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t("about.description1")}
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  {t("about.description2")}
                </p>
              </div>
            </div>

            {/* Skills Section with Progress Bars */}
            <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {t("about.coreTech")}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t("about.proficiency")}</span>
                </div>
              </div>
              
              <div className="space-y-5">
                {techSkills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 dark:to-white/10 animate-shimmer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {stats.map((stat, index) => (
              <div 
                key={stat.titleKey}
                className={`group relative transition-all duration-1000 hover:scale-105`}
                style={{
                  transitionDelay: `${index * 150 + 600}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <div className="relative rounded-2xl p-6 bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  
                  {/* Icon with Gradient Background */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0 mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      {t(stat.titleKey)}
                    </p>
                    <div className="flex items-baseline gap-1 mb-1">
                      <p className="text-3xl font-bold text-slate-900 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t(stat.suffixKey)}
                      </p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t(stat.detailKey)}
                    </p>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-teal-500/30 rounded-tr-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Modern Design */}
        <div className={`mt-20 pt-12 border-t border-slate-200 dark:border-slate-800 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 rounded-2xl p-8 md:p-10 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  {t("about.ctaTitle")}
                </h3>
                <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
                  {t("about.ctaDesc")}
                </p>
              </div>
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 flex items-center gap-2 flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  {t("about.ctaButton")}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default About;