// src/data/projects.js

// Import images (Vite will bundle them and return correct URLs)
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

// Import images for Cassie Posh Events
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

// Each project has: id, title, type ('ux'|'eng'), short, role, tech, cover (bundled URL), images (array of bundled URLs), longDescription, liveUrl
const projects = [
  {
    id: "imas",
    title: "IMAS — Intelligent Mobility Assistance System",
    type: "ux",
    short: "Mobility platform for improving ride experiences in Kinshasa.",
    role: "UX / UI / Frontend",
    tech: ["Figma", "React", "Tailwind", "Springboot"],
    // bundled URLs (use these in your UI as project.cover / project.images)
    cover: imasCover,
    images: [imas1, imas2],
    longDescription:
      "IMAS helps passengers request rides, track vehicles, and review drivers. I led the product flow, wireframes, UI design, and built the React prototype that communicates with backend APIs.",
    liveUrl: "https://www.figma.com/proto/DpfNLTluKiiHRNtQshnhmX/IMAS?node-id=30-66&t=S1LJ4smKL7kroiuk-1"
  },
  {
    id: "savingdm",
    title: "SavingDm (ex-CreditJambo)",
    type: "eng",
    short: "Savings & microcredit app with transactional features.",
    role: "Frontend / Backend",
    tech: ["React", "Expo", "Django REST", "Postgres"],
    cover: savingdmCover,
    images: [savingdm1, savingdm2],
    longDescription:
      "SavingDm manages user savings goals, transactions, and simple credit flows. I built the app logic, API integration, and the core data structures.",
    liveUrl: "https://savings-management-frontend.vercel.app/"
  },
  {
    id: "eyecare",
    title: "Eye Care Management System",
    type: "eng",
    short: "Health system for patient management and eyewear orders.",
    role: "Architecture / UI",
    tech: ["ASP.NET", "C#", "SQL"],
    cover: eyecareCover,
    images: [eyecare1],
    longDescription:
      "A hospital system handling appointments, prescriptions, and eyewear inventory — built as a full product with role-based dashboards.",
    liveUrl: "https://github.com/nestormuk/EyeCareMGT.git"
  },
  {
    id: "auca",
    title: "AUCA English Professional Certificate",
    type: "eng",
    short: "University printing the certificate of English professional 1 & 2.",
    role: "Backend / DB / UI",
    tech: ["ASP.NET", "SQL Server", "Stored Procedures"],
    cover: aucaCover,
    images: [auca1],
    longDescription:
      "A certificate management system for AUCA English Professional levels 1 & 2; implemented backend workflows for certificate generation, database-driven validation using SQL Server and stored procedures, and a user-friendly UI for administrators to print and export official certificates.",
    liveUrl: "https://registration.auca.ac.rw/StudentHome"
  },
  {
    id: "cassieposhevents", // Fixed ID spelling to match the actual business name
    title: "Cassie Posh Events",
    type: "eng",
    short: "Luxury wedding and event planning website for bookings and organization of marriages, birthdays, and parties.",
    role: "Developer / DevOps",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    cover: cassieCover,
    images: [cassie1],
    longDescription:
      "This is a sophisticated, modern website for Cassie Posh Events, LLC, a luxury wedding and event planning company based in Philadelphia, serving clients throughout the Tri-State area. The website embodies elegance, sophistication, and professionalism through its thoughtful design and user experience. Features include event portfolio showcase, service packages, booking system, client testimonials, and a contact management system.",
    liveUrl: "https://cassieposhevents.com/"
  },
  {
    id: "jeremienze-portfolio", // Fixed ID spelling to match the actual business name
    title: "Jeremy Nze's Portfolio",
    type: "eng",
    short: "Personal portfolio website showcasing projects and skills.",
    role: "Developer / DevOps",
    tech: ["React js", "Plain CSS", "JavaScript", "Vite", "React Router DOM", "Framer Motion", "Formspree", "GitHub Pages", "Andasy Dev"],
    cover: jeremieCover,
    images: [jeremie1],
    longDescription:
      "A modern, professional portfolio website built with React.js to showcase skills, experience, projects, and certifications. The portfolio features a clean, responsive design with smooth animations and a professional blue color scheme. It includes sections for an about me, project showcase with detailed descriptions, a skills section with proficiency indicators, and a contact form that integrates with email services for easy communication.",
    liveUrl: "https://jeremienze-portfolio.andasy.dev/"
  },
  {
    id: "bismanfx-acadmique", // Fixed ID spelling to match the actual business name
    title: "Maîtrisez les marchés avec la précision d'un institutionnel - BismanFX Académique",
    type: "eng",
    short: "Académie de trading professionnelle. Des stratégies institutionnelles pour des résultats consistants.",
    role: "Developer And Collaborator with Eng Ariel Aganze",
    tech: ["HTML", "Tailwind CDN", "JavaScript", "React js", "Formspree", "GitHub Pages", "Render Dev", "GoDaddy"],
    cover: bismanCover,
    images: [bisman1],
    longDescription:
      "BismanFx Academy is a professional trading education platform founded by Matthieu Bisimwa, focused on institutional trading strategies (Smart Money Concepts) with structured training, live mentorship, and risk management guidance. It positions itself as a community for ambitious traders, particularly in Africa, aiming to build sustainable financial independence through disciplined trading.",
    liveUrl: "https://bismanfx.com/"
  },
  {
  id: "stayease",
  title: "StayEase Africa – Apartment Booking Platform",
  type: "eng",

  short: "A full-stack apartment booking platform designed for Africa, enabling users to discover, book, and manage apartments with real-time availability and role-based access.",

  role: "Full-Stack Developer & System Architect",

  tech: [
    "React.js (Vite)",
    "JavaScript",
    "Tailwind CSS",
    "Django REST Framework",
    "PostgreSQL (Neon)",
    "Render",
    "Vercel",
    "JWT Authentication",
    "Google OAuth"
  ],

  cover: stayeaseCover,
  images: [stayease1, stayease2, stayease3],

  longDescription:
    "StayEase Africa is a full-stack web platform designed to simplify apartment discovery and booking across Africa. The system connects tenants, property owners, and administrators into a unified ecosystem. Users can browse apartments, view detailed listings with images and videos, and book using a unique booking code system. Property owners can manage listings, monitor bookings, and verify payments manually using local payment methods such as mobile money. Administrators oversee the platform, manage users, and analyze property performance. The platform is built with scalability and real-world usability in mind, addressing housing and payment challenges specific to the African market.",

  liveUrl: "https://stayeasy-africa-peter-frontend.vercel.app"
},
{
    id: "apartment-booking-platform",
    title: "A luxury Apartment Booking Platform for Africa",
    type: "ux",
    short: "A Ui Ux Design and prototype for a luxury apartment booking platform tailored for the African market, addressing unique housing and payment challenges.",
    role: "UX / UI ",
    tech: ["Figma", "Ai Powered Design"],
    // bundled URLs (use these in your UI as project.cover / project.images)
    cover: apartmentcover,
    images: [apartment1, apartment2, apartment3],
    longDescription:
      "A luxury apartment booking platform designed for the African market, addressing unique housing and payment challenges. The design focuses on a seamless user experience, allowing users to easily discover, book, and manage apartments. The platform includes features such as real-time availability, detailed listings with images and videos, and a unique booking code system. The design also incorporates a role-based access system for tenants, property owners, and administrators, ensuring a secure and efficient booking process.",
    liveUrl: "https://www.figma.com/make/4CzOrrdoM90K2Tyb8cGSGo/Apartment-Website-UI-UX-Design?fullscreen=1&t=bPEyAiONp9sX1pZI-1&preview-route=%2Fservices"
  },
];

export default projects;