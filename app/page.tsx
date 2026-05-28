import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-72px)] text-center px-8">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-700/15 blur-3xl pointer-events-none" />
      <span className="text-[11px] tracking-[0.18em] text-purple-400 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full mb-6">
        AVAILABLE FOR WORK
      </span>
      <h1 className="text-6xl font-medium leading-tight text-white mb-5">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
         Mu'āwiyah
        </span>
      </h1>
      <p className="text-[15px] text-white/40 max-w-sm leading-relaxed mb-10">
        I build clean, fast web apps with modern tools and great attention to detail.
      </p>
      <Link href="/projects">
        <Button variant="outline" className="rounded-full border-purple-500/50 bg-transparent text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 tracking-wider px-8">
          See My Work →
        </Button>
      </Link>
    </main>
  );
}
