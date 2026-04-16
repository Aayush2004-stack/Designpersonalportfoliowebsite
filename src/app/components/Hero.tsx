import profileImg from "../../imports/background.jpg";
import { ArrowDown, Github, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo with overlay */}
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt=""
          className="w-full h-full object-cover object-top scale-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-transparent to-purple-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Profile circle */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl">
          <img
            src={profileImg}
            alt="Aayush Bastola"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <p className="text-indigo-300 tracking-widest uppercase text-[0.75rem] mb-3">
          Computing Student &amp; Developer
        </p>
        <h1 className="text-white text-[2.5rem] sm:text-[3.5rem] tracking-tight mb-4">
          Aayush Bastola
        </h1>
        <p className="text-white/70 max-w-xl mx-auto mb-10 text-[1rem] leading-relaxed">
          Motivated computing student with hands-on experience in Java, Python, and web
          development. Passionate about building interactive applications and contributing
          to real-world projects.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full text-[0.875rem] hover:bg-white/90 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 text-white rounded-full text-[0.875rem] hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/Aayush2004-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/20 text-white/70 rounded-full hover:bg-white/10 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:aayushbastola772@gmail.com"
            className="p-3 border border-white/20 text-white/70 rounded-full hover:bg-white/10 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex animate-bounce text-white/50 hover:text-white/80 transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}