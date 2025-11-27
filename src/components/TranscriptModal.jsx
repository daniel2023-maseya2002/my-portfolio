// src/components/TranscriptModal.jsx
import { AnimatePresence, motion } from "framer-motion";

const TranscriptModal = ({ fileUrl, title, onClose }) => {
  if (!fileUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          className="relative z-70 w-[min(90vw,1000px)] h-[min(90vh,900px)] bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/60">
            <div>
              <div className="text-sm font-semibold text-slate-50">{title}</div>
              <div className="text-xs text-slate-300">Preview transcript / certificate</div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={fileUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-emerald-500 text-slate-900 text-sm font-medium hover:bg-emerald-600 transition"
                aria-label="Open transcript in new tab"
              >
                Open in new tab
              </a>

              <a
                href={fileUrl}
                download
                className="px-3 py-1 rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 text-sm hover:bg-slate-800 transition"
                aria-label="Download transcript"
              >
                ⤓ Download
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-md text-slate-200 bg-slate-900/40 hover:bg-slate-800"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="w-full h-full">
            {/* PDF preview iframe */}
            <iframe
              src={fileUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TranscriptModal;
