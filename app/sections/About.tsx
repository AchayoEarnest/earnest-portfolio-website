import { PORTFOLIO } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <p className="text-teal-400 font-mono text-sm tracking-widest uppercase mb-2">01. About</p>
          <h2 className="font-display text-4xl font-bold text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text */}
          <div className="space-y-5 reveal">
            <p className="text-slate-300 leading-relaxed text-base">
              I'm a results-driven{" "}
              <span className="text-teal-400 font-medium">Data Analyst & Software Engineer</span>{" "}
              with over 4 years of experience working at the intersection of healthcare and technology.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Based in{" "}
              <span className="text-teal-400">Kenya</span>, I specialize in transforming complex datasets
              into clear, actionable insights using tools like Python, SQL, Power BI, and modern web
              technologies. My background spans both public health data systems and software development.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              I believe data without a story is just noise. My goal is always to bridge the gap between
              raw data and impactful decisions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "📍", text: PORTFOLIO.location },
                { icon: "📧", text: PORTFOLIO.email },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-2 text-slate-400 text-sm glass px-3 py-1.5 rounded-lg">
                  <span>{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {PORTFOLIO.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:border-teal-600/40 transition-colors group"
              >
                <p className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-200 glow-text">
                  {stat.value}
                </p>
                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
