// src/data/projects.js

// Existing image imports — unchanged
import imas1 from "../assets/projects/imas-1.jpg";
import imas2 from "../assets/projects/imas-2.jpg";
import imasCover from "../assets/projects/imas-cover.jpg";

import savingdm1 from "../assets/projects/savingdm-1.jpg";
import savingdm2 from "../assets/projects/savingdm-2.jpg";
import savingdmCover from "../assets/projects/savingdm-cover.jpg";

import eyecare1 from "../assets/projects/eyecare-1.jpg";
import eyecareCover from "../assets/projects/eyecare-cover.jpg";

import auca1 from "../assets/projects/auca-1.jpg";
import aucaCover from "../assets/projects/auca-cover.jpg";

import cassie1 from "../assets/projects/cassie1.png";
import cassieCover from "../assets/projects/cassiecover.png";

import jeremie1 from "../assets/projects/jeremie1.png";
import jeremieCover from "../assets/projects/jeremiecover.png";

import apartment1 from "../assets/projects/apartment1.png";
import apartment2 from "../assets/projects/apartment2.png";
import apartment3 from "../assets/projects/apartment3.png";
import apartmentcover from "../assets/projects/apartmentcover.png";

import bisman1 from "../assets/projects/bisman1.png";
import bismanCover from "../assets/projects/bismancover.png";

import stayease1 from "../assets/projects/stayease1.png";
import stayease2 from "../assets/projects/stayease2.png";
import stayease3 from "../assets/projects/stayease3.png";
import stayeaseCover from "../assets/projects/stayeasecover.png";

import salon1 from "../assets/projects/salon1.png";
import salon2 from "../assets/projects/salon2.png";
import salon3 from "../assets/projects/salon3.png";
import saloncover from "../assets/projects/saloncover.png";

import manuella1 from "../assets/projects/manuella1.png";
import manuella2 from "../assets/projects/manuella2.png";
import manuella3 from "../assets/projects/manuella3.png";
import manuellaCover from "../assets/projects/manuellacover.png";

import digital1 from "../assets/projects/digital1.png";
import digital2 from "../assets/projects/digital2.png";
import digital3 from "../assets/projects/digital3.png";
import digitalcover from "../assets/projects/digitalcover.png";

// NEW — MABELE Smart images (drop these two into src/assets/projects/)
import mabele1 from "../assets/projects/mabele-1.png";
import mabele2 from "../assets/projects/mabele-2.png";
import mabele3 from "../assets/projects/mabele-3.png";
import mabeleCover from "../assets/projects/mabele-cover.png";

import dl1 from "../assets/projects/dl1.png";
import dl2 from "../assets/projects/dl2.png";
import dl3 from "../assets/projects/dl3.png";
import dlcover from "../assets/projects/dlcover.png";

