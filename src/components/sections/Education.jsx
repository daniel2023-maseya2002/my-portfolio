// src/components/sections/Education.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from 'react-i18next';
import education from "../../data/education";
import TranscriptModal from "../TranscriptModal";

// Modern Stat Card Component
const StatBadge = ({ icon: Icon, label, value, color = "teal" }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-${color}-50 dark:bg-${color}-950/30 border border-${color}-200 dark:border-${color}-500/30`}
  >
    <Icon className={`w-4 h-4 text-${color}-600 dark:text-${color}-400`} />
    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
      {label}: {value}
    </span>
  </motion.div>
);

// Modern Card Component
const EduCard = ({ item, onPreview, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Get translated values
  const institution = t(`${item.translationKey}.institution`);
  const degree = t(`${item.translationKey}.degree`);
  const field = t(`${item.translationKey}.field`);
  const location = t(`${item.translationKey}.location`);
  const honors = item.honors ? t(`${item.translationKey}.honors`) : null;
  const highlights = t(`${item.translationKey}.highlights`, { returnObjects: true });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.15 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 rounded-2xl blur-xl"
      />

      {/* Card Container - Premium Glassmorphism */}
      <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Decorative Top Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500" />

        <div className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Logo Section with Animation */}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="relative w-20 h-20 lg:w-24 lg:h-24">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center p-3">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={institution}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  )}
                </div>

                {/* Type Indicator */}
                <div className="absolute -top-2 -right-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.type === 'degree' 
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500' 
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  } shadow-lg`}>
                    {item.type === 'degree' ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 space-y-4">
              {/* Institution & Degree */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {institution}
                </h3>
                <p className="text-base lg:text-lg text-teal-600 dark:text-teal-400 font-semibold">
                  {degree}
                  {field && <span className="text-slate-600 dark:text-slate-400"> — {field}</span>}
                </p>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.period}
                </span>
              </div>

              {/* Stats */}
              {(item.gpa || honors) && (
                <div className="flex flex-wrap gap-2">
                  {item.gpa && (
                    <StatBadge
                      icon={({ className }) => (
                        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      )}
                      label="GPA"
                      value={item.gpa}
                      color="teal"
                    />
                  )}
                  {honors && (
                    <StatBadge
                      icon={({ className }) => (
                        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      label="Honors"
                      value={honors}
                      color="emerald"
                    />
                  )}
                </div>
              )}

              {/* Highlights */}
              {highlights && Array.isArray(highlights) && highlights.length > 0 && (
                <ul className="space-y-2">
                  {highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Actions */}
            <div className="flex-shrink-0 flex flex-row lg:flex-col gap-2 justify-end">
              {item.transcripts ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onPreview(item)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-teal-500/50 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t("education.preview")}
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.transcripts}
                    download
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {t("education.download")}
                  </motion.a>
                </>
              ) : (
                <span className="text-xs text-slate-500 dark:text-slate-400 italic px-4 py-2">
                  {t("education.noTranscript")}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-teal-500/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

// Modern Filter Button
const FilterButton = ({ active, onClick, children, icon: Icon }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden group ${
      active
        ? "text-white"
        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
    }`}
  >
    {active && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500"
        initial={false}
        transition={{ type: "spring", duration: 0.5 }}
      />
    )}
    <span className="relative flex items-center gap-2">
      <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-teal-500'}`} />
      {children}
    </span>
  </motion.button>
);

const Education = () => {
  const [filter, setFilter] = useState("all");
  const [preview, setPreview] = useState(null);
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

    const section = document.getElementById('education');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const stats = useMemo(() => ({
    total: education.length,
    degrees: education.filter(e => e.type === "degree").length,
    certificates: education.filter(e => e.type === "certificate").length
  }), []);

  const filtered = education.filter((e) => filter === "all" ? true : e.type === filter);

  const filterButtons = [
    { 
      id: "all", 
      label: t("education.all"), 
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      id: "degree", 
      label: t("education.degree"), 
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    { 
      id: "certificate", 
      label: t("education.certificate"), 
      icon: ({ className }) => (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="education" className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("education.badge")}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
                {t("education.title")}{' '}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {t("education.titleHighlight")}
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("education.description")}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{stats.total}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{t("education.total")}</div>
              </motion.div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{stats.degrees}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{t("education.degrees")}</div>
              </motion.div>
              <div className="w-px h-10 bg-slate-200 dark:bg-slate-700" />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">{stats.certificates}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">{t("education.certificates")}</div>
              </motion.div>
            </div>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-6" />

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-8">
            {filterButtons.map((btn) => (
              <FilterButton
                key={btn.id}
                active={filter === btn.id}
                onClick={() => setFilter(btn.id)}
                icon={btn.icon}
              >
                {btn.label}
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Education Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {filtered.map((item, index) => (
              <EduCard
                key={item.id}
                item={item}
                onPreview={setPreview}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"/>
              </svg>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t("education.noRecords")}
            </p>
          </motion.div>
        )}
      </div>

      {/* Transcript Modal */}
      <TranscriptModal
        fileUrl={preview?.transcripts ?? null}
        title={preview ? `${t(`${preview.translationKey}.institution`)} — ${t(`${preview.translationKey}.degree`)}` : ""}
        onClose={() => setPreview(null)}
      />
    </section>
  );
};

export default Education;