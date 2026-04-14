"use client";
import { useState } from "react";
import { PORTFOLIO } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Using mailto: as a simple no-backend contact method.
    // Replace this block with your preferred API call (e.g., Resend, EmailJS, Formspree).
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${PORTFOLIO.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: PORTFOLIO.email,
      href: `mailto:${PORTFOLIO.email}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: PORTFOLIO.phone.join(" / "),
      href: `tel:${PORTFOLIO.phone[0]}`,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: PORTFOLIO.location,
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-teal-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">06. Contact</p>
          <h2 className="font-display text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="space-y-6 reveal">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-teal-600/40 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-900/50 border border-teal-700/40 flex items-center justify-center text-teal-400 shrink-0 group-hover:bg-teal-800/50 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                  <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-4 pt-2">
              <a
                href={PORTFOLIO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-3 text-slate-300 hover:text-teal-400 hover:border-teal-600/40 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={PORTFOLIO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 glass rounded-xl py-3 text-slate-300 hover:text-teal-400 hover:border-teal-600/40 transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl p-7 reveal">
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 ml-1">Name *</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-teal-950/50 border border-teal-900/60 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-teal-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs mb-1.5 ml-1">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-teal-950/50 border border-teal-900/60 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-teal-600 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1.5 ml-1">Subject</label>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-teal-950/50 border border-teal-900/60 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-teal-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1.5 ml-1">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity…"
                  className="w-full bg-teal-950/50 border border-teal-900/60 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder-slate-600 focus:outline-none focus:border-teal-600 transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-teal-900/40 hover:shadow-teal-700/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Opening mail client…
                  </>
                ) : status === "sent" ? (
                  "✓ Message ready — check your mail client"
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
