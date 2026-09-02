// src/components/LifeOS/Dashboard/CurrentGoal.jsx
import { useTranslation } from 'react-i18next';
import GlassCard from '../Shared/GlassCard';
import ProgressBar from '../Shared/ProgressBar';

const CurrentGoal = ({ goal, onSelectGoal }) => {
  const { t } = useTranslation();

  if (!goal) return null;

  return (
    <GlassCard>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {t('lifeOS.dashboard.currentGoal', 'CURRENT GOAL')}
          </p>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1.5">
            {goal.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {goal.description}
          </p>
          <div className="mt-4">
            <ProgressBar 
              value={goal.progress} 
              showLabel 
              label={t('lifeOS.dashboard.progress', 'Progress')}
            />
          </div>
        </div>
        <button
          onClick={onSelectGoal}
          className="ml-4 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label={t('lifeOS.dashboard.changeGoal', 'Change goal')}
        >
          <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
      </div>
    </GlassCard>
  );
};

export default CurrentGoal;