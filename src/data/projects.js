// src/data/projects.js

// Each project has: id, title, type ('ux'|'eng'), short, role, tech, cover (path in /src/assets), images (array), longDescription
const projects = [
  {
    id: "imas",
    title: "IMAS — Intelligent Mobility Assistance System",
    type: "ux",
    short: "Mobility platform for improving ride experiences in Kinshasa.",
    role: "UX / UI / Frontend",
    tech: ["Figma", "React", "Tailwind", "Django"],
    cover: "/src/assets/projects/imas-cover.jpg",
    images: [
      "/src/assets/projects/imas-1.jpg",
      "/src/assets/projects/imas-2.jpg"
    ],
    longDescription:
      "IMAS helps passengers request rides, track vehicles, and review drivers. I led the product flow, wireframes, UI design, and built the React prototype that communicates with backend APIs."
  },
  {
    id: "savingdm",
    title: "SavingDm (ex-CreditJambo)",
    type: "eng",
    short: "Savings & microcredit app with transactional features.",
    role: "Frontend / Backend",
    tech: ["React", "Expo", "Django REST", "Postgres"],
    cover: "/src/assets/projects/savingdm-cover.jpg",
    images: [
      "/src/assets/projects/savingdm-1.jpg",
      "/src/assets/projects/savingdm-2.jpg"
    ],
    longDescription:
      "SavingDm manages user savings goals, transactions, and simple credit flows. I built the app logic, API integration, and the core data structures."
  },
  {
    id: "eyecare",
    title: "Eye Care Management System",
    type: "eng",
    short: "Health system for patient management and eyewear orders.",
    role: "Architecture / UI",
    tech: ["ASP.NET", "C#", "SQL"],
    cover: "/src/assets/projects/eyecare-cover.jpg",
    images: ["/src/assets/projects/eyecare-1.jpg"],
    longDescription:
      "A hospital system handling appointments, prescriptions, and eyewear inventory — built as a full product with role-based dashboards."
  },
  {
    id: "auca",
    title: "AUCA Master Registration System",
    type: "eng",
    short: "University registration system with role-based dashboards.",
    role: "Backend / DB / UI",
    tech: ["ASP.NET", "SQL Server", "Stored Procedures"],
    cover: "/src/assets/projects/auca-cover.jpg",
    images: ["/src/assets/projects/auca-1.jpg"],
    longDescription:
      "A modular registration system supporting Student, Teacher, and Admin roles; implemented role based redirects and PDF export of registration forms."
  }
];

export default projects;
