// src/components/layout/Navbar.jsx
import { Menu, MessageCircle, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { EVENTS, trackEvent } from '../../utils/analytics';
import LanguageSwitcher from '../LanguageSwitcher';

const GITHUB_URL = 'https://github.com/daniel2023-maseya2002';
const WHATSAPP_URL =
  'https://wa.me/250791434027?text=Hi%20Daniel%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20collaborating%20with%20you.%20Let%27s%20connect!';

const Navbar = ({ theme, onToggleTheme }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      if (location.pathname !== '/') return;
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const pos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { offsetTop, offsetHeight } = el;
        if (pos >= offsetTop && pos < offsetTop + offsetHeight) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('home');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { href: '#home', label: t('navbar.home') },
    { href: '#about', label: t('navbar.about') },
    { href: '#skills', label: t('navbar.skills') },
    { href: '#projects', label: t('navbar.projects') },
    { href: '#experience', label: t('navbar.experience') },
    { href: '#education', label: t('navbar.education') },
    { href: '#blog', label: t('navbar.blog') },
    { href: '#contact', label: t('navbar.contact') },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== '/') {
      window.location.assign('/' + href);
      return;
    }
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    trackEvent(EVENTS.WHATSAPP_CLICK, {
      platform: 'whatsapp',
      location: 'navbar',
    });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? 'backdrop-blur-md' : ''
      }`}
      style={{
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(11, 15, 20, 0.85)'
            : 'rgba(247, 247, 245, 0.85)'
          : 'var(--bg)',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      }}
    >
      {/* Full-width nav no max-w container */}
      <nav className="w-full px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-semibold text-[15px] tracking-tight"
          style={{ color: 'var(--ink)' }}
        >
          Daniel Maseya Mubu
        </Link>

        <ul className="hidden md:flex items-center gap-5 list-none">
          {links.map((link) => {
            const isActive =
              activeSection === link.href.slice(1) &&
              location.pathname === '/';
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm transition-colors"
                  style={{
                    color: isActive ? 'var(--ink)' : 'var(--ink-muted)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          {/* Language switcher desktop */}
          <LanguageSwitcher />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden md:inline-flex p-2 rounded-md"
            style={{ color: 'var(--ink-muted)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            aria-label="Chat on WhatsApp"
            className="hidden md:inline-flex p-2 rounded-md"
            style={{ color: 'var(--ink-muted)' }}
          >
            <MessageCircle size={18} />
          </a>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md"
            style={{ color: 'var(--ink-muted)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center px-3.5 py-2 rounded-md text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--accent)' }}
          >
            {t('navbar.contact')}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md"
            style={{ color: 'var(--ink)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
          }}
        >
          <div className="w-full px-6 py-4">
            <ul className="space-y-1 list-none">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block py-2 text-base"
                    style={{ color: 'var(--ink)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-3 pb-1">
                <div
                  className="flex items-center gap-2 pt-3"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <LanguageSwitcher />
                </div>
              </li>

              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleWhatsAppClick();
                    setOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-sm font-medium text-white"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;