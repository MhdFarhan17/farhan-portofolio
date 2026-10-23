import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Journey from "../sections/Journey";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
    </>
  );
}
