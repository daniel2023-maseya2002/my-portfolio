// src/data/digitalTwinData.js

// ============================================
// PROFILE DATA
// ============================================

export const digitalTwinProfile = {
  name: "Daniel Maseya",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer • UI/UX Designer • Builder",
  summary: "I build high-performance applications, intelligent systems, and elegant user experiences that solve real problems.",
  location: "Kigali, Rwanda",
  remote: true,
  availability: "open",
  yearsOfExperience: 2,
  projectCount: 15,
  technologyCount: 25,
  currentFocus: "Full-Stack Development & AI Integration"
};

// ============================================
// VISITOR MODES
// ============================================

export const digitalTwinModes = [
  { 
    id: "recruiter", 
    label: "Recruiter", 
    icon: "Briefcase",
    description: "I'm looking to understand skills, experience, and engineering capabilities.",
    priority: ["skills", "experience", "projects", "technologies", "engineering-dna"]
  },
  { 
    id: "client", 
    label: "Client", 
    icon: "Users",
    description: "I want to know what can be built and how problems are solved.",
    priority: ["what-i-build", "projects", "technologies", "engineering-dna", "contact"]
  },
  { 
    id: "developer", 
    label: "Developer", 
    icon: "Code",
    description: "I'm interested in the technical stack, architecture, and engineering practices.",
    priority: ["technologies", "projects", "engineering-dna", "experience", "skills"]
  },
  { 
    id: "designer", 
    label: "Designer", 
    icon: "PenTool",
    description: "I want to explore the design thinking, UI/UX approach, and visual systems.",
    priority: ["ui-ux", "design-dna", "projects", "technologies", "what-i-build"]
  },
  { 
    id: "explore", 
    label: "Explore Freely", 
    icon: "Sparkles",
    description: "I want to explore everything without any specific focus.",
    priority: []
  }
];

// ============================================
// DIGITAL TWIN NODES (Visualization)
// ============================================

export const digitalTwinNodes = [
  {
    id: "mind",
    name: "Mind",
    icon: "Brain",
    color: "from-purple-500 to-pink-500",
    description: "Problem solving, product thinking, and engineering mindset.",
    x: 50,
    y: 15,
    connections: ["development", "design", "ai", "system-design"]
  },
  {
    id: "development",
    name: "Development",
    icon: "Code",
    color: "from-blue-500 to-cyan-500",
    description: "Building robust software systems across web and mobile.",
    x: 20,
    y: 40,
    connections: ["mind", "frontend", "backend", "mobile", "projects"]
  },
  {
    id: "design",
    name: "Design",
    icon: "PenTool",
    color: "from-rose-500 to-orange-500",
    description: "Creating intuitive user experiences and visual interfaces.",
    x: 80,
    y: 40,
    connections: ["mind", "frontend", "ui-ux", "projects"]
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Layout",
    color: "from-emerald-500 to-teal-500",
    description: "Interactive web interfaces with modern frameworks.",
    x: 10,
    y: 65,
    connections: ["development", "design", "technologies", "projects"]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Database",
    color: "from-indigo-500 to-purple-500",
    description: "Server-side logic, databases, and API architecture.",
    x: 35,
    y: 65,
    connections: ["development", "technologies", "projects", "system-design"]
  },
  {
    id: "mobile",
    name: "Mobile",
    icon: "Smartphone",
    color: "from-sky-500 to-blue-500",
    description: "Cross-platform mobile applications with Flutter.",
    x: 60,
    y: 65,
    connections: ["development", "technologies", "projects"]
  },
  {
    id: "ai",
    name: "AI & Data",
    icon: "Cpu",
    color: "from-violet-500 to-purple-500",
    description: "Intelligent systems, automation, and data-driven solutions.",
    x: 85,
    y: 65,
    connections: ["mind", "development", "technologies", "projects"]
  },
  {
    id: "technologies",
    name: "Technologies",
    icon: "Workflow",
    color: "from-amber-500 to-orange-500",
    description: "Tools, frameworks, and languages I work with.",
    x: 50,
    y: 82,
    connections: ["frontend", "backend", "mobile", "ai", "projects"]
  },
  {
    id: "projects",
    name: "Projects",
    icon: "Briefcase",
    color: "from-teal-500 to-emerald-500",
    description: "Real applications and systems I've built.",
    x: 50,
    y: 50,
    connections: ["development", "design", "technologies", "frontend", "backend", "mobile", "ai"]
  },
  {
    id: "system-design",
    name: "System Design",
    icon: "Workflow",
    color: "from-cyan-500 to-blue-500",
    description: "Architecture, scalability, and system thinking.",
    x: 50,
    y: 30,
    connections: ["mind", "backend", "projects", "technologies"]
  }
];

