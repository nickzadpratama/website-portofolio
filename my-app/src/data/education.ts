import type { Education, Certification } from "@/types";

export const education: readonly Education[] = [
  {
    institution: "Universitas Diponegoro",
    degree: "S1",
    field: "Matematika",
    startYear: 2012,
    endYear: 2016,
  },
  {
    institution: "Hacktiv8",
    degree: "Bootcamp",
    field: "Full Stack JavaScript",
    startYear: 2024,
    endYear: 2024,
  },
];

export const certifications: readonly Certification[] = [
  {
    name: "IBM AI Developer",
    issuer: "IBM",
    year: 2024,
  },
  {
    name: "IBM Data Scientist",
    issuer: "IBM",
    year: 2024,
  },
];

