// src/components/DigitalTwin/ProjectExplorer.jsx
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu, ExternalLink, Layout, Search, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import { trackEvent } from '../../utils/analytics';
import GlassCard from '../LifeOS/Shared/GlassCard';

const ProjectExplorer = ({ mode }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectTypes = [
    { id: 'all', label: t('digitalTwin.projectExplorer.types.all', 'All'), icon: Briefcase },
    { id: 'eng', label: t('digitalTwin.projectExplorer.types.engineering', 'Engineering'), icon: Code },
    { id: 'ux', label: t('digitalTwin.projectExplorer.types.ux', 'UX/UI'), icon: Layout },
    { id: 'mobile', label: t('digitalTwin.projectExplorer.types.mobile', 'Mobile'), icon: Smartphone },
    { id: 'ai', label: t('digitalTwin.projectExplorer.types.ai', 'AI'), icon: Cpu },
  ];

  const getModeView = () => {
    const views = {
      recruiter: t('digitalTwin.projectExplorer.recruiterView', 'Recruiter View'),
      client: t('digitalTwin.projectExplorer.clientView', 'Client View'),
      developer: t('digitalTwin.projectExplorer.developerView', 'Developer View'),
      designer: t('digitalTwin.projectExplorer.designerView', 'Designer View')
    };
    return views[mode] || '';
  };

  const filteredProjects = projects.filter(project => {
    const projectName = project.name || project.id || '';
    const projectDescription = project.description || project.short || '';
    
    const matchesSearch = projectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          projectDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || project.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleProjectClick = (project) => {
    setSelectedProject(selectedProject?.id === project.id ? null : project);
    if (project.id) {
      trackEvent('project-viewed', { project: project.id, type: project.type });
    }
  };

  const getProjectName = (project) => {
    return project.name || project.id || 'Untitled Project';
  };

  const getProjectDescription = (project) => {
    return project.description || project.short || '';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {t('digitalTwin.projectExplorer.title', 'Project Explorer')}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t('digitalTwin.projectExplorer.subtitle', 'Explore projects and discover the technologies behind them')}
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
            placeholder={t('digitalTwin.projectExplorer.searchPlaceholder', 'Search projects...')}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-teal-500"
          />
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
          {projectTypes.map((type) => {
            const Icon = type.icon;
            const isActive = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {type.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => {
          const isSelected = selectedProject?.id === project.id;
          const techList = project.tech?.slice(0, 4) || [];
          const projectName = getProjectName(project);
          const projectDescription = getProjectDescription(project);

          return (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard 
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-teal-500 shadow-lg shadow-teal-500/20' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                {/* Cover image */}
                {project.cover && (
                  <div className="relative -m-6 mb-4 rounded-t-xl overflow-hidden h-32">
                    <img 
                      src={project.cover} 
                      alt={projectName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        project.type === 'ux' 
                          ? 'bg-purple-500/80 text-white' 
                          : 'bg-teal-500/80 text-white'
                      }`}>
                        {project.type === 'ux' ? 'UX/UI' : 'Engineering'}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {projectName}
                    </h4>
                    {projectDescription && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                        {projectDescription}
                      </p>
                    )}
                    
                    {/* Technologies */}
                    {techList.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {techList.map((tech) => (
                          <span 
                            key={tech}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expanded details */}
                    {isSelected && project.liveUrl && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (project.id) {
                              trackEvent('project-demo-clicked', { project: project.id });
                            }
                          }}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t('digitalTwin.projectExplorer.viewProject', 'View Project')}
                        </a>
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
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-slate-500 dark:text-slate-400">
            {t('digitalTwin.projectExplorer.noResults', 'No projects found matching your search.')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectExplorer;