// src/components/sections/Experience.jsx
import { motion } from "framer-motion";
import experience from "../../data/experience";

const Dot = ({ idx }) => (
  <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" aria-hidden />
);

const ExperienceCard = ({ item, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative"
    >
      <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">{item.role}</h3>
            <p className="text-xs text-slate-300 mt-1">
              {item.org} · <span className="text-emerald-300">{item.location}</span>
            </p>
          </div>
          <div className="text-xs text-slate-400">{item.period}</div>
        </div>

        <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-slate-300">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="mt-4">
          <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-slate-900/70 border border-slate-800 text-slate-200">
            {item.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-16 border-t border-slate-800">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Experience</h2>
          <p className="text-slate-300 max-w-2xl">
            Professional experience, internships, and major project roles — presented as a clear timeline.
          </p>
        </div>

        {/* Timeline container */}
        <div className="mt-8 relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-800 top-0 bottom-0" />

          <div className="space-y-10">
            {experience.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.id} className="relative">
                  <div className="md:grid md:grid-cols-2 md:items-start">
                    {/* Left column */}
                    <div className={`md:pr-8 ${isLeft ? "md:pr-12 md:text-right" : "md:pr-8 md:text-left"}`}>
                      <div className="hidden md:flex md:justify-end md:items-start">
                        {/* Dot aligned on center line */}
                        <div className="w-full md:flex md:justify-end">
                          <div className="relative">
                            <div className="absolute -right-6 top-3 md:-right-[calc(50%+6px)] md:translate-x-1/2 md:left-1/2">
                              <Dot idx={idx} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {isLeft && <ExperienceCard item={item} isLeft={isLeft} />}
                    </div>

                    {/* Right column */}
                    <div className="md:pl-8">
                      <div className="hidden md:flex md:justify-start">
                        <div className="relative">
                          <div className="absolute -left-6 top-3 md:-left-[calc(50%+6px)] md:-translate-x-1/2 md:right-1/2">
                            <Dot idx={idx} />
                          </div>
                        </div>
                      </div>

                      {!isLeft && <ExperienceCard item={item} isLeft={isLeft} />}

                      {/* Mobile view: show dot at top of each card */}
                      <div className="md:hidden mt-3 flex items-center gap-3">
                        <Dot idx={idx} />
                        <div className="text-sm text-slate-300">{item.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile fallback: stacked card when screen small */}
                  <div className="md:hidden mt-4">
                    <ExperienceCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
