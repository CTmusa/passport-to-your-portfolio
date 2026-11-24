import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import lawmaBillingLogin from "../assets/lawma-billing-login.png.asset.json";
import softsuiteAccountSetup from "../assets/softsuite-account-setup.png.asset.json";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Work — Claudia Musa" },
      {
        name: "description",
        content:
          "Selected product management case studies by Claudia Musa: LAWMA billing, SoftSuite HR, and GBV Tete-a-Tete — product delivery, accessibility, and outcomes.",
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
      "Led product work on the LAWMA billing application; translating user and business needs into requirements and payment flows, supporting ₦500M+ in automated billing revenue across 1,000+ facilities.",
    metrics: ["₦500M+ revenue", "1,000+ facilities", "50+ PSPs"],
    image: lawmaBillingLogin.url,
    imageAlt: "LAWMA billing application sign-in screen.",
    accent: "from-terracotta/80 via-terracotta/40 to-sand",
  },
  {
    to: "/work/softsuite" as const,
    n: "02",
    kicker: "HR Tech · SaaS · 2023–2024",
    title: "SoftSuite HR — NOVO",
    blurb:
      "Contributed to research, prototyping, and functional testing for an all-in-one HR platform. Wrote the admin manual, ran discovery sessions, and helped ship the MVP SoftSUITE NOVO.",
    metrics: ["MVP shipped", "Admin manual"],
    image: softsuiteAccountSetup.url,
    imageAlt: "SoftSUITE NOVO account setup screen.",
    accent: "from-sage/80 via-sage/40 to-sand",
  },
  {
    to: "/work/gbv" as const,
    n: "03",
    kicker: "Social impact · Mobile · Version 2",
    title: "GBV Tete-a-Tete",
    blurb: "Managed the second build of CEWHIN’s GBV-support platform, translating user discovery into accessibility improvements, more reliable chat, and coordinated delivery for Android and iOS.",
    metrics: ["Android & iOS", "Screen-reader support", "Chat improvements"],
    image: null,
    imageAlt: "",
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
            Real products. Real users. Meaningful outcomes.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Each case study walks through the problem, the role I played, the process, and the outcomes.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10 md:pb-32">
        <div className="space-y-8 md:space-y-12">
          {cases.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.08}>
              <Link
                to={c.to}
                aria-label={`Read ${c.title} case study`}
                className="group block overflow-hidden rounded-3xl border border-border/60 bg-background transition-all hover:border-foreground/40 hover:shadow-[0_20px_60px_-30px_rgba(42,35,32,0.35)]"
              >
                <div className="grid md:grid-cols-[1.1fr_1.4fr]">
                  <div
                    className={`relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br p-8 md:aspect-auto md:p-10 ${c.accent}`}
                  >
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={c.imageAlt}
                        className="absolute inset-0 size-full bg-secondary object-contain"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                        <p aria-hidden="true" className="relative font-display text-[6rem] leading-none text-background/80 md:text-[9rem]">
                          {c.n}
                        </p>
                      </>
                    )}
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
            {""}
          </p>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 hover:text-accent hover:no-underline"
          >
            {""}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
