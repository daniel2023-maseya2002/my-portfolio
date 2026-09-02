// src/components/LifeOS/Onboarding/WelcomeScreen.jsx
import { motion } from 'framer-motion';
import { Brain, Route, Sparkles, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WelcomeScreen = ({ onStart }) => {
  const { t } = useTranslation();

  const features = [
    { icon: Target, label: t('lifeOS.welcome.features.goals', 'Career Goals'), desc: t('lifeOS.welcome.features.goalsDesc', 'Define your career destination') },
    { icon: Brain, label: t('lifeOS.welcome.features.analysis', 'Skill Analysis'), desc: t('lifeOS.welcome.features.analysisDesc', 'Discover your strengths & gaps') },
    { icon: Route, label: t('lifeOS.welcome.features.roadmap', 'Personalized Roadmap'), desc: t('lifeOS.welcome.features.roadmapDesc', 'Get your custom learning path') },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center py-12 px-6"
    >
      <div className="mb-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-300">
            {t('lifeOS.welcome.badge', 'AI-POWERED CAREER NAVIGATOR')}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          {t('lifeOS.welcome.title', 'LIFE OS')}
          <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            {t('lifeOS.welcome.titleSuffix', '')}
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {t('lifeOS.welcome.description', 'Understand where you are. Discover where you can go. Find your next best step.')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-slate-700"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                <Icon className="w-5 h-5 text-teal-500" />
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{feature.label}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">{feature.desc}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all duration-300 inline-flex items-center gap-3"
      >
        <Sparkles className="w-5 h-5" />
        {t('lifeOS.welcome.cta', 'Start Your Journey')}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </motion.button>

      <p className="text-xs text-slate-400 dark:text-slate-500 mt-6">
        {t('lifeOS.welcome.disclaimer', 'This is a conceptual demo. All recommendations are illustrative.')}
      </p>
    </motion.div>
  );
};

export default WelcomeScreen;