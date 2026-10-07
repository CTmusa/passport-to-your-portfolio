import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portraitAbout from "../assets/portrait-about.jpg";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Claudia Musa" },
      {
        name: "description",
        content:
          "How Claudia Musa works as a Product Manager — starting with the why, thinking holistically about the user experience, and bringing solutions to life with the team to deliver value for users and the business.",
      },
      { property: "og:title", content: "About — Claudia Musa" },
      {
        property: "og:description",
        content:
          "Product Manager who puts users at the heart of the build — in SaaS, in Lagos, and beyond.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const skills = {
  Technical: [
    "Agile / Scrum (planning, grooming, retros)",
    "GoodDay, Jira, Trello",
    "Miro, Whimsical, Draw.io, Lucidchart, Visio",
    "PRDs & user story writing",
    "Basic API testing",
    "Prioritization: MoSCoW, RICE",
  ],
  "Soft skills": [
    "Stakeholder engagement",
    "Cross-functional collaboration",
    "User research & discovery",
    "Communication & presentation",
    "Critical thinking",
    "Empathy & leadership",
  ],
};

const certs = [
  "Product Discovery Micro-Certification™ (PDC) — Product School",
  "Product Strategy Micro-Certification™ (PSC) — Product School",
  "Product Management + Agile Product Owner + Scrum — Udemy",
  "Product Management Bootcamp — Women Techsters",
  "FSI Software Testing Training",
  "Treford Fintech Masterclass",
  "CAWSTEM M.A.T.C.H Mentorship Program",
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:px-10 md:pt-24">
        <Reveal>
          <p className="kicker">About</p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
            I do my best work with companies that put their users at the heart of what they do.
          </h1>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10">
        <Reveal className="md:sticky md:top-28 md:self-start">
          <div className="overflow-hidden rounded-[1.5rem] border border-border/40">
            <img
              src={portraitAbout}
              alt="Claudia Musa"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="kicker">Based in</dt>
              <dd className="mt-2 text-foreground">Lagos, Nigeria</dd>
            </div>
            <div>
              <dt className="kicker">Industry</dt>
              <dd className="mt-2 text-foreground">SaaS</dd>
            </div>
            <div>
              <dt className="kicker">Availability</dt>
              <dd className="mt-2 text-foreground">Open to Product Manager roles</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a Product Manager with over a year in SaaS, and I look for the same thing in every
            team I join: people who genuinely care about their users, and put them at the heart of
            what they do. That care is where good product work starts for me.
          </p>
          <p>
            It shapes how I work. I start with the why, think holistically about the experience,
            then bring solutions to life side by side with designers, engineers, and stakeholders —
            so what we ship creates real value for users and for the business. I write and speak so
            that non-technical stakeholders stay in the loop, and I stay calm when a sprint takes an
            unexpected turn. My goal isn't shipping features — it's shipping outcomes we can measure
            and defend.
          </p>
          <p>
            On any given week I'm running discovery calls, refining a PRD, unblocking engineers in
            standup, walking a finance lead through the admin panel, or writing the user manual so
            adoption sticks after launch day.
          </p>

          <div className="grid gap-6 border-t border-border/60 pt-10 md:grid-cols-3">
            {[
              { k: "3+ yrs", v: "in communications & community" },
              { k: "1+ yr", v: "in SaaS product management" },
              { k: "15+", v: "staff & PSPs trained hands-on" },
            ].map((s) => (
              <div key={s.k}>
                <p className="font-display text-3xl text-foreground">{s.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
          <Reveal>
            <p className="kicker">Skills & tools</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              The kit I bring to every squad.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            {Object.entries(skills).map(([group, items], gi) => (
              <Reveal key={group} delay={gi * 0.08}>
                <h3 className="font-display text-2xl text-foreground">{group}</h3>
                <ul className="mt-6 space-y-3">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 border-b border-border/60 pb-3 text-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-3xl">
          <p className="kicker">Certifications & training</p>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
            Always learning, always shipping.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {certs.map((c, i) => (
            <Reveal
              as="li"
              key={c}
              delay={i * 0.04}
              className="flex items-start gap-4 rounded-2xl border border-border/70 bg-background p-5"
            >
              <span className="mt-1 font-display text-lg text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground">{c}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 flex flex-wrap items-center gap-4 border-t border-border/60 pt-10">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-accent"
          >
            See how it shows up in the work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 hover:no-underline"
          >
            Or say hello →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
