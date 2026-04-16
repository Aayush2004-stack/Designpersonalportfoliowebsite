import { FileDown, Eye } from "lucide-react";

export function Resume() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Resume</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-4">Get My CV</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-[0.9rem]">
          Download or view my full curriculum vitae for a complete overview of my skills, projects, and experience.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="/src/imports/AayushBastolaCv.pdf"
            download="Aayush_Bastola_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full text-[0.875rem] hover:bg-indigo-600 transition-colors"
          >
            <FileDown size={16} /> Download CV
          </a>
          <a
            href="/src/imports/AayushBastolaCv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-[0.875rem] hover:bg-accent transition-colors"
          >
            <Eye size={16} /> View CV
          </a>
        </div>
      </div>
    </section>
  );
}
