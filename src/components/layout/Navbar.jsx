import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from "react";

const Navbar = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  // Theme Colors (Match Global CSS variables)
  const primaryColor = 'indigo';
  const secondaryColor = 'cyan';

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // FIX 1: Ensure the header spans the full viewport width (w-screen)
    <header className="sticky top-0 z-40 transition-colors duration-300 w-full xl:w-screen"> 
      
      {/* FIX 2: Increased inner container max-width to max-w-7xl, 
        ensuring content is still centered and readable on very large screens.
      */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-extrabold text-2xl tracking-tighter text-slate-900 dark:text-slate-100 transition-colors"
        >
          Daniel<span className={`text-gradient bg-clip-text bg-gradient-to-r from-${primaryColor}-500 to-${secondaryColor}-500 font-black`}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-base text-slate-600 dark:text-slate-300 list-none font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`hover:text-${primaryColor}-500 dark:hover:text-${primaryColor}-400 transition-colors duration-200`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-4">

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-200"
          >
            {theme === "dark" ? (
              <Moon className="w-5 h-5 text-indigo-400" />
            ) : (
              <Sun className="w-5 h-5 text-amber-500" />
            )}
          </button>

          {/* Contact button (desktop - uses global btn-primary) */}
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
          >
            Let’s talk
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown (Uses framer-motion) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.3 }}
            // Mobile dropdown should also span full width
            className="md:hidden origin-top bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 absolute w-full"
          >
            <ul className="flex flex-col py-4 px-6 gap-3 text-base text-slate-700 dark:text-slate-300 list-none">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`block w-full py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-${primaryColor}-500 transition-all`}
                    onClick={() => setOpen(false)} 
                  >
                    {l.label}
                  </a>
                </li>
              ))}

              {/* Mobile - Contact button (uses global btn-primary) */}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary inline-block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                >
                  Let’s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;