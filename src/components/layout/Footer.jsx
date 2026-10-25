// src/components/layout/Footer.jsx
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { EVENTS, trackEvent } from '../../utils/analytics';

const WHATSAPP_URL =
  'https://wa.me/250791434027?text=Hi%20Daniel%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20collaborating%20with%20you.%20Let%27s%20connect!';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [detectedLocation, setDetectedLocation] = useState({
    city: null,
    country: null,
  });
  const [locationLoading, setLocationLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Location detection failed');
        const data = await res.json();
        setDetectedLocation({
          city: data.city || null,
          country: data.country_name || null,
        });
      } catch (err) {
        console.warn('Location detection error:', err);
        setDetectedLocation({ city: null, country: null });
      } finally {
        setLocationLoading(false);
      }
    };
    detectLocation();
  }, []);

  const getLocationDisplay = () => {
    if (!locationLoading && detectedLocation.city && detectedLocation.country)
      return `${detectedLocation.city}, ${detectedLocation.country}`;
    if (!locationLoading && detectedLocation.city) return detectedLocation.city;
    if (!locationLoading && detectedLocation.country)
      return detectedLocation.country;
    return 'Kigali, Rwanda';
  };

  const handleSocialClick = (platform) => {
    const map = {
      github: EVENTS.GITHUB_CLICK,
      linkedin: EVENTS.LINKEDIN_CLICK,
      email: EVENTS.EMAIL_CLICK,
      whatsapp: EVENTS.WHATSAPP_CLICK,
    };
    trackEvent(map[platform] || 'social-click', {
      platform,
      location: 'footer',
    });
  };

  const quickLinks = [
    { nameKey: 'navbar.home', href: '/#home' },
    { nameKey: 'navbar.about', href: '/#about' },
    { nameKey: 'navbar.skills', href: '/#skills' },
    { nameKey: 'navbar.projects', href: '/projects' }, // Direct to all projects
    { nameKey: 'navbar.experience', href: '/#experience' },
    { nameKey: 'navbar.contact', href: '/#contact' },
  ];

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/daniel2023-maseya2002',
      event: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/danimaseya/',
      event: 'linkedin',
    },
    { name: 'WhatsApp', url: WHATSAPP_URL, event: 'whatsapp' },
    {
      name: 'Behance',
      url: 'https://www.behance.net/maseyadaniel',
      event: 'behance',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/daniel_maseya',
      event: 'twitter',
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/dani-maseya',
      event: 'dribbble',
    },
  ];

  return (
    <footer style={{ borderTop: '1px solid var(--border)' }}>
      {/* Full width container matching the rest of the site */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Brand Column (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              to="/"
              className="text-xl font-bold block transition-opacity hover:opacity-80"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              Daniel Maseya Mubu
            </Link>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'var(--ink-muted)' }}>
              Software Engineer · Based in {getLocationDisplay()} · Open to remote and on-site.
            </p>
            <a
              href="mailto:maseyadaniel@gmail.com"
              onClick={() => handleSocialClick('email')}
              className="inline-block text-sm font-medium pt-2 transition-opacity hover:opacity-70"
              style={{ color: 'var(--ink)' }}
            >
              maseyadaniel@gmail.com
            </a>
          </div>

          {/* Quick Links Column (Spans 3 cols) */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: 'var(--ink)' }}>
              {t('footer.quickLinks', 'Sitemap')}
            </h4>
            <ul className="space-y-3 list-none">
              {quickLinks.map((l) => (
                <li key={l.nameKey}>
                  <Link
                    to={l.href}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    {t(l.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column (Spans 2 cols) */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: 'var(--ink)' }}>
              {t('footer.elsewhere', 'Elsewhere')}
            </h4>
            <ul className="space-y-3 list-none">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => handleSocialClick(s.event)}
                    className="text-sm transition-colors hover:text-[var(--accent)] flex items-center gap-1"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    {s.name}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: '1px solid var(--border)',
            color: 'var(--ink-muted)',
          }}
        >
          <p>© {year} Daniel Maseya Mubu. All rights reserved.</p>
          <p>
            Designed & built with React, Tailwind, and Django.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;