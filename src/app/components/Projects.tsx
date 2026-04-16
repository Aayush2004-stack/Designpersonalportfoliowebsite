import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Quiz Game",
    subtitle: "Spring Boot Web Application",
    desc: "A web-based quiz platform using the Spring Boot framework. Users participate in quizzes served dynamically via HTTP endpoints, with questions fetched from a connected MySQL database. Demonstrates backend development, Spring MVC structure, dependency injection, and service-layer separation.",
    tech: ["Java", "Spring Boot", "MariaDB", "REST API"],
    github: "https://github.com/Aayush2004-stack",
  },
  {
    title: "Gym Management",
    subtitle: "Java Desktop Application",
    desc: "A GUI-based application to manage gym memberships efficiently, handling both Regular and Premium members through an intuitive interface. Implements OOP principles such as inheritance and encapsulation for a modular and maintainable design.",
    tech: ["Java", "Swing", "OOP", "ArrayList"],
    github: "https://github.com/Aayush2004-stack",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Projects</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-12">Work Showcase</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="h-40 bg-gradient-to-br from-indigo-500/80 to-purple-600/80 flex items-end p-6">
                <div>
                  <p className="text-white/70 text-[0.75rem] mb-1">{p.subtitle}</p>
                  <h3 className="text-white text-[1.25rem]">{p.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground text-[0.85rem] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-[0.7rem]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[0.8rem] text-indigo-500 hover:underline"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
