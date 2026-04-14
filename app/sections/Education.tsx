import { PORTFOLIO } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">
            05. Education
          </p>
          <h2 className="font-display text-4xl font-bold text-white">
            Qualifications
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div className="reveal">
            <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">🏅</span> Certifications
            </h3>
            <div className="space-y-4">
              {PORTFOLIO.certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 flex items-start gap-4 hover:border-teal-600/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-900/60 border border-teal-700/40 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {cert.name}
                    </p>
                    <p className="text-teal-400 text-xs mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5 font-mono">
                      {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="reveal">
            <h3 className="text-white font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Education
            </h3>
            <div className="space-y-4">
              {PORTFOLIO.education.map((edu, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-5 flex items-start gap-4 hover:border-teal-600/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-900/40 border border-indigo-700/30 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-7-3.5l7 3.5 7-3.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {edu.degree}
                    </p>
                    <p className="text-indigo-400 text-xs mt-0.5">
                      {edu.school}
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5 font-mono">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CV Download CTA */}
        <div className="mt-14 reveal">
          <div className="glass rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-teal-800/30 hover:border-teal-600/40 transition-colors">
            <div>
              <h3 className="text-white font-semibold text-lg">
                Want the full picture?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Download my CV for a complete overview of my experience, skills,
                and achievements.
              </p>
            </div>
            <a
              href={`https://drive.google.com/file/d/1pqMP4CdC_ClKl9JhIqAXoa090_LDAgZ-/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-medium transition-all duration-200 shadow-lg shadow-teal-900/40 hover:shadow-teal-700/30 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <svg
                className="w-5 h-5"
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
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
