// src/data/education.js
import alxLogo from "../assets/logos/AlxLogo.png";
import aucaLogo from "../assets/logos/auca-logo.png";
import ciscologo from "../assets/logos/ciscologo.png";
import figmaLogo from "../assets/logos/figma-logo.png";
import freecodecamplogo from "../assets/logos/freecodecamp.jpg";
import highschoolLogo from "../assets/logos/highschool-logo.png";

import aucaTranscript from "../assets/transcripts/auca-transcript.pdf";
import figmaCertificate from "../assets/transcripts/figma-certificate.png";
import highschoolTranscript from "../assets/transcripts/highschool-transcript.pdf";
import internet from "../assets/transcripts/internet-society.pdf";
import javascript from "../assets/transcripts/javascript.png";
import va from "../assets/transcripts/VA.png";
import web from "../assets/transcripts/web.png";


const education = [
  {
    id: "auca-bsc",
    institution: "Adventist University of Central Africa (AUCA)",
    degree: "Bachelor of Science",
    field: "Information Technology / Software Engineering",
    period: "2021 — 2025",
    location: "Kigali, Rwanda",
    gpa: "3.6 / 4.0",
    honors: "Dean's List (2025)",
    logo: aucaLogo,
    transcripts: aucaTranscript,
    type: "degree",
    highlights: [
      "Relevant coursework: Data Structures, java, Web Development, Linux",
      "Project: AUCA Master Registration System — backend & UI work",
    ]
  },
  {
    id: "highschool-2019",
    institution: "College Boboto",
    degree: "High School Diploma",
    field: "Biology",
    period: "2014 — 2019",
    location: "Kinshasa, DR CONGO",
    gpa: "4.0 / 4.0",
    honors: "Honors",
    logo: highschoolLogo,
    transcripts: highschoolTranscript,
    type: "degree",
    highlights: [
      "Graduated with strong interest in programming and design",
    ]
  },
  {
    id: "cert-figma-2024",
    institution: "Professional UI/UX Certificate (Figma)",
    degree: "Certificate",
    field: "UI/UX & Prototyping",
    period: "2024",
    location: "Online",
    gpa: null,
    honors: null,
    logo: figmaLogo,
    transcripts: figmaCertificate,
    type: "certificate",
    highlights: [
      "Hands-on projects: Design systems, responsive prototypes"
    ]
  },
  {
    id: "cert-figma-2025",
    institution: "Alx Africa",
    degree: "Certificate",
    field: "Virtual Assistance",
    period: "2025",
    location: "Online",
    gpa: null,
    honors: null,
    logo: alxLogo,
    transcripts: va,
    type: "certificate",
    highlights: [
      "For successsfully completing an 8-weeks programme in VA Skills in the Digital Age."
    ]
  },
   {
    id: "cert-figma-2025",
    institution: "FreeCodeCamp",
    degree: "Certificate",
    field: "Responsive Web Design",
    period: "2025",
    location: "Online",
    gpa: null,
    honors: null,
    logo: freecodecamplogo,
    transcripts: web,
    type: "certificate",
    highlights: [
      "Representing approximately 300 hours of works"
    ]
  },
  {
    id: "cert-figma-2026",
    institution: "FreeCodeCamp",
    degree: "Certificate",
    field: "JavaScript",
    period: "2026",
    location: "Online",
    gpa: null,
    honors: null,
    logo: freecodecamplogo,
    transcripts: javascript,
    type: "certificate",
    highlights: [
      "Representing approximately 300 hours of works"
    ]
  },
  {
    id: "cert-figma-2024",
    institution: "Cisco Network",
    degree: "NDG LINUX SERIES",
    field: "JavaScript",
    period: "2024",
    location: "Online",
    gpa: null,
    honors: null,
    logo: ciscologo,
    transcripts: internet,
    type: "certificate",
    highlights: [
      "Become a stronger prospect in the job market by pairing our certificate with other industry-recognized certifications such as Cisco Certified Network Associate (CCNA"
    ]
  }
];

export default education;