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

// Each project now uses translationKey instead of hardcoded text
const projects = [
  {
    id: "imas",
    translationKey: "projects.imas",
    type: "ux",
    tech: ["Figma", "React", "Tailwind", "Springboot"],
    cover: imasCover,
    images: [imas1, imas2],
    liveUrl: "https://www.figma.com/proto/DpfNLTluKiiHRNtQshnhmX/IMAS?node-id=30-66&t=S1LJ4smKL7kroiuk-1"
  },
  {
    id: "savingdm",
    translationKey: "projects.savingdm",
    type: "eng",
    tech: ["React", "Expo", "Django REST", "Postgres"],
    cover: savingdmCover,
    images: [savingdm1, savingdm2],
    liveUrl: "https://savings-management-frontend.vercel.app/"
  },
  {
    id: "eyecare",
    translationKey: "projects.eyecare",
    type: "eng",
    tech: ["ASP.NET", "C#", "SQL"],
    cover: eyecareCover,
    images: [eyecare1],
    liveUrl: "https://github.com/nestormuk/EyeCareMGT.git"
  },
  {
    id: "auca",
    translationKey: "projects.auca",
    type: "eng",
    tech: ["ASP.NET", "SQL Server", "Stored Procedures"],
    cover: aucaCover,
    images: [auca1],
    liveUrl: "https://registration.auca.ac.rw/StudentHome"
  },
  {
    id: "cassieposhevents",
    translationKey: "projects.cassie",
    type: "eng",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    cover: cassieCover,
    images: [cassie1],
    liveUrl: "https://cassieposhevents.com/"
  },
  {
    id: "jeremienze-portfolio",
    translationKey: "projects.jeremie",
    type: "eng",
    tech: ["React js", "Plain CSS", "JavaScript", "Vite", "React Router DOM", "Framer Motion", "Formspree", "GitHub Pages", "Andasy Dev"],
    cover: jeremieCover,
    images: [jeremie1],
    liveUrl: "https://jeremienze-portfolio.andasy.dev/"
  },
  {
    id: "bismanfx-acadmique",
    translationKey: "projects.bisman",
    type: "eng",
    tech: ["HTML", "Tailwind CDN", "JavaScript", "React js", "Formspree", "GitHub Pages", "Render Dev", "GoDaddy"],
    cover: bismanCover,
    images: [bisman1],
    liveUrl: "https://bismanfx.com/"
  },
  {
    id: "stayease",
    translationKey: "projects.stayease",
    type: "eng",
    tech: ["React.js (Vite)", "JavaScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL (Neon)", "Render", "Vercel", "JWT Authentication", "Google OAuth"],
    cover: stayeaseCover,
    images: [stayease1, stayease2, stayease3],
    liveUrl: "https://stayeasy-africa-peter-frontend.vercel.app"
  },
  {
    id: "apartment-booking-platform",
    translationKey: "projects.apartment",
    type: "ux",
    tech: ["Figma", "Ai Powered Design"],
    cover: apartmentcover,
    images: [apartment1, apartment2, apartment3],
    liveUrl: "https://www.figma.com/make/4CzOrrdoM90K2Tyb8cGSGo/Apartment-Website-UI-UX-Design?fullscreen=1&t=bPEyAiONp9sX1pZI-1&preview-route=%2Fservices"
  }
];

export default projects;