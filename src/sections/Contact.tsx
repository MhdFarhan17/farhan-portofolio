import { Github, Linkedin, Mail } from "lucide-react";
import Section from "../components/Section";
import { profile } from "../data/content";

const links = [
  { label: "GitHub", href: profile.github, Icon: Github },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg text-muted">
        I am open to junior full-stack, mobile and IoT roles. Send me a message and I will reply as soon as I can.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-3 break-all font-display text-2xl font-semibold hover:text-accent md:text-4xl"
      >
        <Mail className="shrink-0" /> {profile.email}
      </a>
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <Icon size={16} /> {label}
          </a>
        ))}
      </div>
    </Section>
  );
}
