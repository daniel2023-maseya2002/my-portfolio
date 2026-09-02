// src/components/LifeOS/Skills/SkillIntelligence.jsx
import { useTranslation } from 'react-i18next';
import { getProjectsBySkill } from '../../../data/projects';
import { getSkillById } from '../../../data/skills';
import GlassCard from '../Shared/GlassCard';
import ProgressBar from '../Shared/ProgressBar';

const SkillIntelligence = ({ skillId, onSelectProject }) => {
  const { t } = useTranslation();
  const skill = getSkillById(skillId);

  if (!skill) {
    return (
      <GlassCard>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-8">
          {t('lifeOS.skillIntelligence.selectSkill', 'Select a skill to view intelligence')}
        </p>
      </GlassCard>
    );
  }

  const relatedProjects = getProjectsBySkill(skillId);

  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">
          {skill.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {skill.name}
            </h3>
            <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
              {skill.level}%
            </span>
          </div>
          <div className="mt-2">
            <ProgressBar value={skill.level} />
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
            {skill.description}
          </p>

          {skill.connectedSkills && skill.connectedSkills.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {t('lifeOS.skillIntelligence.connectedSkills', 'Connected Skills')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.connectedSkills.map((connectedId) => {
                  const connected = getSkillById(connectedId);
                  return connected ? (
                    <span key={connectedId} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {connected.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {t('lifeOS.skillIntelligence.relatedProjects', 'Related Projects')}
              </p>
              <div className="flex flex-wrap gap-2">
                {relatedProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => onSelectProject(project.id)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-teal-500/5 border border-teal-500/20 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition-colors"
                  >
                    {project.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
              {t('lifeOS.skillIntelligence.recommendedNextStep', 'Recommended Next Step')}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {skill.level < 70 
                ? t('lifeOS.skillIntelligence.foundation', `Focus on building practical ${skill.name} projects to strengthen your foundation.`)
                : t('lifeOS.skillIntelligence.advanced', `Explore advanced ${skill.name} patterns and optimize your existing implementations.`)
              }
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillIntelligence;