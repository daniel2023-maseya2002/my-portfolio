// src/components/LifeOS/Goals/GoalSelector.jsx
import { useTranslation } from 'react-i18next';
import { goalCategories } from '../../../data/goals';
import GlassCard from '../Shared/GlassCard';

const GoalSelector = ({ currentGoalId, onSelectGoal }) => {
  const { t } = useTranslation();

  return (
    <GlassCard>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
        {t('lifeOS.goalSelector.title', 'SELECT A GOAL')}
      </p>
      <div className="space-y-6">
        {goalCategories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{category.icon}</span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {category.label}
              </span>
            </div>
            <div className="space-y-1.5">
              {category.goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => onSelectGoal(goal.id)}
                  className={`
                    w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200
                    ${currentGoalId === goal.id 
                      ? 'bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{goal.name}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {goal.progress}%
                    </span>
                  </div>
                  {currentGoalId === goal.id && (
                    <div className="w-full h-0.5 mt-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default GoalSelector;