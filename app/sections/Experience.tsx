import { PORTFOLIO } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">03. Experience</p>
          <h2 className="font-display text-4xl font-bold text-white">Professional Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-teal-600 via-teal-700 to-transparent hidden md:block" />

          <div className="space-y-10">
            {PORTFOLIO.experience.map((job, i) => (
              <div key={i} className="relative md:pl-16 reveal">
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full glass border border-teal-600/50 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-teal-500" />
                </div>

                <div className="glass rounded-2xl p-6 hover:border-teal-600/40 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{job.position}</h3>
                      <p className="text-teal-400 font-medium">{job.company}</p>
                      <p className="text-slate-500 text-sm flex items-center gap-1 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full glass text-teal-300 text-xs font-mono whitespace-nowrap shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
