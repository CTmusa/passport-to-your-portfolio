import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink, ClipboardList, Wrench, FileWarning, Users } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import lawmaBillingLogin from "../assets/lawma-billing-login.png.asset.json";

export const Route = createFileRoute("/work/lawma")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { title: "LAWMA Billing & Enumeration — Case Study by Claudia Musa" },
      {
        name: "description",
        content:
          "How Claudia's product work supported over ₦500M in automated billing revenue across 1,000+ facilities on the LAWMA billing application.",
      },
      { property: "og:title", content: "LAWMA Billing & Enumeration — Case Study" },
      {
        property: "og:description",
        content:
          "Case study: turning manual PSP billing into automated revenue for a state waste authority.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/lawma" },
    ],
    links: [{ rel: "canonical", href: "/work/lawma" }],
  }),
  component: LawmaCase,
});

const problems = [
  { icon: Users, title: "No comprehensive enumeration data", body: "Facility records were fragmented across PSPs and unstructured spreadsheets." },
  { icon: Wrench, title: "Manual billing per facility", body: "Every invoice was calculated by hand — slow, error-prone, and impossible to audit." },
  { icon: FileWarning, title: "Data loss", body: "Records lived in emails, WhatsApp threads, and paper. Institutional memory was leaking." },
  { icon: ClipboardList, title: "No customer or reporting access", body: "Finance leads couldn't see billing trends. Customers couldn't see what they owed." },
];

const outcomes = [
  { k: "₦500M+", v: "Automated billing revenue supported on the platform." },
  { k: "1,000+", v: "Facilities supported by the billing application." },
  { k: "50+", v: "Private Sector Partners managed on the platform." },
  { k: "20%", v: "Improvement in system stability through product delivery." },
];

function LawmaCase() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> All case studies
          </Link>
          <p className="kicker mt-8">Case study 01 · GovTech · SaaS</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            LAWMA Billing & Enumeration Platform
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The Lagos State Waste Management Authority (LAWMA) collects waste for millions of
            Lagosians through Private Sector Partners (PSPs). I worked on the billing application,
            helping manage product requirements, payment flows, and delivery across more than 50
            PSPs and 1,000+ facilities.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-2 gap-6 border-y border-border/60 py-8 text-sm md:grid-cols-4">
          {[
            ["Role", "Product Manager"],
            ["Timeline", "Oct 2023 – Present"],
            ["Team", "Consultants, Design, Eng, Ops"],
            ["Launched", "April 2024"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="kicker">{k}</p>
              <p className="mt-2 text-foreground">{v}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <a
            href="https://ebilling.lawma.gov.ng/login"
            aria-label="Visit the live LAWMA billing product (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4 hover:no-underline"
          >
            Visit the live product <ExternalLink className="size-3.5" />
          </a>
        </Reveal>
      </section>

      <section
        aria-label="LAWMA billing application image"
        className="mx-auto max-w-5xl px-6 pt-12 md:px-10"
      >
        <Reveal>
          <figure>
            <img
              src={lawmaBillingLogin.url}
              alt="LAWMA billing application login page with email and password fields and an orange login button."
              className="h-auto w-full rounded-lg border border-border/60"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              LAWMA billing application — sign-in screen
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">Context</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Waste collection for a city of 20+ million people.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              LAWMA works with PSPs and local communities to keep Lagos clean. That partnership
              runs on invoices — thousands of them, every month, for facilities the authority
              didn't have a single source of truth for.
            </p>
            <p>
              The billing platform was built to give LAWMA and its PSPs a shared system: accurate
              enumeration data, automated invoicing, and a customer portal so residents could pay
              without friction.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">The problem</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Four bottlenecks were costing the authority revenue and trust.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.title}
                delay={i * 0.06}
                className="rounded-2xl border border-border/70 bg-background p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-secondary text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* MY ROLE */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">My role & process</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Product discovery, requirements, and delivery across the billing experience.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {[
            {
              h: "Discovery with the people who actually work the system.",
              b: "Ran requirement-gathering sessions with LAWMA leadership, finance teams, and PSP operators. Turned the raw insights into PRDs and user stories the design and engineering teams could build against.",
            },
            {
              h: "Sprint facilitation that stayed predictable.",
              b: "Owned planning, standups, review, and retro. Groomed the backlog so every sprint had a clear goal, and unblocked engineers before blockers turned into misses.",
            },
            {
              h: "Prototype-to-launch on the Customer Portal.",
              b: "Wrote acceptance criteria for the design team, drove the MVP feature ('Pay Without Sign-In'), and coordinated additional stakeholder requests without derailing the roadmap.",
            },
            {
              h: "Redevelopment of the Enumeration Portal.",
              b: "Defined and refined product requirements for facility records, payments, and reporting across more than 1,000 facilities.",
            },
            {
              h: "QA, training, and adoption after launch.",
              b: "Worked with engineering, design, and stakeholders to clarify requirements, prioritize features, test functionality, and document errors — contributing to a 20% improvement in system stability.",
            },
          ].map((step, i) => (
            <Reveal
              key={step.h}
              delay={i * 0.05}
              className="grid gap-4 border-t border-border/60 pt-6 md:grid-cols-[80px_1fr]"
            >
              <p className="font-display text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-xl text-foreground">{step.h}</h3>
                <p className="mt-2 text-muted-foreground">{step.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mt-24 border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <p className="kicker">Outcomes</p>
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              What changed after launch.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <Reveal
                key={o.k}
                delay={i * 0.05}
                className="border-t border-foreground/20 pt-6"
              >
                <p className="font-display text-5xl text-foreground md:text-6xl">{o.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="kicker">Reflection</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-foreground md:text-4xl">
            Better payment flows start with understanding the people behind them.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This work reinforced the value of listening closely to users and stakeholders, then translating what I learned into clear requirements. Small details; like how a payment is identified and settled can make the difference between a system that works in theory and one people can rely on every day.
          </p>
        </Reveal>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-10">
          <Link
            to="/work/softsuite"
            className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            Next case study — SoftSuite HR
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent"
          >
            Work with me
          </Link>
        </Reveal>
      </section>
    </>
  );
}
