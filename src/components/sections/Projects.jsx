// src/components/sections/Projects.jsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import { EVENTS, trackEvent } from '../../utils/analytics';

const ProjectRow = ({ project, index }) => {
  const { t } = useTranslation();

  // Pull translated content from locale files, fall back to data file.
  const tk = project.translationKey;
  const title = t(`${tk}.title`, project.title || project.id);
  const short = t(`${tk}.short`, project.short || project.description || '');
  const status = t(`${tk}.status`, project.status || '');

  const handleClick = () => {
    trackEvent(EVENTS.PROJECT_VIEW, {
      project: title,
      slug: project.slug,
      type: project.type,
    });
  };

  const isMobileMockup = project.id === 'mabele';

  return (
    <Link
      to={`/projects/${project.slug}`}
      onClick={handleClick}
      className="group block py-10 md:py-14 transition-opacity hover:opacity-90"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

        {/* Left: Meta / Index */}
        <div className="md:col-span-3 flex flex-row md:flex-col gap-3 md:gap-1">
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: 'var(--accent)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.12em] font-medium" style={{ color: 'var(--ink)' }}>
              {project.type === 'ux'
                ? t('projects.ux', 'UX / UI')
                : t('projects.engineering', 'Engineering')}
            </span>
            <span className="text-xs mt-0.5" style={{ color: 'var(--ink-muted)' }}>
              {status}
            </span>
          </div>
        </div>

        {/* Middle: Content */}
        <div className="md:col-span-5 order-2 md:order-1">
          <h3
            className="text-2xl md:text-3xl font-semibold mb-3 transition-colors group-hover:text-[var(--accent)]"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
          >
            {title}
          </h3>

          <p
            className="text-sm md:text-base leading-relaxed mb-5"
            style={{ color: 'var(--ink-secondary)' }}
          >
            {short}
          </p>

          <div className="mb-6">
            <p className="text-xs font-medium uppercase tracking-[0.1em] mb-2" style={{ color: 'var(--ink-muted)' }}>
              {t('projectDetail.stack', 'Stack')}
            </p>
            <p className="text-sm" style={{ color: 'var(--ink-secondary)' }}>
              {project.tech.join(' · ')}
            </p>
          </div>

          <span
            className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
            style={{ color: 'var(--accent)' }}
          >
            {t('projects.viewDetails', 'Read case study')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        {/* Right: Preview Image */}
        <div className="md:col-span-4 order-1 md:order-2">
          <div
            className={`overflow-hidden rounded-lg shadow-sm flex justify-center mx-auto md:ml-auto md:mr-0 ${
              isMobileMockup ? 'max-w-[200px] md:max-w-[240px]' : 'w-full'
            }`}
            style={{
              border: '1px solid var(--border)',
              backgroundColor: 'var(--surface-muted)'
            }}
          >
            <img
              src={project.cover}
              alt={title}
              className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${
                isMobileMockup ? 'aspect-[9/16]' : 'aspect-[4/3]'
              }`}
            />
          </div>
        </div>

      </div>
    </Link>
  );
};

const Projects = () => {
  const { t } = useTranslation();

  const order = [
    'salon-booking-platform',
    'mabele',
    'stayease',
    'imas',
    'savingdm',
    'auca'
  ];

  const featured = order
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean);

  return (
    <section id="projects" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">

        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-[48rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--ink-muted)' }}>
            {t('projects.label', 'Selected Work')}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
          >
            {t('projects.heading', 'Real problems, working software.')}
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
            {t(
              'projects.subheading',
              'A selection of full-stack products, APIs, and interfaces. Each one was built to solve a specific problem, from booking systems to agronomic tools.'
            )}
          </p>
        </div>

        {/* Project List */}
        <div>
          {featured.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

        {/* Footer Link */}
        <div className="mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            {t('projects.viewAll', 'Explore all projects')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;