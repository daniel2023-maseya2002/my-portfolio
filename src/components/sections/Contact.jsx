// src/components/sections/Contact.jsx
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const successRef = useRef(null);

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.focus();
    }
  }, [status]);

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 10)
      return "Message must be at least 10 characters.";
    return null;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setErrorMsg("");

    // honeypot trap
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
      setErrorMsg(
        "Form endpoint not configured. Add VITE_FORMSPREE_ENDPOINT to your .env file."
      );
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
        setErrorMsg(data.error || "Failed to send. Try again later.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 border border-emerald-500/20 dark:border-emerald-500/30 backdrop-blur-sm mb-6">
            <div className="relative">
              <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-4">
            Let's Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 animate-gradient">
              Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project, job opportunity, or just want to say hi? Drop me a message — I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            
            {/* Email Card */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
              <a 
                href="mailto:maseyadaniel@gmail.com"
                className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline break-all"
              >
                maseyadaniel@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Location</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Kigali, Rwanda
                <br />
                <span className="text-teal-600 dark:text-teal-400">Open to Remote</span>
              </p>
            </div>

            {/* Response Time Card */}
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/30">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold mb-2">Quick Response</h3>
              <p className="text-sm text-emerald-50">
                I typically respond within 24 hours during weekdays
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20"></div>
              
              <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {/* Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Daniel Maseya"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="group">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                      </svg>
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full rounded-xl px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
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
                  <div aria-live="polite" className="min-h-[3rem]">
                    {status === "success" && (
                      <div
                        ref={successRef}
                        tabIndex="-1"
                        className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30"
                      >
                        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div>
                          <p className="font-bold text-sm">Message sent successfully!</p>
                          <p className="text-xs text-emerald-50">Thanks for reaching out. I'll get back to you soon.</p>
                        </div>
                      </div>
                    )}

                    {status === "error" && errorMsg && (
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/30 text-red-700 dark:text-red-400">
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <div className="text-sm">
                          <p className="font-semibold mb-1">Oops! Something went wrong</p>
                          <p className="text-xs">{errorMsg}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          Send Message
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
                      className="px-6 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Your privacy is important. Messages are sent securely via Formspree.</span>
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default Contact;