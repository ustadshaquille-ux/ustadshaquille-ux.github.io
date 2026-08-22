# CARA UPDATE ISI WEBSITE

Aturan tunggalnya: **semua isi ada di `src/data/`. Tidak ada teks yang
ditulis langsung di dalam komponen.** Anda tidak perlu menyentuh folder
`src/components/` sama sekali untuk mengganti isi.

Setelah menyimpan file, browser langsung ikut berubah (kalau `npm run dev`
sedang jalan). Tidak perlu restart.

---

## Peta cepat — "saya mau ganti X, file mana?"

| Mau ganti | File |
|---|---|
| Nama, title, tagline, kota, email, telepon | `src/data/profile.ts` |
| Foto profil | ganti file `public/profile.png` |
| CV | ganti file di `public/cv/` lalu sesuaikan `profile.cv` |
| Link GitHub / LinkedIn | `src/data/profile.ts` → array `links` |
| Angka di strip berjalan (hero) | `src/data/profile.ts` → `heroStats` |
| Paragraf About + dua kartu pilar | `src/data/about.ts` |
| Pengalaman kerja / magang / kuliah | `src/data/experience.ts` |
| Project (tambah, hapus, urutkan) | `src/data/projects.ts` |
| Gambar project | taruh di `public/projects/`, tulis path di `projects.ts` |
| Skill & bahasa | `src/data/skills.ts` |
| Sertifikat | `src/data/certificates.ts` + gambar di `public/certificates/` |
| Urutan & nama menu | `src/data/navigation.ts` |
| Warna, font, jarak | `src/index.css` (blok DESIGN TOKENS di paling atas) |
| Judul tab browser & meta SEO | `index.html` |

---

## Sistem placeholder

Tulis nilai apa pun sebagai `"[ADD SESUATU]"` dan website akan
menampilkannya sebagai **chip garis putus-putus** — bukan link rusak,
bukan gambar gagal muat, dan tidak ada informasi yang dikarang untuk
menutupinya.

```ts
{ label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" }
```

Begitu diisi URL sungguhan, chip otomatis berubah jadi tombol aktif.
Tidak ada kode lain yang perlu diubah.

Aturannya cuma satu: **teks harus diawali `[ADD`**. Selain itu dianggap
isi sungguhan.

Yang masih placeholder saat ini:

- `profile.links` → LinkedIn dan GitHub
- semua `links` di setiap project (GitHub / Demo / Docs)
- semua `image` di setiap project
- periode kerja METRO TV, isi pekerjaan magang Tijari, IPK
- dua kartu sertifikat kosong

---

## Menambah project baru

Buka `src/data/projects.ts`, salin satu blok, ubah isinya:

```ts
{
  id: "nama-unik-project",          // wajib unik, dipakai untuk sampul
  kicker: "Kategori Singkat",       // satu baris kecil di atas judul
  title: "Nama Project",
  summary: "Satu sampai dua kalimat. Jangan paragraf.",
  categories: ["Data", "Programming"],   // yang pertama jadi badge
  tech: ["Python", "SQL"],
  highlights: [                      // tepat 3 supaya rapi
    { value: "120", label: "test lulus" },
    { value: "5", label: "modul" },
    { value: "0", label: "dependency" },
  ],
  image: "[ADD IMAGE]",              // atau "/projects/nama.png"
  status: "Berjalan",
  links: [
    { label: "GitHub", href: "[ADD GITHUB LINK]", icon: "github" },
  ],
},
```

**Kategori yang tersedia**: `Programming`, `Finance`, `Capital Market`,
`Data`, `Hybrid`. Satu project boleh punya beberapa — ia akan muncul di
setiap filter yang cocok. Angka di sebelah nama filter dihitung otomatis.

**Urutan kartu = urutan di array.** Taruh yang paling kuat di atas.

**Sampul**: selama `image` masih `"[ADD IMAGE]"`, sistem menggambar
sampul abstrak sendiri dari `id` project — batang + strip heatmap dengan
warna tema. Bentuknya **murni grafis**, tidak mewakili data pasar apa
pun, dan diberi tanda `ADD IMAGE` di pojok supaya tidak disangka
tangkapan layar sungguhan. Begitu Anda isi path gambar, sampul asli yang
dipakai.

Ukuran gambar yang bagus: **1600 × 900 px** (rasio 16:9).

---

## Menambah sertifikat

`src/data/certificates.ts`. Taruh gambarnya di `public/certificates/`.

```ts
{
  title: "Nama Sertifikat",
  issuer: "Penerbit",
  date: "Maret 2026",
  image: "/certificates/nama-file.png",
  href: "/certificates/nama-file.png",   // atau link verifikasi online
  description: "Satu kalimat.",
},
```

Kalau `href` diisi, seluruh kartu jadi bisa diklik untuk membuka gambar
ukuran penuh.

---

## Mengganti warna

Semua warna terkumpul di `src/index.css`, blok paling atas. Ada dua set:
`:root` (mode terang) dan `[data-theme="dark"]` (mode gelap). Ubah
keduanya supaya konsisten.

Dua warna yang membawa pesan utama website:

| Token | Arti | Dipakai di |
|---|---|---|
| `--c-tech` (cyan) | sisi **teknologi** | chip Data & Engineering, nomor section, aksen link |
| `--c-market` (emas) | sisi **pasar modal** | chip Market Analysis & Mechanics, badge Capital Market |

Keduanya bertemu di garis gradien: logo navbar, sisi kiri foto hero,
sisi kiri kartu Contact, dan footer. Itu bukan hiasan — itu inti
posisinya. Kalau menggantinya, jaga supaya tetap dua warna yang jelas
berbeda.

---

## Mengganti urutan section

1. `src/data/navigation.ts` — ubah urutan array.
2. `src/App.tsx` — ubah urutan komponen supaya sama.
3. Nomor section (`01`, `02`, …) ditulis manual di masing-masing file
   `src/components/sections/*.tsx` pada prop `index`.

---

## SEO

Ada di `index.html`:

- `<title>` dan `<meta name="description">` — yang muncul di Google
- `og:*` — yang muncul saat link dibagikan di WhatsApp/LinkedIn
- `<link rel="canonical">` — **ganti `https://example.com/`** dengan
  domain asli setelah di-deploy
- blok JSON-LD `Person` — data terstruktur untuk mesin pencari

`public/robots.txt` sudah mengizinkan semua crawler.
