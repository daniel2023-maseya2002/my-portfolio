// src/pages/BlogPage.jsx
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import posts from "../data/posts";

const BlogCard = ({ post, index }) => {
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
        animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
      }}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${getTagColor()} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
      
      <div className="relative h-full rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-teal-500/10">
        
        <div className={`h-1 bg-gradient-to-r ${getTagColor()}`}></div>
        
        <div className="p-6 flex flex-col h-full">
          
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

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-600 dark:group-hover:from-teal-400 dark:group-hover:to-emerald-400 transition-all duration-300">
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

const BlogPage = ({ onBackToHome }) => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useTranslation();

  // Get all unique tags from translated posts
  const getAllTags = () => {
    const tags = new Set();
    posts.forEach(post => {
      const translatedTag = t(`${post.translationKey}.tag`);
      tags.add(translatedTag);
    });
    return ["all", ...Array.from(tags)];
  };

  const tags = getAllTags();
  
  const filteredPosts = posts.filter(post => {
    const translatedTag = t(`${post.translationKey}.tag`);
    const translatedTitle = t(`${post.translationKey}.title`);
    const translatedSummary = t(`${post.translationKey}.summary`);
    
    const matchesTag = filter === "all" || translatedTag === filter;
    const matchesSearch = translatedTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         translatedSummary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goHome = () => {
    if (onBackToHome) {
      onBackToHome();
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-teal-500/5 to-emerald-500/5 dark:from-teal-500/10 dark:to-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-12">
          <button onClick={goHome} className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-6 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            {t("blog.backToHome") || "Back to Home"}
          </button>
          
          <div className="group relative inline-flex mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-500/10 dark:bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 dark:border-teal-500/30">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span className="text-sm font-semibold text-teal-600 dark:text-teal-300 uppercase tracking-wider">
                {t("blog.allArticles") || "All Articles"}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            {t("blog.title") || "Blog"}{' '}
            <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t("blog.titleHighlight") || "Insights"}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t("blog.description")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex-1">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
              <input
                type="text"
                placeholder={t("blog.searchPlaceholder") || "Search articles..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 dark:focus:border-teal-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  filter === tag
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {tag === "all" ? (t("blog.allPosts") || "All Posts") : tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {t("blog.showing") || "Showing"} {filteredPosts.length} {filteredPosts.length === 1 ? (t("blog.article") || "article") : (t("blog.articles") || "articles")}
          </p>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"/>
              </svg>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              {t("blog.noArticles") || "No articles found matching your criteria."}
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchTerm("");
              }}
              className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold hover:shadow-lg transition-all"
            >
              {t("blog.clearFilters") || "Clear filters"}
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;