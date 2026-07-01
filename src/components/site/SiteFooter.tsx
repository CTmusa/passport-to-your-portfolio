import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <p className="kicker">Let's work together</p>
          <p className="mt-4 max-w-md font-display text-3xl leading-tight text-foreground md:text-4xl">
            Building products that turn user pain into measurable impact.
          </p>
          <a
            href="mailto:claudia.t.musa@gmail.com"
            className="mt-6 inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4 hover:no-underline"
          >
            <Mail className="size-4" /> claudia.t.musa@gmail.com
          </a>
        </div>

        <div>
          <p className="kicker">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/work" className="hover:text-foreground">Work</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/resume" className="hover:text-foreground">Résumé</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="kicker">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Linkedin className="size-3.5" />
              <a
                href="https://www.linkedin.com/in/claudia-musa"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-3.5" /> +234 816 857 4768
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5" /> Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Claudia Musa. Made with care in Lagos.</span>
          <span>Product Manager · SaaS · Impact-driven</span>
        </div>
      </div>
    </footer>
  );
}
