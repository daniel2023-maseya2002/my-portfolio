// src/components/LifeOS/Simulator/WhatIfSimulator.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../../../data/skills';
import GlassCard from '../Shared/GlassCard';
import ProgressBar from '../Shared/ProgressBar';

const WhatIfSimulator = ({ onRunSimulation, simulationResult }) => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState('react');
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [weeks, setWeeks] = useState(12);

  const handleRun = () => {
    onRunSimulation(selectedSkill, hoursPerWeek, weeks);
  };

  const skill = skillsData.find(s => s.id === selectedSkill);

  return (
    <GlassCard>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {t('lifeOS.simulator.title', 'WHAT IF?')}
            </p>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400">
              {t('lifeOS.simulator.simulation', 'Simulation')}
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t('lifeOS.simulator.description', 'Explore possible outcomes based on different choices.')}
          </p>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('lifeOS.simulator.skillToImprove', 'Skill to improve')}
              </label>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-teal-500"
              >
                {skillsData.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.level}%)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('lifeOS.simulator.hoursPerWeek', 'Hours per week')}: {hoursPerWeek}h
              </label>
              <input
                type="range"
                min="2"
                max="30"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full mt-1 accent-teal-500"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {t('lifeOS.simulator.duration', 'Duration')}: {weeks} {t('lifeOS.simulator.weeks', 'weeks')}
              </label>
              <input
                type="range"
                min="4"
                max="24"
                value={weeks}
                onChange={(e) => setWeeks(parseInt(e.target.value))}
                className="w-full mt-1 accent-teal-500"
              />
            </div>

            <button
              onClick={handleRun}
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            >
              {t('lifeOS.simulator.runSimulation', 'Run Simulation')}
            </button>

            {simulationResult && (
              <div className="mt-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {simulationResult.skillName}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {simulationResult.weeks} {t('lifeOS.simulator.weeks', 'weeks')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t('lifeOS.simulator.currentLevel', 'Current Level')}
                    </p>
                    <p className="text-xl font-bold text-slate-900 dark:text-white">
                      {simulationResult.currentLevel}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t('lifeOS.simulator.projectedLevel', 'Projected Level')}
                    </p>
                    <p className="text-xl font-bold text-teal-600 dark:text-teal-400">
                      {simulationResult.projectedLevel}%
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <ProgressBar 
                        value={simulationResult.currentLevel} 
                        color="from-slate-400 to-slate-500"
                      />
                    </div>
                    <svg className="w-4 h-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="flex-1">
                      <ProgressBar 
                        value={simulationResult.projectedLevel} 
                        color="from-teal-500 to-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      +{simulationResult.relatedProjects}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {t('lifeOS.simulator.projects', 'Projects')}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {simulationResult.portfolioReadiness}%
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {t('lifeOS.simulator.readiness', 'Readiness')}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {simulationResult.consistency}%
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {t('lifeOS.simulator.consistency', 'Consistency')}
                    </p>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-3 text-center italic">
                  {t('lifeOS.simulator.disclaimer', 'Simulation — illustrative projection, not a real prediction.')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default WhatIfSimulator;