// src/data/activities.js
export const activitiesData = [
  {
    id: 1,
    title: "Completed React component architecture",
    description: "Designed and implemented modular component structure",
    timestamp: "2 hours ago",
    category: "Development",
    type: "achievement"
  },
  {
    id: 2,
    title: "Added Django REST API integration",
    description: "Connected frontend with backend API endpoints",
    timestamp: "1 day ago",
    category: "Backend",
    type: "milestone"
  },
  {
    id: 3,
    title: "Worked on AI assistant concept",
    description: "Explored conversational AI capabilities",
    timestamp: "2 days ago",
    category: "AI",
    type: "learning"
  },
  {
    id: 4,
    title: "Updated portfolio",
    description: "Added new projects and improved UI",
    timestamp: "3 days ago",
    category: "Design",
    type: "achievement"
  },
  {
    id: 5,
    title: "Explored Flutter development",
    description: "Started learning cross-platform mobile development",
    timestamp: "5 days ago",
    category: "Mobile",
    type: "learning"
  },
  {
    id: 6,
    title: "Launched salon booking system",
    description: "Deployed first version of Nysha Hair Braiding platform",
    timestamp: "1 week ago",
    category: "Development",
    type: "milestone"
  },
  {
    id: 7,
    title: "Completed UI/UX design for apartment booking",
    description: "Finished Figma prototype for luxury apartment platform",
    timestamp: "2 weeks ago",
    category: "Design",
    type: "achievement"
  }
];

export const getActivitiesByCategory = (category) => 
  activitiesData.filter(a => a.category === category);

export const getRecentActivities = (limit = 5) => 
  activitiesData.slice(0, limit);