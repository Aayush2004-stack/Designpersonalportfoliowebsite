import { useState } from "react";
import { Mail, Phone, MapPin, Github, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-indigo-500 text-[0.75rem] tracking-widest uppercase mb-2">Contact</p>
        <h2 className="text-foreground text-[2rem] tracking-tight mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "aayushbastola772@gmail.com", href: "mailto:aayushbastola772@gmail.com" },
                { icon: Phone, label: "+977 9748769705", href: "tel:+9779748769705" },
                { icon: MapPin, label: "Pokhara-27, Nepal", href: "#" },
                { icon: Github, label: "github.com/Aayush2004-stack", href: "https://github.com/Aayush2004-stack" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-[0.85rem]"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-indigo-500" />
                  </div>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-[0.85rem] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-[0.85rem] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-[0.85rem] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-full text-[0.875rem] hover:bg-indigo-600 transition-colors"
            >
              <Send size={16} /> {sent ? "Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
