// ============================================================
// FILE: src/types/index.ts
// Deskripsi: Definisi semua TypeScript interfaces untuk data portofolio.
// ============================================================

// ----- Enums & Union Types -----

/** Kategori skill yang tersedia */
export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Database"
  | "Data Engineering"
  | "DevOps & Tools";

/** Varian tombol */
export type ButtonVariant = "primary" | "outline" | "ghost";

/** Ukuran tombol */
export type ButtonSize = "sm" | "md" | "lg";

// ----- Core Interfaces -----

/** Informasi kontak */
export interface ContactInfo {
  readonly phone: string;
  readonly email: string;
  readonly location: string;
  readonly linkedin?: string;
  readonly github?: string;
}

/** Data profil utama */
export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly bio: string;
  readonly avatarUrl: string;
  readonly resumeUrl: string;
  readonly contact: ContactInfo;
}

// ----- Skills -----

/** Satu skill individual */
export interface Skill {
  readonly name: string;
  readonly icon?: string;
}

/** Grup skill berdasarkan kategori */
export interface SkillGroup {
  readonly category: SkillCategory;
  readonly skills: readonly Skill[];
}

// ----- Projects -----

/** Satu tech stack item di proyek */
export interface TechTag {
  readonly name: string;
}

/** Data satu proyek portofolio */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly techStack: readonly TechTag[];
  readonly liveUrl?: string;
  readonly repoUrl?: string;
  readonly highlights?: readonly string[];
}

// ----- Experience -----

/** Data satu riwayat pekerjaan */
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location?: string;
  readonly startDate: string;
  readonly endDate: string | null;
  readonly description: string;
  readonly responsibilities: readonly string[];
}

// ----- Education & Certification -----

/** Data pendidikan formal */
export interface Education {
  readonly institution: string;
  readonly degree: string;
  readonly field: string;
  readonly startYear: number;
  readonly endYear: number | null;
}

/** Data sertifikasi profesional */
export interface Certification {
  readonly name: string;
  readonly issuer: string;
  readonly year: number;
  readonly credentialUrl?: string;
}

// ----- Navigation -----

/** Item navigasi */
export interface NavItem {
  readonly label: string;
  readonly href: string;
}

// ----- Component Props -----

/** Props untuk komponen Button */
export interface ButtonProps {
  readonly children: React.ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
  readonly download?: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
}

/** Props untuk komponen SectionWrapper */
export interface SectionWrapperProps {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}

/** Props untuk komponen ProjectCard */
export interface ProjectCardProps {
  readonly project: Project;
}

/** Props untuk komponen ExperienceCard */
export interface ExperienceCardProps {
  readonly experience: Experience;
  readonly isLast?: boolean;
}

/** Props untuk komponen EducationCard */
export interface EducationCardProps {
  readonly education: Education;
}

/** Props untuk komponen CertificationBadge */
export interface CertificationBadgeProps {
  readonly certification: Certification;
}

/** Props untuk komponen SkillBadge */
export interface SkillBadgeProps {
  readonly skill: Skill;
}

/** Props untuk komponen SocialLink */
export interface SocialLinkProps {
  readonly href: string;
  readonly label: string;
  readonly icon: React.ReactNode;
}

/** Props untuk Navbar */
export interface NavbarProps {
  readonly items: readonly NavItem[];
}

