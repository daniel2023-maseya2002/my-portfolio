// src/components/layout/BackToTop.jsx
import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      setVisible(scrollY > 300);
      setScrollProgress((scrollY / max) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--border)"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${scrollProgress * 2.89} 289`}
          />
        </svg>
      </div>
      <button
        onClick={scrollTop}
        aria-label="Back to top"
        className="relative flex items-center justify-center w-12 h-12 rounded-full text-white"
        style={{ backgroundColor: 'var(--accent)' }}
      >
        <svg
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;