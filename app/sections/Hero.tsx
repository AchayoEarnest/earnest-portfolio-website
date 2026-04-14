"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO } from "../data/portfolio";

const words = PORTFOLIO.typingWords;

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal-700/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-700/10 blur-3xl" />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2dd4bf 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text */}
        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-teal-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-slow" />
            Available for opportunities
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200 glow-text">
              Earnest
            </span>
          </h1>

          <div className="flex items-center gap-3 h-10">
            <span className="text-slate-400 text-lg">I'm a</span>
            <span className="text-teal-300 font-semibold text-xl font-mono cursor min-w-0">
              {displayed}
            </span>
          </div>

          <p className="text-slate-400 leading-relaxed max-w-lg text-base">
            {PORTFOLIO.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-200 shadow-lg shadow-teal-900/40 hover:shadow-teal-700/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1pqMP4CdC_ClKl9JhIqAXoa090_LDAgZ-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-teal-600/60 text-teal-300 hover:bg-teal-600 hover:text-white font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl glass border-teal-700/50 border text-teal-300 hover:border-teal-500 font-medium transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 pt-2">
            <a
              href={PORTFOLIO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Profile image card */}
        <div
          className="flex justify-center lg:justify-end animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-md opacity-50 animate-pulse-slow" />
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-teal-600/50">
              <Image
                src={PORTFOLIO.avatar}
                alt={PORTFOLIO.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating stat badges */}
            <div className="absolute -bottom-4 -left-6 glass px-4 py-2 rounded-xl shadow-xl">
              <p className="text-teal-400 font-bold text-xl font-mono">4+</p>
              <p className="text-slate-400 text-xs">Years Exp.</p>
            </div>
            <div className="absolute -top-4 -right-6 glass px-4 py-2 rounded-xl shadow-xl">
              <p className="text-teal-400 font-bold text-xl font-mono">20+</p>
              <p className="text-slate-400 text-xs">Projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
