// src/components/DigitalTwin/TechnologyExplorer.jsx
import { motion } from 'framer-motion';
import {
    Cloud, Code, Cpu,
    CreditCard,
    Database, Globe, Layout,
    Palette,
    PenTool, Search,
    Server, Shield, Smartphone, Sparkles, Zap
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import { skillsData } from '../../data/skills';
import { trackEvent } from '../../utils/analytics';
import GlassCard from '../LifeOS/Shared/GlassCard';

const TechnologyExplorer = ({ mode }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState(null);

  const categories = [
    { id: 'all', label: t('digitalTwin.technologyExplorer.categories.all', 'All'), icon: Globe },
    { id: 'Frontend', label: t('digitalTwin.technologyExplorer.categories.frontend', 'Frontend'), icon: Layout },
    { id: 'Backend', label: t('digitalTwin.technologyExplorer.categories.backend', 'Backend'), icon: Server },
    { id: 'Database', label: t('digitalTwin.technologyExplorer.categories.database', 'Database'), icon: Database },
    { id: 'Mobile', label: t('digitalTwin.technologyExplorer.categories.mobile', 'Mobile'), icon: Smartphone },
    { id: 'AI', label: t('digitalTwin.technologyExplorer.categories.ai', 'AI'), icon: Cpu },
    { id: 'Design', label: t('digitalTwin.technologyExplorer.categories.design', 'Design'), icon: PenTool },
    { id: 'DevOps', label: t('digitalTwin.technologyExplorer.categories.devops', 'DevOps'), icon: Code },
  ];

  const getModeView = () => {
    const views = {
      recruiter: t('digitalTwin.technologyExplorer.recruiterView', 'Recruiter View'),
      client: t('digitalTwin.technologyExplorer.clientView', 'Client View'),
      developer: t('digitalTwin.technologyExplorer.developerView', 'Developer View'),
      designer: t('digitalTwin.technologyExplorer.designerView', 'Designer View')
    };
    return views[mode] || '';
  };

  // Map skill IDs to Lucide icons
  const getSkillIcon = (skill) => {
    const iconMap = {
      'javascript': Code,
      'react': Layout,
      'tailwind': Sparkles,
      'python': Code,
      'django': Server,
      'postgresql': Database,
      'restapis': Cloud,
      'flutter': Smartphone,
      'dart': Code,
      'firebase': Database,
      'aiintegration': Cpu,
      'uidesign': PenTool,
      'java': Code,
      'springboot': Server,
      'csharp': Code,
      'aspnet': Server,
      'html': Globe,
      'css3': Palette,
      'stripe': CreditCard,
      'oauth': Shield,
      'vercel': Zap,
      'render': Cloud,
      'figma': PenTool,
    };
    const Icon = iconMap[skill.id] || Code;
    return <Icon className="w-5 h-5" />;
  };

  const filteredSkills = skillsData.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getProjectsForTech = (techName) => {
    return projects.filter(project => {
      const projectTech = project.tech || [];
      const projectSkills = project.skills || [];
      return projectTech.some(t => t.toLowerCase().includes(techName.toLowerCase())) ||
             projectSkills.some(s => s.toLowerCase().includes(techName.toLowerCase()));
    });
  };

  const handleTechClick = (skill) => {
    setSelectedTech(selectedTech?.id === skill.id ? null : skill);
    trackEvent('technology-viewed', { technology: skill.name, category: skill.category });
  };

  const getFooterText = () => {
    const footers = {
      recruiter: t('digitalTwin.technologyExplorer.footer.recruiter', 'These technologies represent core engineering capabilities.'),
      client: t('digitalTwin.technologyExplorer.footer.client', 'These technologies enable building modern, scalable solutions.'),
      developer: t('digitalTwin.technologyExplorer.footer.developer', 'Technologies used in production-grade applications.'),
      designer: t('digitalTwin.technologyExplorer.footer.designer', 'Technologies that power beautiful, interactive interfaces.')
    };
    return footers[mode] || '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('digitalTwin.technologyExplorer.title', 'Technology Explorer')}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t('digitalTwin.technologyExplorer.subtitle', 'Browse technologies and discover related projects')}
          </p>
        </div>
        {mode !== 'explore' && (
          <div className="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
            <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
              {getModeView()}
            </span>
          </div>
        )}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('digitalTwin.technologyExplorer.searchPlaceholder', 'Search technologies...')}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          const isSelected = selectedTech?.id === skill.id;
          const relatedProjects = getProjectsForTech(skill.name);

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard 
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-teal-500 shadow-lg shadow-teal-500/20' : ''
                }`}
                onClick={() => handleTechClick(skill)}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color || 'from-teal-500 to-emerald-500'} flex items-center justify-center text-white flex-shrink-0`}>
                    {getSkillIcon(skill)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {relatedProjects.length} {t('digitalTwin.technologyExplorer.relatedProjects', 'related projects')}
                    </p>
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          {t('digitalTwin.technologyExplorer.relatedProjects', 'Related Projects')}:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {relatedProjects.slice(0, 3).map((project) => (
                            <span 
                              key={project.id}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20"
                            >
                              {project.name || project.id}
                            </span>
                          ))}
                          {relatedProjects.length > 3 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                              +{relatedProjects.length - 3} {t('digitalTwin.technologyExplorer.more', 'more')}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-slate-500 dark:text-slate-400">
            {t('digitalTwin.technologyExplorer.noResults', 'No technologies found matching your search.')}
          </p>
        </div>
      )}

      {/* Mode-specific footer */}
      {mode !== 'explore' && filteredSkills.length > 0 && (
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-teal-500/5 to-emerald-500/5 border border-teal-500/20">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {getFooterText()}
          </p>
        </div>
      )}
    </div>
  );
};

export default TechnologyExplorer;