import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Contact — Claudia Musa" },
      {
        name: "description",
        content:
          "Get in touch with Claudia Musa — Product Manager based in Lagos, open to Product Manager roles and collaborations.",
      },
      { property: "og:title", content: "Contact — Claudia Musa" },
      {
        property: "og:description",
        content: "Say hello — open to Product Manager roles and collaborations.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const links = [
  { icon: Mail, label: "Email", value: "claudia.t.musa@gmail.com", href: "mailto:claudia.t.musa@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/claudia-musa", href: "https://www.linkedin.com/in/claudia-musa" },
  { icon: Phone, label: "Phone", value: "+234 816 857 4768", href: "tel:+2348168574768" },
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
];

function Contact() {
  return (
    <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-16 pb-24 md:grid-cols-[1.2fr_1fr] md:gap-24 md:px-10 md:pt-24 md:pb-32">
      <Reveal>
        <p className="kicker">Contact</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
          Let's build something worth measuring.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          I'm open to Product Manager roles — full-time, contract, or advisory. I reply to
          every message that isn't a cold sales pitch. If you have a product that needs sharper
          focus, tell me about it.
        </p>

        <a
          href="mailto:claudia.t.musa@gmail.com?subject=Let%27s%20work%20together"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-base text-background transition-colors hover:bg-accent"
        >
          <Mail className="size-5" />
          Send me an email
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Typical response time: within two business days.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="md:pt-12">
        <ul className="divide-y divide-border/60 border-y border-border/60">
          {links.map((l) => {
            const Icon = l.icon;
            const inner = (
              <div className="flex items-center gap-5 py-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="kicker">{l.label}</p>
                  <p className="mt-1 break-words text-foreground">{l.value}</p>
                </div>
                {l.href && (
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </div>
            );
            return (
              <li key={l.label}>
                {l.href ? (
                  <a
                    href={l.href}
                    aria-label={`${l.label}: ${l.value}${l.href.startsWith("http") ? " (opens in a new tab)" : ""}`}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group block hover:text-accent"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
