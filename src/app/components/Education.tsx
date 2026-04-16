import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BSc (Hons) Computing — Year 2",
    institution: "Informatics College Pokhara",
    period: "2024 — Present",
    note: "Expected Graduation: 2027",
  },
  {
    degree: "+2 in Science",
    institution: "SOS Hermann Gmeiner Gandaki",
    period: "2021 — 2023",
    note: "",
  },
];

const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Proficiency" },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Education</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-12">Academic Background</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((e) => (
            <div
              key={e.degree}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-indigo-500" />
                </div>
                <div>
                  <h3 className="text-foreground text-[0.95rem]">{e.degree}</h3>
                  <p className="text-muted-foreground text-[0.85rem]">{e.institution}</p>
                  <p className="text-indigo-500 text-[0.75rem] mt-1">{e.period}</p>
                  {e.note && <p className="text-muted-foreground text-[0.75rem] mt-1">{e.note}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <h3 className="text-foreground text-[0.95rem] mb-4">Languages</h3>
        <div className="flex gap-4">
          {languages.map((l) => (
            <div key={l.name} className="px-4 py-2 rounded-xl border border-border bg-card">
              <span className="text-foreground text-[0.85rem]">{l.name}</span>
              <span className="text-muted-foreground text-[0.75rem] ml-2">({l.level})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
