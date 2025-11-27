// src/components/sections/Blog.jsx
import posts from "../../data/posts";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 border-t border-slate-200 dark:border-slate-800 scroll-mt-24"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-slate-50">
            Writing & Case Studies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
            Short breakdowns of how I think about design, architecture, and real
            projects. Full case studies coming soon.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/40 p-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-[0.7rem]">
                    {post.tag}
                  </span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  {post.summary}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="text-orange-500 dark:text-orange-400">
                  Read case study soon →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
