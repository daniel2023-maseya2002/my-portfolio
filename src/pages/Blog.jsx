// src/pages/Blog.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import posts from '../data/posts';
import { EVENTS, trackEvent } from '../utils/analytics';

const BlogPostRow = ({ post }) => {
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
      className="group cursor-pointer py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 transition-opacity hover:opacity-80"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      {/* Left: Meta */}
      <div className="md:col-span-3 flex flex-row md:flex-col gap-2 md:gap-1">
        <span className="text-xs font-medium uppercase tracking-[0.14em]" style={{ color: 'var(--accent)' }}>
          {tag}
        </span>
        <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>
          {formattedDate}
        </span>
        <span className="text-xs" style={{ color: 'var(--ink-muted)' }}>
          {readingTime}
        </span>
      </div>

      {/* Right: Content */}
      <div className="md:col-span-9">
        <h3
          className="text-2xl md:text-3xl font-semibold mb-3 leading-snug transition-colors group-hover:text-[var(--accent)]"
          style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h3>
        <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--ink-secondary)' }}>
          {summary}
        </p>
        <span
          className="inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1"
          style={{ color: 'var(--accent)' }}
        >
          {t('blog.readArticle', 'Read')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const types = ['all', ...new Set(posts.map(p => p.type))];

  const filteredPosts = posts.filter(post => {
    const matchesType = filter === 'all' || post.type === filter;

    const title = t(`${post.translationKey}.title`).toLowerCase();
    const summary = t(`${post.translationKey}.summary`).toLowerCase();
    const matchesSearch = title.includes(search.toLowerCase()) || summary.includes(search.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24">

        {/* Header */}
        <div className="max-w-[48rem] mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-opacity hover:opacity-70"
            style={{ color: 'var(--ink-muted)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            {t('blog.backToHome', 'Back to home')}
          </Link>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
            style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
          >
            {t('blog.pageHeading', 'Writing & Notes.')}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--ink-secondary)' }}>
            {t('blog.pageSubheading', 'A collection of articles, case studies, book notes, and technical writing.')}
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize"
                style={{
                  backgroundColor: filter === type ? 'var(--ink)' : 'var(--surface-muted)',
                  color: filter === type ? 'var(--bg)' : 'var(--ink)',
                  border: '1px solid var(--border)'
                }}
              >
                {type === 'all' ? t('blog.allFilter', 'All') : type + 's'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2"
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder', 'Search...')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md text-sm"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--ink)'
              }}
            />
          </div>
        </div>

        {/* Post List */}
        <div>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostRow key={post.id} post={post} />
            ))
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg" style={{ color: 'var(--ink-muted)' }}>
                {t('blog.noPosts', 'No posts found matching your criteria.')}
              </p>
              <button
                onClick={() => { setFilter('all'); setSearch(''); }}
                className="mt-4 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--accent)' }}
              >
                {t('blog.clearFilters', 'Clear filters')}
              </button>
            </div>
          )}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>

      </div>
    </div>
  );
};

export default BlogPage;