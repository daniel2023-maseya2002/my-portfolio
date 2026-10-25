// src/components/sections/About.jsx
import { useTranslation } from 'react-i18next';
import { EVENTS, trackEvent } from '../../utils/analytics';

const About = () => {
  const { t } = useTranslation();

  const handleDownloadResume = async () => {
    trackEvent(EVENTS.RESUME_DOWNLOAD);

    try {
      const res = await fetch('/resume.pdf');
      if (!res.ok) throw new Error(`Failed to fetch resume (${res.status})`);

      const blob = await res.blob();
      if (!blob || blob.size === 0) {
        throw new Error('Fetched resume is empty (0 bytes).');
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Daniel_Maseya_Mubu_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Resume download error:', err);
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
      alert('Automatic download failed. Opening the resume in a new tab so you can save it manually.');
    }
  };

  return (
    <section id="about" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">

        {/* Section label (Top) */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--ink-muted)' }}>
            {t('about.label', 'About')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('about.heading', 'A short introduction.')}
            </h2>
          </div>

          {/* Right Column: Content & Resume */}
          <div className="md:col-span-8 max-w-[48rem]">
            {/* Bio */}
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
              <p>
                {t(
                  'about.p1',
                  "I'm a Software Engineer working mainly in Python and React, with experience across backend engineering, API design, databases, and applied AI. I studied Information Technology at AUCA in Kigali, and I've spent the last few years building production systems for clients in fintech, mobility, education, and agriculture."
                )}
              </p>
              <p>
                {t(
                  'about.p2',
                  'I care about clarity in code and clarity in interfaces. Most of what I build starts as a real problem someone brought to me a registration flow, a booking system, a savings product and I try to ship it in a form that keeps working long after handover.'
                )}
              </p>
            </div>

            {/* Recent Activity Note */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                <span className="font-medium" style={{ color: 'var(--ink)' }}>
                  {t('about.recentlyLabel', 'Recently:')}
                </span>{' '}
                {t(
                  'about.recent',
                  'volunteer support for the digital-code awareness campaign at PNUD DRC.'
                )}
              </p>
            </div>

            {/* Resume / CV Section */}
            <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                    {t('about.resumeTitle', 'Resume / CV')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                    {t('about.resumeDesc', 'Download my full resume in PDF format.')}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackEvent(EVENTS.CV_VIEW || EVENTS.RESUME_VIEW)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--surface-muted)',
                      color: 'var(--ink)',
                      border: '1px solid var(--border)'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    {t('about.view', 'View')}
                  </a>

                  <button
                    type="button"
                    onClick={handleDownloadResume}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    {t('about.download', 'Download CV')}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;