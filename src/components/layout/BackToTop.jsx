// src/components/layout/BackToTop.jsx
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-slate-950 shadow-lg shadow-orange-500/30 transition"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
