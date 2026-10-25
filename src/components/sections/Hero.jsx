// src/components/sections/Hero.jsx
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import profilePicture from '../../assets/profile.jpeg';
import { EVENTS, trackEvent } from '../../utils/analytics';

const GITHUB_URL = 'https://github.com/daniel2023-maseya2002';

const Hero = () => {
  const { t } = useTranslation();
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
    return t('hero.locationFallback', 'Kigali, Rwanda');
  };

  const handleCTAClick = (destination) => {
    trackEvent(EVENTS.NAVIGATION, {
      from: 'hero-section',
      to: destination,
      action: 'cta-click',
    });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div className="md:col-span-7 order-2 md:order-1">
            <p
              className="text-xs font-medium uppercase tracking-[0.18em] mb-6"
              style={{ color: 'var(--ink-muted)' }}
            >
              Daniel Maseya Mubu
            </p>

            <h1
              className="mb-6"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              {t('hero.softwareEngineer', 'Software Engineer')}
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: 'var(--ink-secondary)', maxWidth: '38rem' }}
            >
              {t(
                'hero.positioning',
                'I design, engineer and build digital solutions from web applications and backend systems to APIs, AI-powered experiences and user-centered digital products.'
              )}
            </p>

            <div
              className="mb-8"
              style={{ borderTop: '1px solid var(--border)' }}
            />

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                onClick={() => handleCTAClick('projects-section')}
                className="inline-flex items-center px-6 py-3 rounded-md text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                {t('hero.viewProjects', 'View Projects')}
              </a>

              <a
                href="#contact"
                onClick={() => handleCTAClick('contact-section')}
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ink)' }}
              >
                {t('hero.contactMe', 'Contact')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: 'var(--ink-muted)' }}
              >
                GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </div>

            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
              {t('hero.availabilityLine', 'Open to opportunities · Remote and on-site')}
            </p>
          </div>

          {/* Image column */}
          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[400px]">
              <div
                className="relative rounded-xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src={profilePicture}
                  alt="Daniel Maseya Mubu"
                  className="w-full aspect-[4/5] object-cover object-top"
                  loading="eager"
                />
              </div>

              <div className="mt-4 flex items-baseline justify-between w-full">
                <p
                  className="text-xs uppercase tracking-[0.14em]"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {getLocationDisplay()}
                </p>
                <p
                  className="text-xs uppercase tracking-[0.14em]"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {t('hero.available', 'Available')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;