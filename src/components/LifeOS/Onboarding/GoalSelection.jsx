// src/components/LifeOS/Onboarding/GoalSelection.jsx
import { motion } from 'framer-motion';
import { BarChart, Briefcase, Check, ChevronRight, Code, Cpu, PenTool, Shield, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const careerGoals = [
  { id: 'software-engineer', label: 'Software Engineer', icon: Code, description: 'Build and maintain software systems' },
  { id: 'fullstack-developer', label: 'Full-Stack Developer', icon: Briefcase, description: 'Frontend + Backend development' },
  { id: 'frontend-developer', label: 'Frontend Developer', icon: Code, description: 'UI/UX focused web development' },
  { id: 'backend-developer', label: 'Backend Developer', icon: Briefcase, description: 'Server-side & database development' },
  { id: 'mobile-developer', label: 'Mobile Developer', icon: Smartphone, description: 'iOS/Android app development' },
  { id: 'ai-engineer', label: 'AI Engineer', icon: Cpu, description: 'Machine learning & AI systems' },
  { id: 'data-analyst', label: 'Data Analyst', icon: BarChart, description: 'Data analysis & visualization' },
  { id: 'ui-ux-designer', label: 'UI/UX Designer', icon: PenTool, description: 'User experience & interface design' },
  { id: 'cybersecurity', label: 'Cybersecurity Specialist', icon: Shield, description: 'Security & protection systems' },
];

const GoalSelection = ({ onSelect, onBack }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const handleSelect = (goal) => {
    setSelected(goal);
  };

  const handleContinue = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  // Get translated goal descriptions
  const getGoalLabel = (goal) => {
    const key = `lifeOS.goalSelection.goals.${goal.id}`;
    const labels = {
      'software-engineer': t('lifeOS.goalSelection.goals.softwareEngineer', 'Software Engineer'),
      'fullstack-developer': t('lifeOS.goalSelection.goals.fullstackDeveloper', 'Full-Stack Developer'),
      'frontend-developer': t('lifeOS.goalSelection.goals.frontendDeveloper', 'Frontend Developer'),
      'backend-developer': t('lifeOS.goalSelection.goals.backendDeveloper', 'Backend Developer'),
      'mobile-developer': t('lifeOS.goalSelection.goals.mobileDeveloper', 'Mobile Developer'),
      'ai-engineer': t('lifeOS.goalSelection.goals.aiEngineer', 'AI Engineer'),
      'data-analyst': t('lifeOS.goalSelection.goals.dataAnalyst', 'Data Analyst'),
      'ui-ux-designer': t('lifeOS.goalSelection.goals.uiUxDesigner', 'UI/UX Designer'),
      'cybersecurity': t('lifeOS.goalSelection.goals.cybersecurity', 'Cybersecurity Specialist')
    };
    return labels[goal.id] || goal.label;
  };

  const getGoalDescription = (goal) => {
    const key = `lifeOS.goalSelection.goals.${goal.id}Desc`;
    const descriptions = {
      'software-engineer': t('lifeOS.goalSelection.goals.softwareEngineerDesc', 'Build and maintain software systems'),
      'fullstack-developer': t('lifeOS.goalSelection.goals.fullstackDeveloperDesc', 'Frontend + Backend development'),
      'frontend-developer': t('lifeOS.goalSelection.goals.frontendDeveloperDesc', 'UI/UX focused web development'),
      'backend-developer': t('lifeOS.goalSelection.goals.backendDeveloperDesc', 'Server-side & database development'),
      'mobile-developer': t('lifeOS.goalSelection.goals.mobileDeveloperDesc', 'iOS/Android app development'),
      'ai-engineer': t('lifeOS.goalSelection.goals.aiEngineerDesc', 'Machine learning & AI systems'),
      'data-analyst': t('lifeOS.goalSelection.goals.dataAnalystDesc', 'Data analysis & visualization'),
      'ui-ux-designer': t('lifeOS.goalSelection.goals.uiUxDesignerDesc', 'User experience & interface design'),
      'cybersecurity': t('lifeOS.goalSelection.goals.cybersecurityDesc', 'Security & protection systems')
    };
    return descriptions[goal.id] || goal.description;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 px-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t('lifeOS.goalSelection.title', 'Choose Your Career Goal')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {t('lifeOS.goalSelection.subtitle', 'Select the career path you want to pursue. LIFE OS will help you get there.')}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {careerGoals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selected?.id === goal.id;
          const label = getGoalLabel(goal);
          const description = getGoalDescription(goal);

          return (
            <motion.button
              key={goal.id}
              onClick={() => handleSelect(goal)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                isSelected
                  ? 'border-teal-500 bg-teal-500/10 shadow-lg shadow-teal-500/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-teal-500/50 hover:bg-teal-500/5'
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  isSelected
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">
                  {label}
                </span>
                {isSelected && <Check className="w-4 h-4 text-teal-500 ml-auto" />}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 ml-11">
                {description}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          {t('lifeOS.goalSelection.back', '← Back')}
        </button>
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
            selected
              ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-teal-500/30'
              : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
          }`}
        >
          {t('lifeOS.goalSelection.continue', 'Continue')}
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default GoalSelection;