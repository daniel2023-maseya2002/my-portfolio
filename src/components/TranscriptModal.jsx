// src/components/TranscriptModal.jsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TranscriptModal = ({ fileUrl, title, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (fileUrl) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [fileUrl, onClose]);

  if (!fileUrl) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative z-[70] w-full max-w-5xl h-[90vh] rounded-lg overflow-hidden shadow-2xl flex flex-col"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div className="min-w-0">
            <h3
              className="text-base font-semibold truncate"
              style={{ color: 'var(--ink)' }}
            >
              {title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: 'var(--ink-muted)' }}>
              {t('education.previewTranscript', 'Preview transcript / certificate')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium transition-colors"
              style={{
                backgroundColor: 'var(--surface-muted)',
                border: '1px solid var(--border)',
                color: 'var(--ink)',
              }}
            >
              {t('education.open', 'Open')}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>

            <a
              href={fileUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              {t('education.download', 'Download')}
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-md transition-colors"
              style={{
                backgroundColor: 'var(--surface-muted)',
                border: '1px solid var(--border)',
                color: 'var(--ink)',
              }}
              aria-label="Close preview"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="relative flex-1" style={{ backgroundColor: 'var(--surface-muted)' }}>
          <iframe
            src={fileUrl}
            title={title}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Keyboard Hint */}
        <div
          className="px-4 py-2 text-center text-xs"
          style={{
            borderTop: '1px solid var(--border)',
            color: 'var(--ink-muted)',
          }}
        >
          Press <kbd className="px-1.5 py-0.5 rounded text-xs" style={{ border: '1px solid var(--border)' }}>Esc</kbd> to close
        </div>
      </div>
    </div>
  );
};

export default TranscriptModal;