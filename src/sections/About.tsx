import Section from "../components/Section";
import { profile } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_16rem] md:gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Teks: rata atas, sejajar dengan sisi atas foto */}
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:text-xl lg:leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* Foto: di HP di atas teks, di tablet/desktop di kanan dengan lebar tetap */}
        <figure className="order-first mx-auto w-full max-w-[14rem] sm:max-w-[16rem] md:order-last md:mx-0 md:max-w-none">
          <img
            src={profile.photo}
            alt={`Foto ${profile.name}`}
            width={800}
            height={1000}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl border border-line object-cover object-top"
          />
        </figure>
      </div>
    </Section>
  );
}