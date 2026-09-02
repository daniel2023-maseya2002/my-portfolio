// src/components/DigitalTwin/DigitalTwinHome.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Briefcase, Code, Cpu, Layout, Smartphone, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinProfile } from '../../data/digitalTwinData';

const DigitalTwinHome = ({ onEnter }) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const capabilities = [
    { icon: Code, label: t('digitalTwin.welcome.capabilities.fullstack', 'Full-Stack Development') },
    { icon: Brain, label: t('digitalTwin.welcome.capabilities.ai', 'AI & Intelligent Systems') },
    { icon: Layout, label: t('digitalTwin.welcome.capabilities.uiux', 'UI/UX Design') },
    { icon: Smartphone, label: t('digitalTwin.welcome.capabilities.mobile', 'Mobile Development') },
    { icon: Cpu, label: t('digitalTwin.welcome.capabilities.architecture', 'System Architecture') },
    { icon: Briefcase, label: t('digitalTwin.welcome.capabilities.business', 'Business Solutions') }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-16 max-w-6xl mx-auto"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-[10%] w-[600px] h-[600px] bg-gradient-to-l from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-[10%] w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-300 tracking-wide">
            {t('digitalTwin.welcome.badge', 'INTERACTIVE DIGITAL REPRESENTATION')}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            {t('digitalTwin.welcome.title', 'Digital Twin')}
          </span>
        </motion.h1>

        {/* Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100">
            {digitalTwinProfile.name}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mt-1">
            {digitalTwinProfile.subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          {t('digitalTwin.welcome.subtitle', 'Explore an interactive representation of my skills, projects, technologies, and engineering capabilities.')}
        </motion.p>

        {/* Capabilities Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-6"
        >
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                <Icon className="w-3.5 h-3.5 text-teal-500" />
                {cap.label}
              </span>
            );
          })}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={onEnter}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            {t('digitalTwin.welcome.cta', 'Explore Twin')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#home"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-teal-500/50 hover:bg-teal-500/5 transition-all duration-300"
          >
            {t('digitalTwin.welcome.viewProfile', 'View Traditional Profile')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{digitalTwinProfile.projectCount}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('digitalTwin.welcome.stats.projects', 'Projects')}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{digitalTwinProfile.technologyCount}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('digitalTwin.welcome.stats.technologies', 'Technologies')}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{digitalTwinProfile.yearsOfExperience}+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('digitalTwin.welcome.stats.experience', 'Years Experience')}</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('digitalTwin.welcome.stats.status', 'Open to Work')}</p>
          </div>
        </motion.div>

        <p className="text-xs text-slate-400 dark:text-slate-500 mt-8">
          {t('digitalTwin.welcome.footer', 'An interactive experience showcasing real projects, technologies, and capabilities.')}
        </p>
      </div>
    </motion.div>
  );
};

export default DigitalTwinHome;