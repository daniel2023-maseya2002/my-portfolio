// src/components/sections/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import projectsData from "../../data/projects";
import ProjectModal from "../ProjectModal";

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
      active ? "bg-orange-500 text-slate-950" : "bg-slate-900/60 text-slate-200 border border-slate-800"
    }`}
  >
    {children}
  </button>
);

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/40"
    >
      <div className="relative">
        <img src={project.cover} alt={project.title} className="w-full h-40 object-cover" />
        <div className="absolute left-3 top-3 px-2 py-1 rounded-md bg-slate-900/70 text-xs">
          <span className="text-xs text-emerald-300 uppercase">{project.type === "ux" ? "UX / UI" : "Engineering"}</span>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-sm font-semibold text-slate-50">{project.title}</h4>
        <p className="text-xs text-slate-300 mt-1">{project.short}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="text-[0.7rem] px-2 py-1 rounded-full bg-slate-900/70 border border-slate-800">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={() => onOpen(project)}
            className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
          >
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [tab, setTab] = useState("ux"); // 'ux' or 'eng'
  const [selected, setSelected] = useState(null);

  const filtered = projectsData.filter((p) => (tab === "ux" ? p.type === "ux" : p.type === "eng"));

  return (
    <section id="projects" className="py-16 border-t border-slate-800">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Projects</h2>
            <p className="text-slate-300 max-w-xl">
              A selection of my recent UX case studies and engineering projects.
            </p>
          </div>

          <div className="flex gap-2">
            <TabButton active={tab === "ux"} onClick={() => setTab("ux")}>UX / UI</TabButton>
            <TabButton active={tab === "eng"} onClick={() => setTab("eng")}>Engineering</TabButton>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
