// src/components/TranscriptModal.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const TranscriptModal = ({ fileUrl, title, onClose }) => {
  const { t } = useTranslation();
  
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (fileUrl) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [fileUrl, onClose]);

  if (!fileUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Container */}
        <motion.div
          className="relative z-[70] w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header with Gradient Border */}
          <div className="relative">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500" />
            
            <div className="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                {/* Document Icon with Gradient */}
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                  <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-500/30">
                      <svg className="w-3 h-3 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">{t("education.preview")}</span>
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {t("education.previewTranscript") || "Preview transcript / certificate"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Open in New Tab Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  {t("education.open") || "Open"}
                </motion.a>

                {/* Download Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={fileUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-sm font-bold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 group"
                >
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  {t("education.download")}
                </motion.a>

                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300"
                  aria-label="Close preview"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          {/* PDF Preview Area with Loading State */}
          <div className="relative w-full h-[calc(100%-80px)] bg-slate-100 dark:bg-slate-950">
            {/* Loading indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
                  <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-4 border-t-teal-500 border-r-emerald-500 border-b-teal-500 border-l-transparent animate-spin"></div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{t("education.loading") || "Loading document..."}</p>
              </div>
            </div>
            
            {/* PDF Iframe */}
            <iframe
              src={fileUrl}
              title={title}
              className="w-full h-full border-0 relative z-10"
              loading="lazy"
            />
          </div>

          {/* Keyboard Hint - Modern Design */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 text-white text-xs font-medium shadow-xl z-20">
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-700 rounded-md border border-slate-600 dark:border-slate-500 text-xs font-mono shadow-inner">
                ESC
              </kbd>
              <span className="text-slate-300">{t("education.toClose") || "to close"}</span>
              <span className="w-px h-3 bg-slate-600 mx-1"></span>
              <kbd className="px-2 py-1 bg-slate-800 dark:bg-slate-700 rounded-md border border-slate-600 dark:border-slate-500 text-xs font-mono shadow-inner">
                ⌘
              </kbd>
              <span className="text-slate-300">+ D</span>
              <span className="text-slate-300">{t("education.toDownload") || "to download"}</span>
            </span>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-teal-500/30 rounded-tl-xl pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-emerald-500/30 rounded-br-xl pointer-events-none" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TranscriptModal;