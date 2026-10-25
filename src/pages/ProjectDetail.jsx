// src/pages/ProjectDetail.jsx
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/layout/Container';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container>
        <section className="py-24">
          <h1 className="mb-4">{t('projects.notFound', 'Project not found')}</h1>
          <Link to="/projects" style={{ color: 'var(--accent)' }}>
            ← {t('projects.allProjects', 'All projects')}
          </Link>
        </section>
      </Container>
    );
  }

  // All translatable content comes from locale files via translationKey.
  const tk = project.translationKey;
  const title = t(`${tk}.title`, project.title || project.id);
  const short = t(`${tk}.short`, project.description || '');
  const longDesc = t(`${tk}.longDescription`, project.description || '');
  const role = t(`${tk}.role`, project.role || '');
  const status = t(`${tk}.status`, project.status || '');
  const problem = t(`${tk}.problem`, project.problem || '');
  const solution = t(`${tk}.solution`, project.solution || '');
  const contribution = t(`${tk}.contribution`, project.contribution || '');
  const achievement = t(`${tk}.achievement`, project.achievement || '');
  const disclaimer = t(`${tk}.disclaimer`, project.disclaimer || '');

  // Features can exist in the locale file (features) or in the data file (keyFeatures).
  const featuresRaw = t(`${tk}.features`, { returnObjects: true });
  const features = Array.isArray(featuresRaw) ? featuresRaw : (project.keyFeatures || []);

  return (
    <Container>
      <article className="py-12 md:py-20">
        <Link
          to="/projects"
          className="text-sm mb-8 inline-block"
          style={{ color: 'var(--ink-muted)' }}
        >
          ← {t('projects.allProjects', 'All projects')}
        </Link>

        <div className="max-w-[46rem]">
          <p className="meta mb-4">{status}</p>
          <h1 className="mb-6">{title}</h1>
          <p
            className="text-lg md:text-xl leading-relaxed mb-10"
            style={{ color: 'var(--ink-secondary)' }}
          >
            {short || longDesc}
          </p>
        </div>

        {/* Hero image */}
        <div
          className="rounded-lg overflow-hidden mb-12"
          style={{ border: '1px solid var(--border)' }}
        >
          <img src={project.cover} alt={title} className="w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Main content */}
          <div className="md:col-span-8 max-w-[42rem] space-y-10">
            {problem && (
              <div>
                <p className="meta mb-3">{t('projectDetail.problem', 'Problem')}</p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {problem}
                </p>
              </div>
            )}

            {solution && (
              <div>
                <p className="meta mb-3">{t('projectDetail.approach', 'Approach')}</p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {solution}
                </p>
              </div>
            )}

            {features && features.length > 0 && (
              <div>
                <p className="meta mb-3">{t('projectDetail.keyFeatures', 'Key features')}</p>
                <ul className="space-y-2 list-none">
                  {features.map((f, i) => (
                    <li
                      key={i}
                      className="text-base leading-relaxed"
                      style={{ color: 'var(--ink-secondary)' }}
                    >
                      — {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {contribution && (
              <div>
                <p className="meta mb-3">{t('projectDetail.contribution', 'My contribution')}</p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {contribution}
                </p>
              </div>
            )}

            {achievement && (
              <div>
                <p className="meta mb-3">{t('projectDetail.recognition', 'Recognition')}</p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink-secondary)' }}
                >
                  {achievement}
                </p>
              </div>
            )}

            {disclaimer && (
              <div
                className="p-4 rounded-md text-sm leading-relaxed"
                style={{
                  backgroundColor: 'var(--surface-muted)',
                  color: 'var(--ink-muted)',
                  border: '1px solid var(--border)',
                }}
              >
                {disclaimer}
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="space-y-6">
                <p className="meta">{t('projectDetail.screens', 'Screens')}</p>
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden"
                    style={{ border: '1px solid var(--border)' }}
                  >
                    <img
                      src={img}
                      alt={`${title} screenshot ${i + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-6">
            <div>
              <p className="meta mb-3">{t('projectDetail.stack', 'Stack')}</p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--ink-secondary)' }}
              >
                {project.tech.join(' · ')}
              </p>
            </div>

            <div>
              <p className="meta mb-3">{t('projectDetail.status', 'Status')}</p>
              <p
                className="text-sm"
                style={{ color: 'var(--ink-secondary)' }}
              >
                {status}
              </p>
            </div>

            {project.liveUrl && (
              <div>
                <p className="meta mb-3">{t('projectDetail.live', 'Live')}</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('projectDetail.openLive', 'Open live project')} ↗
                </a>
              </div>
            )}

            {project.repoUrl && (
              <div>
                <p className="meta mb-3">{t('projectDetail.repository', 'Repository')}</p>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  {t('projectDetail.viewGithub', 'View on GitHub')} ↗
                </a>
              </div>
            )}
          </aside>
        </div>
      </article>
    </Container>
  );
};

export default ProjectDetail;