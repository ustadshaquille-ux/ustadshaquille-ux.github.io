import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { useRevealOnScroll } from "./lib/hooks";

/* Urutan section = urutan di src/data/navigation.ts.
   Kalau menambah/menghapus section, ubah keduanya. */

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
