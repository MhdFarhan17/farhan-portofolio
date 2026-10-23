import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls to the #section on navigation, or to the top on a new page. */
export default function ScrollManager() {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [hash, key]);
  return null;
}
