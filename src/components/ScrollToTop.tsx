import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollToTop() {
  const { y } = useScrollProgress();
  const visible = y > 500;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-accent text-bg shadow-lg transition-all duration-300 md:bottom-8 md:right-8 ${
        visible ? "translate-y-0 opacity-100 hover:-translate-y-1 hover:brightness-110" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
