import { ArrowDown, MapPin } from "lucide-react";
import Contour from "../components/Contour";
import SensorPanel from "../components/SensorPanel";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28">
      <Contour className="pointer-events-none absolute -right-1/4 top-0 h-full w-[150%] text-accent opacity-20 md:right-0 md:w-3/4" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={15} /> {profile.location}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-7xl">{profile.name}</h1>
          <p className="mt-3 font-display text-xl text-accent md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              See my projects <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
        <SensorPanel />
      </div>
    </section>
  );
}
