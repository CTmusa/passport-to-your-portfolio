import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/work/softsuite")({
  head: () => ({
    meta: [
      { title: "SoftSuite HR — Case Study by Claudia Musa" },
      {
        name: "description",
        content:
          "Contributing to research, prototyping, and functional QA for SoftSuite's all-in-one HR platform — including the launch of SoftSUITE NOVO with 20% fewer bugs.",
      },
      { property: "og:title", content: "SoftSuite HR — Case Study" },
      {
        property: "og:description",
        content:
          "Case study: research, prototyping, and QA on an all-in-one HR SaaS.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/softsuite" },
    ],
    links: [{ rel: "canonical", href: "/work/softsuite" }],
  }),
  component: SoftSuiteCase,
});

const outcomes = [
  { k: "20%", v: "Reduction in product bugs through structured functional testing." },
  { k: "MVP", v: "SoftSUITE NOVO shipped to go-live after research & prototyping." },
  { k: "Docs", v: "Admin manual written to make onboarding self-serve for HR leads." },
  { k: "Daily", v: "Standups I facilitated to keep blockers moving." },
];

function SoftSuiteCase() {
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
          <p className="kicker mt-8">Case study 02 · HR Tech · SaaS</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            SoftSuite HR — building an all-in-one HR platform.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            SoftSUITE is a human capital management platform for organizations of every size — from
            people management to recruitment to employee self-service. I joined the product team
            during the build-out of SoftSUITE NOVO.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-2 gap-6 border-y border-border/60 py-8 text-sm md:grid-cols-4">
          {[
            ["Role", "Associate Product Manager"],
            ["Product", "SoftSUITE NOVO"],
            ["Focus", "Research · Prototyping · QA"],
            ["Sector", "HR Tech · B2B SaaS"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="kicker">{k}</p>
              <p className="mt-2 text-foreground">{v}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <a
            href="https://hcm.softsuite.com/sign-up"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4 hover:no-underline"
          >
            Visit the live product <ExternalLink className="size-3.5" />
          </a>
        </Reveal>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">Context</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            HR software for teams that don't have an HR department yet.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              SoftSUITE streamlines the entire employee lifecycle — hiring, onboarding, people
              management, self-service — so growing companies can automate the work HR teams used
              to do in spreadsheets. NOVO was the next-generation build we were shipping.
            </p>
          </div>
        </Reveal>
      </section>

      {/* MY ROLE */}
      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">My role & process</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
            Research, prototype, test, document — repeat.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6">
          {[
            {
              h: "User and market research that fed the roadmap.",
              b: "Collaborated with the product team on user interviews and competitive research. Translated insights into requirement documents that anchored prototype work and unblocked engineering.",
            },
            {
              h: "Prototyping toward MVP.",
              b: "Contributed to brainstorming and refining the key features that made it into NOVO's launch scope, then helped shape the prototypes design used for stakeholder alignment.",
            },
            {
              h: "Sprint facilitation and backlog hygiene.",
              b: "Ran daily standups, managed the backlog, and kept ceremony overhead low so the team could ship. Small, boring rituals — but they're what made the MVP land on time.",
            },
            {
              h: "Functional testing that cut bugs by 20%.",
              b: "Owned functional test cycles across the platform, identifying bugs and writing them up clearly enough for engineering to fix without a Zoom call.",
            },
            {
              h: "Admin-facing documentation.",
              b: "Drafted the sections of the user manual HR admins actually read — the setup, the permissions, the escalation paths — so the product could adopt itself.",
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
              What the team shipped, with numbers.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
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
            Craft compounds — especially the boring parts.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The 20% bug reduction didn't come from one heroic test cycle. It came from writing
            clearer requirements, running the same standup the same way every day, and treating
            documentation as part of the product. That's the version of PM I want to keep being.
          </p>
        </Reveal>

        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-10">
          <Link
            to="/work/lawma"
            className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-accent"
          >
            Previous case study — LAWMA Billing
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
