import PhotoFrame from "../components/PhotoFrame";
import Section from "../components/Section";
import { profile } from "../data/content";
import { photos } from "../data/media";

export default function About() {
  return (
    <Section id="about" title="About" elev={600}>
      <div className="grid items-start gap-8 md:grid-cols-[1fr_16rem] md:gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:text-xl lg:leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <PhotoFrame
          src={photos.about}
          alt={`${profile.name}, formal photo`}
          className="order-first mx-auto w-full max-w-[14rem] sm:max-w-[16rem] md:order-last md:mx-0 md:max-w-none"
        />
      </div>
    </Section>
  );
}
