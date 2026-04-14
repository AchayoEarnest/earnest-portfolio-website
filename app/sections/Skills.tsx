"use client";
import { useEffect, useRef } from "react";
import { PORTFOLIO } from "../data/portfolio";

const skillCategories = [
  { label: "Programming", key: "programming", icon: "💻" },
  { label: "Data Tools", key: "dataTools", icon: "📊" },
  { label: "Visualization", key: "visualization", icon: "📈" },
  { label: "Databases", key: "databases", icon: "🗄️" },
  { label: "Health Systems", key: "systems", icon: "🏥" },
  { label: "Dev Tools", key: "tools", icon: "🛠️" },
] as const;

export default function Skills() {
  const barsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll<HTMLElement>(".skill-bar-fill");
            bars.forEach((bar) => {
              bar.style.width = bar.dataset.width || "0%";
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (barsRef.current) observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 bg-teal-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">02. Skills</p>
          <h2 className="font-display text-4xl font-bold text-white">Technical Expertise</h2>
        </div>

        {/* Hard skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="glass rounded-2xl p-5 hover:border-teal-600/40 transition-colors reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-teal-900/40 text-teal-300 text-xs font-mono border border-teal-800/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <div ref={barsRef} className="glass rounded-2xl p-8 reveal">
          <h3 className="text-white font-semibold text-lg mb-6">Soft Skills</h3>
          <div className="space-y-5">
            {PORTFOLIO.softSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-slate-300 text-sm">{skill.name}</span>
                  <span className="text-teal-400 text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-teal-950 rounded-full overflow-hidden">
                  <div
                    className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-1000"
                    style={{ width: "0%" }}
                    data-width={`${skill.level}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
