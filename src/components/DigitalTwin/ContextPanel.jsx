// src/components/DigitalTwin/ContextPanel.jsx
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GlassCard from '../LifeOS/Shared/GlassCard';

const ContextPanel = ({ selectedNode, mode, content, onClose }) => {
  const { t } = useTranslation();

  if (!selectedNode && !content) {
    return (
      <GlassCard className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
          <span className="text-2xl">👆</span>
        </div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {t('digitalTwin.context.selectNode', 'Select a node to explore')}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          {t('digitalTwin.context.selectNodeHint', 'Click any node in the twin visualization')}
        </p>
      </GlassCard>
    );
  }

  const { node, capabilities, projects, technologies } = content || {};

  const getModeLabel = () => {
    const modeMap = {
      recruiter: t('digitalTwin.context.recruiterView', 'Recruiter View'),
      client: t('digitalTwin.context.clientView', 'Client View'),
      developer: t('digitalTwin.context.developerView', 'Developer View'),
      designer: t('digitalTwin.context.designerView', 'Designer View'),
      explore: t('digitalTwin.context.exploring', 'Exploring')
    };
    return modeMap[mode] || modeMap.explore;
  };

  const getModeInsight = () => {
    const insightMap = {
      recruiter: t('digitalTwin.context.insights.recruiter', 'This node demonstrates engineering capabilities relevant to your search.'),
      client: t('digitalTwin.context.insights.client', 'This node represents a capability that can solve business problems.'),
      developer: t('digitalTwin.context.insights.developer', 'This node showcases technical depth and engineering practices.'),
      designer: t('digitalTwin.context.insights.designer', 'This node reflects design thinking and user-centered approaches.')
    };
    return insightMap[mode] || '';
  };

  return (
    <GlassCard className="h-full overflow-y-auto max-h-[600px]">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
            {getModeLabel()}
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            {node?.name || t('digitalTwin.context.selectNode', 'Select a Node')}
          </h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {node && (
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          {node.description}
        </p>
      )}

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            {t('digitalTwin.context.technologies', 'Technologies')}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {technologies.slice(0, 6).map((tech) => (
              <span 
                key={tech.id}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            {t('digitalTwin.context.relatedProjects', 'Related Projects')}
          </p>
          <div className="space-y-2">
            {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  {project.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                  {project.description || project.short}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Capabilities */}
      {capabilities && capabilities.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            {t('digitalTwin.context.capabilities', 'Capabilities')}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {capabilities.slice(0, 4).map((cap) => (
              <span 
                key={cap.id}
                className="px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/20 text-xs text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-500/20"
              >
                {cap.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Connections */}
      {node?.connections && node.connections.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            {t('digitalTwin.context.connectedNodes', 'Connected Nodes')}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {node.connections.slice(0, 5).map((connId) => (
              <span 
                key={connId}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400"
              >
                {connId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Mode-specific insight */}
      {mode !== 'explore' && (
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20">
          <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
            {getModeInsight()}
          </p>
        </div>
      )}
    </GlassCard>
  );
};

export default ContextPanel;