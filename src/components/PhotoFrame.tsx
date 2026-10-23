import { useState } from "react";
import Contour from "./Contour";

interface Props {
  src: string;
  alt: string;
  className?: string;
  tilt?: boolean;
}

/** Photo with an offset outline. Shows a contour "F" if the image file is missing. */
export default function PhotoFrame({ src, alt, className = "", tilt = false }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative transition-transform duration-500 ${tilt ? "rotate-2 group-hover:rotate-0" : ""}`}
      >
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/70 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
          aria-hidden="true"
        />
        {failed ? (
          <div className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[2rem] border border-line bg-surface text-accent">
            <Contour className="absolute inset-0 h-full w-full opacity-30" />
            <span className="relative font-display text-8xl font-semibold">F</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            width={800}
            height={1000}
            onError={() => setFailed(true)}
            className="relative aspect-[4/5] w-full rounded-[2rem] border border-line object-cover object-top"
          />
        )}
      </div>
    </figure>
  );
}
