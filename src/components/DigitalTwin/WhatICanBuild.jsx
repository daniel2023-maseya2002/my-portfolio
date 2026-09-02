// src/components/DigitalTwin/WhatICanBuild.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Cpu, Layout, PenTool, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinCapabilities, whatICanBuild } from '../../data/digitalTwinData';
import { trackEvent } from '../../utils/analytics';
import GlassCard from '../LifeOS/Shared/GlassCard';

const iconMap = {
  Layout: Layout,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Briefcase: Briefcase,
  PenTool: PenTool
};

const WhatICanBuild = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    const newSelected = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(newSelected);
    if (newSelected) {
      trackEvent('what-i-build-viewed', { category: categoryId });
    }
  };

  // Get translated category title
  const getCategoryTitle = (item) => {
    const key = `digitalTwin.whatICanBuild.categories.${item.id}`;
    const titles = {
      webApps: t('digitalTwin.whatICanBuild.categories.webApps', 'Web Applications'),
      mobileApps: t('digitalTwin.whatICanBuild.categories.mobileApps', 'Mobile Applications'),
      intelligentSystems: t('digitalTwin.whatICanBuild.categories.intelligentSystems', 'Intelligent Systems'),
      businessSystems: t('digitalTwin.whatICanBuild.categories.businessSystems', 'Business Systems'),
      digitalExperiences: t('digitalTwin.whatICanBuild.categories.digitalExperiences', 'Digital Experiences')
    };
    return titles[item.id] || item.title;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t('digitalTwin.whatICanBuild.title', 'What I Can Build')}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t('digitalTwin.whatICanBuild.subtitle', 'Categories of solutions I can deliver with real project examples')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {whatICanBuild.map((item, index) => {
          const Icon = iconMap[item.icon] || Layout;
          const isSelected = selectedCategory === item.id;
          const capabilities = digitalTwinCapabilities.filter(cap => 
            item.capabilities?.includes(cap.id)
          );
          const title = getCategoryTitle(item);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <GlassCard 
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-teal-500 shadow-lg shadow-teal-500/20' : ''
                }`}
                onClick={() => handleCategoryClick(item.id)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                    isSelected ? 'rotate-90' : ''
                  }`} />
                </div>

                {/* Expanded details */}
                {isSelected && (
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
                          {t('digitalTwin.whatICanBuild.technologies', 'Technologies')}
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

                    {/* Projects */}
                    {item.projects && item.projects.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                          {t('digitalTwin.whatICanBuild.exampleProjects', 'Example Projects')}
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

                    {/* Capabilities */}
                    {capabilities.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                          {t('digitalTwin.whatICanBuild.capabilities', 'Capabilities')}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {capabilities.map((cap) => (
                            <span 
                              key={cap.id}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20"
                            >
                              {cap.name}
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
  );
};

export default WhatICanBuild;