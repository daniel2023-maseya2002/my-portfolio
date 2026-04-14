// src/components/sections/Blog.jsx
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import posts from "../../data/posts";

const BlogCard = ({ post, index, isVisible, isFeatured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Get translated content
  const title = t(`${post.translationKey}.title`);
  const tag = t(`${post.translationKey}.tag`);
  const summary = t(`${post.translationKey}.summary`);
  const readingTime = t(`${post.translationKey}.readingTime`);

  const tagColors = {
    "Case Study": "from-teal-500 to-emerald-500",
    "Engineering": "from-emerald-500 to-teal-500",
    "Product": "from-teal-500 to-cyan-500"
  };

  const tagIcons = {
    "Case Study": (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    "Engineering": (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    "Product": (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    )
  };

  // Get the tag color based on the translated tag
  const getTagColor = () => {
    if (tag === "Case Study") return tagColors["Case Study"];
    if (tag === "Engineering") return tagColors["Engineering"];
    if (tag === "Product") return tagColors["Product"];
    return "from-teal-500 to-emerald-500";
  };

  const getTagIcon = () => {
    if (tag === "Case Study") return tagIcons["Case Study"];
    if (tag === "Engineering") return tagIcons["Engineering"];
    if (tag === "Product") return tagIcons["Product"];
    return tagIcons["Case Study"];
  };

  return (
    <article
      className="group relative h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => post.articleUrl && window.open(post.articleUrl, '_blank')}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`
      }}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${getTagColor()} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
      
      <div className={`relative h-full rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-teal-500/10 ${isFeatured ? 'lg:flex' : ''}`}>
        
        <div className={`h-1 bg-gradient-to-r ${getTagColor()}`}></div>
        
        <div className={`p-6 flex flex-col h-full ${isFeatured ? 'lg:flex-1' : ''}`}>
          
          <div className="flex items-center justify-between mb-4">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${getTagColor()} text-white text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              {getTagIcon()}
              <span>{tag}</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="relative">
                <svg 
                  className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="font-medium">{readingTime}</span>
            </div>
          </div>

          <h3 className={`font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 dark:group-hover:from-teal-400 dark:group-hover:to-emerald-400 transition-all duration-300 ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1">
            {summary}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span className="font-medium">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>

            {post.articleUrl ? (
              <a
                href={post.articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group/btn relative inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 overflow-hidden"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                  {t("blog.readArticle")}
                </span>
                <svg 
                  className="w-4 h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 group-hover/btn:w-full transition-all duration-300"></span>
              </a>
            ) : (
              <span className="text-sm text-slate-400 dark:text-slate-500 italic">{t("blog.comingSoon")}</span>
            )}
          </div>

          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getTagColor()} opacity-5 dark:opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500`}></div>
        </div>
      </div>
    </article>
  );
};

const Blog = ({ onViewAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('blog');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="relative w-full py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <div className="relative">
                <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              </div>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("blog.badge")}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
                {t("blog.title")}{' '}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  {t("blog.titleHighlight")}
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {t("blog.description")}
              </p>
            </div>

            <button 
              onClick={handleViewAll}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg overflow-hidden w-fit"
            >
              <span className="relative z-10">{t("blog.viewAll")}</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 dark:from-teal-500/20 dark:to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mt-6" />
        </div>

        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-600 dark:text-teal-400">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t("blog.featured")}
              </span>
            </div>
            <BlogCard post={featuredPosts[0]} index={0} isVisible={isVisible} isFeatured={true} />
          </div>
        )}

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {recentPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index + 1} isVisible={isVisible} />
          ))}
        </div>

        <div className={`relative rounded-3xl overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-emerald-500 to-teal-600"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>

              <div>
                <h3 className="text-3xl font-black mb-3">
                  {t("blog.newsletterTitle")}
                </h3>
                <p className="text-teal-50 text-lg leading-relaxed">
                  {t("blog.newsletterDesc")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-600 font-bold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {t("blog.getInTouch")}
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 backdrop-blur-sm text-white font-bold hover:bg-white/10 transition-all duration-300">
                  {t("blog.learnMore")}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;