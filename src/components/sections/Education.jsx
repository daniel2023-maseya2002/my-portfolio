// src/components/sections/Education.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import education from '../../data/education';
import { trackEvent } from '../../utils/analytics';
import TranscriptModal from '../TranscriptModal';

const Education = () => {
  const [preview, setPreview] = useState(null);
  const { t } = useTranslation();

  const degrees = education.filter((e) => e.type === 'degree');
  const certificates = education.filter((e) => e.type === 'certificate');

  return (
    <section id="education" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">

        {/* Section label */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--ink-muted)' }}>
            {t('education.label', 'Education')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('education.heading', 'Academic background.')}
            </h2>
            <p className="text-base" style={{ color: 'var(--ink-secondary)' }}>
              {t('education.subheading', 'Degrees and certifications that shape how I build.')}
            </p>
          </div>

          {/* Right Column: Timeline */}
          <div className="md:col-span-8">
            <div className="space-y-12">

              {/* Degrees */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink)' }}>
                  {t('education.degrees', 'Degrees')}
                </h3>
                <ul className="list-none space-y-0">
                  {degrees.map((item, index) => {
                    const institution = t(`${item.translationKey}.institution`);
                    const degree = t(`${item.translationKey}.degree`);
                    const field = t(`${item.translationKey}.field`);
                    const location = t(`${item.translationKey}.location`);

                    return (
                      <li
                        key={item.id}
                        className={`grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-3 sm:gap-6 py-6 ${
                          index !== 0 ? 'border-t' : ''
                        }`}
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <div>
                          <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                            {item.period}
                          </p>
                          {item.gpa && (
                            <p className="text-xs mt-1" style={{ color: 'var(--ink-muted)' }}>
                              GPA: {item.gpa}
                            </p>
                          )}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                            {institution}
                          </h4>
                          <p className="text-sm md:text-base mb-2" style={{ color: 'var(--ink-secondary)' }}>
                            {degree} {field ? `· ${field}` : ''}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                            {location}
                          </p>

                          {item.transcripts && (
                            <button
                              onClick={() => {
                                trackEvent('education-preview', { type: item.type, id: item.id });
                                setPreview(item);
                              }}
                              className="mt-3 text-xs font-medium transition-opacity hover:opacity-70"
                              style={{ color: 'var(--accent)' }}
                            >
                              {t('education.viewTranscript', 'View transcript')} ↗
                            </button>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Certificates */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] mb-6" style={{ color: 'var(--ink)' }}>
                  {t('education.certificates', 'Certifications')}
                </h3>
                <ul className="list-none space-y-0">
                  {certificates.map((item, index) => {
                    const institution = t(`${item.translationKey}.institution`);
                    const field = t(`${item.translationKey}.field`);

                    return (
                      <li
                        key={item.id}
                        className={`grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-3 sm:gap-6 py-4 ${
                          index !== 0 ? 'border-t' : ''
                        }`}
                        style={{ borderColor: 'var(--border)' }}
                      >
                        <div>
                          <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                            {item.period}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <h4 className="text-base font-medium mb-0.5" style={{ color: 'var(--ink)' }}>
                              {institution}
                            </h4>
                            <p className="text-sm" style={{ color: 'var(--ink-muted)' }}>
                              {field}
                            </p>
                          </div>

                          {item.transcripts && (
                            <button
                              onClick={() => {
                                trackEvent('education-preview', { type: item.type, id: item.id });
                                setPreview(item);
                              }}
                              className="text-xs font-medium transition-opacity hover:opacity-70 shrink-0 text-left sm:text-right"
                              style={{ color: 'var(--accent)' }}
                            >
                              {t('education.viewCertificate', 'View certificate')} ↗
                            </button>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <TranscriptModal
        fileUrl={preview?.transcripts ?? null}
        title={preview ? `${t(`${preview.translationKey}.institution`)} ${t(`${preview.translationKey}.degree`)}` : ''}
        onClose={() => setPreview(null)}
      />
    </section>
  );
};

export default Education;