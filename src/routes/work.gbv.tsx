import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/work/gbv")({
  head: () => ({
    meta: [
      { title: "GBV Tete-a-Tete — Accessibility Case Study by Claudia Musa" },
      { name: "description", content: "How Claudia Musa managed CEWHIN’s second build of GBV Tete-a-Tete for Android and iOS, improving chat reliability and accessibility through user discovery." },
      { property: "og:title", content: "GBV Tete-a-Tete — Claudia Musa’s Product Management Case Study" },
      { property: "og:description", content: "User-informed accessibility, reliable chat, and cross-functional delivery of a platform connecting survivors with GBV support across Nigeria." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GbvCase,
});

const process = [
  { title: "Listen to the people facing the barriers.", body: "I conducted user interviews and discovery sessions, including a consultation with a visually impaired GBV advocate. Those conversations brought specific barriers into focus: unlabeled interface elements, screen-reader incompatibility, and inaccessible learning content. I researched WCAG to better understand how we could accommodate users with disabilities." },
  { title: "Turn research into buildable requirements.", body: "I reviewed similar GBV-support applications in other countries and conducted market research to inform product direction. I translated the findings into a draft PRD, defining feature requirements, user stories, and acceptance criteria for the second build." },
  { title: "Make chat reliable and issues traceable.", body: "I worked with the mobile developer to address the message visibility bug. I also introduced a structured bug-reporting process to document issues, assign responsibility, and track fixes throughout development sprints, so reported problems could be addressed systematically." },
  { title: "Work side by side through delivery and testing.", body: "I collaborated with the UI/UX designer and mobile developer to turn requirements into screens and working features. Through development and post-build testing, I coordinated feedback and issue resolution with the team." },
];

const improvements = [
  { title: "Chat experience", body: "Addressed the message visibility issue affecting communication between users and psychosocial first aiders." },
  { title: "Accessibility", body: "Introduced image alt text and screen-reader support to improve navigation for visually impaired users." },
  { title: "Knowledge Hub", body: "Learning materials and courses for psychosocial first aiders." },
  { title: "GBV Support Directory", body: "Access to relevant organisations and support services across Nigeria." },
  { title: "News and updates", body: "Relevant GBV information and updates in one place." },
];

function GbvCase() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-14 md:px-10 md:pt-20">
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft aria-hidden="true" className="size-4" /> All case studies</Link>
          <p className="kicker mt-8">Case study 03 · Social impact · Mobile</p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-foreground md:text-6xl">GBV Tete-a-Tete</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">Improving accessibility and digital access to GBV support.</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">GBV Tete-a-Tete connects survivors of gender-based violence with psychosocial first aiders, learning resources, and support organisations across Nigeria. I managed the second build, focusing on a more accessible user experience and a more reliable platform.</p>
        </Reveal>
        <Reveal className="mt-12 border-y border-border/60 py-8">
          <dl className="grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
            {[['Role', 'Product Manager'], ['Organisation', 'CEWHIN'], ['Build', 'Version 2'], ['Platforms', 'Android and iOS']].map(([label, value]) => <div key={label}><dt className="kicker">{label}</dt><dd className="mt-2 text-foreground">{value}</dd></div>)}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">Team: Product Manager, UI/UX Designer, and Mobile Developer.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal>
          <p className="kicker">The challenge</p>
          <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">Support needs to be accessible — and communication needs to work.</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>The first version had usability and accessibility gaps. Messages sent to psychosocial first aiders were not consistently visible to users because of a technical bug, affecting the chat experience.</p>
            <p>We also needed to make the application more accessible to persons with disabilities, particularly visually impaired users who rely on screen readers to navigate digital products.</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal><p className="kicker">My role & process</p><h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">Discovery, clear requirements, and collaborative delivery.</h2></Reveal>
        <ol className="mt-10 space-y-6">
          {process.map((step, index) => <Reveal as="li" key={step.title} className="grid gap-4 border-t border-border/60 pt-6 md:grid-cols-[80px_1fr]"><span aria-hidden="true" className="font-display text-3xl text-accent">{String(index + 1).padStart(2, '0')}</span><div><h3 className="font-display text-xl text-foreground">{step.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p></div></Reveal>)}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-20 md:px-10">
        <Reveal><p className="kicker">The solution</p><h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">A more reliable, accessible second build.</h2></Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {improvements.map((item) => <Reveal as="li" key={item.title} className="border-t border-border/60 pt-6"><h3 className="font-display text-xl text-foreground">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p></Reveal>)}
        </ul>
      </section>

      <section className="mt-24 border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <Reveal><p className="kicker">Outcomes</p><h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">What we delivered — and what remained.</h2>
            <ul className="mt-8 list-disc space-y-4 pl-5 leading-relaxed text-foreground">
              <li>Delivered the second build for Android and iOS.</li>
              <li>Improved chat functionality by addressing a major issue from the previous version.</li>
              <li>Incorporated accessibility improvements informed by direct user discovery.</li>
              <li>Established a bug-tracking process for structured issue resolution during development.</li>
              <li>Completed post-development testing with fewer than 20 testers.</li>
            </ul>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">Wider adoption remained limited: the organisation had not yet executed a full awareness campaign or coordinated public rollout. Delivery was an important step, but it was not the same as reaching everyone who could benefit.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <Reveal><p className="kicker">Reflection</p><h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">Building the product is only part of making support accessible.</h2><p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">This project reinforced the importance of listening directly to users with disabilities and bringing those insights into requirements and testing. It also taught me that organisational readiness, user awareness, and go-to-market planning need to sit alongside product development — not wait until the build is finished.</p></Reveal>
        <Reveal className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border/60 pt-10"><Link to="/work" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent">Explore all case studies <ArrowUpRight aria-hidden="true" className="size-4" /></Link><Link to="/contact" className="inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4">Let’s talk</Link></Reveal>
      </section>
    </>
  );
}