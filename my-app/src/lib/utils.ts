import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan Tailwind CSS class names dengan dukungan conditional
 * dan penanganan konflik otomatis.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format tanggal dari "YYYY-MM" menjadi "Bulan YYYY" dalam Bahasa Indonesia.
 * Jika null, kembalikan "Sekarang".
 */
export function formatDate(date: string | null): string {
  if (!date) return "Sekarang";

  const [year, month] = date.split("-");
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  return `${months[parseInt(month, 10) - 1]} ${year}`;
}

