// src/components/sections/Blog.jsx
import { useState } from "react";
import posts from "../../data/posts";

const BlogCard = ({ post, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tagColors = {
    "Case Study": "from-emerald-500 to-teal-500",
    "Engineering": "from-teal-500 to-cyan-500",
    "Product": "from-cyan-500 to-emerald-500"
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

  return (
    <article
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Animated Background Gradient */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${tagColors[post.tag]} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
      
      {/* Card Container */}
      <div className="relative h-full rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
        
        {/* Gradient Top Border */}
        <div className={`h-1 bg-gradient-to-r ${tagColors[post.tag]}`}></div>
        
        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            {/* Tag Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${tagColors[post.tag]} text-white text-xs font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              {tagIcons[post.tag]}
              <span>{post.tag}</span>
            </div>
            
            {/* Reading Time */}
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
              <span className="font-medium">{post.readingTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-400 transition-all duration-300">
            {post.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-1">
            {post.summary}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
            {/* Date */}
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

            {/* CTA Button */}
            <button className="group/btn relative inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 overflow-hidden">
              <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                Read Article
              </span>
              <svg 
                className="w-4 h-4 relative z-10 transition-all duration-300 group-hover/btn:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 group-hover/btn:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Decorative Corner Accent */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tagColors[post.tag]} opacity-5 dark:opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500`}></div>
        </div>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 lg:py-20 scroll-mt-24 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20 dark:border-emerald-500/30 backdrop-blur-sm mb-6">
            <div className="relative">
              <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
              Writing & Insights
            </span>
          </div>
          
          {/* Title & Description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                Latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 animate-gradient">
                  Articles
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Deep dives into design thinking, system architecture, and product development — sharing lessons from real projects.
              </p>
            </div>

            {/* View All Button */}
            <a 
              href="/blog" 
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg overflow-hidden w-fit"
            >
              <span className="relative z-10">View All Posts</span>
              <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative p-8 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-black mb-3">
                  Stay Updated
                </h3>
                <p className="text-emerald-50 text-lg leading-relaxed">
                  Get notified when I publish new case studies, tutorials, and insights about design and development.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-emerald-600 font-bold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Get In Touch
                </a>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 backdrop-blur-sm text-white font-bold hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Blog;