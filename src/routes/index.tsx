import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claudia Musa — Product Manager | Lagos" },
      {
        name: "description",
        content:
          "Product Manager with a foundation in communications and community. I ship SaaS products that solve real user problems and generate measurable revenue.",
      },
      { property: "og:title", content: "Claudia Musa — Product Manager" },
      {
        property: "og:description",
        content:
          "Portfolio of Claudia Musa, a Lagos-based Product Manager shipping user-centric SaaS.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  {
    slug: "lawma",
    kicker: "01 / GOVTECH · SAAS",
    title: "LAWMA Billing & Enumeration",
    blurb:
      "Owned and launched the automated billing platform for Lagos State's waste authority — turning three pilot PSPs into ₦20M+ in the first three months.",
    metric: "₦20M+ in 3 months",
    year: "2024",
  },
  {
    slug: "softsuite",
    kicker: "02 / HR TECH · SAAS",
    title: "SoftSuite HR (NOVO)",
    blurb:
      "Contributed to research, prototyping, and QA for an all-in-one HR platform — reducing bugs by 20% and shipping the launch of SoftSUITE NOVO.",
    metric: "20% fewer bugs at launch",
    year: "2023–2024",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:px-10 md:pt-28 md:pb-32">
          <Reveal>
            <p className="kicker">Product Manager · Lagos, Nigeria</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
              I build products that turn <em className="italic text-accent">user pain</em> into measurable impact.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm Claudia — a Product Manager with a foundation in communications and community
              development. I've spent the last year shipping SaaS in Nigeria's public and private
              sectors, working across governments, HR teams, and hundreds of real customers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-accent"
              >
                See selected work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 hover:text-accent hover:no-underline"
              >
                Read my story
              </Link>
            </div>
          </Reveal>
        </div>

        {/* metric ticker */}
        <div className="border-y border-border/60 bg-background">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 px-6 md:grid-cols-4 md:px-10">
            {[
              { k: "₦20M+", v: "Revenue in 3 months" },
              { k: "300+", v: "Estates enumerated" },
              { k: "100+", v: "User interviews" },
              { k: "50%", v: "Billing cost cut" },
            ].map((m) => (
              <div key={m.k} className="px-4 py-8 md:px-6 md:py-10">
                <p className="font-display text-3xl text-foreground md:text-4xl">{m.k}</p>
                <p className="mt-2 text-xs text-muted-foreground md:text-sm">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="kicker">Selected work</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
              Two products, real users, real numbers.
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden shrink-0 items-center gap-1 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
          >
            All case studies <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-14 space-y-14 md:mt-20">
          {featured.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.08}>
              <Link
                to={f.slug === "lawma" ? "/work/lawma" : "/work/softsuite"}
                className="group block border-t border-border pt-10"
              >
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
                  <div>
                    <p className="kicker">{f.kicker}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{f.year}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl leading-tight text-foreground transition-colors group-hover:text-accent md:text-5xl">
                      {f.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                      {f.blurb}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm text-foreground">
                        <span className="size-1.5 rounded-full bg-accent" />
                        {f.metric}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-accent">
                        Read case study
                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:gap-20 md:px-10 md:py-32">
          <Reveal>
            <p className="kicker">The approach</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
              User empathy first. Metrics second. Then everything else.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Three years in communications taught me to listen before I speak. I bring that habit
              into every discovery call, every sprint retro, every stakeholder session.
            </p>
            <p>
              I frame problems in the user's language, translate them into stories engineers can
              build, and back every launch with numbers we agreed on together. Sprints stay
              predictable, launches stay small, learning stays continuous.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["Discovery", "Roadmapping", "Scrum facilitation", "User research", "Requirements", "QA", "Stakeholder comms", "MoSCoW · RICE"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-foreground"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <Reveal className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="kicker">Let's talk</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
              Have a product that needs sharper focus?
            </h2>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-colors hover:bg-accent"
          >
            Start a conversation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
