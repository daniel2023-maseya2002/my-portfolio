// src/components/LifeOS/Projects/ProjectIntelligence.jsx
import { useTranslation } from 'react-i18next';
import { getGoalById } from '../../../data/goals';
import { getProjectById } from '../../../data/projects';
import { getSkillById } from '../../../data/skills';
import GlassCard from '../Shared/GlassCard';
import ProgressBar from '../Shared/ProgressBar';

const ProjectIntelligence = ({ projectId, onSelectSkill }) => {
  const { t } = useTranslation();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <GlassCard>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-8">
          {t('lifeOS.projectIntelligence.selectProject', 'Select a project to view intelligence')}
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard>
      <div>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('lifeOS.projectIntelligence.title', 'PROJECT INTELLIGENCE')}
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
              {project.name}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {project.category}
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
            <span className="text-xs font-medium text-teal-600 dark:text-teal-400">
              {project.status}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <ProgressBar value={project.progress} showLabel label={t('lifeOS.projectIntelligence.progress', 'Progress')} />
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
          {project.description}
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              {t('lifeOS.projectIntelligence.technologies', 'Technologies')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              {t('lifeOS.projectIntelligence.skills', 'Skills Demonstrated')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.skills.map((skillId) => {
                const skill = getSkillById(skillId);
                return skill ? (
                  <button
                    key={skillId}
                    onClick={() => onSelectSkill(skillId)}
                    className="text-xs px-2 py-1 rounded-full bg-teal-500/5 border border-teal-500/20 text-teal-600 dark:text-teal-400 hover:bg-teal-500/10 transition-colors"
                  >
                    {skill.name}
                  </button>
                ) : null;
              })}
            </div>
          </div>
        </div>

        {project.goals && project.goals.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              {t('lifeOS.projectIntelligence.relatedGoals', 'Related Goals')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.goals.map((goalId) => {
                const goal = getGoalById(goalId);
                return goal ? (
                  <span key={goalId} className="text-xs px-2 py-1 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                    {goal.name}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectIntelligence;