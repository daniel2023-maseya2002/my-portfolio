// src/components/DigitalTwin/ExperienceTimeline.jsx
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinExperience } from '../../data/digitalTwinData';
import { trackEvent } from '../../utils/analytics';
import GlassCard from '../LifeOS/Shared/GlassCard';

const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemId) => {
    const newExpanded = expandedItem === itemId ? null : itemId;
    setExpandedItem(newExpanded);
    if (newExpanded) {
      trackEvent('experience-viewed', { experience: itemId });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t('digitalTwin.experience.title', 'Experience Timeline')}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t('digitalTwin.experience.subtitle', 'Professional journey and key contributions')}
        </p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-emerald-500 to-teal-500 hidden md:block" />

        <div className="space-y-4">
          {digitalTwinExperience.map((item, index) => {
            const isExpanded = expandedItem === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-0 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 hidden md:flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                <GlassCard 
                  className={`cursor-pointer transition-all duration-300 ${
                    isExpanded ? 'border-teal-500 shadow-lg shadow-teal-500/20' : ''
                  }`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {item.organization}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {item.period}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"
                    >
                      {/* Technologies */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                            {t('digitalTwin.experience.technologies', 'Technologies')}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div>
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                            {t('digitalTwin.experience.keyHighlights', 'Key Highlights')}
                          </p>
                          <ul className="space-y-1.5">
                            {item.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Projects */}
                      {item.projects && item.projects.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                            {t('digitalTwin.experience.relatedProjects', 'Related Projects')}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.projects.map((project) => (
                              <span 
                                key={project}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;