// src/components/LifeOS/Onboarding/AnalysisResults.jsx
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Award, BookOpen, Check, RefreshCw, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnalysisResults = ({ goal, skills, analysis, onRestart, onContinue }) => {
  const { t } = useTranslation();

  // If no analysis, show loading or message
  if (!analysis) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20 px-6">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-500 border-t-transparent" />
        <p className="text-slate-500 dark:text-slate-400 mt-4">
          {t('lifeOS.analysis.loading', 'Analyzing your profile...')}
        </p>
      </div>
    );
  }

  const { strengths = [], gaps = [], summary, nextAction, roadmap = [], progress = 0 } = analysis;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 px-6"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 mb-4">
          <Award className="w-4 h-4 text-teal-500" />
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-300">
            {t('lifeOS.analysis.badge', 'CAREER ANALYSIS COMPLETE')}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          {t('lifeOS.analysis.title', 'Your Career Profile')}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          {t('lifeOS.analysis.subtitle', 'Based on your goal to become a')}{' '}
          <span className="font-semibold text-slate-700 dark:text-slate-300">{goal?.label}</span>
        </p>
      </div>

      {/* Progress */}
      <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            {t('lifeOS.analysis.readiness', 'Profile Readiness')}
          </span>
          <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          {t('lifeOS.analysis.readinessDesc', 'Based on your selected skills and career goal')}
        </p>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-500/20 mb-6">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Strengths */}
        <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20">
          <div className="flex items-center gap-2 mb-3">
            <Check className="w-5 h-5 text-emerald-500" />
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {t('lifeOS.analysis.strengths', 'Your Strengths')}
            </h4>
          </div>
          {strengths.length > 0 ? (
            <ul className="space-y-2">
              {strengths.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t('lifeOS.analysis.noStrengths', 'No strengths identified yet.')}
            </p>
          )}
        </div>

        {/* Gaps */}
        <div className="p-6 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {t('lifeOS.analysis.gaps', 'Areas to Develop')}
            </h4>
          </div>
          {gaps.length > 0 ? (
            <ul className="space-y-2">
              {gaps.map((skill, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t('lifeOS.analysis.noGaps', 'Great! No major gaps identified.')}
            </p>
          )}
        </div>
      </div>

      {/* Next Best Action */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950/20 dark:to-emerald-950/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-500/20 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              {t('lifeOS.analysis.nextAction', 'Your Next Best Action')}
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
              {nextAction?.action || t('lifeOS.analysis.continueLearning', 'Continue your learning journey')}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {nextAction?.reason || t('lifeOS.analysis.buildSkills', 'Keep building your skills to reach your goal.')}
            </p>
            {nextAction?.difficulty && (
              <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {t('lifeOS.analysis.difficulty', 'Difficulty')}: {nextAction.difficulty}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Roadmap */}
      {roadmap && roadmap.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-teal-500" />
            <h4 className="font-semibold text-slate-900 dark:text-white">
              {t('lifeOS.analysis.roadmap', 'Your Personalized Roadmap')}
            </h4>
          </div>
          <div className="space-y-3">
            {roadmap.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-slate-700 hover:border-teal-500/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          {t('lifeOS.analysis.startOver', 'Start Over')}
        </button>
        <button
          onClick={onContinue}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center gap-2"
        >
          {t('lifeOS.analysis.continue', 'Continue to Dashboard')}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default AnalysisResults;