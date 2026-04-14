// src/components/sections/Contact.jsx
import { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const successRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const validate = () => {
    if (!form.name.trim()) return t("contact.validationName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return t("contact.validationEmail");
    if (!form.message.trim() || form.message.trim().length < 10)
      return t("contact.validationMessage");
    return null;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg("");

    if (form.website) {
      setStatus("success");
      return;
    }

    const err = validate();
    if (err) {
      setErrorMsg(err);
      setStatus("error");
      return;
    }

    if (!endpoint) {
      setErrorMsg(t("contact.endpointError"));
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
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
        setStatus("success");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || t("contact.sendError"));
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg(t("contact.networkError"));
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      titleKey: "contact.email",
      value: "maseyadaniel@gmail.com",
      link: "mailto:maseyadaniel@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      titleKey: "contact.location",
      value: "Kigali, Rwanda",
      subtitleKey: "contact.openToRemote",
      link: null,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      titleKey: "contact.quickResponse",
      valueKey: "contact.responseTime",
      subtitleKey: "contact.responseSubtitle",
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {/* Subtle Background decorative elements */}
      <div className="absolute inset-0 w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/3 dark:bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/3 dark:bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Section Header - Reduced animations */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/5 dark:bg-teal-500/10 border border-teal-500/20 dark:border-teal-500/20 mb-5">
            <div className="relative">
              <svg className="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span className="text-xs font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
              {t("contact.badge")}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-3">
            {t("contact.title")}{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t("contact.description")}
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full mx-auto mt-5" />
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          
          {/* Contact Cards - Subtle animations */}
          <div className="lg:col-span-1 space-y-3">
            {contactMethods.map((method, index) => (
              <div
                key={method.titleKey}
                className={`transition-all duration-500`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative p-5 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-200 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                        {t(method.titleKey)}
                      </h3>
                      {method.link ? (
                        <a 
                          href={method.link}
                          className="text-sm text-teal-600 dark:text-teal-400 hover:underline break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <>
                          <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                            {method.valueKey ? t(method.valueKey) : method.value}
                          </p>
                          {method.subtitleKey && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              {t(method.subtitleKey)}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form - Subtle animation */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <div className="relative p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                      <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      {t("contact.yourName")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all duration-200 ${
                        focusedField === 'name' 
                          ? 'border-teal-500 ring-teal-500/20' 
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                      placeholder="Daniel Maseya"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                      <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      {t("contact.emailAddress")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full rounded-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all duration-200 ${
                        focusedField === 'email' 
                          ? 'border-teal-500 ring-teal-500/20' 
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
                      <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                      </svg>
                      {t("contact.yourMessage")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      className={`w-full rounded-lg px-4 py-2.5 bg-slate-50 dark:bg-slate-900/50 border text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-1 transition-all duration-200 resize-none ${
                        focusedField === 'message' 
                          ? 'border-teal-500 ring-teal-500/20' 
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                      placeholder={t("contact.messagePlaceholder")}
                      required
                    />
                  </div>

                  {/* Honeypot */}
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

                  {/* Status Messages */}
                  <div aria-live="polite" className="min-h-[3.5rem]">
                    {status === "success" && (
                      <div
                        ref={successRef}
                        tabIndex="-1"
                        className="flex items-start gap-2 p-3 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-500/20"
                      >
                        <svg className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-sm text-teal-800 dark:text-teal-300">{t("contact.success")}</p>
                          <p className="text-xs text-teal-600 dark:text-teal-400">{t("contact.successDesc")}</p>
                        </div>
                      </div>
                    )}

                    {status === "error" && errorMsg && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-500/20">
                        <svg className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div className="text-sm">
                          <p className="font-medium text-red-800 dark:text-red-300 mb-0.5">{t("contact.error")}</p>
                          <p className="text-xs text-red-600 dark:text-red-400">{errorMsg}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-500 dark:to-emerald-500 text-white font-semibold text-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              opacity="0.2"
                            />
                            <path
                              d="M22 12a10 10 0 00-10-10"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          </svg>
                          {t("contact.sending")}
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          {t("contact.sendMessage")}
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setForm({ name: "", email: "", message: "", website: "" });
                        setStatus(null);
                        setErrorMsg("");
                      }}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                    >
                      {t("contact.reset")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Note - Subtle */}
        <div className={`text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
            <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {t("contact.privacy")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;