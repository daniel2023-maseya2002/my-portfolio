// src/utils/recommendationEngine.js
import { getGoalById } from '../data/goals';
import projects from '../data/projects';
import { getSkillById } from '../data/skills';

export const generateRecommendation = (goalId, skills) => {
  const goal = getGoalById(goalId);
  if (!goal) return null;

  // Find skills relevant to the goal
  const relevantSkills = skills.filter(s => goal.skills.includes(s.id));
  
  // Find the weakest relevant skill (largest gap)
  let weakestSkill = null;
  let lowestLevel = 100;
  
  for (const skill of relevantSkills) {
    const level = skill.level || 0;
    if (level < lowestLevel) {
      lowestLevel = level;
      weakestSkill = skill;
    }
  }

  // If no skill is weak, suggest an advanced recommendation
  if (!weakestSkill || lowestLevel > 70) {
    return {
      action: "Build an advanced integration project",
      reason: "Connect multiple skills in a complex application.",
      relatedSkills: relevantSkills.map(s => s.id),
      effort: "High",
      impact: "Very High"
    };
  }

  // Generate recommendation based on weakest skill
  const recommendations = {
    django: {
      action: "Strengthen your Django REST API project",
      reason: "This will complete your full-stack skill set.",
      effort: "Medium",
      impact: "High"
    },
    postgresql: {
      action: "Strengthen database design and PostgreSQL integration",
      reason: "This will complement your existing React and Django experience.",
      effort: "Medium",
      impact: "High"
    },
    react: {
      action: "Explore advanced state management and performance optimization",
      reason: "This will elevate your frontend development skills.",
      effort: "Medium",
      impact: "High"
    },
    javascript: {
      action: "Master modern JavaScript features and patterns",
      reason: "Stronger JavaScript foundation will improve all your work.",
      effort: "Low",
      impact: "High"
    },
    flutter: {
      action: "Build a simple cross-platform mobile app",
      reason: "Hands-on experience will accelerate your mobile development.",
      effort: "Medium",
      impact: "Medium"
    },
    uidesign: {
      action: "Refine your design system and prototyping skills",
      reason: "Stronger UI/UX will make your projects more impactful.",
      effort: "Medium",
      impact: "High"
    },
    restapis: {
      action: "Build a comprehensive REST API with advanced features",
      reason: "This will strengthen your backend capabilities.",
      effort: "Medium",
      impact: "High"
    },
    default: {
      action: `Focus on improving ${weakestSkill.name}`,
      reason: `This is your current growth opportunity in the ${goal.name} goal.`,
      effort: "Medium",
      impact: "High"
    }
  };

  const rec = recommendations[weakestSkill.id] || recommendations.default;
  
  return {
    action: rec.action,
    reason: rec.reason,
    relatedSkills: [weakestSkill.id, ...relevantSkills.filter(s => s.id !== weakestSkill.id).slice(0, 2).map(s => s.id)],
    effort: rec.effort,
    impact: rec.impact
  };
};

export const getNextBestAction = (goalId, skills) => {
  // Get projects related to the goal
  const goal = getGoalById(goalId);
  if (!goal) return null;
  
  const relatedProjects = projects.filter(p => goal.relatedProjects.includes(p.id));
  
  // Find incomplete projects
  const incompleteProjects = relatedProjects.filter(p => {
    // Map progress based on project status
    const progressMap = {
      'Live': 95,
      'Completed': 100,
      'Active': 70,
      'In Development': 60,
      'Design Phase': 40,
      'Concept': 25
    };
    return progressMap[p.status || 'In Development'] < 100;
  });
  
  if (incompleteProjects.length > 0) {
    const nextProject = incompleteProjects[0];
    const progressMap = {
      'Live': 95,
      'Completed': 100,
      'Active': 70,
      'In Development': 60,
      'Design Phase': 40,
      'Concept': 25
    };
    const progress = progressMap[nextProject.status || 'In Development'] || 50;
    return {
      action: `Advance ${nextProject.id === 'manuella-portfolio' ? 'Manuella Portfolio' : nextProject.id} project`,
      reason: `Currently at ${progress}% completion. This project demonstrates key skills.`,
      project: nextProject.id,
      effort: "Medium",
      impact: "High"
    };
  }

  // Fallback to skill-based recommendation
  return generateRecommendation(goalId, skills);
};

export const getSkillGap = (goalId, skills) => {
  const goal = getGoalById(goalId);
  if (!goal) return null;

  const requiredSkills = goal.skills || [];
  const currentSkillLevels = {};
  const gaps = [];

  for (const skillId of requiredSkills) {
    const skill = skills.find(s => s.id === skillId);
    const level = skill ? skill.level || 0 : 0;
    currentSkillLevels[skillId] = level;
    
    if (level < 70) {
      gaps.push({
        skillId,
        currentLevel: level,
        gap: 70 - level,
        skillName: getSkillById(skillId)?.name || skillId
      });
    }
  }

  return {
    requiredSkills,
    currentLevels: currentSkillLevels,
    gaps: gaps.sort((a, b) => b.gap - a.gap)
  };
};