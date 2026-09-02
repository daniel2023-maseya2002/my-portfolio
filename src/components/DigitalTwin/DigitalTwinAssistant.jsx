// src/components/DigitalTwin/DigitalTwinAssistant.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { digitalTwinKnowledge } from '../../data/digitalTwinData';
import projects from '../../data/projects';
import { skillsData } from '../../data/skills';
import { trackEvent } from '../../utils/analytics';

const DigitalTwinAssistant = ({ isOpen, onClose, mode }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQuestions = [
    t('digitalTwin.assistant.suggestions.technologies', 'What technologies does Daniel use?'),
    t('digitalTwin.assistant.suggestions.built', 'What has Daniel built?'),
    t('digitalTwin.assistant.suggestions.lifeos', 'Tell me about LIFE OS.'),
    t('digitalTwin.assistant.suggestions.imas', 'What is IMAS?'),
    t('digitalTwin.assistant.suggestions.applications', 'What kind of applications can Daniel build?'),
    t('digitalTwin.assistant.suggestions.approach', 'What is Daniel\'s engineering approach?'),
    t('digitalTwin.assistant.suggestions.mobile', 'What mobile technologies does Daniel use?')
  ];

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content: t('digitalTwin.assistant.welcome', '👋 Hello! I\'m your Digital Twin Assistant. I can help you learn about Daniel\'s skills, projects, and engineering capabilities. What would you like to know?'),
          timestamp: new Date()
        }
      ]);
      trackEvent('assistant-opened', { mode });
    }
  }, [isOpen, mode, t]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    // Check knowledge base
    for (const [key, entry] of Object.entries(digitalTwinKnowledge)) {
      if (lowerQuestion.includes(entry.question.toLowerCase()) || 
          lowerQuestion.includes(key.toLowerCase())) {
        return entry.answer;
      }
    }

    // Check for specific patterns
    if (lowerQuestion.includes('project') || lowerQuestion.includes('built')) {
      const projectNames = projects.map(p => p.name).join(', ');
      return t('digitalTwin.assistant.responses.projects', 'Daniel has built several projects including: {{projects}}. Each project demonstrates different technical capabilities and problem-solving approaches.', { projects: projectNames });
    }

    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology')) {
      const techNames = skillsData.map(s => s.name).slice(0, 10).join(', ');
      return t('digitalTwin.assistant.responses.technologies', 'Daniel works with a variety of technologies including: {{techs}}. His stack focuses on modern, production-grade tools and frameworks.', { techs: techNames });
    }

    if (lowerQuestion.includes('mobile')) {
      return t('digitalTwin.assistant.responses.mobile', 'Daniel uses Flutter and Dart for cross-platform mobile development, with Firebase for backend services. He builds responsive, native-like mobile experiences.');
    }

    if (lowerQuestion.includes('engineering') || lowerQuestion.includes('approach')) {
      return t('digitalTwin.assistant.responses.engineering', 'Daniel follows a structured engineering approach: Understand the problem deeply, Design the system architecture, Build with clean code, Test thoroughly, and Continuously Improve based on feedback.');
    }

    if (lowerQuestion.includes('life os')) {
      return t('digitalTwin.assistant.responses.lifeos', 'LIFE OS is an AI-powered career and growth navigator that helps users identify skill gaps, explore career paths, and discover their next best actions. It\'s built with React, Django, and integrates AI concepts for personalized recommendations.');
    }

    if (lowerQuestion.includes('imas')) {
      return t('digitalTwin.assistant.responses.imas', 'IMAS (Intelligent Mobility Assistance System) is a mobility platform designed to improve ride experiences in Kinshasa. It helps passengers request rides, track vehicles, and review drivers. Built with React, Java, and Spring Boot.');
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach')) {
      return t('digitalTwin.assistant.responses.contact', 'You can reach Daniel at maseyadaniel@gmail.com or via WhatsApp at +250 792 434 027. He\'s open to opportunities and collaborations!');
    }

    return t('digitalTwin.assistant.defaultResponse', 'I\'m not sure about that specific question, but I can tell you about Daniel\'s technologies, projects, engineering approach, or specific projects like LIFE OS and IMAS. Try asking one of the suggested questions!');
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    trackEvent('assistant-question-submitted', { question: input.substring(0, 50), mode });

    setTimeout(() => {
      const response = getResponse(input);
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl max-h-[90vh] md:max-h-[80vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-teal-500/5 to-emerald-500/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {t('digitalTwin.assistant.title', 'Digital Twin Assistant')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t('digitalTwin.assistant.subtitle', 'Ask me about Daniel\'s skills, projects, and capabilities')}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[50vh] md:max-h-[55vh]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`p-3 rounded-xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                    {message.timestamp?.toLocaleTimeString()}
                  </p>
                </div>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mr-2 order-0 mt-1">
                    DT
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    DT
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 border-t border-slate-200 dark:border-slate-700 pt-3">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                {t('digitalTwin.assistant.suggestedQuestions', 'Suggested questions:')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestedQuestions.slice(0, 4).map((question) => (
                  <button
                    key={question}
                    onClick={() => handleSuggestionClick(question)}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('digitalTwin.assistant.placeholder', 'Ask the Digital Twin...')}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-teal-500 text-sm"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DigitalTwinAssistant;