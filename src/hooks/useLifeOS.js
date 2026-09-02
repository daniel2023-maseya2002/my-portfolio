// src/hooks/useLifeOS.js
import { useCallback, useEffect, useRef, useState } from 'react';
import { getAllGoals, getGoalById } from '../data/goals';
import { insights, recentActivities, userProfile } from '../data/lifeOSData';
import projects from '../data/projects';
import { getSkillById, skillsData } from '../data/skills';
import { analyzeCareerProfile } from '../utils/analysisEngine';
import { trackEvent } from '../utils/analytics';
import { getNextBestAction } from '../utils/recommendationEngine';
import { simulateGrowth } from '../utils/simulationEngine';

export const useLifeOS = () => {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [visitorGoal, setVisitorGoal] = useState(null);
  const [visitorSkills, setVisitorSkills] = useState([]);
  const [analysisResult, setAnalysisResult] = useState(null);
  
  const [selectedSkillId, setSelectedSkillId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [simulationResult, setSimulationResult] = useState(null);
  const [assistantResponse, setAssistantResponse] = useState(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [assistantQuestion, setAssistantQuestion] = useState('');

  // Use ref to track if recommendation has been set
  const hasSetRecommendation = useRef(false);

  const DEFAULT_GOAL_ID = 'fullstack-engineer';
  const currentGoal = visitorGoal || getGoalById(DEFAULT_GOAL_ID);
  const allGoals = getAllGoals();
  const currentSkills = visitorSkills.length > 0 ? visitorSkills : skillsData;

  // Track LIFE OS open
  useEffect(() => {
    trackEvent('life-os-opened', {});
  }, []);

  // Update recommendation when goal or skills change - FIXED infinite loop
  useEffect(() => {
    // Check if currentGoal exists and has an id before using it
    if (currentGoal && currentGoal.id && !hasSetRecommendation.current) {
      const rec = getNextBestAction(currentGoal.id, currentSkills);
      setRecommendation(rec);
      trackEvent('recommendation-viewed', { goal: currentGoal.id });
      hasSetRecommendation.current = true;
    }
  }, [currentGoal, currentSkills]); // Dependencies are fine, the ref prevents re-runs

  // Reset recommendation flag when goal or skills change significantly
  useEffect(() => {
    hasSetRecommendation.current = false;
  }, [currentGoal?.id, visitorSkills.length]);

  const startOnboarding = useCallback(() => {
    setIsOnboarding(true);
    trackEvent('life-os-started', {});
  }, []);

  const completeOnboarding = useCallback((goal, skills, analysis) => {
    if (!goal || !goal.id) {
      console.warn('Cannot complete onboarding: No valid goal selected');
      const defaultGoal = getGoalById(DEFAULT_GOAL_ID);
      setVisitorGoal(defaultGoal);
      setVisitorSkills(skills || []);
      setAnalysisResult(analysis || null);
      setIsOnboarding(false);
      trackEvent('analysis-completed', { goal: 'default', skillCount: skills?.length || 0 });
      return;
    }
    
    setVisitorGoal(goal);
    setVisitorSkills(skills || []);
    setAnalysisResult(analysis || null);
    setIsOnboarding(false);
    hasSetRecommendation.current = false; // Reset to trigger new recommendation
    trackEvent('analysis-completed', { goal: goal.id, skillCount: skills?.length || 0 });
  }, []);

  const selectGoal = useCallback((goalId) => {
    const goal = getGoalById(goalId);
    setVisitorGoal(goal);
    hasSetRecommendation.current = false; // Reset to trigger new recommendation
    trackEvent('career-goal-selected', { goal: goalId, category: goal?.category });
  }, []);

  const selectSkill = useCallback((skillId) => {
    setSelectedSkillId(skillId);
    const skill = getSkillById(skillId);
    trackEvent('skill-selected', { skill: skillId, level: skill?.level });
  }, []);

  const selectProject = useCallback((projectId) => {
    setSelectedProjectId(projectId);
    trackEvent('project-selected', { project: projectId });
  }, []);

  const runSimulation = useCallback((skillId, hoursPerWeek, weeks) => {
    const skill = getSkillById(skillId);
    const result = simulateGrowth(skillId, hoursPerWeek, weeks, skill?.level || 0);
    setSimulationResult(result);
    trackEvent('simulator-used', { 
      skill: skillId, 
      hoursPerWeek, 
      weeks 
    });
    return result;
  }, []);

  const runAnalysis = useCallback((goal, skills) => {
    if (!goal || !goal.id) {
      console.warn('No valid goal selected for analysis');
      const fallbackResult = {
        strengths: [],
        gaps: ['Please select a career goal first'],
        summary: 'Select a career goal to get personalized analysis.',
        nextAction: { 
          action: 'Select a career goal', 
          reason: 'You need to define your career direction.', 
          difficulty: 'N/A' 
        },
        roadmap: ['Select a career goal to generate a roadmap'],
        progress: 0
      };
      setAnalysisResult(fallbackResult);
      return fallbackResult;
    }
    
    const result = analyzeCareerProfile(goal, skills);
    setAnalysisResult(result);
    trackEvent('analysis-run', { goal: goal.id, skillCount: skills?.length || 0 });
    return result;
  }, []);

  const askAssistant = useCallback((question) => {
    setAssistantQuestion(question);
    trackEvent('assistant-used', { question: question.substring(0, 50) });

    const lowerQuestion = question.toLowerCase().trim();
    let answer = '';
    let type = 'general';

    const analysis = analysisResult;

    if (lowerQuestion.includes('learn next') || lowerQuestion.includes('what should i learn')) {
      if (analysis && analysis.gaps && analysis.gaps.length > 0) {
        answer = `Based on your profile, focus on ${analysis.gaps.slice(0, 2).join(' and ')}. These are your biggest growth opportunities.`;
        type = 'learning';
      } else if (recommendation) {
        answer = recommendation.action + '. ' + recommendation.reason;
        type = 'recommendation';
      } else {
        answer = 'Select a career goal first to get personalized recommendations.';
      }
    } else if (lowerQuestion.includes('skill gap') || lowerQuestion.includes('weakness')) {
      if (analysis && analysis.gaps && analysis.gaps.length > 0) {
        answer = `Your biggest skill gaps are: ${analysis.gaps.join(', ')}. Focus on these to progress.`;
        type = 'skill';
      } else {
        answer = 'You have a well-rounded profile! Consider exploring advanced topics.';
        type = 'skill';
      }
    } else if (lowerQuestion.includes('project') || lowerQuestion.includes('build')) {
      const relatedProjects = projects.filter(p => p.goals && p.goals.includes(currentGoal?.id));
      if (relatedProjects.length > 0) {
        answer = `I recommend working on: ${relatedProjects.slice(0, 2).map(p => p.name).join(' and ')}. These projects align with your goals.`;
        type = 'project';
      } else {
        answer = 'Building a full-stack application that integrates multiple skills would be a great next step.';
        type = 'project';
      }
    } else if (lowerQuestion.includes('improve') || lowerQuestion.includes('profile')) {
      if (analysis && analysis.gaps && analysis.gaps.length > 0) {
        answer = `To improve your profile, focus on ${analysis.gaps.join(' and ')}. Consider building projects in these areas.`;
        type = 'career';
      } else {
        answer = 'Your profile is strong! Try contributing to open source or building a complex project.';
        type = 'career';
      }
    } else if (lowerQuestion.includes('roadmap')) {
      if (analysis && analysis.roadmap && analysis.roadmap.length > 0) {
        answer = `Your personalized roadmap: ${analysis.roadmap.slice(0, 5).join(' → ')}`;
        type = 'roadmap';
      } else {
        answer = 'Complete your profile analysis first to generate a personalized roadmap.';
      }
    } else if (lowerQuestion.includes('goal') || lowerQuestion.includes('career')) {
      if (currentGoal && currentGoal.name) {
        answer = `Your current goal is: ${currentGoal.name}. ${currentGoal.description || ''}`;
        type = 'career';
      } else {
        answer = 'You haven\'t selected a career goal yet. Please choose one from the Goals section.';
        type = 'career';
      }
    } else {
      answer = 'I can help with questions about your skills, career goals, projects, or what to learn next. Try asking: "What should I learn next?" or "What is my biggest skill gap?" or "Show me my roadmap"';
      type = 'general';
    }

    setAssistantResponse({ answer, type });
    return { answer, type };
  }, [currentGoal, currentSkills, recommendation, analysisResult]);

  return {
    isOnboarding,
    visitorGoal,
    visitorSkills,
    analysisResult,
    startOnboarding,
    completeOnboarding,
    runAnalysis,
    
    user: userProfile,
    currentGoal,
    allGoals,
    currentSkills,
    selectedSkillId,
    selectedProjectId,
    recommendation,
    simulationResult,
    assistantResponse,
    isAssistantOpen,
    assistantQuestion,
    insights,
    recentActivities,
    projects,

    selectGoal,
    selectSkill,
    selectProject,
    runSimulation,
    askAssistant,
    setIsAssistantOpen,
    setAssistantQuestion,
    setSimulationResult
  };
};