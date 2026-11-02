import type { Experience } from "@/types";

export const experiences: readonly Experience[] = [
  {
    id: "data-engineer-tazbiya",
    company: "Tazbiya Brand",
    role: "Data Engineer",
    startDate: "2024-01",
    endDate: null,
    description:
      "Membangun dan mengelola pipeline data untuk kebutuhan bisnis dan analitik.",
    responsibilities: [
      "Merancang dan mengimplementasi data pipeline menggunakan Apache Airflow",
      "Mengelola database dan optimasi query untuk performa tinggi",
      "Kolaborasi dengan tim bisnis untuk kebutuhan data reporting",
    ],
  },
  {
    id: "hr-data-analyst-mhb",
    company: "PT Mitra Hasil Bumi",
    role: "HR Data Analyst",
    startDate: "2022-01",
    endDate: "2023-12",
    description:
      "Menganalisis data HR untuk mendukung pengambilan keputusan strategis.",
    responsibilities: [
      "Analisis data karyawan dan pembuatan dashboard HR",
      "Automasi proses reporting menggunakan Python dan SQL",
      "Penyusunan laporan berkala untuk manajemen",
    ],
  },
  {
    id: "senior-data-analyst-cyberindo",
    company: "PT Cyberindo Aditama",
    role: "Senior Data Analyst",
    startDate: "2020-01",
    endDate: "2021-12",
    description:
      "Memimpin tim analisis data dan mengembangkan solusi business intelligence.",
    responsibilities: [
      "Memimpin inisiatif data analysis untuk berbagai proyek",
      "Mengembangkan model data dan dashboard untuk stakeholder",
      "Mentoring junior analyst dalam best practices",
    ],
  },
  {
    id: "risk-management-woori",
    company: "Bank Woori Saudara",
    role: "Risk Management",
    startDate: "2017-01",
    endDate: "2019-12",
    description:
      "Mengelola analisis risiko dan compliance di sektor perbankan.",
    responsibilities: [
      "Analisis risiko kredit dan operasional",
      "Penyusunan laporan risiko untuk regulasi perbankan",
      "Implementasi framework manajemen risiko",
    ],
  },
] as const;

