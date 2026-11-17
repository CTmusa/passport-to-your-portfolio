import { Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "../ui/sheet";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const navigating = useRef(false);

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

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open navigation menu" className="min-h-11 min-w-11 md:hidden">
              <Menu aria-hidden="true" className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" aria-describedby={undefined} className="overflow-y-auto" onCloseAutoFocus={(event) => {
            if (!navigating.current) return;
            event.preventDefault();
            navigating.current = false;
            document.getElementById("main-content")?.focus({ preventScroll: true });
          }}>
            <SheetTitle className="font-display text-2xl">Navigation</SheetTitle>
          <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-2">
            {links.map((l) => (
              <SheetClose asChild key={l.to}><Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => {
                  navigating.current = true;
                  setOpen(false);
                }}
                className="flex min-h-11 items-center rounded px-2 py-2 text-base text-muted-foreground hover:bg-muted data-[status=active]:text-foreground"
              >
                {l.label}
              </Link></SheetClose>
            ))}
            <a
              href="mailto:claudia.t.musa@gmail.com"
              className="mt-2 rounded-full border border-foreground/80 px-4 py-2 text-center text-sm text-foreground"
            >
              Hire me
            </a>
          </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
