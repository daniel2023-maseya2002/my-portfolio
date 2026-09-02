// src/components/LifeOS/Header/LifeOSHeader.jsx
import { useTranslation } from 'react-i18next';
import { systemConfig, userProfile } from '../../../data/lifeOSData';

const LifeOSHeader = () => {
  const { t } = useTranslation();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('lifeOS.header.greeting.morning', 'Good morning');
    if (hour < 17) return t('lifeOS.header.greeting.afternoon', 'Good afternoon');
    return t('lifeOS.header.greeting.evening', 'Good evening');
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            {systemConfig.name}
          </h1>
          <div className="px-2 py-1 rounded-full bg-teal-500/10 border border-teal-500/30">
            <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 tracking-wider">
              {t('lifeOS.header.beta', 'BETA')}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {systemConfig.subtitle}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/10 border border-teal-500/30 dark:border-teal-500/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-300">
            {t('lifeOS.dashboard.status', 'SYSTEM ONLINE')}
          </span>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium text-slate-900 dark:text-white">
            {getGreeting()}, {userProfile.name}.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {userProfile.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeOSHeader;