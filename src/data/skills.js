// src/data/skills.js
export const skillsData = [
  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    level: 85,
    category: "Frontend",
    icon: "🟨",
    color: "from-yellow-400 to-yellow-600",
    connectedSkills: ["React", "REST APIs", "TypeScript"],
    relatedProjects: ["imas", "salon-booking-platform", "stayease", "manuella-portfolio", "jeremienze-portfolio", "bismanfx-acadmique", "cassieposhevents"],
    description: "Core web development language"
  },
  {
    id: "react",
    name: "React.js",
    level: 80,
    category: "Frontend",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    connectedSkills: ["JavaScript", "REST APIs", "UI/UX", "Vite"],
    relatedProjects: ["imas", "salon-booking-platform", "stayease", "manuella-portfolio", "jeremienze-portfolio", "savingdm", "bismanfx-acadmique"],
    description: "Building modern UI components"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    level: 92,
    category: "Frontend",
    icon: "💨",
    color: "from-sky-400 to-blue-500",
    connectedSkills: ["React", "UI/UX", "CSS3"],
    relatedProjects: ["salon-booking-platform", "stayease", "manuella-portfolio", "cassieposhevents", "bismanfx-acadmique", "imas"],
    description: "Utility-first CSS framework"
  },
  {
    id: "python",
    name: "Python",
    level: 88,
    category: "Backend",
    icon: "🐍",
    color: "from-emerald-400 to-teal-500",
    connectedSkills: ["Django", "REST APIs", "PostgreSQL"],
    relatedProjects: ["auca", "stayease"],
    description: "Versatile programming language"
  },
  {
    id: "django",
    name: "Django",
    level: 65,
    category: "Backend",
    icon: "🎯",
    color: "from-emerald-500 to-teal-600",
    connectedSkills: ["Python", "PostgreSQL", "REST APIs"],
    relatedProjects: ["auca", "stayease", "salon-booking-platform", "savingdm"],
    description: "High-level Python web framework"
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    level: 55,
    category: "Database",
    icon: "🐘",
    color: "from-indigo-400 to-purple-500",
    connectedSkills: ["Django", "SQL", "Database Design"],
    relatedProjects: ["auca", "stayease", "salon-booking-platform", "savingdm"],
    description: "Advanced relational database"
  },
  {
    id: "restapis",
    name: "REST APIs",
    level: 60,
    category: "Backend",
    icon: "🔌",
    color: "from-blue-400 to-indigo-500",
    connectedSkills: ["Django", "JavaScript", "PostgreSQL"],
    relatedProjects: ["imas", "stayease", "salon-booking-platform", "savingdm"],
    description: "API design and integration"
  },
  {
    id: "flutter",
    name: "Flutter",
    level: 40,
    category: "Mobile",
    icon: "📱",
    color: "from-sky-400 to-blue-500",
    connectedSkills: ["Dart", "Mobile UI", "Firebase"],
    relatedProjects: [],
    description: "Cross-platform mobile framework"
  },
  {
    id: "dart",
    name: "Dart",
    level: 42,
    category: "Mobile",
    icon: "🎯",
    color: "from-teal-400 to-cyan-500",
    connectedSkills: ["Flutter", "Mobile UI"],
    relatedProjects: [],
    description: "Programming language for Flutter"
  },
  {
    id: "firebase",
    name: "Firebase",
    level: 60,
    category: "Database",
    icon: "🔥",
    color: "from-orange-400 to-yellow-500",
    connectedSkills: ["Authentication", "Realtime Database"],
    relatedProjects: ["stayease"],
    description: "Backend-as-a-Service platform"
  },
  {
    id: "aiintegration",
    name: "AI Integration",
    level: 70,
    category: "AI",
    icon: "🧠",
    color: "from-purple-400 to-pink-500",
    connectedSkills: ["Python", "OpenAI API", "Dialogflow"],
    relatedProjects: [],
    description: "Integrating AI into applications"
  },
  {
    id: "uidesign",
    name: "UI/UX Design",
    level: 75,
    category: "Design",
    icon: "🎨",
    color: "from-rose-400 to-pink-500",
    connectedSkills: ["Figma", "Prototyping", "User Research"],
    relatedProjects: ["imas", "apartment-booking-platform", "salon-booking-platform", "manuella-portfolio"],
    description: "User-centered design approach"
  },
  {
    id: "java",
    name: "Java",
    level: 70,
    category: "Backend",
    icon: "☕",
    color: "from-red-400 to-orange-500",
    connectedSkills: ["Spring Boot", "REST APIs"],
    relatedProjects: ["imas"],
    description: "Enterprise-grade programming language"
  },
  {
    id: "springboot",
    name: "Spring Boot",
    level: 65,
    category: "Backend",
    icon: "🌱",
    color: "from-green-400 to-emerald-500",
    connectedSkills: ["Java", "REST APIs"],
    relatedProjects: ["imas"],
    description: "Java framework for building microservices"
  },
  {
    id: "csharp",
    name: "C#",
    level: 70,
    category: "Backend",
    icon: "🎯",
    color: "from-purple-400 to-indigo-500",
    connectedSkills: ["ASP.NET", "SQL Server"],
    relatedProjects: ["eyecare", "auca"],
    description: "Microsoft's modern programming language"
  },
  {
    id: "aspnet",
    name: "ASP.NET",
    level: 68,
    category: "Backend",
    icon: "🌐",
    color: "from-blue-400 to-purple-500",
    connectedSkills: ["C#", "SQL Server"],
    relatedProjects: ["eyecare", "auca"],
    description: "Microsoft's web framework"
  },
  {
    id: "html",
    name: "HTML5",
    level: 95,
    category: "Frontend",
    icon: "🌐",
    color: "from-orange-400 to-red-500",
    connectedSkills: ["CSS3", "JavaScript"],
    relatedProjects: ["cassieposhevents", "bismanfx-acadmique"],
    description: "Markup language for the web"
  },
  {
    id: "css3",
    name: "CSS3",
    level: 90,
    category: "Frontend",
    icon: "🎨",
    color: "from-blue-400 to-cyan-500",
    connectedSkills: ["Tailwind", "HTML5"],
    relatedProjects: ["cassieposhevents", "bismanfx-acadmique", "jeremienze-portfolio"],
    description: "Styling language for the web"
  },
  {
    id: "stripe",
    name: "Stripe API",
    level: 65,
    category: "Backend",
    icon: "💳",
    color: "from-blue-400 to-purple-500",
    connectedSkills: ["REST APIs", "Payment Integration"],
    relatedProjects: ["salon-booking-platform"],
    description: "Payment processing integration"
  },
  {
    id: "oauth",
    name: "OAuth",
    level: 60,
    category: "Backend",
    icon: "🔐",
    color: "from-green-400 to-teal-500",
    connectedSkills: ["Authentication", "Security"],
    relatedProjects: ["salon-booking-platform", "stayease"],
    description: "Authentication protocol"
  },
  {
    id: "vercel",
    name: "Vercel",
    level: 85,
    category: "DevOps",
    icon: "▲",
    color: "from-gray-400 to-slate-500",
    connectedSkills: ["React", "Deployment"],
    relatedProjects: ["manuella-portfolio", "savingdm", "stayease", "salon-booking-platform"],
    description: "Frontend deployment platform"
  },
  {
    id: "render",
    name: "Render",
    level: 75,
    category: "DevOps",
    icon: "🚀",
    color: "from-purple-400 to-indigo-500",
    connectedSkills: ["Django", "PostgreSQL", "Deployment"],
    relatedProjects: ["stayease", "salon-booking-platform"],
    description: "Cloud application platform"
  },
  {
    id: "figma",
    name: "Figma",
    level: 85,
    category: "Design",
    icon: "🎨",
    color: "from-purple-400 to-pink-500",
    connectedSkills: ["UI/UX", "Prototyping"],
    relatedProjects: ["imas", "apartment-booking-platform"],
    description: "Design and prototyping tool"
  }
];

export const getSkillById = (id) => skillsData.find(s => s.id === id);

export const getSkillsByCategory = (category) => 
  skillsData.filter(s => s.category === category);

export const getSkillsByIds = (ids) => {
  if (!ids || !Array.isArray(ids)) return [];
  return skillsData.filter(s => ids.includes(s.id));
};

export const getSkillLevel = (id) => {
  const skill = getSkillById(id);
  return skill ? skill.level : 0;
};