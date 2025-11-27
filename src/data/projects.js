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
  }
];

export default projects;
