import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" elev={1400}>
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group grid gap-5 py-8 transition-colors hover:bg-accent/5 md:grid-cols-[1fr_1.4fr] md:gap-12 md:px-4 md:py-10"
          >
            <header>
              <h3
                className={`flex items-center gap-2 font-semibold transition-colors group-hover:text-accent ${
                  p.featured ? "text-3xl md:text-4xl" : "text-2xl"
                }`}
              >
                {p.title}
                <ArrowUpRight className="shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
              </h3>
              {p.period && <p className="mt-2 text-sm text-muted">{p.period}</p>}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </header>
            <p className="leading-relaxed text-muted">{p.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
