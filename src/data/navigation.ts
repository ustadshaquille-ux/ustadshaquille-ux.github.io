/* Urutan menu = urutan section di halaman. Ubah di satu tempat ini.

   Certificates dilepas sementara: sertifikat magang Tijari yang ada
   memuat nama perusahaan dan tanggal yang berbeda dari yang tercantum
   di CV. Menampilkan keduanya berdampingan membuat dua-duanya
   diragukan. Pasang kembali setelah sertifikat yang benar terbit. */

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navigation)[number]["id"];
