import Section from "../components/Section";
import { awards, journey } from "../data/content";

export default function Journey() {
  return (
    <Section id="journey" title="Journey">
      <ol className="relative ml-2 border-l border-line">
        {journey.map((m) => (
          <li key={m.role} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
            <p className="text-sm text-muted">{m.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{m.role}</h3>
            <p className="text-sm text-accent">{m.org}</p>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">{m.summary}</p>
          </li>
        ))}
      </ol>

      <h3 className="mb-6 mt-16 text-2xl font-semibold">Awards</h3>
      <ul className="divide-y divide-line border-y border-line">
        {awards.map((a) => (
          <li key={a.title} className="grid gap-1 py-5 md:grid-cols-[8rem_1fr_2fr] md:gap-8">
            <span className="font-display text-lg font-semibold text-sun">{a.medal}</span>
            <span className="font-medium">
              {a.title} <span className="text-sm font-normal text-muted">({a.year})</span>
            </span>
            <span className="text-muted">{a.work}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
