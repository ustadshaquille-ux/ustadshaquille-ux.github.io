/* Urutan menu = urutan section di halaman. Ubah di satu tempat ini. */

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];