const projects = [
  
  {
    id: "salon-booking-platform",
    slug: "nysha-salon",
    translationKey: "projects.salon",
    type: "eng",
    tech: ["Django", "React.js", "Tailwind CSS", "JWT Authentication", "Google OAuth", "PostgreSQL", "Render", "Vercel", "Stripe API"],
    cover: saloncover,
    images: [salon1, salon2, salon3],
    liveUrl: "https://nysha-frontend.onrender.com/",
    status: "Active",
    category: "Booking System",
    skills: ["react", "django", "postgresql", "tailwind", "uidesign", "stripe", "oauth"],
    goals: ["fullstack-engineer", "build-saas"],
    progress: 70,
    role: "Full-Stack Developer & System Architect",
    description: "A complete salon management system for Nysha Hair Braiding, specializing in African braiding techniques.",
    problem: "Salon owners struggle with managing appointments, payments, and customer relationships manually.",
    solution: "Built a comprehensive booking platform with service catalog, online appointment scheduling, deposit payments via Stripe, and an admin dashboard.",
    keyFeatures: [
      "Service catalog with pricing and descriptions",
      "Online appointment booking with availability checking",
      "Stripe payment integration for deposits",
      "Google OAuth authentication",
      "Admin dashboard for booking management",
      "JWT authentication for secure API access"
    ]
  },
  // ---------------------------------------------------------------------------
  // MABELE SMART — prototype / hackathon finalist (featured)
  // ---------------------------------------------------------------------------
  {
    id: "mabele",
    slug: "mabele-smart",
    featured: true,
    featuredOrder: 1,
    translationKey: "projects.mabele",
    type: "eng",
    status: "Prototype · Hackathon finalist",
    title: "MABELE Smart",
    short:
      "A mobile-first smart-agriculture concept for smallholder farmers in the DRC  designed around soil-moisture monitoring, camera-assisted crop-disease detection, weather-informed irrigation, and harvest guidance.",
    problem:
      "Smallholder farmers in the DRC often lack access to affordable, mobile-first agronomic tooling. Advice is scarce, irrigation is manual and reactive, and early signs of crop disease are usually identified too late to act on.",
    solution:
      "A mobile-first assistant built around three pillars Observer, Understand, Act. The concept treats the smartphone as the primary interface, so technology reaches farmers without tractors or desktop computers. A free entry tier is designed to let smallholder farmers adopt the core features, with premium tiers and connected kits introduced progressively as needs grow.",
    features: [
      "Soil-moisture monitoring and weather-informed irrigation (design)",
      "Camera-assisted crop-disease detection with recommendations (design)",
      "Harvest-timing and yield guidance (design)",
      "Multilingual interface (French / Lingala) designed",
      "Mobile dashboard for crops, irrigation status, and daily advice",
      "Six-tier freemium and B2B business model (Basic, Plus, Kit, Pro, NGO, Marketplace)",
    ],
    contribution:
      "Product concept, mobile UI mock-ups, prototype screens, and business-model design contributed to a team submission in the Défis Urbains track of the Kinshasa AI Hackathon 2026.",
    achievement: "Kinshasa AI Hackathon 2026 — Finalist (Défis Urbains track)",
    disclaimer:
      "Status note: MABELE Smart is a concept and design prototype. The screens shown are mock-ups. AI models, sensor hardware, and a production application are part of the roadmap — not the shipped product. The scan-diagnosis feature is designed as decision support, not a replacement for agronomic expertise.",
    tech: [
      "Mobile-first UI design",
      "Camera-assisted detection (design)",
      "Weather-informed irrigation (design)",
      "Freemium business model",
    ],
    cover: mabeleCover,
    images: [mabele1, mabele2, mabele3], // Placeholder for additional images
    liveUrl: null,
    repoUrl: null,
    category: "AgriTech",
    skills: ["uidesign", "aiintegration"],
    goals: [],
    progress: 40,
    role: "Product concept, UI/UX & business model",
  },

  // ---------------------------------------------------------------------------
  // EXISTING PROJECTS — unchanged
  // ---------------------------------------------------------------------------
  {
    id: "digital-twin",
    translationKey: "projects.digital-twin",
    type: "eng",
    tech: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Lucide React", "AI Integration", "Umami Analytics"],
    cover: digitalcover,
    images: [digital1, digital2, digital3],
    liveUrl: "#digital-twin",
    status: "Live",
    category: "Interactive Experience",
    skills: ["react", "javascript", "tailwind", "uidesign", "aiintegration", "vercel"],
    goals: ["fullstack-engineer", "master-react", "improve-ux"],
    progress: 100,
    role: "Full-Stack Developer, UI/UX Designer & System Architect",
    description: "An interactive digital representation that lets visitors explore skills, projects, and engineering capabilities through an intelligent node-based interface.",
    problem: "Traditional portfolios are static and linear, forcing visitors to scroll through long pages of text.",
    solution: "Built an interactive Digital Twin system that visualizes professional capabilities through an intelligent node-based interface.",
    keyFeatures: [
      "Interactive node-based visualization",
      "5 visitor modes: Recruiter, Client, Developer, Designer, Explore Freely",
      "Technology Explorer with project connections",
      "Project Explorer with tech filtering",
      "Engineering DNA process visualization",
      "What I Can Build section",
      "Digital Twin Assistant with rule-based responses",
      "Umami Analytics integration",
      "Fully responsive design",
      "Dark/Light mode support"
    ],
    learnings: [
      "Designing interactive experiences that serve multiple user personas",
      "Building a rule-based assistant without a backend",
      "Creating visual node systems with React and Framer Motion",
      "Structuring data for flexible, future-AI integration",
      "Balancing futuristic design with professional functionality"
    ]
  },
  
  {
    id: "manuella-portfolio",
    slug: "manuella-portfolio",
    translationKey: "projects.manuella",
    type: "eng",
    tech: ["React", "Tailwind CSS", "Figma", "JavaScript", "Vercel", "GitHub Pages", "Formspree"],
    cover: manuellaCover,
    images: [manuella1, manuella2, manuella3],
    liveUrl: "https://manuella-portfolio.vercel.app/",
    status: "Live",
    category: "Personal",
    skills: ["react", "tailwind", "uidesign", "vercel"],
    goals: ["launch-portfolio", "master-react"],
    progress: 95,
    role: "DevOps, Architecture & Developer",
    description: "A modern, clean portfolio website for an Accounting and Finance professional.",
    problem: "Accounting and finance professionals need a professional online presence to attract clients.",
    solution: "Designed and developed a modern portfolio website with a clean, professional interface.",
    keyFeatures: [
      "Responsive design optimized for all devices",
      "Contact form with Formspree integration",
      "Smooth animations and transitions",
      "Professional typography and color scheme",
      "Fast loading with Vercel deployment"
    ]
  },
  {
    id: "stayease",
    slug: "stayease-africa",
    translationKey: "projects.stayease",
    type: "eng",
    tech: ["React.js (Vite)", "JavaScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL (Neon)", "Render", "Vercel", "JWT Authentication", "Google OAuth"],
    cover: stayeaseCover,
    images: [stayease1, stayease2, stayease3],
    liveUrl: "https://stayeasy-africa-peter-frontend.vercel.app",
    status: "completed",
    category: "Real Estate",
    skills: ["react", "django", "postgresql", "tailwind", "restapis", "oauth", "render", "vercel"],
    goals: ["fullstack-engineer", "build-saas", "master-django"],
    progress: 60,
    role: "Full-Stack Developer & System Architect",
    description: "A full-stack apartment booking platform for Africa.",
    problem: "Finding and booking apartments in Africa is often fragmented and difficult.",
    solution: "Built a comprehensive apartment booking platform with user authentication, property listings, and role-based dashboards.",
    keyFeatures: [
      "User authentication with JWT and Google OAuth",
      "Property listings with search and filtering",
      "Real-time availability checking",
      "Booking management for tenants and owners",
      "Admin dashboard for platform management",
      "Role-based access control"
    ]
  },
  {
    id: "imas",
    slug: "imas",
    translationKey: "projects.imas",
    type: "ux",
    tech: ["Figma", "React", "Tailwind", "Spring Boot"],
    cover: imasCover,
    images: [imas1, imas2],
    liveUrl: "https://www.figma.com/proto/DpfNLTluKiiHRNtQshnhmX/IMAS?node-id=30-66&t=S1LJ4smKL7kroiuk-1",
    status: "In Development",
    category: "Intelligent Transportation",
    skills: ["react", "uidesign", "restapis", "java", "springboot"],
    goals: ["fullstack-engineer", "improve-ux"],
    progress: 85,
    role: "UX / UI / Frontend Developer",
    description: "IMAS (Intelligent Mobility Assistance System) is a mobility platform designed to improve ride experiences in Kinshasa.",
    problem: "Public transportation in Kinshasa lacks real-time tracking and reliable ride-hailing options.",
    solution: "Designed a mobility platform with passenger ride requests, vehicle tracking, and driver reviews.",
    keyFeatures: [
      "Ride request and tracking system",
      "Vehicle tracking in real-time",
      "Driver review and rating system",
      "Figma prototype with full user flows",
      "React frontend with Spring Boot backend"
    ]
  },
  {
    id: "savingdm",
    slug: "savingdm",
    translationKey: "projects.savingdm",
    type: "eng",
    tech: ["React", "Expo", "Django REST", "PostgreSQL"],
    cover: savingdmCover,
    images: [savingdm1, savingdm2],
    liveUrl: "https://savings-management-frontend.vercel.app/",
    status: "Active",
    category: "Fintech",
    skills: ["react", "django", "postgresql", "restapis", "vercel"],
    goals: ["fullstack-engineer"],
    progress: 75,
    role: "Frontend / Backend Developer",
    description: "A savings and microcredit app with transactional features.",
    problem: "Users need a simple, accessible way to manage savings goals and access microcredit.",
    solution: "Built a savings management application with user savings goals and transaction tracking.",
    keyFeatures: [
      "User savings goals management",
      "Transaction tracking and history",
      "Simple credit flows",
      "Django REST API integration",
      "Responsive React frontend"
    ]
  },
  {
    id: "eyecare",
    slug: "eye-care-system",
    translationKey: "projects.eyecare",
    type: "eng",
    tech: ["ASP.NET", "C#", "SQL"],
    cover: eyecareCover,
    images: [eyecare1],
    liveUrl: "https://github.com/nestormuk/EyeCareMGT.git",
    status: "Design Phase",
    category: "HealthTech",
    skills: ["csharp", "aspnet"],
    goals: ["fullstack-engineer"],
    progress: 100,
    role: "Full-Stack Developer",
    description: "A healthcare system for managing patient records, appointments, and eyewear inventory.",
    problem: "Eye care clinics need efficient systems to manage patient records and appointments.",
    solution: "Built a hospital management system with patient management and appointment scheduling.",
    keyFeatures: [
      "Patient record management",
      "Appointment scheduling",
      "Prescription tracking",
      "Eyewear inventory management",
      "PDF export for reports"
    ]
  },
  {
    id: "auca",
    slug: "auca-certificates",
    translationKey: "projects.auca",
    type: "eng",
    tech: ["ASP.NET", "SQL Server", "Stored Procedures"],
    cover: aucaCover,
    images: [auca1],
    liveUrl: "https://registration.auca.ac.rw/StudentHome",
    status: "Completed",
    category: "Education",
    skills: ["csharp", "aspnet", "python", "django", "postgresql"],
    goals: ["fullstack-engineer", "master-django"],
    progress: 100,
    role: "Backend & Frontend Developer",
    description: "A certificate management system for AUCA English Professional levels 1 & 2.",
    problem: "AUCA needed a digital system to manage English Professional certificate registrations.",
    solution: "Implemented a registration system with role-based access and PDF certificate generation.",
    keyFeatures: [
      "Role-based access control",
      "Student/Teacher/Admin dashboards",
      "PDF certificate generation",
      "Stored procedure-driven registration logic",
      "Live production deployment"
    ]
  },
  {
    id: "cassieposhevents",
    slug: "cassie-posh-events",
    translationKey: "projects.cassie",
    type: "eng",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    cover: cassieCover,
    images: [cassie1],
    liveUrl: "https://cassieposhevents.com/",
    status: "Live",
    category: "Events",
    skills: ["html", "css3", "tailwind", "javascript"],
    goals: [],
    progress: 95,
    role: "Developer & DevOps",
    description: "A sophisticated, modern website for Cassie Posh Events, LLC.",
    problem: "Luxury event planning businesses need an elegant online presence.",
    solution: "Built a modern, responsive website with elegant design and smooth animations.",
    keyFeatures: [
      "Elegant responsive design",
      "Smooth animations and transitions",
      "Professional brand presence",
      "Contact and inquiry forms",
      "Live production deployment"
    ]
  },
  {
    id: "jeremienze-portfolio",
    slug: "jeremy-portfolio",
    translationKey: "projects.jeremie",
    type: "eng",
    tech: ["React.js", "Plain CSS", "JavaScript", "Vite", "React Router DOM", "Framer Motion", "Formspree", "GitHub Pages", "Andasy Dev"],
    cover: jeremieCover,
    images: [jeremie1],
    liveUrl: "https://jeremienze-portfolio.andasy.dev/",
    status: "Live",
    category: "Personal",
    skills: ["react", "css3", "javascript"],
    goals: ["master-react"],
    progress: 95,
    role: "Developer & DevOps",
    description: "A modern, professional portfolio website built with React.js.",
    problem: "Professionals need a modern portfolio to showcase their work.",
    solution: "Built a modern portfolio website with React and Framer Motion animations.",
    keyFeatures: [
      "Modern React portfolio",
      "Smooth Framer Motion animations",
      "Contact form with Formspree",
      "Project and skill showcase",
      "Professional blue color scheme"
    ]
  },
  {
    id: "bismanfx-acadmique",
    slug: "bismanfx",
    translationKey: "projects.bisman",
    type: "eng",
    tech: ["HTML", "Tailwind CDN", "JavaScript", "React.js", "Formspree", "GitHub Pages", "Render Dev", "GoDaddy"],
    cover: bismanCover,
    images: [bisman1],
    liveUrl: "https://bismanfx.com/",
    status: "Live",
    category: "Education",
    skills: ["html", "css3", "tailwind", "javascript", "react"],
    goals: [],
    progress: 95,
    role: "Developer and Collaborator",
    description: "A professional trading education platform focused on institutional trading strategies.",
    problem: "Trading education often lacks structured, professional training.",
    solution: "Built a professional trading education platform with structured training and live mentorship.",
    keyFeatures: [
      "Structured trading education",
      "Live mentorship integration",
      "Institutional trading strategies",
      "Risk management guidance",
      "Professional brand presence"
    ]
  },
  {
    id: "apartment-booking-platform",
    slug: "apartment-ux",
    translationKey: "projects.apartment",
    type: "ux",
    tech: ["Figma", "AI Powered Design"],
    cover: apartmentcover,
    images: [apartment1, apartment2, apartment3],
    liveUrl: "https://www.figma.com/make/4CzOrrdoM90K2Tyb8cGSGo/Apartment-Website-UI-UX-Design?fullscreen=1&t=bPEyAiONp9sX1pZI-1&preview-route=%2Fservices",
    status: "In Development",
    category: "Design",
    skills: ["uidesign", "figma"],
    goals: ["improve-ux"],
    progress: 80,
    role: "UX / UI Designer",
    description: "A luxury apartment booking platform designed for the African market.",
    problem: "The African apartment market faces unique challenges including fragmented listings.",
    solution: "Designed a luxury apartment booking platform with a focus on seamless user experience.",
    keyFeatures: [
      "User-friendly apartment discovery",
      "Seamless booking flow",
      "Clear payment processes",
      "User verification and trust signals",
      "Mobile-first responsive design"
    ]
  },
  {
    id: "dl-plomberie-and-forage",
    slug: "Dl Plomberie & Forage",
    translationKey: "projects.plomberie",
    type: "eng",
    tech: ["React.js", "Tailwind CSS", "whatsapp", "schema technique", "Vercel", "Stripe API", "Assistant"],
    cover: dlcover,
    images: [dl1, dl2, dl3],
    liveUrl: "https://dlplomberieandforage.vercel.app/",
    status: "Active",
    category: "Web Page",
    skills: ["react","tailwind", "uidesign"],
    goals: ["frontend-developer", "build-saas"],
    progress: 70,
    role: "Frontend Developer & Ui/Ux",
    description: "DL Plomberie & Forage est une entreprise basée à N'Sele / Mikonga 2, à Kinshasa. Nous intervenons sur trois domaines liés à l'eau : la plomberie (installations, réparations, réseaux), le forage (étude, réalisation, mise en service), et l'approvisionnement en eau (pompes, réservoirs, maintenance).",
    problem: "Ir Delivrance had a problem how to prove to his customers that his company Dl plomberie is fiable and professional",
    solution: "Built this web page help a lot Dl plomberie to be professionnel with his customers, and also help customers to understand how the job works, and ask any question.",
    keyFeatures: [
      "Installation de plomberie",
      "Réparation de fuites et dépannage",
      "Canalisations et réseaux",
      "Installations sanitaires",
      "Forage et étude de site",
      "JPompes et approvisionnement en eau"
    ]
  },
];

// Helper functions — unchanged
export const getProjectById = (id) => projects.find(p => p.id === id);

export const getProjectsBySkill = (skillId) =>
  projects.filter(p => p.skills && p.skills.includes(skillId));

export const getProjectsByGoal = (goalId) =>
  projects.filter(p => p.goals && p.goals.includes(goalId));

export const getProjectsByCategory = (category) =>
  projects.filter(p => p.category === category);

export const getProjectsByStatus = (status) =>
  projects.filter(p => p.status === status);

export default projects;