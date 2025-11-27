// src/data/education.js
import aucaLogo from "../assets/logos/auca-logo.png";
import figmaLogo from "../assets/logos/figma-logo.png";
import highschoolLogo from "../assets/logos/highschool-logo.png";

import aucaTranscript from "../assets/transcripts/auca-transcript.pdf";
import figmaCertificate from "../assets/transcripts/figma-certificate.pdf";
import highschoolTranscript from "../assets/transcripts/highschool-transcript.pdf";

const education = [
  {
    id: "auca-bsc",
    institution: "Adventist University of Central Africa (AUCA)",
    degree: "Bachelor of Science",
    field: "Computer Science / Software Engineering",
    period: "2021 — Present",
    location: "Kigali, Rwanda",
    gpa: "3.6 / 4.0",
    honors: "Dean's List (2023)",
    logo: aucaLogo,
    transcripts: aucaTranscript,
    type: "degree",
    highlights: [
      "Relevant coursework: Data Structures, Databases, Web Development",
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
  }
];

export default education;
