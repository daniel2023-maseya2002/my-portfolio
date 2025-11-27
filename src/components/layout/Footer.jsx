// src/components/layout/Footer.jsx
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Designed & coded by <span className="font-medium">Daniel Maseya</span>.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Building user-centered experiences across UX/UI and software engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 text-sm">
          <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/your-behance"
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              Behance
            </a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
