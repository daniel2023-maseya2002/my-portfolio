// src/components/LifeOS/Dashboard/AIInsight.jsx
import { useTranslation } from 'react-i18next';
import GlassCard from '../Shared/GlassCard';

const AIInsight = ({ insights }) => {
  const { t } = useTranslation();
  const mainInsight = insights[0];

  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('lifeOS.dashboard.aiInsight', 'AI INSIGHT')}
            </p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400">
              {t('lifeOS.dashboard.conceptual', 'Conceptual')}
            </span>
          </div>
          <p className="text-sm font-medium text-slate-900 dark:text-white mt-1.5">
            {mainInsight?.title}
          </p>
          <p className="text-sm text-teal-600 dark:text-teal-400 font-semibold">
            {mainInsight?.description}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {mainInsight?.detail}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AIInsight;