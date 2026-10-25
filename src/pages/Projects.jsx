// src/pages/Projects.jsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import projects from '../data/projects';

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section className="py-16 md:py-24">
        <div className="max-w-[42rem] mb-14">
          <p className="meta mb-4">{t('projectsPage.meta', 'All work')}</p>
          <h1 className="mb-4">{t('projectsPage.title', 'Projects')}</h1>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
            {t(
              'projectsPage.description',
              'Everything I have shipped, prototyped, or designed sorted newest first.'
            )}
          </p>
        </div>

        <ul className="list-none" style={{ borderTop: '1px solid var(--border)' }}>
          {projects.map((p) => {
            const tk = p.translationKey;
            const title = t(`${tk}.title`, p.title || p.id);
            const short = t(`${tk}.short`, p.description || '');
            const status = t(`${tk}.status`, p.status || '');

            return (
              <li key={p.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 group"
                >
                  <div className="md:col-span-5">
                    <h2
                      className="text-lg md:text-xl font-semibold mb-1 transition-colors"
                      style={{ color: 'var(--ink)' }}
                    >
                      {title}
                    </h2>
                    <p className="text-xs uppercase tracking-[0.14em]" style={{ color: 'var(--ink-muted)' }}>
                      {status}
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
                      {short}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span
                      className="inline-flex items-center gap-1 text-sm font-medium"
                      style={{ color: 'var(--accent)' }}
                    >
                      {t('projectsPage.view', 'View')}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
};

export default ProjectsPage;