import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-[0.75rem]">
          &copy; 2026 Aayush Bastola. All rights reserved.
        </p>
        <div className="flex gap-3">
          <a href="https://github.com/Aayush2004-stack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href="mailto:aayushbastola772@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
