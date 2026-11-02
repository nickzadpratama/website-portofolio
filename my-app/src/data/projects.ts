import type { Project } from "@/types";

export const projects: readonly Project[] = [
  {
    id: "ecommerce-nextjs",
    title: "E-commerce Platform",
    description:
      "Platform e-commerce full-stack dengan fitur keranjang belanja, manajemen produk, dan sistem pembayaran.",
    imageUrl: "/images/projects/ecommerce.png",
    techStack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "MongoDB" },
    ],
    highlights: [
      "Server-side rendering untuk SEO optimal",
      "Integrasi payment gateway",
      "Dashboard admin untuk manajemen produk",
    ],
  },
  {
    id: "instagroom-mobile",
    title: "Instagroom Mobile",
    description:
      "Aplikasi mobile untuk layanan grooming dengan fitur booking, review, dan profil penyedia layanan.",
    imageUrl: "/images/projects/instagroom.png",
    techStack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "GraphQL" },
    ],
    highlights: [
      "Cross-platform (iOS & Android)",
      "Real-time booking system",
      "GraphQL API integration",
    ],
  },
  {
    id: "football-profile",
    title: "Football Profile",
    description:
      "Aplikasi web profil pemain sepak bola dengan integrasi AI untuk analisis data pemain.",
    imageUrl: "/images/projects/football-profile.png",
    techStack: [
      { name: "React" },
      { name: "Express.js" },
      { name: "Gemini AI" },
    ],
    highlights: [
      "Integrasi Gemini AI untuk analisis",
      "Visualisasi statistik pemain",
      "RESTful API backend",
    ],
  },
  {
    id: "papikos-cms",
    title: "Papikos CMS",
    description:
      "Content Management System untuk platform pencarian kos-kosan dengan fitur CRUD lengkap.",
    imageUrl: "/images/projects/papikos.png",
    techStack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
    ],
    highlights: [
      "Full CRUD operations",
      "Role-based access control",
      "PostgreSQL relational database",
    ],
  },
] as const;

