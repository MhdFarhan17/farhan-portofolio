import { useEffect, useState } from "react";

/** Returns page scroll progress (0..1) and the raw scrollY. */
export function useScrollProgress() {
  const [state, setState] = useState({ progress: 0, y: 0 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setState({ progress: max > 0 ? Math.min(window.scrollY / max, 1) : 0, y: window.scrollY });
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return state;
}
