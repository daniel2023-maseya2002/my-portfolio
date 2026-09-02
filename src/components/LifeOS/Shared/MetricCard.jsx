// src/components/LifeOS/Shared/MetricCard.jsx
import { useTranslation } from 'react-i18next';
import GlassCard from './GlassCard';

const MetricCard = ({ 
  label, 
  value, 
  icon, 
  change,
  subtitle,
  className = ''
}) => {
  const { t } = useTranslation();

  return (
    <GlassCard padding="p-5" className={className}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {label}
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1.5">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400">
            {icon}
          </div>
        )}
      </div>
      {change && (
        <div className={`text-xs font-medium mt-3 ${
          change > 0 ? 'text-emerald-500' : 'text-rose-500'
        }`}>
          {change > 0 ? '↑' : '↓'} {Math.abs(change)}% {t('lifeOS.metric.fromLastWeek', 'from last week')}
        </div>
      )}
    </GlassCard>
  );
};

export default MetricCard;