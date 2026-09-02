// src/utils/analysisEngine.js
import { getGoalById } from '../data/goals';
import { getSkillById } from '../data/skills';

export const analyzeCareerProfile = (goal, skills) => {
  if (!goal) {
    return {
      strengths: [],
      gaps: [],
      summary: 'Please select a career goal first.',
      nextAction: { action: 'Select a career goal', reason: 'You need to define your career direction.' },
      roadmap: ['Select a career goal to generate a roadmap'],
      progress: 0
    };
  }

  const goalData = getGoalById(goal.id);
  if (!goalData) {
    return {
      strengths: [],
      gaps: [],
      summary: 'Career goal not found.',
      nextAction: { action: 'Select a valid career goal', reason: 'Please choose from the available options.' },
      roadmap: [],
      progress: 0
    };
  }

  const requiredSkillIds = goalData.skills || [];
  
  // Find strengths (skills the user has that are relevant)
  const strengths = [];
  const gaps = [];

  requiredSkillIds.forEach(skillId => {
    const fullSkill = getSkillById(skillId);
    if (!fullSkill) return;
    
    const userSkill = skills.find(s => s.id === skillId);
    if (userSkill) {
      if (userSkill.level === 'advanced' || userSkill.level === 'intermediate') {
        strengths.push(fullSkill.name);
      } else if (userSkill.level === 'beginner') {
        gaps.push(`${fullSkill.name} (Beginner)`);
      }
    } else {
      gaps.push(fullSkill.name);
    }
  });

  // If user has skills but no gaps, suggest advancement
  if (gaps.length === 0 && skills.length > 0) {
    gaps.push('Advanced specialization in your chosen field');
  }

  // Calculate progress
  const coveredSkills = skills.filter(s => requiredSkillIds.includes(s.id));
  const progress = Math.min(100, Math.round((coveredSkills.length / Math.max(requiredSkillIds.length, 1)) * 100));

  // Generate summary
  let summary = '';
  if (strengths.length > 0 && gaps.length > 0) {
    summary = `Your foundation in ${strengths.slice(0, 2).join(' and ')} is strong. ` +
      `To reach your goal of becoming a ${goal.label}, focus on developing: ${gaps.slice(0, 3).join(', ')}.`;
  } else if (strengths.length > 0 && gaps.length === 0) {
    summary = `You have a strong foundation in ${strengths.join(', ')}. ` +
      `Consider advancing to expert level or exploring adjacent technologies to stand out as a ${goal.label}.`;
  } else if (gaps.length > 0) {
    summary = `To become a ${goal.label}, focus on building skills in: ${gaps.slice(0, 3).join(', ')}. ` +
      `Start with the fundamentals and work your way up.`;
  } else {
    summary = `Start building your skills to begin your journey as a ${goal.label}.`;
  }

  // Generate next best action
  let nextAction = {
    action: 'Continue building your skills',
    reason: 'Keep progressing on your learning journey.',
    difficulty: 'Intermediate'
  };

  if (gaps.length > 0) {
    const firstGap = gaps[0].replace(' (Beginner)', '');
    nextAction = {
      action: `Learn ${firstGap}`,
      reason: `This is a key skill for becoming a ${goal.label} that you haven't developed yet.`,
      difficulty: 'Beginner'
    };
  } else if (strengths.length > 0) {
    nextAction = {
      action: `Build a project using ${strengths[0]}`,
      reason: `Apply your ${strengths[0]} skills to a real project to deepen your expertise.`,
      difficulty: 'Intermediate'
    };
  }

  // Generate roadmap
  const roadmap = [];
  if (gaps.length > 0) {
    roadmap.push(`Master ${gaps[0].replace(' (Beginner)', '')} fundamentals`);
  } else {
    roadmap.push('Deepen your existing skill set');
  }
  
  if (gaps.length > 1) {
    roadmap.push(`Learn ${gaps.slice(0, 2).join(' and ')}`);
  } else if (gaps.length === 1) {
    roadmap.push(`Build a project using ${gaps[0].replace(' (Beginner)', '')}`);
  } else {
    roadmap.push('Build an advanced project in your field');
  }
  
  roadmap.push('Create a portfolio project');
  roadmap.push('Get real-world experience (freelance, open source)');
  
  // Career-specific steps
  if (goal.id === 'fullstack-developer' || goal.id === 'software-engineer') {
    roadmap.push('Learn advanced architecture patterns');
    roadmap.push('Optimize for performance and scalability');
  } else if (goal.id === 'ai-engineer') {
    roadmap.push('Build a production-ready AI application');
    roadmap.push('Learn MLOps practices');
  } else if (goal.id === 'mobile-developer') {
    roadmap.push('Publish an app to the App Store');
    roadmap.push('Learn advanced mobile architecture');
  } else if (goal.id === 'ui-ux-designer') {
    roadmap.push('Master advanced prototyping');
    roadmap.push('Build a comprehensive design system');
  } else {
    roadmap.push('Specialize in your chosen domain');
  }
  
  roadmap.push('Prepare for technical interviews');
  roadmap.push('Apply for positions');

  return {
    strengths,
    gaps,
    summary,
    nextAction,
    roadmap: roadmap.slice(0, 8),
    progress
  };
};