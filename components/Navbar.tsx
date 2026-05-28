"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-12 border-b border-purple-500/20 bg-transparent">
      <div className="flex items-center justify-between h-[72px]">
        <span className="text-sm font-medium tracking-[0.12em] text-white">
          MY PORTFOLIO
        </span>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-9 list-none">
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

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-5 h-px bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col pb-4 gap-4 list-none">
          {["HOME", "PROJECTS", "CONTACT"].map((item) => (
            <li key={item}>
              <Link
                href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="text-xs tracking-[0.1em] text-white/50 hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}