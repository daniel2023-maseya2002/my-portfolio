// src/data/goals.js
export const goalCategories = [
  {
    id: "career",
    label: "Career",
    icon: "💼",
    goals: [
      {
        id: "fullstack-engineer",
        name: "Become Full-Stack Engineer",
        description: "Master frontend, backend, and database technologies",
        progress: 75,
        skills: ["react", "javascript", "django", "postgresql", "restapis", "uidesign"],
        relatedProjects: ["imas", "stayease", "salon-booking-platform", "auca"]
      },
      {
        id: "ai-engineer",
        name: "Become AI Engineer",
        description: "Build intelligent systems and AI-powered applications",
        progress: 55,
        skills: ["aiintegration", "python", "restapis"],
        relatedProjects: []
      },
      {
        id: "mobile-developer",
        name: "Become Mobile Developer",
        description: "Build cross-platform mobile applications",
        progress: 40,
        skills: ["flutter", "dart", "firebase"],
        relatedProjects: []
      }
    ]
  },
  {
    id: "learning",
    label: "Learning",
    icon: "📚",
    goals: [
      {
        id: "master-react",
        name: "Master React",
        description: "Advanced React patterns and performance optimization",
        progress: 80,
        skills: ["react", "javascript", "tailwind", "vercel"],
        relatedProjects: ["imas", "salon-booking-platform", "manuella-portfolio", "stayease"]
      },
      {
        id: "master-django",
        name: "Master Django",
        description: "Build robust backend systems with Django",
        progress: 65,
        skills: ["django", "python", "postgresql", "restapis"],
        relatedProjects: ["stayease", "auca", "salon-booking-platform"]
      },
      {
        id: "learn-ml",
        name: "Learn Machine Learning",
        description: "Understanding ML fundamentals and applications",
        progress: 30,
        skills: ["python", "aiintegration"],
        relatedProjects: []
      },
      {
        id: "improve-ux",
        name: "Improve UI/UX",
        description: "Design better user experiences",
        progress: 70,
        skills: ["uidesign", "figma"],
        relatedProjects: ["imas", "apartment-booking-platform"]
      }
    ]
  },
  {
    id: "projects",
    label: "Projects",
    icon: "🚀",
    goals: [
      {
        id: "build-ai-assistant",
        name: "Build AI Assistant",
        description: "Create an intelligent AI assistant",
        progress: 60,
        skills: ["aiintegration", "react", "restapis"],
        relatedProjects: []
      },
      {
        id: "build-saas",
        name: "Build SaaS Product",
        description: "Launch a full-featured SaaS platform",
        progress: 35,
        skills: ["react", "django", "stripe", "postgresql"],
        relatedProjects: ["stayease", "salon-booking-platform"]
      },
      {
        id: "launch-portfolio",
        name: "Launch Portfolio",
        description: "Complete and deploy professional portfolio",
        progress: 95,
        skills: ["react", "tailwind", "uidesign", "vercel"],
        relatedProjects: ["manuella-portfolio"]
      }
    ]
  }
];

export const getGoalById = (id) => {
  for (const category of goalCategories) {
    const goal = category.goals.find(g => g.id === id);
    if (goal) return { ...goal, category: category.id };
  }
  return null;
};

export const getAllGoals = () => {
  const all = [];
  for (const category of goalCategories) {
    all.push(...category.goals.map(g => ({ ...g, category: category.id })));
  }
  return all;
};