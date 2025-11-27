// src/components/ProjectModal.jsx
import { AnimatePresence, motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* modal card */}
        <motion.div
          className="relative z-10 max-w-4xl w-full mx-4 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* left: images */}
            <div className="md:w-1/2 p-4">
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-56 object-cover rounded-md border border-slate-800"
              />
              <div className="mt-3 grid grid-cols-2 gap-2">
                {project.images?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title} ${idx}`}
                    className="w-full h-24 object-cover rounded-md border border-slate-800"
                  />
                ))}
              </div>
            </div>

            {/* right: details */}
            <div className="md:w-1/2 p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300">{project.short}</p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700"
                  aria-label="Close project details"
                >
                  ✕
                </button>
              </div>

              <div className="text-sm text-slate-300">{project.longDescription}</div>

              <div className="mt-2">
                <p className="text-xs text-slate-400">Role</p>
                <p className="text-sm font-medium text-orange-400">{project.role}</p>
              </div>

              <div className="mt-2">
                <p className="text-xs text-slate-400">Tech</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-slate-900/80 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex gap-3">
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-slate-950 font-medium"
                >
                  Talk about a similar project
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-full border border-slate-700 text-slate-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
