import type { Education, Certification } from "@/types";

export const education: readonly Education[] = [
  {
    institution: "Universitas Diponegoro",
    degree: "S1",
    field: "Matematika",
    period: "September 2015 — Juni 2020",
    startYear: 2015,
    endYear: 2020,
  },
  {
    institution: "Hacktiv8",
    degree: "Bootcamp",
    field: "Full Stack JavaScript",
    period: "Juni 2026 — Oktober 2026",
    startYear: 2026,
    endYear: 2026,
  },
];

export const certifications: readonly Certification[] = [
  {
    name: "Data Scientist Competency Statement",
    issuer: "LSP Digital Kreatif Solusi",
    year: "April 2026",
  },
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    issuer: "Microsoft",
    year: "Desember 2023",
  },
];
