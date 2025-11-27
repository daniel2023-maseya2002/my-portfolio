// src/components/sections/Skills.jsx

const engineeringSkills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5 & CSS3",
  "Tailwind CSS",
  "Django (Python)",
  "ASP.NET / C#",
  "REST APIs",
  "Git & GitHub",
  "PostgreSQL",
  "MySQL",
];

const uxSkills = [
  "Figma",
  "Wireframing & Prototyping",
  "Design Systems",
  "Responsive UI Design",
  "User Flows",
  "Information Architecture",
  "Interaction Design",
];

const SkillBadge = ({ label }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs text-slate-200">
    {label}
  </span>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 border-t border-slate-800"
    >
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
          Skills
        </h2>
        <p className="text-slate-300 max-w-2xl">
          I work across both engineering and design. I enjoy moving from
          high-level product thinking to detailed UI and implementation.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Engineering */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-[0.2em]">
              Engineering
            </h3>
            <p className="text-sm text-slate-300">
              Frontend, backend, and database skills for building complete web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {engineeringSkills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>

          {/* UX/UI */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-[0.2em]">
              UX / UI Design
            </h3>
            <p className="text-sm text-slate-300">
              Designing interfaces, systems, and experiences that feel clear and intentional.
            </p>
            <div className="flex flex-wrap gap-2">
              {uxSkills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
