import type { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  elev?: number; // decorative altitude marker, matches the header scroll meter
  children: ReactNode;
}

export default function Section({ id, title, elev, children }: Props) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="container-page">
        <div className="mb-10 flex items-baseline justify-between gap-4 md:mb-14">
          <h2 className="text-3xl font-semibold md:text-5xl">{title}</h2>
          {elev !== undefined && (
            <span className="hidden shrink-0 text-xs tabular-nums text-muted sm:block" aria-hidden="true">
              {elev.toLocaleString("id-ID")} mdpl
            </span>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
