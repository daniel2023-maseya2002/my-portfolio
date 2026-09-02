// src/components/LifeOS/Dashboard/NextBestAction.jsx
import { useTranslation } from 'react-i18next';
import { getSkillById } from '../../../data/skills';
import GlassCard from '../Shared/GlassCard';

const NextBestAction = ({ recommendation }) => {
  const { t } = useTranslation();

  if (!recommendation) return null;

  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('lifeOS.dashboard.nextAction', 'NEXT BEST ACTION')}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {recommendation.effort}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400">
                {recommendation.impact}
              </span>
            </div>
          </div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white mt-1.5">
            {recommendation.action}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {recommendation.reason}
          </p>
          {recommendation.relatedSkills && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {recommendation.relatedSkills.map((skillId) => {
                const skill = getSkillById(skillId);
                return skill ? (
                  <span key={skillId} className="text-[10px] px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {skill.name}
                  </span>
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default NextBestAction;