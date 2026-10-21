import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <h2 className="mb-10 text-3xl font-semibold md:mb-14 md:text-5xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
