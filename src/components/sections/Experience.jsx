// src/components/sections/Experience.jsx
import { useTranslation } from 'react-i18next';
import experience from '../../data/experience';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative w-full overflow-hidden">
      {/* Full width container with consistent edge-to-edge padding */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">
        
        {/* Section label */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--ink-muted)' }}>
            {t('experience.label', 'Experience')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('experience.heading', 'Where I have worked.')}
            </h2>
            <p className="text-base" style={{ color: 'var(--ink-secondary)' }}>
              {t('experience.subheading', 'A timeline of my professional roles, internships, and volunteer work.')}
            </p>
          </div>

          {/* Right Column: Timeline */}
          <div className="md:col-span-8">
            <ol className="list-none space-y-0">
              {experience.map((item, index) => (
                <li
                  key={item.id}
                  className={`grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 py-8 md:py-10 ${
                    index !== 0 ? 'border-t' : ''
                  }`}
                  style={{ borderColor: 'var(--border)' }}
                >
                  {/* Date & Type */}
                  <div className="flex flex-col">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: 'var(--ink)' }}
                    >
                      {item.period}
                    </p>
                    <p
                      className="text-xs mt-1 uppercase tracking-[0.14em]"
                      style={{ color: 'var(--ink-muted)' }}
                    >
                      {item.kind}
                    </p>
                  </div>

                  {/* Role & Details */}
                  <div>
                    <h3
                      className="text-lg md:text-xl font-semibold mb-1"
                      style={{ color: 'var(--ink)' }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="text-sm md:text-base mb-4"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      {item.org}
                      {item.location ? ` · ${item.location}` : ''}
                    </p>

                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="space-y-2 list-none">
                        {item.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm md:text-base leading-relaxed"
                            style={{ color: 'var(--ink-secondary)' }}
                          >
                            <span 
                              className="text-xs mt-1.5" 
                              style={{ color: 'var(--accent)' }}
                            >
                              ▹
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;