// src/components/ProjectModal.jsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const getTranslation = (key, fallback = '') => {
    const translated = t(key);
    return translated === key || !translated ? fallback : translated;
  };

  const isDigitalTwin = project.id === 'digital-twin';

  const title = isDigitalTwin
    ? project.title || 'Digital Twin'
    : getTranslation(`${project.translationKey}.title`, project.title || '');
  const short = isDigitalTwin
    ? project.description || ''
    : getTranslation(`${project.translationKey}.short`, project.short || '');
  const role = isDigitalTwin
    ? project.role || ''
    : getTranslation(`${project.translationKey}.role`, project.role || '');
  const longDescription = isDigitalTwin
    ? project.solution || project.description || ''
    : getTranslation(`${project.translationKey}.longDescription`, project.longDescription || '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative z-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-md transition-colors"
          style={{
            backgroundColor: 'var(--surface-muted)',
            border: '1px solid var(--border)',
            color: 'var(--ink)',
          }}
          aria-label={t('projects.close', 'Close')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left: Images */}
          <div className="lg:col-span-3 p-6 md:p-8 space-y-4">
            <div
              className="rounded-md overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
            >
              <img
                src={project.cover}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>

            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="rounded-md overflow-hidden"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <img
                      src={img}
                      alt={`${title} screenshot ${idx + 1}`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-2 p-6 md:p-8 flex flex-col gap-5">
            <div>
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                {short}
              </p>
            </div>

            {!isDigitalTwin && longDescription && (
              <div className="pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                  {longDescription}
                </p>
              </div>
            )}

            <div>
              <p className="text-xs uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-muted)' }}>
                {t('projects.role', 'Role')}
              </p>
              <p className="text-sm font-medium" style={{ color: 'var(--ink)' }}>
                {role}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.14em] mb-2" style={{ color: 'var(--ink-muted)' }}>
                {t('projects.technologies', 'Stack')}
              </p>
              <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>
                {project.tech?.join(' · ')}
              </p>
            </div>

            <div className="mt-auto pt-4 space-y-2" style={{ borderTop: '1px solid var(--border)' }}>
              {project.liveUrl && project.liveUrl !== '#digital-twin' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent)' }}
                >
                  {t('projects.viewLive', 'View live project')}
                </a>
              )}

              <button
                onClick={onClose}
                className="flex items-center justify-center w-full px-4 py-3 rounded-md text-sm font-medium transition-colors"
                style={{
                  backgroundColor: 'var(--surface-muted)',
                  border: '1px solid var(--border)',
                  color: 'var(--ink)',
                }}
              >
                {t('projects.close', 'Close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;