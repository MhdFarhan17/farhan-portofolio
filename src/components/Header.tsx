import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { nav, profile } from "../data/content";
import { useScrollProgress } from "../hooks/useScrollProgress";
import ThemeToggle from "./ThemeToggle";

const SUMMIT_M = 3676; // scroll progress is shown as altitude, 0 to the summit

export default function Header() {
  const [open, setOpen] = useState(false);
  const { progress } = useScrollProgress();
  const altitude = Math.round(progress * SUMMIT_M);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/#top" className="group flex items-center gap-2.5 font-display text-lg font-semibold">
          <img src="/favicon.svg" alt="" width={28} height={28} className="transition-transform duration-300 group-hover:-rotate-6" />
          <span>
            {profile.name.split(" ")[1]}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.id}
              to={`/#${n.id}`}
              className="relative text-sm text-muted transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="text-xs tabular-nums text-muted" title="Scroll progress, shown as altitude" aria-hidden="true">
            {altitude.toLocaleString("id-ID")} mdpl
          </span>
          <ThemeToggle />
          <button
            className="icon-btn md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page flex flex-col border-t border-line py-2 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link
              key={n.id}
              to={`/#${n.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-base transition-colors hover:bg-accent/10 hover:text-accent"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="h-0.5 bg-accent" style={{ width: `${progress * 100}%` }} />
    </header>
  );
}
