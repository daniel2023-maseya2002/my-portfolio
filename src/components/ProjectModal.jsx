// src/components/ProjectModal.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  // Helper function to safely get translation
  const getTranslation = (key, defaultValue = '') => {
    const translated = t(key);
    // If translation returns the key itself or is empty, use defaultValue
    if (translated === key || !translated) {
      return defaultValue;
    }
    return translated;
  };

  const title = getTranslation(`${project.translationKey}.title`, project.title || 'Project');
  const short = getTranslation(`${project.translationKey}.short`, project.short || '');
  const role = getTranslation(`${project.translationKey}.role`, project.role || '');
  const longDescription = getTranslation(`${project.translationKey}.longDescription`, project.longDescription || '');

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Card */}
        <motion.div
          className="relative z-10 max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all hover:rotate-90 duration-300"
            aria-label={t("projects.close")}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left: Images Gallery */}
            <div className="lg:col-span-3 p-8 space-y-6">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
                <img
                  src={project.cover}
                  alt={title}
                  className="w-full h-80 object-cover"
                />
                
                {/* Type Badge on Image */}
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
              </div>

              {/* Additional Images Grid */}
              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((img, idx) => (
                    <div 
                      key={idx}
                      className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                      <img
                        src={img}
                        alt={`${title} screenshot ${idx + 1}`}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-2 p-8 flex flex-col gap-6">
              
              {/* Title & Description */}
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                  {title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {short}
                </p>
              </div>

              {/* Long Description */}
              <div className="py-4 border-y border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {longDescription}
                </p>
              </div>

              {/* Role */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {t("projects.role")}
                  </p>
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {role}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                  </svg>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {t("projects.technologies")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-auto pt-6 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    {t("projects.viewLive")}
                  </a>
                )}
                
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  {t("projects.discussSimilar")}
                </a>
                
                <button
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  {t("projects.close")}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;