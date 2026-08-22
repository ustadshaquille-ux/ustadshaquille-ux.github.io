# Portfolio — M Shaquille Mutaqi

Website portfolio personal dengan posisi **Programmer × Capital Market**.

Stack: **Vite 7 · React 19 · TypeScript 5 · Tailwind CSS 4**

---

## Menjalankan

```bash
npm install      # sekali saja
npm run dev      # http://localhost:5173 — browser terbuka otomatis
```

Perintah lain:

```bash
npm run build    # keluarannya masuk ke folder dist/
npm run preview  # cek hasil build sebelum deploy
npm run lint     # cek TypeScript, tanpa mengeluarkan file
```

Butuh Node.js 20.19+ (diuji di Node 24).

---

## Mengganti isi

Baca **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**. Ringkasnya: semua isi
ada di `src/data/`, dan folder `src/components/` tidak perlu disentuh
untuk mengganti teks, foto, project, skill, atau link.

Nilai yang belum ada ditulis `"[ADD SESUATU]"` — website merendernya
sebagai chip putus-putus, bukan link rusak, dan tidak pernah mengarang
isi untuk menutupinya.

---

## Struktur

```
index.html                  meta SEO, font, skrip anti-kedip tema
public/
  profile.png               foto hero (PNG transparan)
  profile-original.png      versi asli dari CV (latar merah), cadangan
  cv/                       berkas CV yang bisa diunduh
  certificates/             gambar sertifikat
  projects/                 tangkapan layar project (masih kosong)
  favicon.svg  robots.txt

src/
  index.css                 DESIGN TOKENS + base + komponen + animasi
  types.ts                  bentuk data — kontrak isi <-> tampilan
  main.tsx  App.tsx         titik masuk & urutan section

  data/                     >>> SEMUA ISI ADA DI SINI <<<
    profile.ts              nama, title, kontak, link, angka hero
    about.ts                paragraf About + dua kartu pilar
    experience.ts           timeline
    projects.ts             kartu project + daftar filter
    skills.ts               skill teknis, soft skill, bahasa
    certificates.ts         sertifikat
    navigation.ts           menu
    index.ts                satu pintu ekspor

  lib/
    placeholder.ts          aturan "[ADD ...]"
    hooks.ts                reveal saat scroll, section aktif, tema

  components/
    layout/                 Navbar, Footer
    ui/                     Icon, Primitives, ProjectCover
    sections/               Hero, About, Experience, Projects,
                            Skills, Certificates, Contact
```

---

## Keputusan desain yang perlu diingat

**Dua warna aksen membawa pesan.** Cyan = teknologi, emas = pasar modal.
Keduanya bertemu di garis gradien pada logo, foto hero, kartu Contact,
dan footer. Chip skill juga diwarnai menurut sisinya. Kalau warnanya
diganti, jaga agar tetap dua warna yang jelas berbeda — kalau tidak,
pesan "dua divisi" itu hilang.

**Angka hero adalah angka nyata.** 958 saham, 101 broker, 2,6 juta price
bar, 4.913 hari bursa, 43.000+ baris Python, 1.266 automated test —
semuanya berasal dari repositori kerja dan bisa dihitung ulang. Jangan
menambah angka yang tidak bisa ditunjukkan sumbernya; itu justru yang
paling cepat merusak kredibilitas di depan pewawancara.

**Sampul project yang bergaris itu placeholder grafis**, bukan
visualisasi data. Ia sengaja tidak diberi angka atau sumbu, dan diberi
tanda `ADD IMAGE`, supaya tidak pernah disangka tangkapan layar aplikasi
sungguhan.

**Animasi dibatasi dua**: reveal saat scroll dan strip berjalan di hero.
Keduanya mati total kalau sistem pengguna menyalakan *reduce motion*.

**Mode terang & gelap** keduanya didesain, bukan sekadar dibalik. Bisa
diuji tanpa mengklik apa pun lewat `?theme=light` atau `?theme=dark`.

---

## Deploy

Hasil `npm run build` adalah folder `dist/` berisi file statis — bisa
ditaruh di Vercel, Netlify, Cloudflare Pages, atau GitHub Pages.

Kalau di-deploy ke sub-path (mis. `username.github.io/portfolio/`),
ubah `base` di `vite.config.ts` menjadi `"/portfolio/"`.

Setelah punya domain, ganti `https://example.com/` di `<link
rel="canonical">` pada `index.html`.
