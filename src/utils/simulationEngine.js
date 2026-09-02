// src/utils/simulationEngine.js
import { getSkillById } from '../data/skills';

export const simulateGrowth = (skillId, hoursPerWeek, weeks, currentLevel) => {
  const skill = getSkillById(skillId);
  if (!skill) return null;

  // Learning curve parameters (simulated)
  const baseGrowth = 0.5; // Base growth per hour
  const diminishingFactor = 0.02; // Diminishing returns for high levels
  
  // Calculate total hours
  const totalHours = hoursPerWeek * weeks;
  
  // Simulated growth with diminishing returns
  let growth = 0;
  let remaining = totalHours;
  let current = currentLevel;
  
  while (remaining > 0 && current < 95) {
    const efficiency = Math.max(0.3, 1 - (current / 100) * 0.5);
    const increment = baseGrowth * efficiency * 2;
    growth += increment;
    current += increment;
    remaining -= 1;
  }
  
  // Cap at 95%
  const newLevel = Math.min(95, currentLevel + growth);
  const improvement = Math.round(newLevel - currentLevel);
  
  // Simulated related outcomes
  const projectCount = Math.round(weeks / 4) + 1;
  const portfolioReadiness = Math.min(100, Math.round(newLevel * 0.8 + 20));
  const consistency = Math.min(100, Math.round(hoursPerWeek / 10 * 100));
  
  return {
    currentLevel: Math.round(currentLevel),
    projectedLevel: Math.round(newLevel),
    improvement,
    totalHours: Math.round(totalHours),
    relatedProjects: projectCount,
    portfolioReadiness,
    consistency,
    weeks,
    hoursPerWeek,
    skillName: skill.name,
    isSimulation: true,
    disclaimer: "Simulation — illustrative projection, not a real prediction."
  };
};

export const generateSimulationOptions = (skillId) => {
  const skill = getSkillById(skillId);
  if (!skill) return null;

  return {
    skill: skillId,
    skillName: skill.name,
    scenarios: [
      { id: 'light', label: 'Light', hoursPerWeek: 5, weeks: 12 },
      { id: 'moderate', label: 'Moderate', hoursPerWeek: 10, weeks: 12 },
      { id: 'intensive', label: 'Intensive', hoursPerWeek: 20, weeks: 12 }
    ]
  };
};