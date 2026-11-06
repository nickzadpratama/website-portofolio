# 🌐 Website Portofolio — Nickzad Pratama

Website portofolio personal yang modern, bersih, dan responsif untuk **Nickzad Pratama** (Full Stack JavaScript Developer & Data Specialist). Dibangun dengan fokus pada tipografi yang kuat, performa optimal, dan arsitektur kode yang terstruktur rapi (*scalable & strongly-typed*).

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode, Strongly Typed)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Mobile-First, Minimalist Design)
- **Font:** [Geist Sans & Geist Mono](https://vercel.com/font)
- **Ikon:** [Lucide React](https://lucide.dev/) & Custom SVG Icons
- **Deployment:** Vercel

---

## 🏗️ Arsitektur Proyek & Konvensi Penamaan

Proyek ini dirancang dengan prinsip **Separation of Concerns (Pemisahan Tanggung Jawab)** dan **Component-Driven Development**:

1. **Server Components by Default:** Semua halaman dan seksi dirender di sisi server untuk performa dan SEO maksimal. *Client Components* (`"use client"`) hanya digunakan pada komponen yang memerlukan state/interaktivitas browser (misal: toggle hamburger menu pada `Navbar.tsx` dan pencegahan hydration mismatch pada `Footer.tsx`).
2. **Data-Driven Architecture:** Seluruh konten tekstual dan metadata tidak di-*hardcode* di dalam komponen UI, melainkan dipisahkan ke dalam modul data statis di folder `src/data/`.
3. **Strict Type Safety:** Semua data konten dan *component props* diikat oleh kontrak interface TypeScript di `src/types/index.ts` menggunakan *readonly properties* untuk menjaga immutability.
4. **Konvensi Penamaan File:**
   - **PascalCase** (`HeroSection.tsx`, `ProjectCard.tsx`): Digunakan untuk komponen React (`.tsx`).
   - **camelCase** (`projects.ts`, `profile.ts`, `utils.ts`): Digunakan untuk file data statis, fungsi utilitas, dan helper (`.ts`).
   - **kebab-case / lowercase** (`foto-profile.jpg`, `ecommerce.png`): Digunakan untuk file aset statis di dalam folder `public/`.

---

## 📁 Struktur Direktori & File

Berikut adalah peta struktur folder lengkap dari aplikasi:

```text
my-app/
├── public/                                # Aset statis publik (diakses via '/')
│   ├── Resume_Nickzad_Pratama.pdf         # Berkas CV / resume untuk tombol download
│   ├── favicon.ico                        # Ikon tab browser
│   └── images/                            # Berkas gambar portofolio
│       ├── foto-profile.jpg               # Foto profil utama (About section)
│       ├── ecommerce.png                  # Screenshot proyek E-commerce Platform
│       ├── football.png                   # Screenshot proyek Football Profile
│       ├── ig.png                         # Screenshot proyek Instagroom Mobile
│       └── public.png                     # Screenshot proyek Papikos CMS
│
├── src/
│   ├── app/                               # Next.js App Router
│   │   ├── favicon.ico                    # Favicon Next.js
│   │   ├── globals.css                    # Styling global & Tailwind CSS v4 config
│   │   ├── layout.tsx                     # Root layout (Metadata SEO, font Geist, HTML wrapper)
│   │   └── page.tsx                       # Halaman utama (Single Page Application assembler)
│   │
│   ├── components/                        # Komponen modular UI
│   │   ├── layout/                        # Komponen kerangka tata letak halaman
│   │   │   ├── Navbar.tsx                 # Navigasi sticky header & menu mobile responsif
│   │   │   ├── Footer.tsx                 # Bagian footer, hak cipta, & tautan sosial
│   │   │   └── SectionWrapper.tsx         # Wrapper pembungkus seksi (scroll-margin & max-width)
│   │   │
│   │   ├── sections/                      # Komponen per-seksi halaman portofolio
│   │   │   ├── HeroSection.tsx            # Header utama, tagline, & tombol CTA resume
│   │   │   ├── AboutSection.tsx           # Seksi tentang diri, bio, lokasi, & foto profil
│   │   │   ├── SkillsSection.tsx          # Pengelompokan keahlian teknis (Frontend, Backend, dsb)
│   │   │   ├── ProjectsSection.tsx        # Grid daftar proyek pilihan
│   │   │   ├── ExperienceSection.tsx      # Garis waktu (timeline) riwayat pengalaman kerja
│   │   │   ├── EducationSection.tsx       # Riwayat pendidikan formal & daftar sertifikasi
│   │   │   └── ContactSection.tsx         # Informasi kontak & tombol kirim email langsung
│   │   │
│   │   └── ui/                            # Komponen atomik / reusable widgets
│   │       ├── Button.tsx                 # Komponen tombol serbaguna (primary, outline, ghost)
│   │       ├── Icons.tsx                  # Ikon kustom SVG (GitHub, LinkedIn)
│   │       ├── ProjectCard.tsx            # Kartu interaktif proyek (gambar, deskripsi, link)
│   │       ├── ExperienceCard.tsx         # Kartu timeline pengalaman kerja
│   │       ├── EducationCard.tsx          # Kartu informasi riwayat pendidikan
│   │       ├── CertificationBadge.tsx     # Kartu lencana sertifikasi profesional
│   │       ├── SkillBadge.tsx             # Badge pill untuk skill teknis individual
│   │       └── SocialLink.tsx             # Tautan ikon media sosial
│   │
│   ├── data/                              # Single Source of Truth untuk data konten
│   │   ├── profile.ts                     # Data profil pribadi, kontak, dan bio
│   │   ├── projects.ts                    # Data proyek, teknologi, dan URL live demo
│   │   ├── experiences.ts                 # Data riwayat pekerjaan, tanggung jawab, dan periode
│   │   ├── education.ts                   # Data pendidikan formal dan sertifikasi profesi
│   │   ├── skills.ts                      # Data keahlian yang dikelompokkan per kategori
│   │   └── navigation.ts                  # Daftar menu navigasi (anchor link scrolling)
│   │
│   ├── lib/                               # Utilitas dan helper functions
│   │   └── utils.ts                       # Helper cn() (clsx + tailwind-merge) & formatDate()
│   │
│   └── types/                             # Definisi tipe dan interface TypeScript
│       └── index.ts                       # Strongly-typed schemas untuk seluruh data & props
│
├── eslint.config.mjs                      # Konfigurasi linter ESLint
├── next.config.ts                         # Konfigurasi Next.js (Turbopack, image optimization)
├── package.json                           # Dependensi dan script npm
├── tsconfig.json                          # Konfigurasi TypeScript compiler & path alias (@/*)
└── README.md                              # Dokumentasi teknis proyek
```

---

## ⚡ Fitur Utama

1. **Navigasi Single-Page Halus (*Smooth Scrolling*):** Navigasi antar seksi (`#about`, `#skills`, `#projects`, dll.) dilengkapi dengan kompensasi tinggi sticky navbar (`scroll-mt-20`).
2. **Kartu Proyek Interaktif:**
   - Gambar proyek memiliki efek zoom dinamis saat kursor melayang (*hover effect*).
   - Seluruh kartu, gambar, dan judul dapat diklik langsung untuk membuka tautan live demo di tab baru.
3. **Integrasi CV Langsung:** Tombol **"Download Resume"** pada *Hero Section* otomatis mengunduh berkas berkas `Resume_Nickzad_Pratama.pdf`.
4. **Tata Letak Adaptif (*Mobile-First*):** Ditata agar nyaman dibaca di smartphone, tablet, maupun layar desktop resolusi tinggi.
5. **Kemudahan Kustomisasi Konten:** Cukup edit file di folder `src/data/` tanpa perlu membongkar struktur kode UI.

---

## 🛠️ Panduan Memulai (Getting Started)

### 1. Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
- npm, yarn, pnpm, atau bun

### 2. Instalasi Dependensi
Jalankan perintah berikut di dalam direktori `my-app`:

```bash
cd my-app
npm install
```

### 3. Menjalankan Server Pengembangan (*Development*)
```bash
npm run dev
```
Buka browser pada tautan [http://localhost:3000](http://localhost:3000). Halaman akan otomatis melakukan *hot-reload* saat Anda mengubah kode atau data.

### 4. Build untuk Produksi
Untuk memeriksa validitas tipe dan membuat bundel produksi teroptimasi:

```bash
# Verifikasi tipe TypeScript
npx tsc --noEmit

# Build aplikasi Next.js
npm run build

# Menjalankan hasil build produksi lokal
npm run start
```

---

## ✏️ Panduan Memperbarui Konten

| Informasi | Lokasi File | Keterangan |
|---|---|---|
| **Profil & Biodata** | `src/data/profile.ts` | Nama, bio, kontak (email, telepon, lokasi), URL media sosial. |
| **Foto Profil** | `public/images/foto-profile.jpg` | Ganti file gambar atau ubah path di `profile.ts`. |
| **Daftar Proyek** | `src/data/projects.ts` | Tambah/ubah judul, deskripsi, tech stack, gambar, dan URL live demo. |
| **Pengalaman Kerja** | `src/data/experiences.ts` | Posisi, perusahaan, periode tanggal, dan daftar tanggung jawab pekerjaan. |
| **Pendidikan & Sertifikasi** | `src/data/education.ts` | Institusi, gelar, periode studi, dan daftar sertifikasi keahlian. |
| **Keahlian Teknis** | `src/data/skills.ts` | Kategori teknologi (Frontend, Backend, Database, Data Engineering, dll). |
| **Berkas Resume** | `public/Resume_Nickzad_Pratama.pdf` | Ganti berkas PDF ini jika ada pembaruan CV. |

---

## 📄 Lisensi
Hak Cipta © 2026 **Nickzad Pratama**. Seluruh hak cipta dilindungi undang-undang.
