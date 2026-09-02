// src/components/DigitalTwin/DigitalTwinLayout.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDigitalTwin } from '../../hooks/useDigitalTwin';
import { trackEvent } from '../../utils/analytics';
import ContextPanel from './ContextPanel';
import DigitalTwinAssistant from './DigitalTwinAssistant';
import EngineeringDNA from './EngineeringDNA';
import ExperienceTimeline from './ExperienceTimeline';
import ModeSelector from './ModeSelector';
import ProjectExplorer from './ProjectExplorer';
import TechnologyExplorer from './TechnologyExplorer';
import TwinVisualization from './TwinVisualization';
import WhatICanBuild from './WhatICanBuild';

const DigitalTwinLayout = () => {
  const { t } = useTranslation();
  const {
    selectedNode,
    selectedMode,
    activeSection,
    setSelectedNode,
    setActiveSection,
    setSelectedMode,
    getContextualContent
  } = useDigitalTwin();

  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const sections = [
    { id: 'twin', label: t('digitalTwin.sections.twin', 'Twin') },
    { id: 'technologies', label: t('digitalTwin.sections.technologies', 'Technologies') },
    { id: 'projects', label: t('digitalTwin.sections.projects', 'Projects') },
    { id: 'engineering', label: t('digitalTwin.sections.engineering', 'Engineering DNA') },
    { id: 'capabilities', label: t('digitalTwin.sections.capabilities', 'What I Can Build') },
    { id: 'experience', label: t('digitalTwin.sections.experience', 'Experience') }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'twin':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TwinVisualization 
                selectedNode={selectedNode} 
                onSelectNode={setSelectedNode}
              />
            </div>
            <div>
              <ContextPanel 
                selectedNode={selectedNode}
                mode={selectedMode}
                content={getContextualContent(selectedNode)}
              />
            </div>
          </div>
        );
      case 'technologies':
        return <TechnologyExplorer mode={selectedMode} />;
      case 'projects':
        return <ProjectExplorer mode={selectedMode} />;
      case 'engineering':
        return <EngineeringDNA />;
      case 'capabilities':
        return <WhatICanBuild />;
      case 'experience':
        return <ExperienceTimeline />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full py-8 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {t('digitalTwin.title', 'Digital Twin')}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t('digitalTwin.subtitle', 'Interactive representation of skills, projects, and engineering capabilities')}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <ModeSelector 
              selectedMode={selectedMode} 
              onSelectMode={setSelectedMode} 
            />
            <button
              onClick={() => setIsAssistantOpen(!isAssistantOpen)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t('digitalTwin.askTwin', 'Ask Twin')}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide border-b border-slate-200 dark:border-slate-800">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                trackEvent('digital-twin-section-viewed', { section: section.id });
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Assistant */}
      <DigitalTwinAssistant 
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        mode={selectedMode}
      />
    </div>
  );
};

export default DigitalTwinLayout;