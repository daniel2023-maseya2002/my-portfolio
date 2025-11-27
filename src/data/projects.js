// src/data/projects.js

// IMPORTANT:
// - Original string paths are kept in `cover` and `images` (unchanged).
// - Use `coverSrc` and `imagesSrc` in your UI to get Vite-bundled URLs that work in production.
// - Files must exist at src/assets/projects/... (case-sensitive).

// Import project images so Vite bundles them for production
import imas1Src from "../assets/projects/imas-1.jpg";
import imas2Src from "../assets/projects/imas-2.jpg";
import imasCoverSrc from "../assets/projects/imas-cover.jpg";

import savingdm1Src from "../assets/projects/savingdm-1.jpg";
import savingdm2Src from "../assets/projects/savingdm-2.jpg";
import savingdmCoverSrc from "../assets/projects/savingdm-cover.jpg";

import eyecare1Src from "../assets/projects/eyecare-1.jpg";
import eyecareCoverSrc from "../assets/projects/eyecare-cover.jpg";

import auca1Src from "../assets/projects/auca-1.jpg";
import aucaCoverSrc from "../assets/projects/auca-cover.jpg";

// Each project has: id, title, type ('ux'|'eng'), short, role, tech, cover (original string), images (original strings), longDescription
const projects = [
  {
    id: "imas",
    title: "IMAS — Intelligent Mobility Assistance System",
    type: "ux",
    short: "Mobility platform for improving ride experiences in Kinshasa.",
    role: "UX / UI / Frontend",
    tech: ["Figma", "React", "Tailwind", "Springboot"],
    // original (kept)
    cover: "/src/assets/projects/imas-cover.jpg",
    images: [
      "/src/assets/projects/imas-1.jpg",
      "/src/assets/projects/imas-2.jpg"
    ],
    // added: safe, bundled URLs to use in production (preferred)
    coverSrc: imasCoverSrc,
    imagesSrc: [imas1Src, imas2Src],
    longDescription:
      "IMAS helps passengers request rides, track vehicles, and review drivers. I led the product flow, wireframes, UI design, and built the React prototype that communicates with backend APIs.",
    liveUrl: "https://www.figma.com/proto/DpfNLTluKiiHRNtQshnhmX/IMAS?node-id=30-66&t=S1LJ4smKL7kroiuk-1" // Replace with your actual project URL
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
    coverSrc: savingdmCoverSrc,
    imagesSrc: [savingdm1Src, savingdm2Src],
    longDescription:
      "SavingDm manages user savings goals, transactions, and simple credit flows. I built the app logic, API integration, and the core data structures.",
    liveUrl: "https://savings-management-frontend.vercel.app/" // Replace with your actual project URL
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
    coverSrc: eyecareCoverSrc,
    imagesSrc: [eyecare1Src],
    longDescription:
      "A hospital system handling appointments, prescriptions, and eyewear inventory — built as a full product with role-based dashboards.",
    liveUrl: "https://github.com/nestormuk/EyeCareMGT.git" // Replace with your actual project URL
  },
  {
    id: "auca",
    title: "AUCA English Professional Certifiacate",
    type: "eng",
    short: "University priting the certificate of english profesional 1 & 2.",
    role: "Backend / DB / UI",
    tech: ["ASP.NET", "SQL Server", "Stored Procedures"],
    cover: "/src/assets/projects/auca-cover.jpg",
    images: ["/src/assets/projects/auca-1.jpg"],
    coverSrc: aucaCoverSrc,
    imagesSrc: [auca1Src],
    longDescription:
      "A certificate management system for AUCA English Professional levels 1 & 2; implemented backend workflows for certificate generation, database-driven validation using SQL Server and stored procedures, and a user-friendly UI for administrators to print and export official certificates.",
    liveUrl: "https://registration.auca.ac.rw/StudentHome" // Replace with your actual project URL
  }
];

export default projects;
