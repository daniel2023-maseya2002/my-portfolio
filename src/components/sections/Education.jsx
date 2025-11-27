// src/components/sections/Education.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import education from "../../data/education";
import TranscriptModal from "../TranscriptModal";

const EduCard = ({ item, compact, onPreview }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className={`p-4 rounded-2xl border border-slate-800 bg-slate-950/40 flex gap-4 ${compact ? "items-center" : "flex-col"}`}
    >
      {/* logo */}
      <div className={`flex-shrink-0 ${compact ? "w-12 h-12" : "w-16 h-16"}`}>
        <div
          className="w-full h-full rounded-xl overflow-hidden bg-slate-900/60 border border-slate-800 flex items-center justify-center"
          title={item.institution} // tooltip for accessibility
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <div className="text-xs text-slate-400 text-center px-1">No logo</div>
          )}
        </div>
      </div>

      <div className={`${compact ? "flex-1 flex items-center justify-between gap-4" : "flex-1"}`}>
        <div>
          <div className={`${compact ? "flex items-center gap-3" : ""}`}>
            <h3 className="text-sm font-semibold text-slate-50">
              {item.degree} {item.field ? <span className="text-orange-400">— {item.field}</span> : ""}
            </h3>
            {compact && item.gpa && (
              <span className="text-xs text-slate-300 ml-2">GPA: <span className="font-medium text-emerald-300">{item.gpa}</span></span>
            )}
          </div>

          <p className="text-xs text-slate-300 mt-1">
            {item.institution} · <span className="text-emerald-300">{item.location}</span>
          </p>

          {!compact && (
            <>
              <div className="text-xs text-slate-400 mt-2">{item.period}</div>

              {item.gpa && (
                <div className="mt-2">
                  <span className="text-xs text-slate-400">GPA / Honors</span>
                  <div className="text-sm font-medium text-emerald-300">{item.gpa}{item.honors ? ` · ${item.honors}` : ""}</div>
                </div>
              )}

              {item.highlights?.length > 0 && (
                <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-slate-300">
                  {item.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                </ul>
              )}
            </>
          )}
        </div>

        {/* controls / downloads */}
        <div className={`${compact ? "flex-shrink-0" : "mt-4 flex items-center gap-2"}`}>
          {item.transcripts ? (
            <>
              <button
                onClick={() => onPreview(item)}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60 text-xs text-slate-200 hover:bg-slate-800 transition"
                aria-label={`Preview transcript for ${item.institution}`}
              >
                👁 Preview
              </button>

              <a
                href={item.transcripts}
                download
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-emerald-500 text-slate-900 text-xs font-medium hover:bg-emerald-600 transition"
                aria-label={`Download transcript for ${item.institution}`}
              >
                ⤓ Download
              </a>
            </>
          ) : (
            <span className="text-xs text-slate-500">No transcript</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [filter, setFilter] = useState("all"); // 'all' | 'degree' | 'certificate'
  const [compact, setCompact] = useState(false);
  const [preview, setPreview] = useState(null);

  const filtered = education.filter((e) => (filter === "all" ? true : e.type === filter));

  return (
    <section id="education" className="py-16 border-t border-slate-800">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Education</h2>
            <p className="text-slate-300 max-w-2xl">
              Academic background, certificates, downloadable transcripts, and key achievements.
            </p>
          </div>

          {/* filter + compact controls */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${filter === "all" ? "bg-orange-500 text-slate-950" : "bg-slate-900/60 text-slate-200 border border-slate-800"}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("degree")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${filter === "degree" ? "bg-orange-500 text-slate-950" : "bg-slate-900/60 text-slate-200 border border-slate-800"}`}
              >
                Degrees
              </button>
              <button
                onClick={() => setFilter("certificate")}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${filter === "certificate" ? "bg-orange-500 text-slate-950" : "bg-slate-900/60 text-slate-200 border border-slate-800"}`}
              >
                Certificates
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-300">Compact</label>
              <button
                onClick={() => setCompact((c) => !c)}
                className={`px-2 py-1 rounded-full text-xs transition ${compact ? "bg-emerald-500 text-slate-900" : "bg-slate-900/60 text-slate-200 border border-slate-800"}`}
                aria-pressed={compact}
              >
                {compact ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>

        {/* timeline center line (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-slate-800 top-4 bottom-4" />

          {compact ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {filtered.map((item, idx) => (
                <div key={item.id} className="relative">
                  {/* small floating logo badge for timeline feel on desktop */}
                  <div className="hidden md:block absolute -left-8 top-3">
                    <div className="w-10 h-10 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center">
                      <img src={item.logo} alt={`${item.institution} logo`} title={item.institution} className="w-8 h-8 object-contain" />
                    </div>
                  </div>

                  <EduCard key={item.id} item={item} compact={true} onPreview={setPreview} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {filtered.map((item, idx) => (
                <div key={item.id} className="relative md:flex md:items-start md:gap-8">
                  {/* place a circular logo badge near the center line on desktop */}
                  <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 md:-translate-y-2">
                    <div className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/60 flex items-center justify-center">
                      <img src={item.logo} alt={`${item.institution} logo`} title={item.institution} className="w-10 h-10 object-contain" />
                    </div>
                  </div>

                  <div className="md:w-full">
                    <EduCard item={item} compact={false} onPreview={setPreview} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <TranscriptModal
        fileUrl={preview?.transcripts ?? null}
        title={preview ? `${preview.institution} — ${preview.degree}` : ""}
        onClose={() => setPreview(null)}
      />
    </section>
  );
};

export default Education;
