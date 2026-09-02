// src/components/LifeOS/Onboarding/SkillSelection.jsx
import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const availableSkills = [
  { id: 'javascript', name: 'JavaScript', category: 'Frontend' },
  { id: 'python', name: 'Python', category: 'Backend' },
  { id: 'java', name: 'Java', category: 'Backend' },
  { id: 'dart', name: 'Dart', category: 'Mobile' },
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'html', name: 'HTML', category: 'Frontend' },
  { id: 'css', name: 'CSS', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend' },
  { id: 'django', name: 'Django', category: 'Backend' },
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'springboot', name: 'Spring Boot', category: 'Backend' },
  { id: 'restapis', name: 'REST APIs', category: 'Backend' },
  { id: 'sql', name: 'SQL', category: 'Database' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database' },
  { id: 'firebase', name: 'Firebase', category: 'Database' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile' },
  { id: 'ml', name: 'Machine Learning', category: 'AI' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI' },
  { id: 'uiux', name: 'UI/UX Design', category: 'Design' },
  { id: 'figma', name: 'Figma', category: 'Design' },
];

const levelOptions = [
  { value: 'beginner', label: 'Beginner', color: 'from-blue-400 to-blue-500' },
  { value: 'intermediate', label: 'Intermediate', color: 'from-teal-400 to-emerald-500' },
  { value: 'advanced', label: 'Advanced', color: 'from-purple-400 to-pink-500' },
];

const SkillSelection = ({ onComplete, onBack, initialSkills = [] }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [selectedSkills, setSelectedSkills] = useState(
    initialSkills.reduce((acc, skill) => ({ ...acc, [skill.id]: skill.level || 'beginner' }), {})
  );

  const toggleSkill = (skillId) => {
    setSelectedSkills(prev => {
      const newState = { ...prev };
      if (newState[skillId]) {
        delete newState[skillId];
      } else {
        newState[skillId] = 'beginner';
      }
      return newState;
    });
  };

  const updateLevel = (skillId, level) => {
    setSelectedSkills(prev => ({
      ...prev,
      [skillId]: level
    }));
  };

  const filteredSkills = availableSkills.filter(skill =>
    skill.name.toLowerCase().includes(search.toLowerCase()) ||
    skill.category.toLowerCase().includes(search.toLowerCase())
  );

  const selectedCount = Object.keys(selectedSkills).length;

  const handleContinue = () => {
    const skills = Object.entries(selectedSkills).map(([id, level]) => ({
      id,
      level,
      name: availableSkills.find(s => s.id === id)?.name || id
    }));
    onComplete(skills);
  };

  // Get translated level labels
  const getLevelLabel = (level) => {
    const labels = {
      beginner: t('lifeOS.skillSelection.levels.beginner', 'Beginner'),
      intermediate: t('lifeOS.skillSelection.levels.intermediate', 'Intermediate'),
      advanced: t('lifeOS.skillSelection.levels.advanced', 'Advanced')
    };
    return labels[level] || level;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 px-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          {t('lifeOS.skillSelection.title', 'What are your current skills?')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {t('lifeOS.skillSelection.subtitle', 'Select the skills you already have and your proficiency level.')}
        </p>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('lifeOS.skillSelection.search', 'Search skills by name or category...')}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
        {filteredSkills.map((skill) => {
          const isSelected = !!selectedSkills[skill.id];
          const level = selectedSkills[skill.id] || 'beginner';
          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-teal-500 bg-teal-500/5'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <button
                onClick={() => toggleSkill(skill.id)}
                className="flex items-center justify-between w-full mb-2"
              >
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  {skill.category}
                </span>
              </button>
              {isSelected && (
                <div className="flex gap-1">
                  {levelOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateLevel(skill.id, opt.value)}
                      className={`flex-1 px-2 py-1 rounded text-[10px] font-medium transition-all duration-200 ${
                        level === opt.value
                          ? `bg-gradient-to-r ${opt.color} text-white`
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {getLevelLabel(opt.value)}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-8">
          <p className="text-slate-500 dark:text-slate-400">
            {t('lifeOS.skillSelection.noResults', 'No skills found matching your search.')}
          </p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {selectedCount} {t('lifeOS.skillSelection.selected', 'skills selected')}
        </div>
        <div className="flex gap-3">
          <button
            onClick={onBack}
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
          >
            {t('lifeOS.skillSelection.back', '← Back')}
          </button>
          <button
            onClick={handleContinue}
            disabled={selectedCount === 0}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedCount > 0
                ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-teal-500/30'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            }`}
          >
            {t('lifeOS.skillSelection.analyze', 'Analyze My Profile')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillSelection;