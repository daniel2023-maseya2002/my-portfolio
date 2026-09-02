// src/components/DigitalTwin/ModeSelector.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, ChevronDown, Code, PenTool, Sparkles, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinModes } from '../../data/digitalTwinData';

const iconMap = {
  Briefcase: Briefcase,
  Users: Users,
  Code: Code,
  PenTool: PenTool,
  Sparkles: Sparkles
};

const ModeSelector = ({ selectedMode, onSelectMode }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentMode = digitalTwinModes.find(m => m.id === selectedMode) || digitalTwinModes[4];
  const IconComponent = iconMap[currentMode.icon] || Sparkles;

  // Get translated mode label
  const getModeLabel = (modeId) => {
    const key = `digitalTwin.modes.${modeId}`;
    const labels = {
      recruiter: t('digitalTwin.modes.recruiter', 'Recruiter'),
      client: t('digitalTwin.modes.client', 'Client'),
      developer: t('digitalTwin.modes.developer', 'Developer'),
      designer: t('digitalTwin.modes.designer', 'Designer'),
      explore: t('digitalTwin.modes.explore', 'Explore Freely')
    };
    return labels[modeId] || modeId;
  };

  const getModeDescription = (modeId) => {
    const key = `digitalTwin.modes.${modeId}Desc`;
    const descriptions = {
      recruiter: t('digitalTwin.modes.recruiterDesc', "I'm looking to understand skills, experience, and engineering capabilities."),
      client: t('digitalTwin.modes.clientDesc', 'I want to know what can be built and how problems are solved.'),
      developer: t('digitalTwin.modes.developerDesc', "I'm interested in the technical stack, architecture, and engineering practices."),
      designer: t('digitalTwin.modes.designerDesc', 'I want to explore the design thinking, UI/UX approach, and visual systems.'),
      explore: t('digitalTwin.modes.exploreDesc', 'I want to explore everything without any specific focus.')
    };
    return descriptions[modeId] || '';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all duration-200"
      >
        <IconComponent className="w-4 h-4 text-teal-500" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {getModeLabel(selectedMode)}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50"
          >
            <div className="p-2">
              {digitalTwinModes.map((mode) => {
                const ModeIcon = iconMap[mode.icon] || Sparkles;
                const isActive = selectedMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      onSelectMode(mode.id);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/30'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <ModeIcon className={`w-4 h-4 ${isActive ? 'text-teal-500' : 'text-slate-400'}`} />
                      <div>
                        <p className={`text-sm font-medium ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-700 dark:text-slate-300'}`}>
                          {getModeLabel(mode.id)}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                          {getModeDescription(mode.id)}
                        </p>
                      </div>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModeSelector;