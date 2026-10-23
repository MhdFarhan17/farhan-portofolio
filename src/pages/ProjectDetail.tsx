import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) return <NotFound />;

  const p = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container-page max-w-4xl pb-20 pt-28 md:pt-36">
      <Link to="/#projects" className="btn btn-ghost mb-8 !px-4 !py-2">
        <ArrowLeft size={16} /> All projects
      </Link>

      <h1 className="text-4xl font-semibold md:text-6xl">{p.title}</h1>
      {p.period && <p className="mt-3 text-muted">{p.period}</p>}

      {(p.repo || p.demo) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Github size={16} /> Source code
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      )}

      {p.image && (
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="mt-10 w-full rounded-2xl border border-line"
        />
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="mb-3 text-xl font-semibold">Overview</h2>
          <p className="text-lg leading-relaxed text-muted">{p.summary}</p>
          <h2 className="mb-3 mt-8 text-xl font-semibold">What I built</h2>
          <ul className="space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2.5 h-1 w-3 shrink-0 rounded bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold">Tech stack</h2>
          <ul className="flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="tag text-sm text-ink">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to={`/projects/${next.slug}`}
        className="group mt-16 flex items-center justify-between gap-4 border-y border-line py-6 transition-colors hover:bg-accent/5 md:px-4"
      >
        <span>
          <span className="block text-sm text-muted">Next project</span>
          <span className="font-display text-2xl font-semibold transition-colors group-hover:text-accent">{next.title}</span>
        </span>
        <ArrowRight className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
