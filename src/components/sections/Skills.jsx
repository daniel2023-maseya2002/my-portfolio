// src/components/sections/Skills.jsx
import {
  Activity,
  Award,
  BarChart,
  Bot,
  Briefcase,
  Cloud,
  Code2,
  Command,
  Cpu,
  CreditCard,
  Database,
  Figma,
  FileText,
  GitBranch, Globe,
  Headphones,
  Layers,
  Layout,
  Mail,
  MessageSquare,
  Mic,
  Palette,
  PenTool,
  Puzzle,
  Search,
  Server,
  Settings,
  Shield,
  Smartphone,
  Sparkles,
  Terminal,
  TrendingUp,
  Users,
  Workflow,
  Wrench,
  Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from '../../utils/analytics';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          trackEvent('skills-section-view', {
            categories: skillCategories.length,
            total_skills: allSkills.length
          });
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSkillHover = (skillName, category) => {
    trackEvent('skill-hover', {
      skill: skillName,
      category: category
    });
  };

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: Command },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'ai', label: 'AI & Automation', icon: Bot },
    { id: 'design', label: 'UI/UX Design', icon: PenTool },
    { id: 'devops', label: 'DevOps & Tools', icon: Wrench },
    { id: 'professional', label: 'Professional', icon: Briefcase },
  ];

  const getCategoryIcon = (category) => {
    const icons = {
      frontend: Layout,
      backend: Server,
      mobile: Smartphone,
      ai: Bot,
      design: PenTool,
      devops: Wrench,
      professional: Briefcase,
    };
    return icons[category] || Code2;
  };

  const allSkills = [
    // Frontend Skills
    { name: 'JavaScript', category: 'frontend', level: 92, icon: Code2 },
    { name: 'React.js', category: 'frontend', level: 90, icon: Layout },
    { name: 'HTML5', category: 'frontend', level: 95, icon: Globe },
    { name: 'CSS3', category: 'frontend', level: 90, icon: Palette },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: Palette },
    { name: 'Material UI', category: 'frontend', level: 85, icon: Layers },
    { name: 'Vite', category: 'frontend', level: 88, icon: Zap },
    { name: 'Responsive Design', category: 'frontend', level: 90, icon: Smartphone },
    { name: 'Web UI Design', category: 'frontend', level: 85, icon: Layout },

    // Backend Skills
    { name: 'Python', category: 'backend', level: 88, icon: Code2 },
    { name: 'Java', category: 'backend', level: 85, icon: Code2 },
    { name: 'Spring Boot', category: 'backend', level: 82, icon: Server },
    { name: 'Django', category: 'backend', level: 87, icon: Server },
    { name: 'Django REST', category: 'backend', level: 85, icon: Server },
    { name: 'PHP', category: 'backend', level: 80, icon: Code2 },
    { name: 'SQL', category: 'backend', level: 88, icon: Database },
    { name: 'PostgreSQL', category: 'backend', level: 86, icon: Database },
    { name: 'REST API Dev', category: 'backend', level: 90, icon: Cloud },
    { name: 'API Integration', category: 'backend', level: 88, icon: Cloud },
    { name: 'JSON', category: 'backend', level: 90, icon: FileText },
    { name: 'Axios', category: 'backend', level: 85, icon: Cloud },
    { name: 'Auth & AuthZ', category: 'backend', level: 85, icon: Shield },
    { name: 'Database Design', category: 'backend', level: 84, icon: Database },
    { name: 'CRUD Development', category: 'backend', level: 90, icon: FileText },

    // Mobile Development
    { name: 'Dart', category: 'mobile', level: 82, icon: Code2 },
    { name: 'Flutter', category: 'mobile', level: 80, icon: Smartphone },
    { name: 'Android Dev', category: 'mobile', level: 78, icon: Smartphone },
    { name: 'Mobile UI Design', category: 'mobile', level: 82, icon: Layout },

    // AI & Automation
    { name: 'AI Integration', category: 'ai', level: 85, icon: Cpu },
    { name: 'Generative AI', category: 'ai', level: 82, icon: Sparkles },
    { name: 'AI Assistants', category: 'ai', level: 88, icon: Bot },
    { name: 'AI Agents', category: 'ai', level: 84, icon: Cpu },
    { name: 'Virtual Assistants', category: 'ai', level: 90, icon: MessageSquare },
    { name: 'AI Chatbots', category: 'ai', level: 88, icon: MessageSquare },
    { name: 'Conversational AI', category: 'ai', level: 85, icon: Users },
    { name: 'Prompt Engineering', category: 'ai', level: 87, icon: PenTool },
    { name: 'OpenAI API', category: 'ai', level: 85, icon: Cpu },
    { name: 'Dialogflow', category: 'ai', level: 82, icon: MessageSquare },
    { name: 'NLP', category: 'ai', level: 80, icon: FileText },
    { name: 'Speech Recognition', category: 'ai', level: 78, icon: Mic },
    { name: 'Speech-to-Text', category: 'ai', level: 78, icon: Mic },
    { name: 'Text-to-Speech', category: 'ai', level: 78, icon: Headphones },
    { name: 'Voice Assistants', category: 'ai', level: 80, icon: Mic },
    { name: 'Intelligent Automation', category: 'ai', level: 85, icon: Zap },
    { name: 'AI Workflow', category: 'ai', level: 82, icon: Workflow },
    { name: 'Virtual Assistant Dev', category: 'ai', level: 88, icon: Bot },
    { name: 'AI Virtual Assistant', category: 'ai', level: 86, icon: MessageSquare },
    { name: 'Chatbot Dev', category: 'ai', level: 88, icon: MessageSquare },
    { name: 'Automated Comms', category: 'ai', level: 85, icon: Mail },
    { name: 'Workflow Automation', category: 'ai', level: 85, icon: Workflow },
    { name: 'Conversational Workflow', category: 'ai', level: 82, icon: Users },
    { name: 'AI Customer Service', category: 'ai', level: 84, icon: Users },

    // UI/UX Design
    { name: 'UI/UX Design', category: 'design', level: 88, icon: PenTool },
    { name: 'Figma', category: 'design', level: 90, icon: Figma },
    { name: 'Wireframing', category: 'design', level: 88, icon: PenTool },
    { name: 'Prototyping', category: 'design', level: 89, icon: PenTool },
    { name: 'Design Systems', category: 'design', level: 85, icon: Layers },
    { name: 'User Flow Design', category: 'design', level: 87, icon: Workflow },
    { name: 'Interactive Prototyping', category: 'design', level: 86, icon: Layout },

    // DevOps & Tools
    { name: 'Git', category: 'devops', level: 90, icon: GitBranch },
    { name: 'GitHub', category: 'devops', level: 92, icon: GitBranch },
    { name: 'GitLab', category: 'devops', level: 85, icon: GitBranch },
    { name: 'SSH', category: 'devops', level: 82, icon: Shield },
    { name: 'Vercel', category: 'devops', level: 88, icon: Zap },
    { name: 'InfinityFree', category: 'devops', level: 80, icon: Cloud },
    { name: 'Android Studio', category: 'devops', level: 78, icon: Smartphone },
    { name: 'VS Code', category: 'devops', level: 92, icon: Terminal },
    { name: 'Firebase', category: 'devops', level: 85, icon: Database },
    { name: 'Stripe', category: 'devops', level: 82, icon: CreditCard },
    { name: 'Twilio', category: 'devops', level: 80, icon: MessageSquare },
    { name: 'SendGrid', category: 'devops', level: 82, icon: Mail },
    { name: 'Formspree', category: 'devops', level: 85, icon: FileText },
    { name: 'Jotform', category: 'devops', level: 80, icon: FileText },
    { name: 'Systeme.io', category: 'devops', level: 78, icon: Settings },
    { name: 'Google Analytics', category: 'devops', level: 82, icon: BarChart },
    { name: 'Umami Analytics', category: 'devops', level: 85, icon: Activity },
    { name: 'DNS Config', category: 'devops', level: 80, icon: Globe },
    { name: 'SPF', category: 'devops', level: 78, icon: Shield },
    { name: 'DKIM', category: 'devops', level: 78, icon: Shield },
    { name: 'DMARC', category: 'devops', level: 76, icon: Shield },

    // Professional Skills
    { name: 'Technical Support', category: 'professional', level: 88, icon: Wrench },
    { name: 'IT Support', category: 'professional', level: 85, icon: Settings },
    { name: 'Software Troubleshooting', category: 'professional', level: 87, icon: Search },
    { name: 'Customer Support', category: 'professional', level: 90, icon: Users },
    { name: 'Digital Communication', category: 'professional', level: 88, icon: Mail },
    { name: 'Technical Documentation', category: 'professional', level: 85, icon: FileText },
    { name: 'Data Management', category: 'professional', level: 84, icon: Database },
    { name: 'Research', category: 'professional', level: 86, icon: Search },
    { name: 'Project Management', category: 'professional', level: 82, icon: Briefcase },
    { name: 'Product Development', category: 'professional', level: 80, icon: TrendingUp },
    { name: 'Digital Product Design', category: 'professional', level: 82, icon: PenTool },
    { name: 'Business Process Automation', category: 'professional', level: 85, icon: Workflow },
    { name: 'Remote Collaboration', category: 'professional', level: 92, icon: Users },
    { name: 'Problem Solving', category: 'professional', level: 90, icon: Puzzle },
    { name: 'Technical Research', category: 'professional', level: 85, icon: Search },
    { name: 'Requirements Analysis', category: 'professional', level: 84, icon: FileText },
    { name: 'Testing & Debugging', category: 'professional', level: 86, icon: Search },
    { name: 'API Testing', category: 'professional', level: 85, icon: Cloud },
    { name: 'Full-Stack Dev', category: 'professional', level: 85, icon: Layers },
    { name: 'Software Architecture', category: 'professional', level: 80, icon: Settings },
    { name: 'System Design', category: 'professional', level: 78, icon: Settings },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return allSkills.length;
    return allSkills.filter(skill => skill.category === categoryId).length;
  };

  const CategoryButton = ({ category }) => {
    const isActive = activeCategory === category.id;
    const count = getCategoryCount(category.id);
    const Icon = category.icon;
    
    return (
      <button
        onClick={() => setActiveCategory(category.id)}
        className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
          isActive 
            ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30 scale-105' 
            : 'bg-white/5 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 hover:bg-teal-500/10 hover:border-teal-500/50 border border-slate-200 dark:border-slate-700'
        }`}
      >
        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-500 dark:text-teal-400'}`} />
        <span>{category.label}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          isActive 
            ? 'bg-white/20 text-white' 
            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
        }`}>
          {count}
        </span>
      </button>
    );
  };

  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skill.icon;
    
    return (
      <div 
        className="group relative"
        style={{
          transitionDelay: `${index * 30}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          handleSkillHover(skill.name, skill.category);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden rounded-xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 ${
          isHovered 
            ? 'border-teal-500/50 shadow-xl shadow-teal-500/10 -translate-y-1' 
            : 'border-slate-200 dark:border-slate-700'
        }`}>
          {/* Animated gradient background on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r from-teal-500/5 to-emerald-500/5 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          
          <div className="relative p-4">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/10 to-emerald-500/10 text-teal-600 dark:text-teal-400 transition-all duration-300 ${
                isHovered ? 'scale-110 shadow-lg shadow-teal-500/20' : ''
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {skill.name}
                  </span>
                  <span className="text-xs font-medium text-teal-600 dark:text-teal-400 whitespace-nowrap">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-1.5 mt-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out ${
                      isHovered ? 'opacity-100' : 'opacity-80'
                    }`}
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 ${
                    isHovered ? 'translate-x-full' : '-translate-x-full'
                  }`} style={{ width: '50%' }} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative corner accent */}
          <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-bl-full transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300" />
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("skills.badge") || "Expertise"}
              </span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            {t("skills.title") || "Technical & Professional"}{' '}
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t("skills.titleHighlight") || "Skill Set"}
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {t("skills.description") || "A comprehensive collection of technologies, tools, and professional capabilities I work with."}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-6" />
        </div>

        {/* Category Filters - Scrollable */}
        <div className={`mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((category) => (
              <CategoryButton key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              No skills found in this category.
            </p>
          </div>
        )}

        {/* Stats Footer */}
        <div className={`mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-teal-600 dark:text-teal-400">{allSkills.length}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Total Skills</span>
              </div>
              <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{skillCategories.length - 1}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Categories</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
              </span>
              Hover over skills to explore
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;