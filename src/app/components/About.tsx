import { Code, Server, Database, Users } from "lucide-react";

const highlights = [
  { icon: Code, title: "Frontend Development", desc: "HTML, CSS, JavaScript for interactive interfaces" },
  { icon: Server, title: "Backend Development", desc: "Java, Spring Boot for scalable server-side apps" },
  { icon: Database, title: "Database Integration", desc: "MySQL & MariaDB for data-driven solutions" },
  { icon: Users, title: "Leadership", desc: "Team coordination & event management experience" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">About Me</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-6">Who I Am</h2>
        <p className="text-muted-foreground max-w-2xl mb-14 text-[1rem] leading-relaxed">
          I'm a motivated computing student based in Pokhara, Nepal, currently pursuing my BSc (Hons) in
          Computing. Skilled in building interactive applications, backend systems, and database-integrated
          solutions. Adept at problem-solving, designing efficient code, and applying object-oriented and
          modular programming principles. Passionate about learning new technologies and contributing to
          real-world projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <h.icon size={20} className="text-indigo-500" />
              </div>
              <h3 className="text-foreground text-[0.95rem] mb-1">{h.title}</h3>
              <p className="text-muted-foreground text-[0.8rem] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
