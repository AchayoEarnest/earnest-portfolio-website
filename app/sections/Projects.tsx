import { PORTFOLIO } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-teal-950/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">04. Projects</p>
          <h2 className="font-display text-4xl font-bold text-white">Featured Work</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PORTFOLIO.projects.map((project, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 flex flex-col hover:border-teal-600/40 hover:-translate-y-1 transition-all duration-300 group reveal"
            >
              {/* Color bar */}
              <div
                className="w-10 h-1.5 rounded-full mb-5 group-hover:w-16 transition-all duration-300"
                style={{ background: project.color }}
              />

              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/60 text-slate-400 text-xs font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-400 text-sm hover:text-teal-300 transition-colors group/link"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
                <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href={PORTFOLIO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-teal-400 border border-teal-700/40 hover:border-teal-500 transition-all duration-200"
          >
            View All on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
