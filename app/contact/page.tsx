import { Button } from "@/components/ui/button";

export default function Contact() {
  const links = [
   { icon: "ti-brand-github", text: "github.com/Muawiyah67", href: "https://github.com/Muawiyah67" },
    ];

  return (
    <main className="flex flex-col items-center px-8 py-20">
      <span className="text-[11px] tracking-[0.18em] text-purple-400 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full mb-4">
        GET IN TOUCH
      </span>
      <h1 className="text-4xl font-medium text-white mb-3">Contact</h1>
      <p className="text-sm text-white/35 mb-16">Let&apos;s build something together</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-4xl">
        <div className="flex flex-col gap-5">
          <p className="text-sm text-white/35 leading-relaxed">
            I&apos;m open to freelance work and full-time opportunities. Feel free to reach out.
          </p>
          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <a key={item.text} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <i className={`ti ${item.icon} text-purple-400 text-lg`} />
                <span className="text-sm text-white/50 group-hover:text-purple-400 transition-colors">
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>
        <form action="mailto:abdullahmuawiya32@gmail.com" method="POST" encType="text/plain" className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="bg-white/[0.04] border border-purple-500/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/60"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="bg-white/[0.04] border border-purple-500/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/60"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your message"
            className="bg-white/[0.04] border border-purple-500/25 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/60 resize-none"
          />
          <Button type="submit" variant="outline" className="self-start rounded-full border-purple-500/50 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 tracking-wider px-8">
            Send Message →
          </Button>
        </form>
      </div>
    </main>
  );
}