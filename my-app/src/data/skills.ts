import type { SkillGroup } from "@/types";

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native" },
      { name: "Expo" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "GraphQL" },
      { name: "REST API" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "SQL" },
    ],
  },
  {
    category: "Data Engineering",
    skills: [
      { name: "Python" },
      { name: "Apache Airflow" },
      { name: "Data Analysis" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
] as const;

