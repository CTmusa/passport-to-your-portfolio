import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Résumé — Claudia Musa, Product Manager" },
      {
        name: "description",
        content:
          "Résumé and experience summary for Claudia Musa — Product Manager with over a year in SaaS and three years in communications & community development.",
      },
      { property: "og:title", content: "Résumé — Claudia Musa" },
      {
        property: "og:description",
        content: "Product Manager résumé — download or print.",
      },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const experience = [
  {
    role: "Product Manager",
    company: "LAWMA (Lagos State Waste Management Authority)",
    period: "2023 – Present",
    points: [
      "Owned the LAWMA billing platform end-to-end; pilot launched April 2024 with three PSPs, generating ₦20M+ in the first three months.",
      "Led redevelopment of the Enumeration Portal, enabling accurate data capture for 300+ facilities.",
      "Coordinated delivery of the LAWMA Customer Portal MVP ('Pay Without Sign-In').",
      "Trained 15+ finance staff, regional heads, and PSP owners on admin operations.",
      "Reduced manual billing cost and delay by 50% via automation.",
    ],
  },
  {
    role: "Associate Product Manager",
    company: "SoftSUITE (HR SaaS)",
    period: "2023 – 2024",
    points: [
      "Contributed to research and prototyping that led to the go-live of SoftSUITE NOVO.",
      "Cut product bugs by 20% through structured functional testing.",
      "Drafted admin-facing sections of the user manual for HR leads.",
      "Facilitated daily standups and backlog grooming to keep sprints predictable.",
    ],
  },
  {
    role: "Communications & Community Development",
    company: "Prior roles",
    period: "3+ years",
    points: [
      "Led communications programs and community initiatives that shaped the empathy-first PM approach I bring to product today.",
    ],
  },
];

const skills = {
  Product: ["Discovery", "PRD writing", "User stories", "Roadmapping", "Prioritization (MoSCoW, RICE)"],
  Delivery: ["Scrum facilitation", "Backlog grooming", "Functional QA", "Release management"],
  Tools: ["Jira", "GoodDay", "Trello", "Miro", "Whimsical", "Draw.io", "Lucidchart", "Google Suite", "Canva"],
  Soft: ["Stakeholder engagement", "Cross-functional collaboration", "User research", "Communication", "Leadership"],
};

const certs = [
  "Product Discovery Micro-Certification (PDC)™ — Product School",
  "Product Strategy Micro-Certification (PSC)™ — Product School",
  "Product Management + Agile Product Owner + Scrum — Udemy",
  "Product Management Bootcamp — Women Techsters",
  "FSI Software Testing Training",
  "Treford Fintech Masterclass",
  "CAWSTEM M.A.T.C.H Mentorship Program",
];

function Resume() {
  return (
    <>

      <section className="mx-auto max-w-5xl px-6 pt-16 md:px-10 md:pt-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker">Résumé</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-foreground md:text-6xl">
              The one-page version.
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Read the highlights below, or open the full PDF — it opens in a new tab and downloads fine from there.
            </p>
          </div>
          <a
            href="/Claudia_T_Musa_Portfolio.pdf"
            aria-label="Open or download Claudia Musa’s résumé PDF (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-accent"
          >
            <Download className="size-4" /> Open / Download PDF
          </a>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10">
        <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-14">
          {/* Header */}
          <header className="border-b border-border/60 pb-8">
            <h2 className="font-display text-4xl text-foreground md:text-5xl">Claudia T. Musa</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Product Manager · SaaS · Lagos, Nigeria
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
              <li className="inline-flex items-center gap-2"><Mail className="size-3.5" /> claudia.t.musa@gmail.com</li>
              <li className="inline-flex items-center gap-2"><Phone className="size-3.5" /> +234 816 857 4768</li>
              <li className="inline-flex items-center gap-2"><MapPin className="size-3.5" /> Lagos, Nigeria</li>
              <li className="inline-flex items-center gap-2">
                <Linkedin className="size-3.5" />
                <a aria-label="Claudia Musa on LinkedIn (opens in a new tab)" href="https://www.linkedin.com/in/claudia-musa" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  linkedin.com/in/claudia-musa
                </a>
              </li>
            </ul>
          </header>

          {/* Summary */}
          <div className="mt-8 grid gap-8 md:grid-cols-[200px_1fr]">
            <p className="kicker">Summary</p>
            <p className="text-foreground leading-relaxed">
              Product Manager with 1+ year in SaaS and 3+ years in communications and community
              development. I ship user-centric products, communicate exceptionally with
              stakeholders, and deliver measurable outcomes — from ₦20M+ pilot revenue to 50%
              billing-cost reduction.
            </p>
          </div>

          {/* Experience */}
          <div className="mt-10 grid gap-8 md:grid-cols-[200px_1fr]">
            <p className="kicker md:sticky md:top-24 md:self-start">Experience</p>
            <div className="space-y-8">
              {experience.map((e) => (
                <article key={e.role + e.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-foreground">{e.role}</h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <p className="text-sm text-accent">{e.company}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mt-10 grid gap-8 border-t border-border/60 pt-10 md:grid-cols-[200px_1fr]">
            <p className="kicker">Skills</p>
            <div className="grid gap-5 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <p className="font-display text-lg text-foreground">{group}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certs */}
          <div className="mt-10 grid gap-8 border-t border-border/60 pt-10 md:grid-cols-[200px_1fr]">
            <p className="kicker">Certifications</p>
            <ul className="space-y-2 text-sm text-foreground">
              {certs.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
