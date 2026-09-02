// src/components/DigitalTwin/EngineeringDNA.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { Brain, Check, ChevronDown, ChevronUp, Code, PenTool, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { engineeringDNA } from '../../data/digitalTwinData';
import { trackEvent } from '../../utils/analytics';
import GlassCard from '../LifeOS/Shared/GlassCard';

const iconMap = {
  Brain: Brain,
  PenTool: PenTool,
  Code: Code,
  Check: Check,
  Refresh: RefreshCw
};

const EngineeringDNA = () => {
  const { t } = useTranslation();
  const [expandedStep, setExpandedStep] = useState(null);

  const handleStepClick = (stepId) => {
    const newExpanded = expandedStep === stepId ? null : stepId;
    setExpandedStep(newExpanded);
    if (newExpanded) {
      trackEvent('engineering-dna-viewed', { step: stepId });
    }
  };

  // Get translated step data
  const getStepTranslation = (step) => {
    const key = `digitalTwin.engineeringDNA.steps.${step.id}`;
    return {
      title: t(`${key}.title`, step.title),
      description: t(`${key}.description`, step.description),
      details: t(`${key}.details`, step.details)
    };
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t('digitalTwin.engineeringDNA.title', 'My Engineering DNA')}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t('digitalTwin.engineeringDNA.subtitle', 'How I approach building software — from understanding to improvement')}
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-emerald-500 to-teal-500 hidden md:block" />

        <div className="space-y-4">
          {engineeringDNA.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;
            const isExpanded = expandedStep === step.id;
            const trans = getStepTranslation(step);

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-0 md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 md:top-5 hidden md:flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-500/30`}>
                    {step.step}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-30" />
                </div>

                <GlassCard 
                  className={`cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'border-teal-500 shadow-lg shadow-teal-500/20' : ''
                  }`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className="flex items-center gap-4">
                    {/* Mobile dot */}
                    <div className={`md:hidden w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {step.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-slate-900 dark:text-white">
                            {trans.title}
                          </h3>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {trans.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg bg-gradient-to-br ${step.color} text-white`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                          <div className="flex items-start gap-3">
                            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-teal-500 to-emerald-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                {trans.details}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20">
                                  {trans.title} {t('digitalTwin.engineeringDNA.phase', 'Phase')}
                                </span>
                                <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                  {t('digitalTwin.engineeringDNA.step', 'Step')} {step.step} {t('digitalTwin.engineeringDNA.of', 'of')} 5
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-gradient-to-r from-teal-500/5 to-emerald-500/5 border border-teal-500/20">
        <p className="text-xs text-slate-600 dark:text-slate-400 text-center">
          {t('digitalTwin.engineeringDNA.footer', 'This process guides how I approach every project — from concept to delivery.')}
        </p>
      </div>
    </div>
  );
};

export default EngineeringDNA;