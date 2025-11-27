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

  // For accessibility: focus the success message
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
    <section id="contact" className="py-16 border-t border-slate-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Contact
          </h2>
          <p className="text-slate-300">
            Have a project, job opportunity, or idea? Send me a message — I’ll
            get back to you soon.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs text-slate-300 mb-1">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="e.g. Daniel Maseya"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs text-slate-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2 bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="you@domain.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs text-slate-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="w-full rounded-lg px-3 py-2 bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Tell me about your project, timeline, and budget (optional)."
                required
              />
            </div>

            {/* Honeypot (hidden to humans) */}
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

            {/* Status messages */}
            <div aria-live="polite" className="min-h-[2rem]">
              {status === "success" && (
                <div
                  ref={successRef}
                  tabIndex="-1"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500 text-slate-900 text-sm font-medium"
                >
                  ✅ Message sent — thanks! I’ll reply soon.
                </div>
              )}

              {status === "error" && errorMsg && (
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-orange-500/20 border border-orange-500 text-orange-300 text-sm">
                  ⚠ {errorMsg}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-slate-950 font-medium transition disabled:opacity-60"
                >
                  {loading ? (
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden
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
                  ) : null}
                  Send message
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", message: "", website: "" });
                    setStatus(null);
                    setErrorMsg("");
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
                >
                  Reset
                </button>
              </div>

              {/* Mail fallback */}
              <div className="text-sm text-slate-300">
                Prefer email?{" "}
                <a
                  href="mailto:your-real-email@domain.com"
                  className="text-emerald-300 hover:underline"
                >
                  your-real-email@domain.com
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className="text-xs text-slate-400">
          I respect your privacy — messages go directly to my email via
          Formspree.
        </div>
      </div>
    </section>
  );
};

export default Contact;
