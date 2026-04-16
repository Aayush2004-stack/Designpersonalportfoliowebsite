const experiences = [
  {
    period: "2020 — 2022",
    title: "Vice-President",
    org: "Child Club Pokhara Ward-27",
    points: [
      "Led and organized various programs for children, including inter-school quizzes and educational activities.",
      "Coordinated events, managed teams, and promoted active participation to enhance learning and engagement among students.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Experience & Activities</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-12">My Journey</h2>

        <div className="relative border-l-2 border-indigo-500/30 ml-4">
          {experiences.map((e, i) => (
            <div key={i} className="mb-10 ml-8 relative">
              <div className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-background" />
              <span className="text-[0.75rem] text-indigo-500">{e.period}</span>
              <h3 className="text-foreground text-[1.1rem] mt-1">{e.title}</h3>
              <p className="text-muted-foreground text-[0.85rem] mb-3">{e.org}</p>
              <ul className="space-y-1.5">
                {e.points.map((p, j) => (
                  <li key={j} className="text-muted-foreground text-[0.82rem] flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
