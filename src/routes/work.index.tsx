import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Claudia Musa" },
      {
        name: "description",
        content:
          "Selected product management case studies by Claudia Musa: LAWMA's billing platform and SoftSuite HR — outcomes, process, and measurable results.",
      },
      { property: "og:title", content: "Work — Claudia Musa" },
      {
        property: "og:description",
        content: "Case studies in SaaS product management from Lagos.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const cases = [
  {
    to: "/work/lawma" as const,
    n: "01",
    kicker: "GovTech · Billing SaaS · 2024",
    title: "LAWMA Billing & Enumeration",
    blurb:
      "Owned the billing platform end-to-end for Lagos State Waste Management Authority — from stakeholder discovery through pilot launch, unlocking ₦20M+ in the first three months and enumerating 300+ facilities.",
    metrics: ["₦20M+ revenue", "300+ facilities", "50% cost cut"],
    accent: "from-terracotta/80 via-terracotta/40 to-sand",
  },
  {
    to: "/work/softsuite" as const,
    n: "02",
    kicker: "HR Tech · SaaS · 2023–2024",
    title: "SoftSuite HR — NOVO",
    blurb:
      "Contributed to research, prototyping, and functional testing for an all-in-one HR platform. Wrote the admin manual, ran discovery sessions, and helped ship SoftSUITE NOVO with 20% fewer bugs at launch.",
    metrics: ["20% fewer bugs", "MVP shipped", "Admin manual"],
    accent: "from-sage/80 via-sage/40 to-sand",
  },
] as const;

function Work() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
        <Reveal>
          <p className="kicker">Selected case studies</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            Two products. Real users. Numbers we can point at.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Each case study walks through the problem, the role I played, the process, and the
            outcomes. I've written them for hiring managers who want the short version and the
            long one.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="space-y-8 md:space-y-12">
          {cases.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.08}>
              <Link
                to={c.to}
                className="group block overflow-hidden rounded-3xl border border-border/60 bg-background transition-all hover:border-foreground/40 hover:shadow-[0_20px_60px_-30px_rgba(42,35,32,0.35)]"
              >
                <div className="grid md:grid-cols-[1.1fr_1.4fr]">
                  <div
                    className={`relative flex aspect-[4/3] items-end bg-gradient-to-br p-8 md:aspect-auto md:p-10 ${c.accent}`}
                  >
                    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                    <p className="relative font-display text-[6rem] leading-none text-background/80 md:text-[9rem]">
                      {c.n}
                    </p>
                  </div>
                  <div className="p-8 md:p-12">
                    <p className="kicker">{c.kicker}</p>
                    <h2 className="mt-4 font-display text-3xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-4xl">
                      {c.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {c.blurb}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.metrics.map((m) => (
                        <span
                          key={m}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-1 text-sm text-accent">
                      Read case study
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-border/60 pt-10 md:flex-row md:items-end">
          <p className="max-w-md text-sm text-muted-foreground">
            More case studies in progress. In the meantime, my résumé has the full timeline and the
            projects I can't publish yet.
          </p>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 hover:text-accent hover:no-underline"
          >
            View résumé →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
