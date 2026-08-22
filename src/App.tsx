import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { ProjectPage } from "./components/sections/ProjectPage";
import { useRevealOnScroll } from "./lib/hooks";
import { useRute } from "./lib/router";

/* Dua rute saja: beranda, dan satu halaman per proyek.

   Beranda sengaja dijaga tetap ringkas — ia menjawab "orang ini siapa
   dan sudah membuat apa". Penjelasan langkah demi langkah tinggal di
   halaman proyeknya sendiri, supaya yang hanya ingin memindai tidak
   dipaksa melewatinya.

   Urutan section = urutan di src/data/navigation.ts. Kalau menambah
   atau menghapus section, ubah keduanya. */

export default function App() {
  const rute = useRute();
  useRevealOnScroll();

  if (rute.nama === "proyek") {
    return (
      <>
        <Navbar />
        <ProjectPage id={rute.id} />
        <Footer />
      </>
    );
  }

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
