const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL / MariaDB", level: 70 },
      { name: "Git & GitHub", level: 75 },
    ],
  },
];

const tags = ["Java", "Python", "HTML", "CSS", "JavaScript", "MySQL", "Spring Boot", "Git", "GitHub", "Swing", "REST APIs", "OOP"];

const certificates = [
  "CS50's Understanding Technology — Harvard University",
  "Java Object-Oriented Programming — LinkedIn Learning",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Skills & Expertise</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-12">What I Work With</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="text-foreground text-[0.95rem] mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-[0.8rem] mb-1">
                      <span className="text-foreground">{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[0.75rem]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-foreground text-[0.95rem] mb-3">Certificates</h3>
          <ul className="space-y-2">
            {certificates.map((c) => (
              <li key={c} className="text-muted-foreground text-[0.85rem] flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
