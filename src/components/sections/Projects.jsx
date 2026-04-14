// src/components/sections/Projects.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import projectsData from "../../data/projects";
import ProjectModal from "../ProjectModal";

const TabButton = ({ active, onClick, children, icon }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
      active 
        ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30" 
        : "bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-teal-500/10 hover:border-teal-500/50 border border-slate-200 dark:border-slate-700"
    }`}
  >
    <span className="flex items-center gap-2">
      {icon}
      {children}
    </span>
  </button>
);

const ProjectCard = ({ project, onOpen, index, isVisible, t }) => {
  // Safely get translations with fallbacks
  const title = t(`${project.translationKey}.title`, project.title || 'Project');
  const short = t(`${project.translationKey}.short`, project.short || '');
  const role = t(`${project.translationKey}.role`, project.role || '');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />
        <img 
          src={project.cover} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        
        {/* Type Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-xs font-bold shadow-lg">
            {project.type === "ux" ? (
              <>
                <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
                <span className="text-teal-600 dark:text-teal-400">{t("projects.ux")}</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                <span className="text-emerald-600 dark:text-emerald-400">{t("projects.engineering")}</span>
              </>
            )}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-8">
          <span className="text-white font-semibold flex items-center gap-2">
            {t("projects.viewDetails")}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {title}
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {short}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium rounded-lg bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-500/30 text-teal-600 dark:text-teal-400">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Role */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t("projects.role")}</p>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [tab, setTab] = useState("all");
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const filtered = tab === "all" 
    ? projectsData 
    : projectsData.filter((p) => p.type === tab);

  return (
    <section id="projects" className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("projects.badge")}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
                {t("projects.title")}{' '}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {t("projects.titleHighlight")}
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t("projects.description")}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-3">
              <TabButton 
                active={tab === "all"} 
                onClick={() => setTab("all")}
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                  </svg>
                }
              >
                {t("projects.all")}
              </TabButton>
              <TabButton 
                active={tab === "ux"} 
                onClick={() => setTab("ux")}
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                  </svg>
                }
              >
                {t("projects.ux")}
              </TabButton>
              <TabButton 
                active={tab === "eng"} 
                onClick={() => setTab("eng")}
                icon={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                }
              >
                {t("projects.engineering")}
              </TabButton>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={tab}
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpen={setSelected} 
                index={index}
                isVisible={isVisible}
                t={t}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              {t("projects.noProjects")}
            </p>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;