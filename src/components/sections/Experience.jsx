// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import experience from "../../data/experience";

const ExperienceCard = ({ item, index, isVisible, t }) => {
  // Safely get translations
  const role = t(`${item.translationKey}.role`);
  const org = t(`${item.translationKey}.org`);
  const location = t(`${item.translationKey}.location`);
  const tag = t(`${item.translationKey}.tag`);
  const bullets = t(`${item.translationKey}.bullets`, { returnObjects: true });

  // Ensure bullets is an array
  const bulletsArray = Array.isArray(bullets) ? bullets : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Timeline Dot - Modern Design */}
      <div className="absolute -left-[41px] top-8 hidden lg:block">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/50 ring-4 ring-white dark:ring-slate-950"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 animate-ping opacity-75"></div>
        </div>
      </div>

      {/* Card - Premium Glassmorphism */}
      <div className="relative p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 group-hover:-translate-y-1">
        
        {/* Tag Badge - Gradient */}
        <div className="absolute -top-3 right-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold shadow-lg shadow-teal-500/30">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {tag}
          </span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {role}
            </h3>
            <div className="flex flex-wrap gap-3">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {org}
              </p>
              <p className="text-sm text-teal-600 dark:text-teal-400 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </p>
            </div>
          </div>

          {/* Period Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <svg className="w-4 h-4 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
              {item.period}
            </span>
          </div>
        </div>

        {/* Bullet Points */}
        {bulletsArray.length > 0 && (
          <ul className="space-y-3">
            {bulletsArray.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Decorative corner */}
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-teal-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const Experience = () => {
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

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleDownloadResume = useCallback(async () => {
    try {
      const res = await fetch("/resume.pdf");
      if (!res.ok) throw new Error(`Failed to fetch resume (${res.status})`);

      const blob = await res.blob();
      if (!blob || blob.size === 0) {
        throw new Error("Fetched resume is empty (0 bytes).");
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Resume download error:", err);
      window.open("/resume.pdf", "_blank", "noopener,noreferrer");
      alert("Automatic download failed. Opening the resume in a new tab so you can save it manually.");
    }
  }, []);

  return (
    <section id="experience" className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("experience.badge")}
              </span>
            </div>
          </div>
          
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
              {t("experience.title")}{' '}
              <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                {t("experience.titleHighlight")}
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("experience.description")}
            </p>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-6" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-emerald-500 to-teal-500"></div>

          <div className="space-y-8 lg:pl-16">
            {experience.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} isVisible={isVisible} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom CTA - Premium Design */}
        <div className={`mt-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {t("experience.wantMore")}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t("experience.downloadResume")}
                </p>
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Download resume"
                >
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t("experience.resume")}
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t("experience.openResume")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;