// src/pages/LifeOS.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LifeOSAssistant from '../components/LifeOS/Assistant/LifeOSAssistant';
import ActivityTimeline from '../components/LifeOS/Dashboard/ActivityTimeline';
import AIInsight from '../components/LifeOS/Dashboard/AIInsight';
import CurrentGoal from '../components/LifeOS/Dashboard/CurrentGoal';
import NextBestAction from '../components/LifeOS/Dashboard/NextBestAction';
import GoalSelector from '../components/LifeOS/Goals/GoalSelector';
import LifeOSHeader from '../components/LifeOS/Header/LifeOSHeader';
import AnalysisResults from '../components/LifeOS/Onboarding/AnalysisResults';
import GoalSelection from '../components/LifeOS/Onboarding/GoalSelection';
import SkillSelection from '../components/LifeOS/Onboarding/SkillSelection';
import WelcomeScreen from '../components/LifeOS/Onboarding/WelcomeScreen';
import ProjectIntelligence from '../components/LifeOS/Projects/ProjectIntelligence';
import WhatIfSimulator from '../components/LifeOS/Simulator/WhatIfSimulator';
import SkillIntelligence from '../components/LifeOS/Skills/SkillIntelligence';
import { useLifeOS } from '../hooks/useLifeOS';
import { trackEvent } from '../utils/analytics';

const LifeOS = () => {
  const { t } = useTranslation();
  const {
    isOnboarding,
    visitorGoal,
    visitorSkills,
    analysisResult,
    completeOnboarding,
    runAnalysis,
    currentGoal,
    currentGoalId,
    selectedSkillId,
    selectedProjectId,
    recommendation,
    simulationResult,
    assistantResponse,
    insights,
    recentActivities,
    selectGoal,
    selectSkill,
    selectProject,
    runSimulation,
    askAssistant,
  } = useLifeOS();

  const [isAssistantOpen, setIsAssistantOpenLocal] = useState(false);
  const [onboardingStep, setOnboardingStep] = useState(0);

  const handleAssistantToggle = () => {
    setIsAssistantOpenLocal(!isAssistantOpen);
    trackEvent('assistant-toggle', { open: !isAssistantOpen });
  };

  // Onboarding steps: 0=Welcome, 1=Goal, 2=Skills, 3=Analysis
  const renderOnboarding = () => {
    switch (onboardingStep) {
      case 0:
        return (
          <WelcomeScreen 
            onStart={() => setOnboardingStep(1)} 
          />
        );
      case 1:
        return (
          <GoalSelection 
            onSelect={(goal) => {
              selectGoal(goal.id);
              setOnboardingStep(2);
            }}
            onBack={() => setOnboardingStep(0)}
          />
        );
      case 2:
        return (
          <SkillSelection 
            onComplete={(skills) => {
              // Run the analysis engine with the selected goal and skills
              const analysis = runAnalysis(visitorGoal, skills);
              completeOnboarding(visitorGoal, skills, analysis);
              setOnboardingStep(3);
            }}
            onBack={() => setOnboardingStep(1)}
            initialSkills={visitorSkills}
          />
        );
      case 3:
        return (
          <AnalysisResults 
            goal={visitorGoal}
            skills={visitorSkills}
            onRestart={() => {
              setOnboardingStep(0);
            }}
            onContinue={() => {
              setOnboardingStep(0);
            }}
          />
        );
      default:
        return null;
    }
  };

  // If onboarding, show onboarding flow
  if (isOnboarding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {renderOnboarding()}
      </div>
    );
  }

  // Main dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto">
        <LifeOSHeader />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <CurrentGoal goal={currentGoal} onSelectGoal={() => {}} />
            <AIInsight insights={insights} />
            <NextBestAction recommendation={recommendation} />
          </div>
          <div className="space-y-6">
            <ActivityTimeline activities={recentActivities} />
          </div>
        </div>

        {/* Goals & Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <GoalSelector 
            currentGoalId={currentGoalId} 
            onSelectGoal={selectGoal} 
          />
          <SkillIntelligence 
            skillId={selectedSkillId} 
            onSelectProject={selectProject}
          />
        </div>

        {/* Projects & Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ProjectIntelligence 
            projectId={selectedProjectId}
            onSelectSkill={selectSkill}
          />
          <WhatIfSimulator 
            onRunSimulation={runSimulation}
            simulationResult={simulationResult}
          />
        </div>

        {/* Assistant Toggle */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleAssistantToggle}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {isAssistantOpen ? t('lifeOS.assistant.close') || 'Close Assistant' : t('lifeOS.assistant.open') || 'Open LIFE OS Assistant'}
          </button>
        </div>

        {/* Assistant */}
        <LifeOSAssistant 
          isOpen={isAssistantOpen}
          onAskQuestion={askAssistant}
          response={assistantResponse}
        />
      </div>
    </div>
  );
};

export default LifeOS;