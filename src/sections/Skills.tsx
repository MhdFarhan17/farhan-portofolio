import Section from "../components/Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" elev={3000}>
      <dl className="grid gap-10 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <dt className="mb-3 text-lg font-semibold">{group}</dt>
            <dd className="flex flex-wrap gap-2">
              {items.map((i) => (
                <span key={i} className="tag text-sm text-ink">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
