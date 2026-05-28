import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 h-[72px] border-b border-purple-500/20 bg-transparent">
      <span className="text-sm font-medium tracking-[0.12em] text-white">
        MY PORTFOLIO
      </span>
      <ul className="flex gap-9 list-none">
        {["HOME", "PROJECTS", "CONTACT"].map((item) => (
          <li key={item}>
            <Link
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="text-xs tracking-[0.1em] text-white/50 hover:text-purple-400 transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