// ============================================
// CAPABILITIES
// ============================================

export const digitalTwinCapabilities = [
  {
    id: "software-development",
    name: "Software Development",
    category: "core",
    icon: "Code",
    description: "Building robust, scalable software systems from concept to deployment.",
    technologies: ["JavaScript", "Python", "Java", "Dart", "React", "Django", "Flutter"],
    projects: ["LIFE OS", "IMAS", "Salon Booking System", "StayEase Africa"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "web-development",
    name: "Web Development",
    category: "core",
    icon: "Layout",
    description: "Modern web applications with responsive, interactive interfaces.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    projects: ["LIFE OS", "Portfolio", "Salon Booking System", "StayEase Africa"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "mobile-development",
    name: "Mobile Development",
    category: "core",
    icon: "Smartphone",
    description: "Cross-platform mobile applications with native-like experiences.",
    technologies: ["Flutter", "Dart", "Android", "Firebase"],
    projects: ["LIFE OS", "Mobile App Projects"],
    color: "from-sky-500 to-blue-500"
  },
  {
    id: "ui-ux",
    name: "UI/UX Design",
    category: "core",
    icon: "PenTool",
    description: "User-centered design, prototyping, and visual interface systems.",
    technologies: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    projects: ["IMAS", "Apartment Booking", "LIFE OS", "Portfolio"],
    color: "from-rose-500 to-orange-500"
  },
  {
    id: "ai-systems",
    name: "AI & Intelligent Systems",
    category: "core",
    icon: "Cpu",
    description: "AI-powered applications, automation, and intelligent workflows.",
    technologies: ["Python", "AI Integration", "OpenAI API", "Dialogflow", "NLP"],
    projects: ["LIFE OS", "Book Vocal Machine", "AI Assistant Concept"],
    color: "from-violet-500 to-purple-500"
  },
  {
    id: "backend-engineering",
    name: "Backend Engineering",
    category: "core",
    icon: "Database",
    description: "Server-side logic, database design, and API architecture.",
    technologies: ["Django", "Python", "PostgreSQL", "REST APIs", "Spring Boot", "Java"],
    projects: ["StayEase Africa", "Salon Booking System", "AUCA Registration", "IMAS"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: "system-design",
    name: "System Design",
    category: "core",
    icon: "Workflow",
    description: "Architecting scalable, maintainable, and robust systems.",
    technologies: ["Architecture", "Database Design", "API Design", "Scalability"],
    projects: ["StayEase Africa", "Salon Booking System", "LIFE OS"],
    color: "from-cyan-500 to-blue-500"
  }
];

// ============================================
// ENGINEERING DNA (Process)
// ============================================

export const engineeringDNA = [
  {
    id: "understand",
    step: "01",
    title: "Understand",
    description: "Deeply understand the problem, users, and requirements before writing any code.",
    details: "I start by asking: Who is this for? What problem are we solving? What does success look like?",
    icon: "Brain",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "design",
    step: "02",
    title: "Design",
    description: "Define the system architecture, user experience, and technical approach.",
    details: "I create wireframes, system diagrams, and technical specifications that guide development.",
    icon: "PenTool",
    color: "from-rose-500 to-orange-500"
  },
  {
    id: "build",
    step: "03",
    title: "Build",
    description: "Implement the solution with clean, maintainable, and well-tested code.",
    details: "I write modular, reusable code with proper documentation and testing practices.",
    icon: "Code",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "test",
    step: "04",
    title: "Test",
    description: "Validate functionality, performance, and usability across all scenarios.",
    details: "I test thoroughly, gather feedback, and ensure the solution works as intended.",
    icon: "Check",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "improve",
    step: "05",
    title: "Improve",
    description: "Iterate based on feedback, metrics, and real-world usage.",
    details: "I continuously refine and optimize based on user feedback and performance data.",
    icon: "Refresh",
    color: "from-amber-500 to-orange-500"
  }
];

// ============================================
// WHAT I CAN BUILD
// ============================================

export const whatICanBuild = [
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Interactive, responsive web applications using modern frontend and backend technologies.",
    icon: "Layout",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Django", "PostgreSQL"],
    projects: ["LIFE OS", "Salon Booking System", "StayEase Africa", "Portfolio"],
    capabilities: ["web-development", "ui-ux", "backend-engineering"]
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Cross-platform mobile experiences with native-like performance and feel.",
    icon: "Smartphone",
    technologies: ["Flutter", "Dart", "Firebase"],
    projects: ["Mobile App Projects"],
    capabilities: ["mobile-development"]
  },
  {
    id: "intelligent-systems",
    title: "Intelligent Systems",
    description: "AI-assisted and data-driven applications that automate and augment decision-making.",
    icon: "Cpu",
    technologies: ["Python", "AI Integration", "OpenAI API", "Dialogflow", "NLP"],
    projects: ["LIFE OS", "Book Vocal Machine", "AI Assistant Concept"],
    capabilities: ["ai-systems", "system-design"]
  },
  {
    id: "business-systems",
    title: "Business Systems",
    description: "Booking platforms, management dashboards, and workflow automation systems.",
    icon: "Briefcase",
    technologies: ["React", "Django", "PostgreSQL", "Stripe"],
    projects: ["Salon Booking System", "StayEase Africa", "AUCA Registration"],
    capabilities: ["web-development", "backend-engineering", "system-design"]
  },
  {
    id: "digital-experiences",
    title: "Digital Experiences",
    description: "Modern, interactive interfaces and user experiences that engage and convert.",
    icon: "PenTool",
    technologies: ["Figma", "React", "Tailwind CSS", "UI/UX"],
    projects: ["IMAS", "Apartment Booking", "LIFE OS", "Portfolio"],
    capabilities: ["ui-ux", "web-development"]
  }
];

// ============================================
// DESIGN DNA
// ============================================

export const designDNA = [
  {
    id: "user-centered",
    name: "User-Centered",
    description: "Every design decision starts with understanding the user's needs and context.",
    icon: "Users"
  },
  {
    id: "functional",
    name: "Functional",
    description: "Design must serve a purpose and enable users to achieve their goals efficiently.",
    icon: "Check"
  },
  {
    id: "clean",
    name: "Clean",
    description: "Visual clarity, minimalism, and thoughtful use of whitespace and typography.",
    icon: "Layout"
  },
  {
    id: "accessible",
    name: "Accessible",
    description: "Inclusive design that works for everyone, regardless of ability or device.",
    icon: "Accessibility"
  },
  {
    id: "responsive",
    name: "Responsive",
    description: "Seamless experiences across all devices and screen sizes.",
    icon: "Smartphone"
  },
  {
    id: "interactive",
    name: "Interactive",
    description: "Engaging interfaces that respond to user actions with meaningful feedback.",
    icon: "Mouse"
  },
  {
    id: "intelligent",
    name: "Intelligent",
    description: "Design that anticipates user needs and adapts to their context.",
    icon: "Cpu"
  }
];

// ============================================
// DIGITAL TWIN KNOWLEDGE (For Assistant)
// ============================================

export const digitalTwinKnowledge = {
  technologies: {
    question: "What technologies does Daniel use?",
    answer: "Daniel works with a modern stack including JavaScript, React, Python, Django, Flutter, and PostgreSQL. He specializes in full-stack development with a focus on building intelligent, user-centered applications."
  },
  projects: {
    question: "What has Daniel built?",
    answer: "Daniel has built several projects including LIFE OS (AI-powered career navigator), IMAS (Intelligent Mobility Assistance System), Salon Booking System, StayEase Africa, and his personal portfolio. Each project demonstrates different technical capabilities."
  },
  lifeos: {
    question: "Tell me about LIFE OS.",
    answer: "LIFE OS is an AI-powered career and growth navigator that helps users identify skill gaps, explore career paths, and discover their next best actions. It's built with React, Django, and integrates AI concepts for personalized recommendations."
  },
  imas: {
    question: "What is IMAS?",
    answer: "IMAS (Intelligent Mobility Assistance System) is a mobility platform designed to improve ride experiences in Kinshasa. It helps passengers request rides, track vehicles, and review drivers. Built with React, Java, and Spring Boot."
  },
  capabilities: {
    question: "What kind of applications can Daniel build?",
    answer: "Daniel can build web applications, mobile applications, intelligent systems, business systems, and interactive digital experiences. He has experience with full-stack development, AI integration, UI/UX design, and system architecture."
  },
  engineering: {
    question: "What is Daniel's engineering approach?",
    answer: "Daniel follows a structured engineering approach: Understand the problem deeply, Design the system architecture, Build with clean code, Test thoroughly, and Continuously Improve based on feedback. He focuses on building robust, scalable, and user-centered solutions."
  },
  mobile: {
    question: "What mobile technologies does Daniel use?",
    answer: "Daniel uses Flutter and Dart for cross-platform mobile development, with Firebase for backend services. He builds responsive, native-like mobile experiences."
  }
};

// ============================================
// EXPERIENCE TIMELINE DATA
// ============================================

export const digitalTwinExperience = [
  {
    id: "freelance",
    title: "Freelance Software Engineer & UI/UX Designer",
    period: "2023 - Present",
    organization: "Freelance / Personal Projects",
    description: "Building web and mobile applications, designing user interfaces, and solving complex technical problems for clients.",
    technologies: ["React", "Django", "Flutter", "Tailwind CSS", "Figma"],
    projects: ["LIFE OS", "IMAS", "Salon Booking System", "StayEase Africa"],
    highlights: [
      "Designed and implemented full-stack applications",
      "Built AI-powered career navigator (LIFE OS)",
      "Created intelligent mobility system (IMAS)",
      "Developed salon booking platform with payments"
    ]
  },
  {
    id: "auca",
    title: "Backend & Frontend Developer — AUCA Registration",
    period: "2024",
    organization: "Adventist University of Central Africa (AUCA)",
    description: "Designed and implemented the registration system with role-based access and PDF generation.",
    technologies: ["ASP.NET", "SQL Server", "C#", "JavaScript"],
    projects: ["AUCA Registration"],
    highlights: [
      "Designed stored-procedure-driven registration logic",
      "Implemented Student/Teacher/Admin dashboards",
      "Built PDF generation for registration forms"
    ]
  },
  {
    id: "eyecare",
    title: "Fullstack Developer — Eye Care Management System",
    period: "2024",
    organization: "University Project / Client",
    description: "Architected and built a hospital management system for patient records and eyewear orders.",
    technologies: ["ASP.NET", "C#", "SQL Server"],
    projects: ["Eye Care Management System"],
    highlights: [
      "Architected patient-doctor-admin modules",
      "Built responsive dashboards and appointment booking",
      "Implemented PDF export for reports"
    ]
  },
  {
    id: "intern",
    title: "Junior Developer (Intern)",
    period: "2023",
    organization: "Tech Startup",
    description: "Worked on frontend features and bug fixes, participated in user testing and UI iteration.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    projects: [],
    highlights: [
      "Developed frontend features using React",
      "Participated in user testing and feedback cycles",
      "Iterated on UI based on user feedback"
    ]
  }
];