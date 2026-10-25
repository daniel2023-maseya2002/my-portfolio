// src/components/LanguageSwitcher.jsx
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  const current = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const change = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  /* ---- MOBILE ---- */
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-2 w-full">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => change(lang.code)}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            style={{
              backgroundColor:
                i18n.language === lang.code
                  ? 'var(--accent)'
                  : 'var(--surface-muted)',
              color:
                i18n.language === lang.code ? '#fff' : 'var(--ink)',
              border: '1px solid var(--border)',
            }}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    );
  }

  /* ---- DESKTOP ---- */
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-sm transition-colors"
        style={{
          color: 'var(--ink-muted)',
          border: '1px solid transparent',
        }}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden lg:inline text-xs font-medium uppercase tracking-wide">
          {current.code}
        </span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points={open ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-40 rounded-md shadow-lg z-50 overflow-hidden"
          style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => change(lang.code)}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm text-left transition-colors"
              style={{
                color:
                  i18n.language === lang.code
                    ? 'var(--accent)'
                    : 'var(--ink-secondary)',
                backgroundColor:
                  i18n.language === lang.code
                    ? 'var(--surface-muted)'
                    : 'transparent',
              }}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {i18n.language === lang.code && (
                <Check size={14} style={{ color: 'var(--accent)' }} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;