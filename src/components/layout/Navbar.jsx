// src/components/layout/Navbar.jsx
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Code, FolderKanban, GraduationCap, Home, Languages, Mail, Menu, Moon, Sun, User, X } from 'lucide-react';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = ({ theme, onToggleTheme, currentPage, onNavigate }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "experience", "education", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#home", label: t("navbar.home"), icon: Home },
    { href: "#about", label: t("navbar.about"), icon: User },
    { href: "#skills", label: t("navbar.skills"), icon: Code },
    { href: "#projects", label: t("navbar.projects"), icon: FolderKanban },
    { href: "#experience", label: t("navbar.experience"), icon: Briefcase },
    { href: "#education", label: t("navbar.education"), icon: GraduationCap },
    { href: "#blog", label: t("navbar.blog"), icon: BookOpen },
    { href: "#contact", label: t("navbar.contact"), icon: Mail },
  ];

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setOpen(false);
    
    if (href === "#blog" && currentPage !== "home") {
      if (onNavigate) onNavigate("home");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else if (href === "#education" && currentPage !== "home") {
      if (onNavigate) onNavigate("home");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-lg" 
        : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
    }`}>
      
      <nav className="w-full px-6 lg:px-20 h-16 lg:h-20 flex items-center justify-between">
        
        {/* Logo with animation */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick("#home", e)}
          className="relative group flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300" />
          <div className="relative font-black text-2xl tracking-tight text-slate-900 dark:text-white">
            D2M
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
              .
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1 list-none">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            
            return (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle Button */}
          <motion.button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-teal-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </motion.button>

          {/* Contact Button (Desktop) */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick("#contact", e)}
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-lg text-sm font-semibold shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("navbar.letsTalk")}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Enhanced Design */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="w-full px-6 py-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-1 mb-6">
                {links.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className="flex items-center gap-3 w-full py-3 px-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 rounded-xl transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.label}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />

              {/* Language Switcher in Mobile */}
              <div className="mb-4">
                <div className="flex items-center gap-2 px-4 py-2 mb-2">
                  <Languages className="w-4 h-4 text-teal-500" />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Select Language</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <LanguageSwitcher isMobile />
                </div>
              </div>

              {/* Mobile Contact Button */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  handleNavClick("#contact", e);
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                {t("navbar.letsTalk")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              {/* Theme Toggle in Mobile */}
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full mt-3 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Add Briefcase icon since it's missing
const Briefcase = ({ className, ...props }) => (
  <svg
    className={className}
    {...props}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default Navbar;