import Section from "../components/Section";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <article key={p.title} className="grid gap-5 py-8 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-10">
            <header>
              <h3 className={`font-semibold ${p.featured ? "text-3xl md:text-4xl" : "text-2xl"}`}>{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.period}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </header>
            <div>
              <p className="leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 h-1 w-3 shrink-0 rounded bg-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
