// src/components/LifeOS/Assistant/LifeOSAssistant.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import GlassCard from '../Shared/GlassCard';

const LifeOSAssistant = ({ onAskQuestion, response, isOpen }) => {
  const { t } = useTranslation();
  const [question, setQuestion] = useState('');

  const suggestedQuestions = [
    t('lifeOS.assistant.suggestions.next', 'What should I work on next?'),
    t('lifeOS.assistant.suggestions.skill', 'Which skill should I improve?'),
    t('lifeOS.assistant.suggestions.fullstack', 'How can I become a stronger full-stack developer?'),
    t('lifeOS.assistant.suggestions.project', 'Which project demonstrates my strongest skills?'),
    t('lifeOS.assistant.suggestions.gap', 'What is my biggest skill gap?'),
    t('lifeOS.assistant.suggestions.learn', 'What should I learn next?')
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onAskQuestion(question);
      setQuestion('');
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onAskQuestion(suggestion);
  };

  if (!isOpen) return null;

  return (
    <GlassCard className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] max-h-[80vh] z-50 shadow-2xl">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold">
              OS
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {t('lifeOS.assistant.title', 'LIFE OS Assistant')}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                {t('lifeOS.assistant.subtitle', 'Intelligent Command Center')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px]">
          {!response && (
            <div className="text-center py-8">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t('lifeOS.assistant.welcome', 'Ask me anything about your goals, skills, or projects.')}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {response && (
            <div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  OS
                </div>
                <div className="flex-1">
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {response.answer}
                    </p>
                    {response.type && (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 block">
                        {response.type}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={t('lifeOS.assistant.placeholder', 'Ask LIFE OS...')}
              className="flex-1 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
            />
            <button
              type="submit"
              disabled={!question.trim()}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </GlassCard>
  );
};

export default LifeOSAssistant;