// src/components/LifeOS/Dashboard/ActivityTimeline.jsx
import { useTranslation } from 'react-i18next';
import GlassCard from '../Shared/GlassCard';

const ActivityTimeline = ({ activities }) => {
  const { t } = useTranslation();

  const getCategoryColor = (category) => {
    const colors = {
      Development: 'from-blue-500 to-cyan-500',
      Backend: 'from-emerald-500 to-teal-500',
      AI: 'from-purple-500 to-pink-500',
      Design: 'from-rose-500 to-orange-500',
      Mobile: 'from-sky-500 to-indigo-500',
      default: 'from-slate-500 to-gray-500'
    };
    return colors[category] || colors.default;
  };

  return (
    <GlassCard>
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
        {t('lifeOS.dashboard.recentActivity', 'RECENT ACTIVITY')}
      </p>
      <div className="space-y-4">
        {activities.slice(0, 4).map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-1.5 bg-gradient-to-r ${getCategoryColor(activity.category)}`} />
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {activity.title}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {activity.timestamp}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {activity.category}
                </span>
              </div>
            </div>
            {activity.type === 'milestone' && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400">
                {t('lifeOS.dashboard.milestone', 'Milestone')}
              </span>
            )}
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ActivityTimeline;