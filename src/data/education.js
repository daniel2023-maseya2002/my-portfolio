// src/data/education.js
import alxLogo from "../assets/logos/AlxLogo.jpg";
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
    translationKey: "education.auca",
    period: "2021 — 2025",
    gpa: "3.6 / 4.0",
    logo: aucaLogo,
    transcripts: aucaTranscript,
    type: "degree",
  },
  {
    id: "highschool-2019",
    translationKey: "education.highschool",
    period: "2014 — 2019",
    gpa: "4.0 / 4.0",
    logo: highschoolLogo,
    transcripts: highschoolTranscript,
    type: "degree",
  },
  {
    id: "cert-figma-uiux-2024",
    translationKey: "education.figma",
    period: "2024",
    gpa: null,
    logo: figmaLogo,
    transcripts: figmaCertificate,
    type: "certificate",
  },
  {
    id: "cert-alx-va-2025",
    translationKey: "education.alx",
    period: "2025",
    gpa: null,
    logo: alxLogo,
    transcripts: va,
    type: "certificate",
  },
  {
    id: "cert-fcc-web-2025",
    translationKey: "education.freecodecamp_web",
    period: "2025",
    gpa: null,
    logo: freecodecamplogo,
    transcripts: web,
    type: "certificate",
  },
  {
    id: "cert-fcc-js-2026",
    translationKey: "education.freecodecamp_js",
    period: "2026",
    gpa: null,
    logo: freecodecamplogo,
    transcripts: javascript,
    type: "certificate",
  },
  {
    id: "cert-cisco-linux-2024",
    translationKey: "education.cisco",
    period: "2024",
    gpa: null,
    logo: ciscologo,
    transcripts: internet,
    type: "certificate",
  }
];

export default education;