import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Résumé" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          to="/"
          className="font-display text-xl tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          Claudia<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:claudia.t.musa@gmail.com"
            className="inline-flex items-center rounded-full border border-foreground/80 px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Hire me
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-base text-muted-foreground hover:bg-muted data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:claudia.t.musa@gmail.com"
              className="mt-2 rounded-full border border-foreground/80 px-4 py-2 text-center text-sm text-foreground"
            >
              Hire me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
