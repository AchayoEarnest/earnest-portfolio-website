import { PORTFOLIO } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">05. Education</p>
          <h2 className="font-display text-4xl font-bold text-white">Qualifications</h2>
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
                    <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{cert.name}</p>
                    <p className="text-teal-400 text-xs mt-0.5">{cert.issuer}</p>
                    <p className="text-slate-500 text-xs mt-0.5 font-mono">{cert.year}</p>
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
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{edu.degree}</p>
                    <p className="text-indigo-400 text-xs mt-0.5">{edu.school}</p>
                    <p className="text-slate-500 text-xs mt-0.5 font-mono">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
