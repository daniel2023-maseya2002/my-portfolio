// src/components/LifeOS/Shared/ProgressBar.jsx
import { useTranslation } from 'react-i18next';

const ProgressBar = ({ 
  value, 
  max = 100, 
  color = 'from-teal-500 to-emerald-500',
  showLabel = false,
  label = '',
  height = 'h-2',
  className = ''
}) => {
  const { t } = useTranslation();
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between mb-1.5">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</span>
          <span className="text-xs font-medium text-teal-600 dark:text-teal-400">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full ${height} bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden`}>
        <div 
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;