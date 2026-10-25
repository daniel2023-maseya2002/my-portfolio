// src/components/sections/Blog.jsx
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import posts from '../../data/posts';
import { EVENTS, trackEvent } from '../../utils/analytics';

const BlogCard = ({ post, index }) => {
  const { t } = useTranslation();

  const title = t(`${post.translationKey}.title`);
  const tag = t(`${post.translationKey}.tag`);
  const summary = t(`${post.translationKey}.summary`);
  const readingTime = t(`${post.translationKey}.readingTime`);

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const handleClick = () => {
    trackEvent(EVENTS.PROJECT_VIEW, {
      type: 'blog',
      title,
      tag,
    });
    if (post.articleUrl) {
      window.open(post.articleUrl, '_blank');
    }
  };

  return (
    <article
      onClick={handleClick}
      className="group cursor-pointer py-6 flex flex-col h-full"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Meta Row */}
      <div className="flex items-center justify-between mb-3 text-xs">
        <span
          className="uppercase tracking-[0.14em] font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          {tag}
        </span>
        <span style={{ color: 'var(--ink-muted)' }}>{readingTime}</span>
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-semibold mb-3 leading-snug transition-colors group-hover:text-[var(--accent)]"
        style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h3>

      {/* Summary */}
      <p
        className="text-sm md:text-base leading-relaxed mb-6 flex-1"
        style={{ color: 'var(--ink-secondary)' }}
      >
        {summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3">
        <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>
          {formattedDate}
        </span>
        <span
          className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
          style={{ color: 'var(--accent)' }}
        >
          {t('blog.readArticle', 'Read article')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
};

const Blog = () => {
  const { t } = useTranslation();
  const recentPosts = posts.slice(0, 3);

  const handleViewAll = () => {
    trackEvent(EVENTS.NAVIGATION, {
      from: 'blog-section',
      to: 'blog-page',
      action: 'view-all',
    });
  };

  return (
    <section id="blog" className="relative w-full overflow-hidden">
      {/* Full width container with consistent edge-to-edge padding */}
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">
        
        {/* Section label */}
        <div className="mb-10 md:mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: 'var(--ink-muted)' }}
          >
            {t('blog.label', 'Writing')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-4">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('blog.heading', 'Notes on engineering and design.')}
            </h2>
            <p className="text-base mb-6" style={{ color: 'var(--ink-secondary)' }}>
              {t(
                'blog.subheading',
                'Occasional writing about the decisions behind the projects technical choices, product thinking, and lessons from shipping.'
              )}
            </p>
            <Link
              to="/blog"
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent)' }}
            >
              {t('blog.viewAll', 'All articles')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Posts */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {recentPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;