// src/components/layout/Navbar.jsx
import { AnimatePresence, motion } from "framer-motion";
import { 
  BookOpen, Code, FolderKanban, GraduationCap, Home, 
  Languages, Mail, Menu, Moon, Sun, User, X, 
  ChevronDown, Briefcase, LayoutDashboard, Sparkles
} from 'lucide-react';
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar = ({ theme, onToggleTheme, currentPage, onNavigate }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Main navigation items (visible always)
  const mainLinks = [
    { href: "#home", label: t("navbar.home"), icon: Home },
    { href: "#about", label: t("navbar.about"), icon: User },
    { href: "#skills", label: t("navbar.skills"), icon: Code },
    { href: "#contact", label: t("navbar.contact"), icon: Mail },
  ];

  // Dropdown items (hidden in dropdown)
  const dropdownLinks = [
    { href: "#projects", label: t("navbar.projects"), icon: FolderKanban },
    { href: "#experience", label: t("navbar.experience"), icon: Briefcase },
    { href: "#education", label: t("navbar.education"), icon: GraduationCap },
    { href: "#blog", label: t("navbar.blog"), icon: BookOpen },
  ];

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setOpen(false);
    setDropdownOpen(false);
    
    if ((href === "#blog" || href === "#education") && currentPage !== "home") {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl" 
        : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50"
    }`}>
      
      <nav className="w-full px-6 lg:px-16 h-16 lg:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick("#home", e)}
          className="relative group flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated gradient background */}
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative flex items-center gap-1">
            <Sparkles className="w-5 h-5 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
              D2M
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500 group-hover:from-teal-400 group-hover:to-emerald-400 transition-all duration-300">
                .
              </span>
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation - Condensed */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Main Navigation Items */}
          <ul className="flex items-center gap-1 list-none">
            {mainLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              
              return (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "text-teal-600 dark:text-teal-400 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>

          {/* Dropdown Menu for remaining items */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 ${
                dropdownOpen || dropdownLinks.some(link => activeSection === link.href.substring(1))
                  ? "text-teal-600 dark:text-teal-400 bg-gradient-to-r from-teal-500/10 to-emerald-500/10"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>More</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50"
                >
                  <div className="py-2">
                    {dropdownLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = activeSection === link.href.substring(1);
                      
                      return (
                        <motion.a
                          key={link.href}
                          href={link.href}
                          onClick={(e) => handleNavClick(link.href, e)}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${
                            isActive
                              ? "text-teal-600 dark:text-teal-400 bg-gradient-to-r from-teal-500/5 to-emerald-500/5"
                              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                          }`}
                          whileHover={{ x: 4 }}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{link.label}</span>
                          {isActive && (
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" />
                          )}
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side Actions - Condensed */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Theme Toggle Button */}
          <motion.button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-teal-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </motion.button>

          {/* Contact Button - More subtle */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick("#contact", e)}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("navbar.letsTalk")}
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-teal-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Modern Design */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="w-full px-6 py-6">
              {/* All Mobile Navigation Links in one column */}
              <div className="space-y-1 mb-6">
                {[...mainLinks, ...dropdownLinks].map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className="flex items-center gap-3 w-full py-3.5 px-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-emerald-500/10 rounded-xl transition-all"
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
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Select Language
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <LanguageSwitcher isMobile />
                </div>
              </div>

              {/* Theme Toggle in Mobile */}
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  setOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full mt-3 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
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

export default Navbar;