// src/components/sections/About.jsx
import profileImg from "../../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 border-t border-slate-800"
    >
      <div className="flex flex-col gap-10 md:flex-row md:items-center">
        {/* Text side */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            About me
          </h2>
          <p className="text-slate-300">
            I’m a software engineer and UI/UX designer passionate about turning ideas
            into usable, beautiful digital products. I enjoy working across the stack —
            from information architecture and Figma prototypes to React frontends and
            backend APIs.
          </p>
          <p className="text-slate-300">
            Over the last few years, I’ve worked on real-world systems like mobility
            platforms, hospital tools, and academic registration systems. I care about
            clarity, usability, and solving real problems in contexts like Africa’s
            transport, health, and education.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
              <p className="text-xs text-slate-400">Experience</p>
              <p className="text-sm font-semibold text-orange-400">
                2+ years learning & building
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
              <p className="text-xs text-slate-400">Location</p>
              <p className="text-sm font-semibold text-slate-100">
                Kigali, Rwanda
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
              <p className="text-xs text-slate-400">Focus</p>
              <p className="text-sm font-semibold text-emerald-400">
                Web apps & UX design
              </p>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-56 md:w-56 md:h-64">
            {/* Background accent card */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-orange-500/30 via-emerald-500/20 to-slate-900 blur-md" />
            {/* Main photo card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl shadow-orange-500/20">
              <img
                src={profileImg}
                alt="Portrait of Daniel Maseya"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small label chip */}
            <div className="absolute -bottom-3 left-4 right-4 rounded-2xl bg-slate-950/90 border border-slate-700 px-3 py-2 flex items-center justify-between text-xs">
              <span className="text-slate-200 font-medium">
                Daniel Maseya
              </span>
              <span className="text-[0.7rem] text-emerald-400">
                Designer · Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
