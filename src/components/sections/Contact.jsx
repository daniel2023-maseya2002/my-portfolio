// src/components/sections/Contact.jsx
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EVENTS, trackEvent } from '../../utils/analytics';

const Contact = () => {
  const { t } = useTranslation();
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || '';
  const successRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    if (!form.name.trim()) return t('contact.validationName', 'Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return t('contact.validationEmail', 'Please enter a valid email.');
    if (!form.message.trim() || form.message.trim().length < 10)
      return t('contact.validationMessage', 'Message must be at least 10 characters.');
    return null;
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg('');

    if (form.website) {
      setStatus('success');
      return;
    }

    const err = validate();
    if (err) {
      setErrorMsg(err);
      setStatus('error');
      return;
    }

    trackEvent(EVENTS.CONTACT_SUBMIT, {
      name: form.name,
      email: form.email,
    });

    if (!endpoint) {
      setErrorMsg(
        t(
          'contact.endpointError',
          'Form endpoint not configured. Add VITE_FORMSPREE_ENDPOINT to your environment.'
        )
      );
      setStatus('error');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          website: form.website,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '', website: '' });
        successRef.current?.focus();
      } else {
        setStatus('error');
        setErrorMsg(data.error || t('contact.sendError', 'Failed to send. Try again later.'));
      }
    } catch {
      setStatus('error');
      setErrorMsg(
        t('contact.networkError', 'Network error. Check your connection and try again.')
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-28">

        {/* Section label */}
        <div className="mb-10 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--ink-muted)' }}>
            {t('contact.label', 'Contact')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Left Column: Heading & Info */}
          <div className="md:col-span-5 max-w-[32rem]">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4"
              style={{ color: 'var(--ink)', fontFamily: 'var(--font-serif)' }}
            >
              {t('contact.heading', "Have something in mind? Let's talk.")}
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: 'var(--ink-secondary)' }}>
              {t(
                'contact.subheading',
                'Freelance, full-time, or collaborations feel free to reach out. I usually reply within 24 hours.'
              )}
            </p>

            {/* Contact Details */}
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] mb-1" style={{ color: 'var(--ink-muted)' }}>
                  Email
                </p>
                <a
                  href="mailto:maseyadaniel@gmail.com"
                  className="font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--ink)' }}
                >
                  maseyadaniel@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] mb-1" style={{ color: 'var(--ink-muted)' }}>
                  GitHub
                </p>
                <a
                  href="https://github.com/daniel2023-maseya2002"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--ink)' }}
                >
                  github.com/daniel2023-maseya2002 ↗
                </a>
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] mb-1" style={{ color: 'var(--ink-muted)' }}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/daniel-maseya"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--ink)' }}
                >
                  linkedin.com/in/daniel-maseya ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7">
            <div
              className="p-6 md:p-8 rounded-xl"
              style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)'
              }}
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: 'var(--ink-muted)' }}
                    >
                      {t('contact.yourName', 'Name')}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.yourName', 'Your name')}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium mb-1.5"
                      style={{ color: 'var(--ink-muted)' }}
                    >
                      {t('contact.emailAddress', 'Email')}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium mb-1.5"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    {t('contact.yourMessage', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t(
                      'contact.messagePlaceholder',
                      'Tell me about your project, timeline, or just say hi...'
                    )}
                  />
                </div>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Leave this empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex="-1"
                  />
                </div>

                {status === 'success' && (
                  <div
                    ref={successRef}
                    tabIndex="-1"
                    className="p-3 rounded-md text-sm"
                    style={{
                      backgroundColor: 'rgba(37, 99, 235, 0.1)',
                      color: 'var(--accent)'
                    }}
                  >
                    {t('contact.success', 'Message sent. Thanks I\'ll reply soon.')}
                  </div>
                )}

                {status === 'error' && errorMsg && (
                  <p className="text-sm font-medium" style={{ color: '#B91C1C' }}>
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    {loading
                      ? t('contact.sending', 'Sending…')
                      : t('contact.sendMessage', 'Send message')}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;