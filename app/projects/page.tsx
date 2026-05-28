import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const projects: {
  title: string;
  description: string;
  tags: string[];
  link: string;
  icon: string;
}[] = [];

export default function Projects() {
  return (
    <main className="flex flex-col items-center px-8 py-20">
      <span className="text-[11px] tracking-[0.18em] text-purple-400 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full mb-4">
        MY WORK
      </span>
      <h1 className="text-4xl font-medium text-white mb-3">Projects</h1>
      <p className="text-sm text-white/35 mb-16">Things I've built with modern tools</p>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 mt-8 text-center">
          <i className="ti ti-tools text-purple-400/40 text-5xl" />
          <p className="text-sm text-white/25 tracking-wide">Projects coming soon</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
          {projects.map((p) => (
            <Card key={p.title} className="bg-white/[0.03] border-purple-500/20 text-white flex flex-col">
              <CardHeader>
                <div className="w-full h-24 bg-purple-500/10 rounded-lg mb-3 flex items-center justify-center">
                  <i className={`ti ${p.icon} text-purple-400 text-3xl`} />
                </div>
                <CardTitle className="text-sm font-medium">{p.title}</CardTitle>
                <CardDescription className="text-white/35 text-xs">{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={p.link} className="text-[11px] text-white/40 hover:text-purple-400 transition-colors tracking-wide">
                  View Project →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
